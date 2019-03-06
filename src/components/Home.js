import React, { Component } from "react";
import TeamLogo from "./TeamLogo";
import { Link } from "react-router-dom";
import { getTeamNames } from "../api";

class Home extends Component {
  state = {
    teamNames: []
  };

  componentDidMount() {
    getTeamNames().then(teamNames => {
      this.setState(() => ({
        teamNames
      }));
    });
  }
  render() {
    const { teamNames } = this.state;
    return (
      <div className="container">
        <h1 className="large-header">History</h1>
        <h3 className="text-center header">Select Team</h3>
        <div className="home-grid">
          {teamNames.map(id => (
            <Link key={id} to={`/${id}`}>
              <TeamLogo id={id} width="8rem" />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
