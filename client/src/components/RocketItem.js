import React from 'react'

export default function RocketItem({
    rocket:{ rocket_name }
}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Rocket: <span className="text-success">{rocket_name}</span></h4>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Rocket Details</button>
                </div>
            </div>
        </div>
    )
}
