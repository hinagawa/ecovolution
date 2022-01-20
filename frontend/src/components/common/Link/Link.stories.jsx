import React from 'react'

import LinkComponent from './Link'

const disabled = {
  table: {
    disable: true,
  },
}

export default {
  title: 'Components/Link',
  component: LinkComponent,
  argTypes: {
    value: disabled,
    id: disabled,
    className: disabled,
    onChange: disabled,
  },
}

export function Link({ ...args }) {
  return <LinkComponent {...args} />
}

Link.args = {
  text: 'Some link',
  href: '/',
}
