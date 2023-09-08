import { Dispatch } from 'redux'
import { ModalProps } from 'decentraland-dapps/dist/providers/ModalProvider/ModalProvider.types'
import { CallHistoryMethodAction } from 'connected-react-router'

import { CreateProjectFromTemplateAction } from 'modules/project/actions'
import { Template } from 'modules/template/types'
import { SDKVersion } from 'modules/scene/types'

export type Props = ModalProps & {
  error: string | null
  isLoading: boolean
  onCreateProject: (name: string, description: string, template: Template, sdk: SDKVersion) => void
}

export enum SceneCreationStep {
  INFO = 'info',
  SIZE = 'size',
  SDK = 'sdk'
}

export type State = {
  rows: number
  cols: number
  step: SceneCreationStep
  hasError: boolean
  name: string
  description: string
}

export type MapStateProps = Pick<Props, 'error' | 'isLoading'>
export type MapDispatchProps = Pick<Props, 'onCreateProject'>
export type MapDispatch = Dispatch<CreateProjectFromTemplateAction | CallHistoryMethodAction>
