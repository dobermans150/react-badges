import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';

/* import tw_logo from '../images/twitter-logo.png'; */
import './styles/BadgeList.css';

export default class BadgeList extends Component {
  render() {
    const { badges } = this.props;

    if (!badges.length) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div>
        <ul className="list-unstyled">
          {badges.map((badges) => {
            return (
              <li key={badges.id} className="Badge__section-name-list">
                <Gravatar
                  email={badges.email}
                  alt="imagen"
                  className="Badge__avatar-list"
                />
                <div>
                  {badges.firstName} {badges.lastName}
                  <br />
                  {badges.title}
                  <br />
                  {/* <img src={tw_logo} alt="imagen" className="tw__logo" /> */}
                  <span className="twitter__blue_font">{badges.twitter}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
