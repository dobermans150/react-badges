import React, { Component } from 'react';
import Badge from '../components/Badge';
import BadgeForms from '../components/BadgeForms';
import PageLoading from '../components/PageLoading';

import api from '../api';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeEdit.css';

export default class BadgeEdit extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      jobTitle: '',
      email: '',
      firstName: '',
      lastName: '',
      twitter: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChanges = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false, error: null });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <div>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                avatar="https://s.gravatar.com/avatar/ec5d9d60f54a612e9960aac3666b2748?s=80"
                email={this.state.form.email || ''}
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForms
                onChange={this.handleChanges}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
