import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './selection-page.css'

const SelectionPage = (props) => {
  return (
    <div className="selection-page-container">
      <Helmet>
        <title>Selection-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="Selection-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="selection-page-selection-page">
        <img
          alt="image23411"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/88663d79-252b-4217-a200-c96e7a56dd51?org_if_sml=1167213"
          className="selection-page-image2"
        />
        <div className="selection-page-background">
          <Link to="/" className="selection-page-navlink button">
            Back
          </Link>
        </div>
        <div className="selection-page-content">
          <span className="selection-page-text">
            <span>Wanna reach out to potential investors?</span>
          </span>
        </div>
        <img
          alt="image20230301225923788removebgpreview13411"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/d936864c-399c-4537-be23-2fed976e8760?org_if_sml=132173"
          className="selection-page-image20230301225923788removebgpreview1"
        />
        <div className="selection-page-content1">
          <span className="selection-page-text2">
            <span>
              Your choice: Donate for a cause or invest for returns
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <button className="selection-page-button-primary">
          <button className="selection-page-button-primary1">
            <Link
              to="/start-up-registration-page"
              className="selection-page-navlink1"
            >
              <img
                alt="BackgroundI341"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/10a73d5e-8f3e-4f0a-ba12-c5b8692bcf54?org_if_sml=1434"
                className="selection-page-background1"
              />
            </Link>
            <span className="selection-page-text4">
              <span>Start-up</span>
            </span>
          </button>
        </button>
        <button className="selection-page-button-primary2">
          <button className="selection-page-button-primary3">
            <Link
              to="/user-registration-page"
              className="selection-page-navlink2"
            >
              <img
                alt="BackgroundI341"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5d81d16-68ff-434f-bc0f-22054d63938e/4805c166-d1a9-4b72-a7e3-5e7b9c76c63c?org_if_sml=1434"
                className="selection-page-background2"
              />
            </Link>
            <span className="selection-page-text6">
              Donor/Investor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </button>
        </button>
      </div>
    </div>
  )
}

export default SelectionPage
