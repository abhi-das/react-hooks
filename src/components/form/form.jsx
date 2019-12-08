import React from 'react';
// import InputFieldComponent from './inputField/input-field.component';
import './form.css';

import useFormValidation from '../../hooks/useFormValidation';
import validationRules from './validationRules';


const INITIAL_STATE = {
    username: ""
}
const FormContainer = () => {

    const { fields, handleChange, submitHandler, formErrors, isSubmit } = useFormValidation(INITIAL_STATE, validationRules)

    return (
        <div className="form-container">
            <form>
                <h3>User Form</h3>
                <div className="field-controller">
                    <input
                        onChange={handleChange}
                        name="username"
                        value={fields.username}
                        placeholder="Type here..."
                        className={formErrors.username && 'error'} />
                    {formErrors.username &&
                        <p className="text-error">{formErrors.username}</p>
                    }
                </div>
                <button type="submit" disabled={isSubmit} onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default FormContainer;