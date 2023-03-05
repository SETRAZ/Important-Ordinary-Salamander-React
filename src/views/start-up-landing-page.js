import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './start-up-landing-page.css'

const StartUpLandingPage = (props) => {
  return (
    <div className="start-up-landing-page-container">
      <Helmet>
        <title>Start-up-landing-page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="Start-up-landing-page - Important Ordinary Salamander"
        />
      </Helmet>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1523476324532-18841ae4b297?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxjeWNsZXxlbnwwfHx8fDE2NzgwNDYxMzM&amp;ixlib=rb-4.0.3&amp;w=200"
        className="start-up-landing-page-image"
      />
      <div className="start-up-landing-page-startup-landing-profile-page">
        <div className="start-up-landing-page-page2">
          <div className="start-up-landing-page-background">
            <Link
              to="/selection-page"
              className="start-up-landing-page-navlink button"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="start-up-landing-page-container1">
          <div className="start-up-landing-page-navbar">
            <img
              alt="BackgroundI471"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/4b03593f-8dc7-4072-afc3-412120d2b5be?org_if_sml=1632"
              className="start-up-landing-page-background1"
            />
          </div>
        </div>
        <img
          alt="image20230301224601648removebgpreview24711"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/5a00d4a9-9906-43f4-9468-a58332fd724e?org_if_sml=111882"
          className="start-up-landing-page-image20230301224601648removebgpreview2"
        />
        <input
          type="text"
          placeholder
          className="start-up-landing-page-input-fields"
        />
        <span className="start-up-landing-page-text">
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
        <span className="start-up-landing-page-text05">
          <span>
            Name: Green Route
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="start-up-landing-page-text07">
          <span>E-mail: greenroute@gmail.com</span>
        </span>
        <div className="start-up-landing-page-frame16">
          <div className="start-up-landing-page-frame161">
            <div className="start-up-landing-page-frame6">
              <span className="start-up-landing-page-text09">
                <span>My Documents</span>
              </span>
            </div>
          </div>
        </div>
        <div className="start-up-landing-page-frame12">
          <div className="start-up-landing-page-frame121">
            <div className="start-up-landing-page-frame61">
              <span className="start-up-landing-page-text11">
                <span>My Investors</span>
              </span>
            </div>
          </div>
        </div>
        <div className="start-up-landing-page-frame45">
          <div className="start-up-landing-page-frame122">
            <Link
              to="/start-up-profile-edit-page"
              className="start-up-landing-page-navlink1"
            >
              <div className="start-up-landing-page-frame62">
                <span className="start-up-landing-page-text13">
                  <span>Edit Details</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <span className="start-up-landing-page-text15">
          <span>
            <span>
              Introducing &quot;Green Route&quot; - the revolutionary app that
              helps you plan your daily commute while reducing your carbon
              footprint. With our app, you can easily compare different modes of
              transportation, including public transit, carpooling, biking, and
              walking, and choose the most sustainable option. Not only will you
              be doing your part to help the environment, but you&apos;ll also
              save money on gas and reduce traffic congestion. Plus, our app
              rewards users who consistently choose eco-friendly transportation
              options with exclusive discounts and perks from local businesses.
              Join the movement towards a greener future with Green Route.
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="start-up-landing-page-text20">
          <span>
            <span>
              Verified: YES
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Type: Android Application, Tech, Environment</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default StartUpLandingPage
