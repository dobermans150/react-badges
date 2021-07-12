import React from 'react';

import './styles/PageError.css';

export default function PageError(props) {
  const { error } = props;

  return (
    <div>
      <div className="PageError">{error.message}</div>
    </div>
  );
}
