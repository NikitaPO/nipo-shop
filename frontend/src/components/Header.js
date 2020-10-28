import React from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <LinkContainer to="/">
            <img className="logo" src="/logo.png" alt="logo" />
          </LinkContainer>
          <button
            className="navbar-toggler mr-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Find the best device..."
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <LinkContainer to="/about">
                  <div className="nav-link">
                    <i className="fas fa-info-circle"></i>About
                  </div>
                </LinkContainer>
              </li>

              <li className="nav-item">
                <LinkContainer to="/cart">
                  <div className="nav-link">
                    <i className="fas fa-shopping-cart mr-1"></i>Cart
                  </div>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/login">
                  <div className="nav-link">
                    <i className="fas fa-user mr-1"></i>Sing In
                  </div>
                </LinkContainer>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
