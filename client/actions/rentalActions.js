import axios from 'axios';

export function rentCar(dateRange) {
    return dispatch => {
        console.log("aldas");
        return axios.post('/api/rental/rentCar', dateRange);
    };
}

export function getRentedCars(dateRange) {
    return dispatch => {
        console.log("getting cars");
        console.log(dateRange);
        return axios.post('/api/rental/getRentals', dateRange);
    };
}
