import React from 'react'

import LinkComponent from './Link'

export default {
  title: 'Components/Link',
  component: LinkComponent,
}

export function Link({ ...args }) {
  return <LinkComponent {...args} />
}

Link.args = {
  text: 'Link text',
  href: '/',
}
