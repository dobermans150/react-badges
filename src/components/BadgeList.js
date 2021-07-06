import React, { Component } from 'react';
/* import tw_logo from '../images/twitter-logo.png'; */
import './styles/BadgeList.css';

export default class BadgeList extends Component {
  render() {
    const { badges } = this.props;
    return (
      <div>
        <ul className="list-unstyled">
          {badges.map((badges) => {
            return (
              <li key={badges.id} className="Badge__section-name-list">
                <img
                  src={badges.avatarUrl}
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
