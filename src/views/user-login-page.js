import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './user-login-page.css'

const UserLoginPage = (props) => {
  return (
    <div className="user-login-page-container">
      <Helmet>
        <title>User-Login-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="User-Login-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="user-login-page-container1">
        <div className="user-login-page-container2">
          <div className="user-login-page-startupregistraionpage">
            <div className="user-login-page-page2">
              <div className="user-login-page-background">
                <Link
                  to="/selection-page"
                  className="user-login-page-navlink button"
                >
                  Back
                </Link>
              </div>
              <input
                type="text"
                placeholder="E-mail"
                className="user-login-page-textinput input"
              />
            </div>
            <img
              alt="image20230301224601648removebgpreview2I759"
              src="/playground_assets/image20230301224601648removebgpreview2i759-izwa-200h.png"
              className="user-login-page-image20230301224601648removebgpreview2"
            />
            <div className="user-login-page-group11">
              <div className="user-login-page-frame20"></div>
              <div className="user-login-page-frame21"></div>
              <div className="user-login-page-frame22">
                <span className="user-login-page-text">Password</span>
              </div>
              <span className="user-login-page-text1">
                <span>Email</span>
              </span>
            </div>
            <img
              alt="VectorI759"
              src="/playground_assets/vectori759-13jx.svg"
              className="user-login-page-vector"
            />
            <div className="user-login-page-group9">
              <img
                alt="VectorI759"
                src="/playground_assets/vectori759-2tm.svg"
                className="user-login-page-vector1"
              />
              <img
                alt="VectorI759"
                src="/playground_assets/vectori759-3j8w.svg"
                className="user-login-page-vector2"
              />
              <img
                alt="VectorI759"
                src="/playground_assets/vectori759-qikp.svg"
                className="user-login-page-vector3"
              />
            </div>
            <span className="user-login-page-text3">
              A one-stop platform for donors and investors 
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="user-login-page-frame9">
              <Link
                to="/user-landing-page"
                className="user-login-page-navlink1"
              >
                <div className="user-login-page-frame91">
                  <span className="user-login-page-text4">Login</span>
                </div>
              </Link>
            </div>
            <div className="user-login-page-frame6">
              <img
                alt="LogoI759"
                src="/playground_assets/logoi759-pml8p-200h.png"
                className="user-login-page-logo"
              />
              <span className="user-login-page-text5">
                Continue with Google
              </span>
            </div>
            <div className="user-login-page-frame7">
              <span className="user-login-page-text6">
                Don&apos;t have an account?
              </span>
              <Link
                to="/user-registration-page"
                className="user-login-page-text7"
              >
                Register
              </Link>
            </div>
            <input
              type="text"
              placeholder="password"
              className="user-login-page-textinput1 input"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLoginPage
