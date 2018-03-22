/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { setAddon, addDecorator, configure } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs'

function loadStories() {
  require('../stories')
}

setAddon(JSXAddon)

addDecorator(withKnobs)

configure(loadStories, module)
