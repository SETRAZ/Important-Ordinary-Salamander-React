import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './start-up-info-page.css'

const StartUpInfoPage = (props) => {
  return (
    <div className="start-up-info-page-container">
      <Helmet>
        <title>Start-up-Info-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="Start-up-Info-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="start-up-info-page-container1">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1523476324532-18841ae4b297?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxjeWNsZXxlbnwwfHx8fDE2NzgwNDYxMzM&amp;ixlib=rb-4.0.3&amp;w=200"
          className="start-up-info-page-image"
        />
        <div className="start-up-info-page-startup-landing-profile-page">
          <div className="start-up-info-page-page2">
            <div className="start-up-info-page-background">
              <Link
                to="/selection-page"
                className="start-up-info-page-navlink button"
              >
                Back
              </Link>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHJhbmRvbXxlbnwwfHx8fDE2NzgwNDY5NTc&amp;ixlib=rb-4.0.3&amp;w=300"
                className="start-up-info-page-image1"
              />
            </div>
          </div>
          <div className="start-up-info-page-container2">
            <div className="start-up-info-page-navbar">
              <img
                alt="BackgroundI471"
                src="/playground_assets/backgroundi471-r5g-200h.png"
                className="start-up-info-page-background1"
              />
            </div>
          </div>
          <img
            alt="image20230301224601648removebgpreview24711"
            src="/playground_assets/image20230301224601648removebgpreview24711-phqd-200h.png"
            className="start-up-info-page-image20230301224601648removebgpreview2"
          />
          <input
            type="text"
            placeholder
            className="start-up-info-page-input-fields"
          />
          <span className="start-up-info-page-text">
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
          <span className="start-up-info-page-text05">
            <span>
              Name: Green Route
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="start-up-info-page-text07">
            <span>E-mail: greenroute@gmail.com</span>
          </span>
          <div className="start-up-info-page-frame12">
            <div className="start-up-info-page-frame121">
              <Link to="/donation-page" className="start-up-info-page-navlink1">
                <div className="start-up-info-page-frame6">
                  <span className="start-up-info-page-text09">
                    <span>Donate</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="start-up-info-page-frame45"></div>
          <span className="start-up-info-page-text13">
            <span>
              <span>
                Introducing &quot;Green Route&quot; - the revolutionary app that
                helps you plan your daily commute while reducing your carbon
                footprint. With our app, you can easily compare different modes
                of transportation, including public transit, carpooling, biking,
                and walking, and choose the most sustainable option. Not only
                will you be doing your part to help the environment, but
                you&apos;ll also save money on gas and reduce traffic
                congestion. Plus, our app rewards users who consistently choose
                eco-friendly transportation options with exclusive discounts and
                perks from local businesses. Join the movement towards a greener
                future with Green Route.
              </span>
              <br></br>
              <span></span>
            </span>
          </span>
          <span className="start-up-info-page-text18">
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
    </div>
  )
}

export default StartUpInfoPage
