import React from 'react';

//this defines const video = arg.video -> nice
const VideoListItem = ({car, onCarSelect}) => {
    console.log(car);
    const url = require('../browse/images/' + car.img);

    return (
        <li onClick={() => onCarSelect(car)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={url}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {car.brand} {car.model}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
