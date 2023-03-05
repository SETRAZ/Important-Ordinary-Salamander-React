import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './start-up-login-page.css'

const StartUpLoginPage = (props) => {
  return (
    <div className="start-up-login-page-container">
      <Helmet>
        <title>Start-up-Login-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="Start-up-Login-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="start-up-login-page-container1">
        <div className="start-up-login-page-startupregistraionpage">
          <div className="start-up-login-page-page2">
            <div className="start-up-login-page-background">
              <Link
                to="/selection-page"
                className="start-up-login-page-navlink button"
              >
                Back
              </Link>
            </div>
            <input
              type="text"
              placeholder="E-mail"
              className="start-up-login-page-textinput input"
            />
          </div>
          <img
            alt="image20230301224601648removebgpreview2I759"
            src="/playground_assets/image20230301224601648removebgpreview2i759-izwa-200h.png"
            className="start-up-login-page-image20230301224601648removebgpreview2"
          />
          <div className="start-up-login-page-group11">
            <div className="start-up-login-page-frame20"></div>
            <div className="start-up-login-page-frame21"></div>
            <div className="start-up-login-page-frame22">
              <span className="start-up-login-page-text">Password</span>
            </div>
            <span className="start-up-login-page-text1">
              <span>Email</span>
            </span>
          </div>
          <img
            alt="VectorI759"
            src="/playground_assets/vectori759-13jx.svg"
            className="start-up-login-page-vector"
          />
          <div className="start-up-login-page-group9">
            <img
              alt="VectorI759"
              src="/playground_assets/vectori759-2tm.svg"
              className="start-up-login-page-vector1"
            />
            <img
              alt="VectorI759"
              src="/playground_assets/vectori759-3j8w.svg"
              className="start-up-login-page-vector2"
            />
            <img
              alt="VectorI759"
              src="/playground_assets/vectori759-qikp.svg"
              className="start-up-login-page-vector3"
            />
          </div>
          <span className="start-up-login-page-text3">
            <span>
              Start-ups today, Unicorns tomorrow
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="start-up-login-page-frame9">
            <Link
              to="/start-up-landing-page"
              className="start-up-login-page-navlink1"
            >
              <div className="start-up-login-page-frame91">
                <span className="start-up-login-page-text5">Login</span>
              </div>
            </Link>
          </div>
          <div className="start-up-login-page-frame6">
            <img
              alt="LogoI759"
              src="/playground_assets/logoi759-pml8p-200h.png"
              className="start-up-login-page-logo"
            />
            <span className="start-up-login-page-text6">
              Continue with Google
            </span>
          </div>
          <div className="start-up-login-page-frame7">
            <span className="start-up-login-page-text7">
              Don&apos;t have an account?
            </span>
            <Link
              to="/start-up-registration-page"
              className="start-up-login-page-text8"
            >
              Register
            </Link>
          </div>
          <input
            type="text"
            placeholder="password"
            className="start-up-login-page-textinput1 input"
          />
        </div>
      </div>
    </div>
  )
}

export default StartUpLoginPage
