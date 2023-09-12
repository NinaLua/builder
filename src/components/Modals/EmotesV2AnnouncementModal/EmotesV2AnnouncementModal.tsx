import React from 'react'
import { Button, ModalNavigation } from 'decentraland-ui'
import { ModalProps } from 'decentraland-dapps/dist/providers/ModalProvider/ModalProvider.types'
import Modal from 'decentraland-dapps/dist/containers/Modal'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { getLocalStorage } from 'decentraland-dapps/dist/lib/localStorage'
import { LOCALSTORAGE_EMOTES_V2_ANNOUCEMENT } from 'components/CollectionsPage/CollectionsPage'
import emotesV2Src from 'images/emoteV2.png'
import styles from './EmotesV2AnnouncementModal.module.css'

const localStorage = getLocalStorage()

const EmotesV2AnnouncementModal: React.FC<ModalProps> = ({ name, onClose }) => {
  const handleClose = () => {
    localStorage.setItem(LOCALSTORAGE_EMOTES_V2_ANNOUCEMENT, '1')
    onClose()
  }

  const handleLearnMore = () => {
    handleClose()
    // TODO: Add documentation link
    window.open('https://docs.decentraland.org/', '_blank', 'noopener noreferrer')
  }

  return (
    <Modal className={styles.modal} name={name} onClose={handleClose}>
      <ModalNavigation title={t('emotes_v2_announcement_modal.title')} onClose={handleClose} />
      <Modal.Content className={styles.content}>
        <img src={emotesV2Src} alt={t('emotes_v2_announcement_modal.title')} />
        <span className={styles.description}>
          {t('emotes_v2_announcement_modal.description', {
            br: () => <br />,
            b: (text: string) => <b>{text}</b>
          })}
        </span>
      </Modal.Content>
      <Modal.Actions className={styles.actions}>
        <Button primary onClick={handleLearnMore}>
          {t('emotes_v2_announcement_modal.learn_more')}
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default React.memo(EmotesV2AnnouncementModal)