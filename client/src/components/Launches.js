import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`;

export default class Launches extends Component {
    render() {
        return (
            <>
                <h1 className="display-4 my-3">Launches</h1>
                <div className="my-3">
                    <p><span className="px-3 mr-2 bg-success" /> = Success</p>
                    <p><span className="px-3 mr-2 bg-danger" /> = Fail</p>
                </div>
                <Query query={LAUNCHES_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);
                        return (
                            <>
                                {data.launches.map(launch => (
                                    <LaunchItem key={launch.flight_number} launch={launch} />
                                ))}
                            </>
                        );
                    }}
                </Query>
            </>
        )
    }
}
