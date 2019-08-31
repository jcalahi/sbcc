import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

class App extends Component {

	renderContinents(continents) {
		return continents.map((continent, idx) => <li key={idx} onClick={() => console.log(continent)}>{continent.name}</li>);
	}

	render() {
		const { loading } = this.props.data;
		if (loading) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<h3>List of Continents</h3>
				{this.renderContinents(this.props.data.continents)}
			</div>
		);
	}
}

const query = gql`
	{
		continents {
			name
			countries {
				name
				phone
			}
		}
	}
`;

export default graphql(query)(App);