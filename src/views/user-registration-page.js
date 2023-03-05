import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './user-registration-page.css'

const UserRegistrationPage = (props) => {
  return (
    <div className="user-registration-page-container">
      <Helmet>
        <title>User-Registration-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="User-Registration-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="user-registration-page-container1">
        <div className="user-registration-page-startupregistraionpage">
          <div className="user-registration-page-page2">
            <div className="user-registration-page-background">
              <Link
                to="/selection-page"
                className="user-registration-page-navlink button"
              >
                Back
              </Link>
            </div>
            <input
              type="text"
              placeholder="E-mail"
              className="user-registration-page-textinput input"
            />
          </div>
          <img
            alt="image20230301224601648removebgpreview2I759"
            src="/playground_assets/image20230301224601648removebgpreview2i759-izwa-200h.png"
            className="user-registration-page-image20230301224601648removebgpreview2"
          />
          <div className="user-registration-page-group11">
            <div className="user-registration-page-frame20">
              <span className="user-registration-page-text">
                <span>Email</span>
              </span>
            </div>
            <div className="user-registration-page-frame21">
              <span className="user-registration-page-text02">Name</span>
            </div>
            <div className="user-registration-page-frame22">
              <span className="user-registration-page-text03">Password</span>
            </div>
          </div>
          <img
            alt="VectorI759"
            src="/playground_assets/vectori759-13jx.svg"
            className="user-registration-page-vector"
          />
          <div className="user-registration-page-group9">
            <img
              alt="VectorI759"
              src="/playground_assets/vectori759-2tm.svg"
              className="user-registration-page-vector1"
            />
            <img
              alt="VectorI759"
              src="/playground_assets/vectori759-3j8w.svg"
              className="user-registration-page-vector2"
            />
            <img
              alt="VectorI759"
              src="/playground_assets/vectori759-qikp.svg"
              className="user-registration-page-vector3"
            />
          </div>
          <span className="user-registration-page-text04">
            A one-stop platform for donors and investors 
          </span>
          <div className="user-registration-page-frame9">
            <Link
              to="/user-landing-page"
              className="user-registration-page-navlink1"
            >
              <div className="user-registration-page-frame91">
                <span className="user-registration-page-text05">
                  <span>Register</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="user-registration-page-frame6">
            <img
              alt="LogoI759"
              src="/playground_assets/logoi759-pml8p-200h.png"
              className="user-registration-page-logo"
            />
            <span className="user-registration-page-text07">
              Continue with Google
            </span>
          </div>
          <div className="user-registration-page-frame7">
            <span className="user-registration-page-text08">
              <br></br>
              <span>Already have an account?</span>
            </span>
            <Link
              to="/user-login-page"
              className="user-registration-page-text11"
            >
              Login
            </Link>
          </div>
          <input
            type="text"
            placeholder="Name "
            className="user-registration-page-textinput1 input"
          />
          <input
            type="text"
            placeholder="password"
            className="user-registration-page-textinput2 input"
          />
        </div>
      </div>
    </div>
  )
}

export default UserRegistrationPage
