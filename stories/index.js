import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import LoadingModal from '../src/index.jsx'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('LoadingModal', module)
  .add('default theme', () => (
    <LoadingModal title='Loading' subTitle='Sub Title' isOpen={true} />
  ))
  .add('custom theme', () => (
    <LoadingModal
      title='Loading'
      subTitle='Sub Title'
      isOpen={true}
      theme={{
        modal: { overlay: { backgroundColor: 'aqua' } },
        title: {
          fontFamily: 'Roboto-Light',
          fontWeight: 100,
          letterSpacing: '50px',
          paddingLeft: '50px',
          marginBottom: '3.2em'
        },
        subTitle: {
          fontFamily: 'tahoma',
          fontStyle: 'normal',
          marginTop: '3.8em',
          letterSpacing: '30px',
          paddingLeft: '30px',
          textTransform: 'uppercase'
        }
      }}
    />
  ))
