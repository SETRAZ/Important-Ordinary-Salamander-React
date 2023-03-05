import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import UserProfilePage from './views/user-profile-page'
import DonationPage from './views/donation-page'
import StartUpLandingPage from './views/start-up-landing-page'
import UserRegistrationPage from './views/user-registration-page'
import StartUpProfileEditPage from './views/start-up-profile-edit-page'
import UserLandingPage from './views/user-landing-page'
import StartUpRegistrationPage from './views/start-up-registration-page'
import StartUpLoginPage from './views/start-up-login-page'
import ThankYouPage from './views/thank-you-page'
import StartUpInfoPage from './views/start-up-info-page'
import UserProfileEditPage from './views/user-profile-edit-page'
import SelectionPage from './views/selection-page'
import Home from './views/home'
import UserLoginPage from './views/user-login-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={UserProfilePage} exact path="/user-profile-page" />
        <Route component={DonationPage} exact path="/donation-page" />
        <Route
          component={StartUpLandingPage}
          exact
          path="/start-up-landing-page"
        />
        <Route
          component={UserRegistrationPage}
          exact
          path="/user-registration-page"
        />
        <Route
          component={StartUpProfileEditPage}
          exact
          path="/start-up-profile-edit-page"
        />
        <Route component={UserLandingPage} exact path="/user-landing-page" />
        <Route
          component={StartUpRegistrationPage}
          exact
          path="/start-up-registration-page"
        />
        <Route component={StartUpLoginPage} exact path="/start-up-login-page" />
        <Route component={ThankYouPage} exact path="/thank-you-page" />
        <Route component={StartUpInfoPage} exact path="/start-up-info-page" />
        <Route
          component={UserProfileEditPage}
          exact
          path="/user-profile-edit-page"
        />
        <Route component={SelectionPage} exact path="/selection-page" />
        <Route component={Home} exact path="/" />
        <Route component={UserLoginPage} exact path="/user-login-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
