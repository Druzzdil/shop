import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Formik, Form, Field} from 'formik'
import RaisedButton from 'material-ui/RaisedButton';
import InputElement from './inputElement'
import FormStyles from './formStyles'
import ButtonWrapper from './buttonWrapper'
import './styles.scss'
import {withRouter} from "react-router-dom";

class AddProductForm extends React.Component {

    render(){
        return (
            <div>
                <CssBaseline />
                <div>
                    <Typography component="h1" variant="h5">
                        <h2 style={{textAlign: 'center', fontSize: "27px", color: '#22607a'}}>React</h2>
                    </Typography>
                    <Formik
                        intitialValues={{
                            title: "",
                            price: "",
                            size: "",
                            availableSizes: ""
                        }}
                        validate={values => {
                            let error = {}
                            if (!values.title){
                                error.title = 'required'
                            }
                            if (!values.price){
                                error.price = 'required'
                            }
                            if (!values.availableSizes){
                                error.availableSizes = 'required'
                            }
                            if (!values.availableSizes){
                                error.availableSizes = 'required'
                            }
                            return error
                        }}
                        onSubmit={values=> {
                            this.props.addProduct({
                                id: values.id,
                                title: values.title,
                                price: Number(values.price),
                                availableSizes: [values.availableSizes]
                            });
                            this.props.history.push("/");
                        }}
                    >
                        {() => (
                            <Form>
                                <FormStyles>
                                    <InputElement>
                                        <Field className="input-field" type="text" name="title" id="title" label="Title"/>
                                        <label htmlFor="title">Title</label>
                                    </InputElement>
                                    <InputElement>
                                        <Field  className="input-field" type="text" name="price" id="price" label="Price"/>
                                        <label htmlFor="title">Price</label>
                                    </InputElement>
                                    <InputElement>
                                        <Field  className="input-field" type="text" name="availableSizes" id="availableSizes" label="availableSizes"/>
                                        <label htmlFor="availableSizes">availableSizes</label>
                                    </InputElement>
                                    <InputElement>
                                        <Field  className="input-field" type="text" name="description" id="description" label="description"/>
                                        <label htmlFor="description">description</label>
                                    </InputElement>
                                    <ButtonWrapper>
                                        <RaisedButton type="submit">Add Product</RaisedButton>
                                    </ButtonWrapper>
                                </FormStyles>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default withRouter(AddProductForm)