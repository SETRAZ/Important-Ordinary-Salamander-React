import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Important Ordinary Salamander</title>
        <meta property="og:title" content="Important Ordinary Salamander" />
      </Helmet>
      <div className="home-homepage">
        <img
          alt="Background3498"
          src="/playground_assets/background3498-8mqw-1500w.png"
          className="home-background"
        />
        <div className="home-content">
          <span className="home-text">
            <span>
              Cultivating Creativity:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text02">Helping Start-ups Thrive</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <img
          alt="Backgroundremovebgpreview13498"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/94c97749-9019-495d-ab00-b7b61460b56a?org_if_sml=1229915"
          className="home-backgroundremovebgpreview1"
        />
        <img
          alt="image20230301225923788removebgpreview13499"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/5e2e45d3-8023-41ee-9b7f-b7491dfc9f23?org_if_sml=132173"
          className="home-image20230301225923788removebgpreview1"
        />
        <button className="home-button-primary">
          <button className="home-button-primary1">
            <Link to="/selection-page" className="home-navlink">
              <img
                alt="BackgroundI349"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/f63cd431-3f6a-4b51-8631-3f9a675329aa?org_if_sml=1434"
                className="home-background1"
              />
            </Link>
            <span className="home-text04">
              <span>
                Let’s Venture
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </button>
        </button>
      </div>
      <div className="home-homepagedownscroll">
        <div className="home-page2">
          <img
            alt="Background3410"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/fa743f29-e1cf-495a-8e83-fdf0cda3a0c0?org_if_sml=15558"
            className="home-background2"
          />
          <button className="button">Button</button>
        </div>
        <div className="home-navbar">
          <div className="home-background3"></div>
          <button className="home-button-primary2">
            <button className="home-button-primary3">
              <img
                alt="BackgroundI341"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/87512deb-87ec-4d08-b550-183c22cc6da5?org_if_sml=1373"
                className="home-background4"
              />
              <Link to="/selection-page" className="home-text06">
                <span>Sign Up</span>
              </Link>
            </button>
          </button>
          <div className="home-links">
            <span className="home-text08"></span>
            <span className="home-text09">
              <span>Help</span>
            </span>
            <Link to="/user-login-page" className="home-text11">
              <span>Login</span>
            </Link>
          </div>
        </div>
        <img
          alt="image20230301224601648removebgpreview23410"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/d5aa6e4f-cdb3-4b67-b018-0da7a5bcc109?org_if_sml=111882"
          className="home-image20230301224601648removebgpreview2"
        />
        <span className="home-text13">
          <span>
            <span>
              Welcome to VentureVine, your go-to platform for linking startups
              and investors!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              At VentureVine, we believe in the power of innovation and
              entrepreneurship, and we are passionate about helping startups
              grow and succeed. We connect you to the right investors.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              So why wait? Join the VentureVine community today and take the
              first step towards turning your idea into a successful business!
            </span>
          </span>
        </span>
        <img
          alt="image13410"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/7150a1ed-d35f-4570-9f79-7de89b4f31f2?org_if_sml=1143496"
          className="home-image1"
        />
      </div>
    </div>
  )
}

export default Home
