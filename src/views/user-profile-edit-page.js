import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './user-profile-edit-page.css'

const UserProfileEditPage = (props) => {
  return (
    <div className="user-profile-edit-page-container">
      <Helmet>
        <title>User-Profile-Edit-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="User-Profile-Edit-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="user-profile-edit-page-user-profile-edit-page">
        <div className="user-profile-edit-page-page2">
          <div className="user-profile-edit-page-background"></div>
        </div>
        <div className="user-profile-edit-page-navbar">
          <img
            alt="BackgroundI871"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/c9f5981e-d9b8-497f-9af2-29af4306f30f?org_if_sml=1632"
            className="user-profile-edit-page-background1"
          />
        </div>
        <img
          alt="image20230301224601648removebgpreview28711"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/699a5949-517b-401b-9e03-e00212c52f90?org_if_sml=111882"
          className="user-profile-edit-page-image20230301224601648removebgpreview2"
        />
        <span className="user-profile-edit-page-text">Name: </span>
        <span className="user-profile-edit-page-text1">
          <span>
            E-mail:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            Phone:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </span>
        <img
          alt="Rectangle28712"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/51dfd7f9-432d-477f-a9a8-391c11e421f3?org_if_sml=1348"
          className="user-profile-edit-page-rectangle2"
        />
        <div className="user-profile-edit-page-accountcircle"></div>
        <img
          alt="Vector8712"
          src="/playground_assets/vector8712-k7k.svg"
          className="user-profile-edit-page-vector"
        />
        <button className="user-profile-edit-page-button-primary">
          <button className="user-profile-edit-page-button-primary1">
            <button className="user-profile-edit-page-button-primary2">
              <Link
                to="/user-profile-page"
                className="user-profile-edit-page-navlink"
              >
                <img
                  alt="BackgroundI871"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/11530e0f-930f-4231-ac58-201eaa5f5d84?org_if_sml=1448"
                  className="user-profile-edit-page-background2"
                />
              </Link>
              <span className="user-profile-edit-page-text7">
                <span>Save</span>
              </span>
            </button>
          </button>
        </button>
        <input
          type="text"
          placeholder="Phone "
          className="user-profile-edit-page-textinput input"
        />
        <input
          type="text"
          placeholder="Name"
          className="user-profile-edit-page-textinput1 input"
        />
        <input
          type="text"
          placeholder="E-mail"
          className="user-profile-edit-page-textinput2 input"
        />
      </div>
    </div>
  )
}

export default UserProfileEditPage
