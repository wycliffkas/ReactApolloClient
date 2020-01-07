import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RocketItem from './RocketItem';

const ROCKETS_QUERY = gql`
query RocketsQuery {
    rockets {
        rocket_id
        rocket_name
        rocket_type
        wikipedia
        description
    }
}
`;
export default class Rockets extends Component {
    render() {
        return (
            <>
                <h1 className="display-4 my-3">Rockets</h1>
                <Query query={ROCKETS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);
                        return (
                            <>
                                {data.rockets.map(rocket => (
                                    <RocketItem key={rocket.rocket_id} rocket={rocket} />
                                ))}
                            </>
                        );
                    }}
                </Query>
            </>
        )
    }
}
