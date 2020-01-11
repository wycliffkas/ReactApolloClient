import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const ROCKET_QUERY = gql`
query rocket_query($rocket_id: String!){
    rocket(rocket_id: $rocket_id){
        rocket_id
        rocket_name
        rocket_type
        wikipedia
        description
    }
}
`;

class Rocket extends Component {
    render() {
        let { rocket_id } = this.props.match.params;
        return (
            <>
                <Query query={ROCKET_QUERY} variables={{rocket_id}}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);
                        const { rocket_name, rocket_type, wikipedia, description } = data.rocket;
                        return (
                            <div>
                                <h1 className="display-4 my-3">
                                    <span className="text-dark">Rocket:</span> {rocket_name}
                                </h1>
                                <h4 className="mb-3">Rocket Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Type:{' '}
                                        <span className="text-success font-weight-bold">{rocket_type}</span>
                                    </li>
                                    <li className="list-group-item">Wiki:{' '}
                                        <a href={wikipedia} target="_blank" rel="noopener noreferrer">
                                            Read more about {rocket_name} on Wikipedia!
                                        </a>
                                    </li>
                                    <li className="list-group-item">Description:{' '}
                                        <span className="text-success font-weight-bold">{description}</span>
                                    </li>
                                </ul>
                                <hr />
                                <Link to="/rockets" className="btn btn-secondary">Back</Link>
                            </div>
                        )
                    }
                }
                </Query>
            </>
        )
    }
}

export default Rocket;
