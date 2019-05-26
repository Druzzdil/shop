import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

export default class Main extends React.Component {

    componentDidMount(){
        this.props.onDidMount()
    }

    render(){
        return (
            <div>
                <Formik
                    intitialValues={{username: ""}}
                    validate={values => {
                        let error = {}
                        if (!values.username){
                            error.username = 'required'
                        }
                        return error
                    }}
                    onSubmit={values=>console.log(values)}
                >
                    {() => (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field type="text" name="username" id="username"/>
                            <ErrorMessage style={{color: 'red'}} name="username" component="div"/>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
