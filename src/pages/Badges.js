import React, { Component } from 'react';
import BadgeList from '../components/BadgeList';
import { Link } from 'react-router-dom';
import api from '../api';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';

export default class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return 'Loading...';
    }

    if (this.state.error) {
      return `Error ${this.state.error}`;
    }

    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_cong-logo" src={confLogo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
