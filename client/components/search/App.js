import React, {Component} from 'react';

import _ from 'lodash';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import axios from "axios";
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [],
            selectedCar: null
        };

        this.videoSearch('bmw');

    }

    videoSearch(term) {

        axios.get('/api/cars/getCar', {
            params: {
                term
            }
        }).then(res => {
            console.log(res.data.car[0]);
            this.setState({
                cars: res.data.car,
                selectedCar: res.data.car[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail car={this.state.selectedCar} auth={this.props.auth} handleRentalRequest={() => {
                    this.context.router.push('/')
                }}/>
                <VideoList onCarSelect={selectedCar => this.setState({selectedCar})}
                           cars={this.state.cars}/>
            </div>

        );
    };
}

App.propTypes = {
    auth: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, null)(App);
