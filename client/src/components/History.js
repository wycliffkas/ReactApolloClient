import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const HISTORY_QUERY = gql`
query HistoryQuery($id: Int!) {
    history(id: $id) {
        id
        title
        event_date_utc
        details
        links {
            reddit
            article
            wikipedia
        }
    }
}
`;

class History extends Component {
    render() {
        let { id } = this.props.match.params;
        id = parseInt(id);
        return (
            <>
                <Query query={HISTORY_QUERY} variables={{id}}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);
                        const { title, event_date_utc, details, links: {reddit, article, wikipedia }} = data.history;
                        return (
                            <div>
                                <h1 className="display-4 my-3">
                                    <span className="text-dark">Event:</span> {title}
                                </h1>
                                <h4 className="mb-3">Event Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Details:{' '}
                                        <span className="text-success font-weight-bold">{details}</span>
                                    </li>
                                    <li className="list-group-item">Date:{' '}
                                    <span className="text-success font-weight-bold">
                                        <Moment format="dddd, MMMM Do YYYY, h:mm a">{event_date_utc}</Moment>
                                    </span>
                                    </li>
                                    {reddit &&
                                        <li className="list-group-item">Reddit: {' '}
                                            <a href={reddit} target="_blank" rel="noopener noreferrer">
                                                Read more on Reddit!
                                            </a>
                                        </li>
                                    }
                                    {article &&
                                        <li className="list-group-item">Article: {' '}
                                            <a href={article} target="_blank" rel="noopener noreferrer">
                                                Read more on article!
                                            </a>
                                        </li>
                                    }
                                    {wikipedia &&
                                        <li className="list-group-item">Wikipedia: {' '}
                                            <a href={wikipedia} target="_blank" rel="noopener noreferrer">
                                                Read more on Wikipedia!
                                            </a>
                                        </li>
                                    }
                                </ul>
                                <hr />
                                <Link to="/histories" className="btn btn-secondary">Back</Link>
                            </div>
                        );
                    }
                }
                </Query>
            </>
        )
    }
}

export default History;
