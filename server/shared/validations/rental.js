import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (data.from === null) {
        errors.from = 'Date was not set';
    }

    if (data.to === null) {
        errors.to = 'Date was not set';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
