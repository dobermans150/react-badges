import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);
  return (
    <div>
      <img
        className={props.className}
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt="Avatar"
      />
    </div>
  );
}

Gravatar.propTypes = {
  email: PropTypes.string,
  className: PropTypes.string,
};

export default Gravatar;
