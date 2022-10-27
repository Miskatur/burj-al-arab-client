import React, { useContext, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Form, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signInWithEmail } = useContext(AuthContext)
    const [togglePassword, setTogglePassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const handleShowPassword = () => {
        setTogglePassword(!togglePassword)
    }

    const handleSubmitForm = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your Email and Password!</p>

                                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg1' name='email' type='email' size="lg" />

                                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg2' type={togglePassword ? "text" : "password"} name='password' size="lg" />

                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Show password' onClick={handleShowPassword} />

                                <p>{errorMessage}</p>


                                <MDBBtn size='lg'>
                                    Login
                                </MDBBtn>

                                <hr className="my-4" />

                                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                                    <MDBIcon fab icon="google" className="mx-2" />
                                    Sign in with google
                                </MDBBtn>

                                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                    <MDBIcon fab icon="facebook-f" className="mx-2" />
                                    Sign in with facebook
                                </MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </Form>
    );
};

export default Login;