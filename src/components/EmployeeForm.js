import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {NavLink} from 'react-router-dom';

// Employee form
let EmployeeForm = ({onSubmit, submitting, formStatus}) => {
    return (
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-sm-push-3 col-lg-push-4">
                <form onSubmit={ onSubmit } noValidate>
                    <Field name="firstname" component={renderField} type="text"
                           id="first-name" label="First Name"/>
                    <Field name="lastname" component={renderField} type="text"
                           id="last-name" label="Last Name"/>
                    <Field name="email" component={renderField} type="email"
                           id="email-address" label="Email Address"/>
                    <Field name="phone" component={renderField} type="tel"
                           id="phone-number" label="Phone Number"/>
                    <button type="submit" className="btn btn-primary employee-submit" disabled={submitting}>Submit</button>
                </form>
                {formStatus === 'success' &&
                <p>
                    Employee successfully saved.
                    <NavLink to="/employees"> Return to employee list</NavLink>
                </p>}
                {formStatus === 'error' &&
                <p>Saving employee failed. Please fill in all the fields.</p>}
            </div>
        </div>
    )
};

// Render schema for each field
const renderField = ({
    input,
    label,
    type,
    id,
    meta: {touched, error}
}) => (
    // Render schema for inputs
    <div className="form-group">
        <label htmlFor={id}>
            {label}
        </label>
        <input {...input} id={id} type={type} className="form-control"/>
        {touched &&
        (error &&
        <span className="error-text">
        {error}
        </span>)}
    </div>
);


EmployeeForm = reduxForm({
    form: 'employee',
    enableReinitialize: true
})(EmployeeForm);

export default EmployeeForm;