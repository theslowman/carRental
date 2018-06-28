import React from 'react';
import VideoListItem from './video_list_unit'

const VideoList = props => {
    const carItems = props.cars.map(car => {
        return (
            <VideoListItem
                onCarSelect={props.onCarSelect}
                key={car.id}
                car={car}/>
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {carItems}
        </ul>
    )
};

export default VideoList;