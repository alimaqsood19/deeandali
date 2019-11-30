import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGuests } from './actions';

export const Stats = ({ user }) => (
  <div>
    <p>Username: {user.username}</p>
    <p>Kills: {user.stats.kills_solo}</p>
  </div>
);

class Guest extends Component {
  fetchAllGuests = () => {
    this.props.fetchGuests();
  };

  function() {
    console.log('im crazy');
  }

  render() {
    if (this.props.isLoading) {
      return <div>...Loading</div>;
    }

    return (
      <div>
        <h1>This component shows guests</h1>
        <button onClick={this.fetchAllGuests}>Fetch All Guests</button>
        {this.props.guests && <Stats user={this.props.guests.data} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.guest.isLoading,
  guests: state.guest.data
});

const mapDispatchToProps = dispatch => ({
  fetchGuests: () => dispatch(fetchGuests())
});

export default connect(mapStateToProps, mapDispatchToProps)(Fortnite);
