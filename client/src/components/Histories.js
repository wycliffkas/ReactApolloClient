import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HistoryItem from './HistoryItem';

const HISTORIES_QUERY = gql`
query HistoriesQuery {
    histories {
        id
        title
        event_date_utc
    }
}
`;

export default class Histories extends Component {
    render() {
        return (
            <>
                <h1 className="display-4 my-3">History</h1>
                <Query query={HISTORIES_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);
                        return (
                            <>
                                {data.histories.map(history => (
                                    <HistoryItem key={history.id} history={history} />
                                ))}
                            </>
                        );
                    }}
                </Query>
            </>
        )
    }
}
