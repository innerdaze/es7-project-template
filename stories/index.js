import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { text, object, select } from '@storybook/addon-knobs/react'

import LoadingModal, { SPINNER_TYPES } from '../src/index.jsx'

const getCommonConfig = () => ({
  title: text('Title', 'Loading'),
  subTitle: text('Sub Title', 'More info'),
  isOpen: true
})

storiesOf('LoadingModal', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addWithJSX('simple', () => <LoadingModal {...getCommonConfig()} />, {
    displayName: 'LoadingModal'
  })
  .addWithJSX(
    'custom theme',
    () => (
      <LoadingModal
        {...getCommonConfig()}
        spinnerConfig={object('Spinner Config', {
          color: '#ef32d9'
        })}
        theme={object('Theme', {
          outer: { backgroundColor: '#89fffd' },
          content: { color: '#ef32d9' },
          inner: {
            height: '100%',
            justifyContent: 'space-evenly'
          },
          title: {
            fontFamily: 'Roboto-Light',
            fontWeight: 100,
            letterSpacing: '50px',
            paddingLeft: '50px'
          },
          subTitle: {
            fontFamily: 'tahoma',
            fontStyle: 'normal',
            letterSpacing: '30px',
            paddingLeft: '30px',
            textTransform: 'uppercase'
          }
        })}
      />
    ),
    { displayName: 'LoadingModal' }
  )
  .addWithJSX(
    'alternative spinner',
    () => (
      <LoadingModal
        {...getCommonConfig()}
        spinner={select('Spinner', SPINNER_TYPES, 'folding-cube')}
        spinnerConfig={object('Spinner Config', {
          color: '#BFE6BA',
          fadeIn: 'half'
        })}
        theme={object('Theme', {
          outer: { backgroundColor: '#D3959B' }
        })}
      />
    ),
    { displayName: 'LoadingModal' }
  )
