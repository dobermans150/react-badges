import React, { Component } from 'react';

export default class BadgeForms extends Component {
  handleClick = (e) => {
    console.log('Button was cick');
  };

  /* handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }; */
  render() {
    const { onChange, formValues } = this.props;
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={onChange}
              type="email"
              name="email"
              className="form-control"
              value={formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twtter</label>
            <input
              onChange={onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
