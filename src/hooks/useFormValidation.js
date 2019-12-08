import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validate) => {

    const [fields, setFields] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {

        if (isSubmit) {
            const noErrors = Object.keys(formErrors).length === 0;
            if (noErrors) {
                setIsSubmit(false);
            } else {
                setIsSubmit(false);
            }
            console.log("call now", Object.keys(formErrors))
        }

    }, [formErrors]);

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const validationErrors = validate(fields);
        setFormErrors(validationErrors)
        setIsSubmit(true);
    }

    return { fields, handleChange, submitHandler, formErrors, isSubmit }
}

export default useFormValidation;