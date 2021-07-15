import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';
import useSearchBadges from '../utils/custom/hooks/useSearchBadges';

/* import tw_logo from '../images/twitter-logo.png'; */
import './styles/BadgeList.css';

function BadgeList(props) {
  const { badges } = props;

  const [setQuery, filteredBadges, query] = useSearchBadges(badges);

  if (!filteredBadges.length) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            className="form-control"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <br />

        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <br />
      <ul className="list-unstyled">
        {filteredBadges.map((badges) => {
          return (
            <Link
              key={badges.id}
              to={`/badges/${badges.id}`}
              className="text-reset text-decoration-none"
            >
              <li className="Badge__section-name-list">
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
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgeList;
