import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {Formik, Form} from 'formik'
import RaisedButton from 'material-ui/RaisedButton';
import InputElement from './inputElement'
import FormStyles from './formStyles'
import ButtonWrapper from './buttonWrapper'
//
// export default class AddProductForm extends React.Component {
//
//     componentDidMount(){
//         this.props.onDidMount()
//     }
//
//     render(){
//         return (
//             <Container>
                {/*<Formik*/}
                    {/*intitialValues={{*/}
                        {/*title: "",*/}
                        {/*price: "",*/}
                    {/*}}*/}
                    {/*validate={values => {*/}
                        {/*let error = {}*/}
                        {/*if (!values.title){*/}
                            {/*error.title = 'required'*/}
                        {/*}*/}
                        {/*if (!values.price){*/}
                            {/*error.price = 'required'*/}
                        {/*}*/}
                        {/*return error*/}
                    {/*}}*/}
                    {/*onSubmit={values=> {*/}
                        {/*this.props.addProduct(values);*/}
                        {/*console.log(values, 'values');*/}
                    {/*}}*/}
                {/*>*/}
                    {/*{() => (*/}
                        {/*<Form>*/}
                            {/*<label htmlFor="title">first name</label>*/}
                            {/*<Field type="text" name="title" id="first_name"/>*/}
                            {/*<label htmlFor="price">last name</label>*/}
                            {/*<Field type="text" name="price" id="last_name"/>*/}
                            {/*<ErrorMessage style={{color: 'red'}} name="title" component="div"/>*/}
                            {/*<ErrorMessage style={{color: 'red'}} name="price" component="div"/>*/}
                            {/*<RaisedButton type="submit">Submit</RaisedButton>*/}
                        {/*</Form>*/}
                    {/*)}*/}
                {/*</Formik>*/}
//             </Container>
//         )
//     }
// }

export default class AddProductForm extends React.Component {

    componentDidMount(){
        this.props.onDidMount()
    }

    render(){
        console.log(this.props, 'awdadad');
        return (
            <div>
                <CssBaseline />
                <div>
                    <Typography component="h1" variant="h5">
                        <h2 style={{textAlign: 'center', fontSize: "27px", color: '#22607a'}}>Nexus</h2>
                    </Typography>
                    <Formik
                        intitialValues={{
                            title: "",
                            price: "",
                        }}
                        validate={values => {
                            let error = {}
                            if (!values.title){
                                error.title = 'required'
                            }
                            if (!values.price){
                                error.price = 'required'
                            }
                            return error
                        }}
                        onSubmit={values=> {
                            this.props.addProduct(values);
                            console.log(values, 'values');
                        }}
                    >
                        {() => (
                            <Form>
                                <FormStyles>
                                    <InputElement>
                                        <TextField type="text" name="title" id="title" label="Title"/>
                                    </InputElement>
                                    <InputElement>
                                        <TextField type="text" name="price" id="price" label="Price"/>
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