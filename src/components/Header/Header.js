import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/dubai-burj-al-arab.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link to={'/'} className='d-flex align-items-center justify-content-center text-decoration-none text-dark'>
                    <img src={logo} alt="" style={{ height: '40px', width: '40px' }} />
                    <h5 >Burj Al Arab</h5>

                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Link className='mx-2 text-decoration-none text-dark fw-semibold' to={'/'}>Home</Link>
                        <Link className='mx-2 text-decoration-none text-dark fw-semibold' to={'/suits'}>Suits</Link>
                        <Link className='mx-2 text-decoration-none text-dark fw-semibold' to={'/about'}>About Us</Link>
                        <Link className='mx-2 text-decoration-none text-dark fw-semibold' to={'/contact'}>
                            Contact
                        </Link>

                        {
                            user?.uid ?
                                <>
                                    <Link className='mx-2 text-decoration-none text-dark fw-semibold'>
                                        {user.displayName}
                                    </Link>
                                    <Button variant="outline-danger" onClick={handleLogOut}>Log Out</Button>
                                </> :
                                <>
                                    <Link to={'/login'}>
                                        <Button variant="outline-dark" className='mx-2'>Log In</Button>
                                    </Link>
                                    <Link to={'signup'}>
                                        <Button variant="outline-info" className='mx-2 text-dark'>Sign Up</Button>
                                    </Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;