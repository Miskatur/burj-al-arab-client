import React, { useContext, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Form, Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, userData } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')

    const [accepted, setAccepted] = useState(false)

    const handleSignUpForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            return alert('Your Password did not matched!')
        }
        console.log(name, email, password, confirm)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                handleUserdata(name)
                Navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    const handleUserdata = name => {
        userData(name)
            .then(() => { })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Form onSubmit={handleSignUpForm}>
            <MDBContainer fluid>
                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput label='Your Name' id='form1' name='name' type='text' className='w-100' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Your Email' id='form2' name='email' type='email' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput label='Password' id='form3' name='password' type='password' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="key me-3" size='lg' />
                                    <MDBInput label='Repeat your password' name='confirm' id='form4' type='password' />
                                </div>

                                <div className='mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Accept the Terms & Conditions' onClick={handleAccepted} />
                                </div>

                                <p>{errorMessage}</p>

                                <MDBBtn className='mb-4' size='lg' disabled={!accepted}>Sign Up</MDBBtn>


                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </Form>
    );
};

export default SignUp;