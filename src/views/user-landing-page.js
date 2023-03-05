import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './user-landing-page.css'

const UserLandingPage = (props) => {
  return (
    <div className="user-landing-page-container">
      <Helmet>
        <title>User-Landing-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="User-Landing-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="user-landing-page-navbar">
        <div className="user-landing-page-background">
          <img
            alt="image20230301224601648removebgpreview23410"
            src="/playground_assets/image20230301224601648removebgpreview23410-5ct-200h.png"
            className="user-landing-page-image20230301224601648removebgpreview2"
          />
        </div>
        <button className="user-landing-page-button-primary">
          <button className="user-landing-page-button-primary1">
            <img
              alt="BackgroundI341"
              src="/playground_assets/backgroundi341-wj0s-200h.png"
              className="user-landing-page-background1"
            />
            <Link to="/selection-page" className="user-landing-page-text">
              Want to invest?
            </Link>
          </button>
        </button>
        <div className="user-landing-page-links">
          <span className="user-landing-page-text01"></span>
          <span className="user-landing-page-text02">
            <span>Help</span>
          </span>
        </div>
        <button className="user-landing-page-button button">
          <Link to="/user-profile-page" className="user-landing-page-navlink">
            <span>Profile</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="user-landing-page-contentcarditem5">
        <div className="user-landing-page-media">
          <div className="user-landing-page-cover"></div>
        </div>
        <div className="user-landing-page-cardcontent">
          <h6 className="user-landing-page-text06 h6">
            <span>20 JAN 2023</span>
          </h6>
          <h3 className="user-landing-page-text08 h3">
            <span>Start-up 1</span>
          </h3>
          <span className="user-landing-page-text10 paragraph">
            <span>
              <span>
                Slate helps you see how many more days
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>work to reach.</span>
            </span>
          </span>
          <div className="user-landing-page-tags">
            <Link to="/donation-page" className="user-landing-page-navlink1">
              <h6 className="user-landing-page-text15 h6">
                <span>Donate</span>
              </h6>
            </Link>
            <Link
              to="/start-up-info-page"
              className="user-landing-page-navlink2"
            >
              <h6 className="user-landing-page-text17 h6">
                <span>More</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="user-landing-page-contentcarditem51">
        <div className="user-landing-page-media1">
          <div className="user-landing-page-cover1"></div>
        </div>
        <div className="user-landing-page-cardcontent1">
          <h6 className="user-landing-page-text19 h61">
            <span>21 JAN 2023</span>
          </h6>
          <h3 className="user-landing-page-text21 h31">Green-Route </h3>
          <span className="user-landing-page-text22 paragraph1">
            <span>
              <span>
                Slate helps you see how many more days
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>work to reach.</span>
            </span>
          </span>
          <div className="user-landing-page-tags1">
            <Link to="/donation-page" className="user-landing-page-navlink3">
              <h6 className="user-landing-page-text27 h61">
                <span>Donate</span>
              </h6>
            </Link>
            <Link
              to="/start-up-info-page"
              className="user-landing-page-navlink4"
            >
              <h6 className="user-landing-page-text29 h61">
                <span>More</span>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLandingPage
