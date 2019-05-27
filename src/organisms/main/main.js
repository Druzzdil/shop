import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

export default class Main extends React.Component {

    componentDidMount(){
        this.props.onDidMount()
    }

    render(){
        console.log(this.props, 'props');
        return (
            <div>
                <Formik
                    intitialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                    }}
                    validate={values => {
                        let error = {}
                        if (!values.first_name){
                            error.first_name = 'required'
                        }
                        if (!values.last_name){
                            error.first_name = 'required'
                        }
                        if (!values.email){
                            error.first_name = 'required'
                        }
                        return error
                    }}
                    onSubmit={values=> {
                        this.props.addProduct(values)
                        console.log(values, 'values');
                    }}
                >
                    {() => (
                        <Form>
                            <label htmlFor="first_name">first name</label>
                            <Field type="text" name="first_name" id="first_name"/>
                            <label htmlFor="last_name">last name</label>
                            <Field type="text" name="last_name" id="last_name"/>
                            <label htmlFor="email">email</label>
                            <Field type="text" name="email" id="email"/>
                            <ErrorMessage style={{color: 'red'}} name="first_name" component="div"/>
                            <ErrorMessage style={{color: 'red'}} name="last_name" component="div"/>
                            <ErrorMessage style={{color: 'red'}} name="email" component="div"/>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
