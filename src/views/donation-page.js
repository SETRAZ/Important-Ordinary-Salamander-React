import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './donation-page.css'

const DonationPage = (props) => {
  return (
    <div className="donation-page-container">
      <Helmet>
        <title>Donation-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="Donation-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="donation-page-donationpage">
        <div className="donation-page-page2">
          <div className="donation-page-background">
            <input type="text" placeholder="Amount" className="input" />
          </div>
        </div>
        <div className="donation-page-navbar">
          <img
            alt="BackgroundI961"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/119bce40-13e6-41af-a338-229e853e99fb?org_if_sml=1632"
            className="donation-page-background1"
          />
        </div>
        <img
          alt="image20230301224601648removebgpreview29613"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/012b1829-94d7-4b2e-97a8-7a75a7724702?org_if_sml=111882"
          className="donation-page-image20230301224601648removebgpreview2"
        />
        <button className="donation-page-button-primary">
          <button className="donation-page-button-primary1">
            <button className="donation-page-button-primary2">
              <button className="donation-page-button-primary3">
                <Link to="/thank-you-page" className="donation-page-navlink">
                  <img
                    alt="BackgroundI981"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/78ed1232-811a-49cb-9fb0-ea714f67c799?org_if_sml=1448"
                    className="donation-page-background2"
                  />
                </Link>
                <span className="donation-page-text">
                  <span>
                    Donate
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </button>
            </button>
          </button>
        </button>
        <button className="donation-page-button-primary4">
          <img
            alt="BackgroundI981"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/87601bb0-3300-42a0-ab0f-7bde1a64884c?org_if_sml=1448"
            className="donation-page-background3"
          />
          <span className="donation-page-text02">
            <span>Rs. 1000</span>
          </span>
        </button>
        <button className="donation-page-button-primary5">
          <img
            alt="BackgroundI981"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/ceb3469b-b7ac-4616-8bdb-da2afe9ddfed?org_if_sml=1448"
            className="donation-page-background4"
          />
          <span className="donation-page-text04">
            <span>Rs. 5000</span>
          </span>
        </button>
        <button className="donation-page-button-primary6">
          <img
            alt="BackgroundI981"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/6a9c4e7c-5c85-4785-955d-1604b1fc2413?org_if_sml=1448"
            className="donation-page-background5"
          />
          <span className="donation-page-text06">
            <span>Rs. 10000</span>
          </span>
        </button>
        <span className="donation-page-text08">
          <span>Other Amount:</span>
        </span>
      </div>
    </div>
  )
}

export default DonationPage
