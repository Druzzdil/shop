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

    componentDidMount(){
        this.props.onDidMount()
    }

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
                            size: ""
                        }}
                        validate={values => {
                            let error = {}
                            if (!values.title){
                                error.title = 'required'
                            }
                            if (!values.price){
                                error.price = 'required'
                            }
                            if (!values.size){
                                error.size = 'required'
                            }
                            return error
                        }}
                        onSubmit={values=> {
                            this.props.addProduct(values);
                            this.props.history.push("/dashboard");
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
                                        <Field  className="input-field" type="text" name="size" id="size" label="Size"/>
                                        <label htmlFor="size">Size</label>
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