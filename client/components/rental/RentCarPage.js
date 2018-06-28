import React from 'react';
import RentCar from './RentCar';

class RentCarPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <RentCar />
                </div>
            </div>
        );
    }
}

export default RentCarPage;
