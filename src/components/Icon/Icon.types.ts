export type IconName =
  | 'add-active'
  | 'add'
  | 'alert'
  | 'alert-pending'
  | 'alert-warning'
  | 'arrow-down'
  | 'arrow-key-down'
  | 'arrow-key-left'
  | 'arrow-key-right'
  | 'arrow-key-up'
  | 'arrow-up'
  | 'atlas-zoom-in'
  | 'atlas-zoom-out'
  | 'camera'
  | 'cat'
  | 'center-camera'
  | 'chevron-right'
  | 'circle'
  | 'cylinder'
  | 'close'
  | 'cloud-upload'
  | 'cube'
  | 'delete'
  | 'delete-circle'
  | 'dress'
  | 'duplicate'
  | 'edit-active'
  | 'edit'
  | 'ellipsis'
  | 'emote'
  | 'export'
  | 'facebook'
  | 'geometries'
  | 'grid-active'
  | 'grid'
  | 'heart-full'
  | 'heart'
  | 'import'
  | 'landscape'
  | 'layout'
  | 'list-active'
  | 'list'
  | 'locate-land'
  | 'minus'
  | 'modal-back'
  | 'modal-close'
  | 'move-active'
  | 'move'
  | 'pin'
  | 'pin-active'
  | 'play'
  | 'plus'
  | 'preview-active'
  | 'preview'
  | 'profile'
  | 'right-round-arrow'
  | 'rotate-control'
  | 'rotate-active'
  | 'rotate-left'
  | 'rotate-right'
  | 'rotate'
  | 'scale'
  | 'scene-object'
  | 'scene-parcel'
  | 'share'
  | 'shortcuts'
  | 'sidebar-active'
  | 'sidebar'
  | 'smart'
  | 'table'
  | 'table-active'
  | 'textures'
  | 'tools'
  | 'triangles'
  | 'twitter'
  | 'undo'
  | 'view'
  | 'wearable'
  | 'zoom-in'
  | 'zoom-out'

export type DefaultProps = {
  isActive: boolean
  className: string
}

export type Props = DefaultProps & {
  name: IconName
  onClick?: (event: React.MouseEvent<HTMLElement>) => any
}

export type MapStateProps = Pick<Props, 'name'>
