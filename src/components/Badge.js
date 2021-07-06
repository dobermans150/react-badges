import React from 'react';
import PropTypes from 'prop-types';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
  static propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    jobTitle: PropTypes.string,
    twitter: PropTypes.string,
    avatar: PropTypes.string,
  };
  render() {
    const { firstName, lastName, jobTitle, twitter, avatar } = this.props;

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatar} alt="Avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
