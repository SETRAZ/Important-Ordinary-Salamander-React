import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './thank-you-page.css'

const ThankYouPage = (props) => {
  return (
    <div className="thank-you-page-container">
      <Helmet>
        <title>Thank-You-Page - Important Ordinary Salamander</title>
        <meta
          property="og:title"
          content="Thank-You-Page - Important Ordinary Salamander"
        />
      </Helmet>
      <div className="thank-you-page-container1">
        <span className="thank-you-page-text">
          Thank you for helping a company thrive!
        </span>
        <Link to="/user-landing-page" className="thank-you-page-navlink button">
          Back
        </Link>
      </div>
    </div>
  )
}

export default ThankYouPage
