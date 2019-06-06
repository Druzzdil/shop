import React from 'react';
import { withFormik } from 'formik';

export const MyForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
    } = props;
    return (
        <form onSubmit={values=> {
            this.props.addProduct(values);
        }}>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="title"
            />
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                name="price"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ name: '' }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'BasicForm',
})(MyForm);