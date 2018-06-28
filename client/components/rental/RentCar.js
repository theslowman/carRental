import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import validateInput from "../../../server/shared/validations/rental";
import {getRentedCars, rentCar} from '../../actions/rentalActions';

import {connect} from 'react-redux';
import {addFlashMessage} from "../../actions/flashMessages";

class RentCar extends React.Component {

    constructor(props, match) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
        this.state.carId = match.router.params.id;
        this.getDisabledDays();
        this.tryRent = this.tryRent.bind(this);
    }

    getDisabledDays() {
        this.props.getRentedCars(this.state).then(
            (res) => {
                var disabledDays = [];
                for (var i = 0; i < res.data.rentals.length; i++) {
                    disabledDays.push({
                        from: new Date(res.data.rentals[i].after.replace(/"/g, '')),
                        to: new Date(res.data.rentals[i].before.replace(/"/g, ''))
                    })
                }
                this.setState({disabledDays});
            },
            (err) => this.setState({errors: err.response.data.errors, isLoading: false})
        );

    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    tryRent() {
        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.rentCar(this.state).then(
                (res) => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You rented car successfully. \nCar will be available from: ' + this.state.from + ' to:' + this.state.from
                    });
                    this.context.router.push('/');
                },
                (err) => this.setState({errors: err.response.data.errors, isLoading: false})
            );
        }
    }


    getInitialState() {
        return {
            user: this.props.auth.user,
            carId: undefined,
            disabledDays: undefined,
            from: undefined,
            to: undefined,
        };
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick() {
        this.state.from = undefined;
        this.state.to = undefined;
        this.setState(this.state);
    }

    render() {
        const {from, to} = this.state;
        const modifiers = {start: from, end: to};
        return (

            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link reset btn btn-warning" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    disabledDays={this.state.disabledDays}
                    // disabledDays={[
                    //     new Date(2018, 6, 24),
                    //     new Date(2018, 6, 28),
                    //     {
                    //         after: new Date(2018, 5, 20),
                    //         before: new Date(2018, 5, 25),
                    //     },
                    // ]}
                    className="Selectable"
                    numberOfMonths={2}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />

                <Helmet>
                    <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
                </Helmet>

                <button onClick={this.tryRent} className="btn btn-primary btn-lg">Rent</button>

            </div>

        )
            ;
    }

}

RentCar.propTypes = {
    rentCar: React.PropTypes.func.isRequired,
    getRentedCars: React.PropTypes.func.isRequired,
    auth: React.PropTypes.object.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}

RentCar.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}


export default connect(mapStateToProps, {rentCar, getRentedCars, addFlashMessage})(RentCar)
