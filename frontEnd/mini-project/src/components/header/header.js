import React from "react";
import {
    Navbar,
    Container,
    Nav
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logos/clothesShop2.png'
import "../../assets/styles/index.scss";

const Header = () => {
    const isLogin = Cookies.get("token");
    const navigate = useNavigate();

    return (
        <Navbar variant= 'light' className='color-nav'>
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className='word'>
                    <img src={Logo} width='70px' height='auto' alt='logo'/>
                    <h5 class="text-white">Clothes Shop</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        {isLogin ? (
                            <>
                                <Nav.Link as={Link} to="/dashboard-admin">
                                    Dashboard Admin
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => {
                                        Cookies.remove("token");
                                        navigate("/login");
                                    }}
                                >
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
