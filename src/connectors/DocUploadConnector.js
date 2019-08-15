// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { DocumentUploadScreen } from '../scenes/DocumentUploadScreen'
import {SOCIAL_ROUTE} from '../constants/index'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(SOCIAL_ROUTE)
  }
})
export const DocUploadConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentUploadScreen)
