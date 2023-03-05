import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './start-up-profile-edit-page.css'

const StartUpProfileEditPage = (props) => {
  return (
    <div className="start-up-profile-edit-page-container">
      <Helmet>
        <title>
          Start-up-Profile-Edit-Page - Important Ordinary Salamander
        </title>
        <meta
          property="og:title"
          content="Start-up-Profile-Edit-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="start-up-profile-edit-page-startup-profile-editpage">
        <div className="start-up-profile-edit-page-page2">
          <div className="start-up-profile-edit-page-background">
            <input
              type="text"
              placeholder="Name"
              className="start-up-profile-edit-page-textinput input"
            />
            <input
              type="text"
              placeholder="E-mail"
              className="start-up-profile-edit-page-textinput1 input"
            />
            <textarea className="start-up-profile-edit-page-textarea textarea"></textarea>
            <textarea className="start-up-profile-edit-page-textarea1 textarea"></textarea>
          </div>
        </div>
        <div className="start-up-profile-edit-page-container1">
          <div className="start-up-profile-edit-page-navbar">
            <img
              alt="BackgroundI872"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/f729bd26-6a5d-46e0-9ec5-b0b1277a1ceb?org_if_sml=1632"
              className="start-up-profile-edit-page-background1"
            />
          </div>
        </div>
        <img
          alt="image20230301224601648removebgpreview24711"
          src="/playground_assets/image20230301224601648removebgpreview24711-phqd-200h.png"
          className="start-up-profile-edit-page-image20230301224601648removebgpreview2"
        />
        <span className="start-up-profile-edit-page-text">
          <span>
            <span>
              Pitch/Description:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="start-up-profile-edit-page-text05">
          <span>
            <span>
              Name:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="start-up-profile-edit-page-text10">
          E-mail:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <div className="start-up-profile-edit-page-frame16"></div>
        <div className="start-up-profile-edit-page-frame12">
          <div className="start-up-profile-edit-page-frame121">
            <div className="start-up-profile-edit-page-frame122">
              <Link
                to="/start-up-landing-page"
                className="start-up-profile-edit-page-navlink"
              >
                <div className="start-up-profile-edit-page-frame6">
                  <span className="start-up-profile-edit-page-text11">
                    <span>Save Details</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="start-up-profile-edit-page-frame45">
          <div className="start-up-profile-edit-page-frame123"></div>
        </div>
        <span className="start-up-profile-edit-page-text13">
          <span>
            Type::
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
    </div>
  )
}

export default StartUpProfileEditPage
