import React from 'react'

import PageNavComponent from './PageNav'

export default {
  title: 'Layouts/PageNav',
  component: PageNavComponent,
}

export function PageNav({ ...args }) {
  return <PageNavComponent {...args} />
}

PageNav.args = {
  navArray: ['Users article', 'Liked articles', 'Events'],
}
