import React, { Component } from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';

import api from '../api';
import './styles/BadgeDetail.css';

export default class BadgeDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {
        firstName: '',
        lastName: '',
        emial: '',
        twitter: '',
      },
      modalIsOpen: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const id = this.props.match.params.badgeId;
      const data = await api.badges.read(id);

      this.setState({ loading: false, data: { ...data } });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleDelteBadge = async () => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false, modalIsOpen: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  HandleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        badge={this.state.data}
        badgeId={this.props.match.params.badgeId}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.HandleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDelteBadge}
      />
    );
  }
}
