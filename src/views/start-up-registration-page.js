import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './start-up-registration-page.css'

const StartUpRegistrationPage = (props) => {
  return (
    <div className="start-up-registration-page-container">
      <Helmet>
        <title>
          Start-up-registration-page - Important Ordinary Salamander
        </title>
        <meta
          property="og:title"
          content="Start-up-registration-page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="start-up-registration-page-startupregistraionpage">
        <div className="start-up-registration-page-page2">
          <div className="start-up-registration-page-background">
            <Link
              to="/selection-page"
              className="start-up-registration-page-navlink button"
            >
              Back
            </Link>
          </div>
          <input
            type="text"
            placeholder="E-mail"
            className="start-up-registration-page-textinput input"
          />
        </div>
        <img
          alt="image20230301224601648removebgpreview2I759"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/c50ffb24-bb68-44f6-b5e3-8e92d3c3a052?org_if_sml=111882"
          className="start-up-registration-page-image20230301224601648removebgpreview2"
        />
        <div className="start-up-registration-page-group11">
          <div className="start-up-registration-page-frame20">
            <span className="start-up-registration-page-text">
              <span>Email</span>
            </span>
          </div>
          <div className="start-up-registration-page-frame21">
            <span className="start-up-registration-page-text02">Name</span>
          </div>
          <div className="start-up-registration-page-frame22">
            <span className="start-up-registration-page-text03">Password</span>
          </div>
        </div>
        <img
          alt="VectorI759"
          src="/playground_assets/vectori759-13jx.svg"
          className="start-up-registration-page-vector"
        />
        <div className="start-up-registration-page-group9">
          <img
            alt="VectorI759"
            src="/playground_assets/vectori759-2tm.svg"
            className="start-up-registration-page-vector1"
          />
          <img
            alt="VectorI759"
            src="/playground_assets/vectori759-3j8w.svg"
            className="start-up-registration-page-vector2"
          />
          <img
            alt="VectorI759"
            src="/playground_assets/vectori759-qikp.svg"
            className="start-up-registration-page-vector3"
          />
        </div>
        <span className="start-up-registration-page-text04">
          <span>
            Start-ups today, Unicorns tomorrow
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="start-up-registration-page-frame9">
          <Link
            to="/start-up-landing-page"
            className="start-up-registration-page-navlink1"
          >
            <div className="start-up-registration-page-frame91">
              <span className="start-up-registration-page-text06">
                <span>Register</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="start-up-registration-page-frame6">
          <img
            alt="LogoI759"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/5564aa30-f1a5-46af-9570-14bdf77916c7?org_if_sml=1877"
            className="start-up-registration-page-logo"
          />
          <span className="start-up-registration-page-text08">
            Continue with Google
          </span>
        </div>
        <div className="start-up-registration-page-frame7">
          <span className="start-up-registration-page-text09">
            <br></br>
            <span>Already have an account?</span>
          </span>
          <Link
            to="/start-up-login-page"
            className="start-up-registration-page-text12"
          >
            Login
          </Link>
        </div>
        <input
          type="text"
          placeholder="Name "
          className="start-up-registration-page-textinput1 input"
        />
        <input
          type="text"
          placeholder="password"
          className="start-up-registration-page-textinput2 input"
        />
      </div>
    </div>
  )
}

export default StartUpRegistrationPage
