const nameValidationHandler = (fields) => {

    let errors = {};

    // Username rules
    if (!fields.username) {
        errors.username = "Value should not be empty !";
    } else if (fields.username.length < 3) {
        errors.username = "Value should be more than 3 characters always !";
    }

    return errors;
}

export default nameValidationHandler;