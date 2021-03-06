import { compose } from 'redux'
import withAnalytics from './withAnalytics'
import withAuth from './withAuth'
import withData from './withData'
import withDefaultLayout from './withDefaultLayout'
import withNavlessLayout from './withNavlessLayout'
import withUser from './withUser'

export const pageWithDefaultLayout = compose(
  withData,
  withAnalytics,
  withAuth,
  withDefaultLayout
)

export const pageWithUserData = compose(
  withData,
  withAnalytics,
  withAuth,
  withDefaultLayout,
  withUser
)

export const pageWithNavlessLayout = compose(
  withData,
  withAuth,
  withAnalytics,
  withNavlessLayout
)
