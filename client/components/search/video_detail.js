import React from 'react'
import {Link} from 'react-router';

const VideoDetail = ({car, auth}) => {
    if (!car) {
        return <div>Loading....</div>
    }
    const {isAuthenticated} = auth;
    const url = require('../browse/images/' + car.img);
    const rentUrl = '/rent';
    const loginUrl = '/login';
    // const {isAuthenticated} = this.props.auth;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <img className="embed-responsive-item" src={url}></img>
            </div>
            <div className="details">
                <h1>{car.brand} {car.model}</h1>
                <div>{car.description}</div>
                <div className="rent-button">

                    <Link to={{pathname: isAuthenticated ? (rentUrl + "/" + car.id) : loginUrl}}>
                        <button>Rent now</button>
                    </Link>
                </div>
            </div>
        </div>

    )
};

export default VideoDetail;