import React from 'react'
import Modal from 'react-modal'
import Spinner from 'react-spinkit'
import font from './assets/css/fonts.css'

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(255, 102, 0, 1)'
  },
  content: {
    background: 'transparent',
    border: 0,
    padding: 0,
    top: 0,
    left: 15,
    right: 15,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const modalInnerStyle = {
  color: 'white',
  fontFamily: 'Montserrat',
  fontStyle: 'bold',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
}

const modalTitleStyle = {
  marginBottom: '1em',
  letterSpacing: '6px',
  textTransform: 'uppercase'
}

const modalSubtitleStyle = {
  marginTop: '1.2em',
  letterSpacing: '0.1px',
  wordWrap: 'wrap',
  fontStyle: 'italic',
  fontFamily: 'EB Garamond'
}

const theme = {
  modal: modalStyle,
  inner: modalInnerStyle,
  title: modalTitleStyle,
  subTitle: modalSubtitleStyle
}

const applyTheme = (name, changes) =>
  ({
    ...theme,
    [name]: { ...theme[name], ...changes }
  }[name])

const LoadingModal = ({ children, title, subTitle, theme, ...props }) => (
  <Modal
    {...props}
    style={applyTheme('modal', theme.modal)}
    ariaHideApp={false}
  >
    <div style={applyTheme('inner', theme.inner)}>
      <h1 style={applyTheme('title', theme.title)}>{title}</h1>
      <Spinner name='line-scale-pulse-out' color='white' />
      <h2 style={applyTheme('subTitle', theme.subTitle)}>{subTitle}</h2>
      {children}
    </div>
  </Modal>
)

LoadingModal.defaultProps = {
  theme
}

export default LoadingModal
