import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { getChainId } from 'decentraland-dapps/dist/modules/wallet/selectors'
import { RootState } from 'modules/common/types'
import { isWalletCommitteeMember } from 'modules/committee/selectors'
import { getSelectedCollectionId, isReviewing } from 'modules/location/selectors'
import { MapStateProps, MapDispatchProps, MapDispatch } from './TopPanel.types'
import TopPanel from './TopPanel'

const mapState = (state: RootState): MapStateProps => ({
  chainId: getChainId(state),
  isReviewing: isReviewing(state),
  isCommitteeMember: isWalletCommitteeMember(state),
  selectedCollectionId: getSelectedCollectionId(state)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path))
})

export default connect(mapState, mapDispatch)(TopPanel)
