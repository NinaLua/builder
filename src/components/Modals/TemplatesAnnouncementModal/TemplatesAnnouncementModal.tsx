import React from 'react'
import { Button, Close } from 'decentraland-ui'
import Modal from 'decentraland-dapps/dist/containers/Modal'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { getLocalStorage } from 'decentraland-dapps/dist/lib/localStorage'
import { LOCALSTORAGE_TEMPLATES_ANNOUCEMENT } from 'components/ScenesPage/ScenesPage'
import { locations } from 'routing/locations'
import { Props } from './TemplatesAnnouncementModal.types'
import styles from './TemplatesAnnouncementModal.module.css'

const PUBLIC_URL = process.env.PUBLIC_URL
const localStorage = getLocalStorage()
const videoSrc = '/videos/template-preview.mp4'

const TemplatesAnnouncementModal: React.FC<Props> = ({ name, onClose, onNavigate }) => {
  const handleClose = () => {
    localStorage.setItem(LOCALSTORAGE_TEMPLATES_ANNOUCEMENT, '1')
    onClose()
  }

  const handleGoToScenes = () => {
    handleClose()
    onNavigate(locations.scenes())
  }

  return (
    <Modal className={styles.modal} name={name} onClose={handleClose} closeIcon={<Close onClick={handleClose} />}>
      <Modal.Content className={styles.templatesBody}>
        <h1 className={styles.title}>{t('templates_announcement_modal.title')}</h1>
        <span className={styles.description}>{t('templates_announcement_modal.description')}</span>
        <video autoPlay loop className={styles.thumbnail} src={`${PUBLIC_URL}${videoSrc}`} muted />
      </Modal.Content>
      <Modal.Actions className={styles.actions}>
        <Button primary className="create-scene" onClick={handleGoToScenes}>
          {t('templates_announcement_modal.go_to_scenes')}
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default React.memo(TemplatesAnnouncementModal)