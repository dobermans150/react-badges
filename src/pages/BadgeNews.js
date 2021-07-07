import React, { Component } from 'react';
import Badge from '../components/Badge';
import BadgeForms from '../components/BadgeForms';
import header from '../images/badge-header.svg';
import './styles/BadgeNews.css';

export default class BadgeNews extends Component {
  state = {
    form: {
      jobTitle: '',
      email: '',
      firstName: '',
      lastName: '',
      twitter: '',
    },
  };

  handleChanges = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                avatar="https://s.gravatar.com/avatar/ec5d9d60f54a612e9960aac3666b2748?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForms
                onChange={this.handleChanges}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
