import React, { Component } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import Spinner from 'react-spinkit'
import merge from 'deepmerge'
import { v4 } from 'uuid'
import injectSheet, { ThemeProvider } from 'react-jss'
import withTheme from '@bit/innerdaze.orbis.hoc.theme'
import font from './assets/css/fonts.css'

/**
 * # Status / Loading
 * 
 * MODAL -> CONTENT -> INNER -> [TITLE, SPINNER, SUB TITLE, CHILDREN]
 * 
_________ MODAL _________
|                       |
| ______ CONTENT ______ |
| |                   | |
| | _____ INNER _____ | |
| | |               | | |
| | |     TITLE     | | |
| | |    SPINNER    | | |
| | |   SUB TITLE   | | |
| | |   CHILDREN    | | |
| | |_______________| | |
| |___________________| |
|_______________________|
**/

export const SPINNER_TYPES = [
  'circle',
  'cube-grid',
  'wave',
  'folding-cube',
  'three-bounce',
  'double-bounce',
  'wandering-cubes',
  'chasing-dots',
  'rotating-plane',
  'pulse',
  'wordpress',
  'ball-grid-beat',
  'ball-grid-pulse',
  'line-spin-fade-spinner',
  'ball-spin-fade-loader',
  'ball-pulse-rise',
  'line-scale',
  'line-scale-pulse-out',
  'line-scale-pulse-out-rapid',
  'pacman',
  'line-scale-party',
  'ball-triangle-path',
  'ball-scale-multiple',
  'ball-scale-ripple-multiple',
  'ball-pulse-sync',
  'ball-beat',
  'ball-zig-zag',
  'ball-zig-zag-deflect',
  'ball-clip-rotate-pulse',
  'ball-clip-rotate-multiple',
  'ball-clip-rotate',
  'ball-scale-ripple',
  'triangle-skew-spin'
]

const defaultTheme = {
  outer: {
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
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Montserrat',
    fontStyle: 'bold'
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    letterSpacing: '6px',
    textTransform: 'uppercase'
  },
  subTitle: {
    letterSpacing: '0.1px',
    wordWrap: 'wrap',
    fontStyle: 'italic',
    fontFamily: 'EB Garamond'
  }
}

const convertTheme = ({ outer, content, ...original }) => ({
  ...original,
  modal: { overlay: outer, content }
})

const SpinnerResolver = ({ type, config = {}, theme = {} }) => {
  let WrappedSpinner = Spinner

  if (typeof type === 'string') {
    return (
      <WrappedSpinner
        name={type}
        color={config.color}
        fadeIn={config.fadeIn}
        className={config.className}
        overrideSpinnerClassName={config.overrideSpinnerClassName}
      />
    )
  } else {
    return type
  }
}



const LoadingModal = ({
  children,
  title,
  subTitle,
  spinner,
  spinnerConfig,
  theme,
  ...props
}) => (
  <Modal {...props} style={theme.modal} ariaHideApp={false}>
    <div style={theme.inner}>
      <h1 style={theme.title}>{title}</h1>
      <div>
        <SpinnerResolver
          type={spinner}
          config={spinnerConfig}
          theme={theme.spinner}
        />
      </div>
      <h2 style={theme.subTitle}>{subTitle}</h2>
      {children}
    </div>
  </Modal>
)

LoadingModal.propTypes = {
  spinner: PropTypes.oneOfType([
    PropTypes.oneOf(SPINNER_TYPES),
    PropTypes.element
  ]),
  spinnerConfig: PropTypes.shape({
    fadeIn: PropTypes.oneOf(['none', 'quarter', 'half']),
    className: PropTypes.string,
    overrideSpinnerClassName: PropTypes.string,
    color: PropTypes.string
  })
}

LoadingModal.defaultProps = {
  spinner: 'line-scale-pulse-out',
  spinnerConfig: {
    color: 'white'
  }
}

export default withTheme(LoadingModal, defaultTheme, convertTheme)
