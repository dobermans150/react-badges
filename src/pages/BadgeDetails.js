import React from 'react';
import { Link } from 'react-router-dom';
import conflogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

export default function BadgeDetails(props) {
  const { firstName, lastName, email, twitter, jobTitle } = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={conflogo} alt="Logo e la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{`${firstName} ${lastName}`}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={firstName}
              lastName={lastName}
              twitter={twitter}
              email={email}
              jobTitle={jobTitle}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <Link
                to={`/badges/${props.badgeId}/edit`}
                className="btn btn-primary mb-4"
              >
                Edit
              </Link>
            </div>

            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                modalIsOpen={props.modalIsOpen}
                onCloseModal={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
