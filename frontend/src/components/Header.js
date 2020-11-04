import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  let userInfo = userLogin.userInfo;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <LinkContainer to="/" className="mr-auto">
            <Navbar.Brand>NIPO</Navbar.Brand>
            {/* <img className="logo" src="/logo.png" alt="logo" /> */}
          </LinkContainer>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Find the best device..."
            />
          </form>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/about">
                <div className="nav-link">
                  <i className="fas fa-info-circle"></i>About
                </div>
              </LinkContainer>

              <LinkContainer to="/cart">
                <div className="nav-link">
                  <i className="fas fa-shopping-cart mr-1"></i>Cart
                </div>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user mr-1"></i>Sing In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );

  // return (
  //   <header>
  //     <nav className="navbar navbar-expand-md navbar-dark bg-primary">
  //       <Container>
  //         <LinkContainer to="/">
  //           <img className="logo" src="/logo.png" alt="logo" />
  //         </LinkContainer>

  //         <form className="form-inline my-2 my-lg-0">
  //           <input
  //             className="form-control mr-sm-2"
  //             type="text"
  //             placeholder="Find the best device..."
  //           />
  // <button className="btn btn-secondary my-2 my-sm-0" type="submit">
  //   Search
  // </button>
  //         </form>

  //         <div className="collapse navbar-collapse" id="navbar-top">
  //           <ul className="navbar-nav ml-auto">
  //             <li className="nav-item">
  //               <LinkContainer to="/about">
  //                 <div className="nav-link">
  //                   <i className="fas fa-info-circle"></i>About
  //                 </div>
  //               </LinkContainer>
  //             </li>

  //             <li className="nav-item">
  //               <LinkContainer to="/cart">
  //                 <div className="nav-link">
  //                   <i className="fas fa-shopping-cart mr-1"></i>Cart
  //                 </div>
  //               </LinkContainer>
  //             </li>

  //             {userInfo ? (
  //               <NavDropdown title={userInfo.name} id="username">
  //                 <LinkContainer to="/profile">
  //                   <NavDropdown.Item>Profile</NavDropdown.Item>
  //                 </LinkContainer>

  //                 <NavDropdown.Divider />
  //                 <NavDropdown.Item onClick={logoutHandler}>
  //                   Logout
  //                 </NavDropdown.Item>
  //               </NavDropdown>
  //             ) : (
  //               <li className="nav-item">
  //                 <LinkContainer to="/login">
  //                   <div className="nav-link">
  //                     <i className="fas fa-user mr-1"></i>Sing In
  //                   </div>
  //                 </LinkContainer>
  //               </li>
  //             )}
  //           </ul>
  //         </div>
  //       </Container>
  //     </nav>
  //   </header>
  // );
};

export default Header;
