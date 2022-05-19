import React from 'react'

import TagsListComponent from './TagsList'

export default {
  title: 'Components/TagsList',
  component: TagsListComponent,
  argTypes: {
    tagsArray: {
      control: {
        type: 'check',
        options: [
          'recipe',
          'tutorial',
          'places',
          'events',
          'lifehack',
        ],
      },
    },
  },
}

export function TagsList({ ...args }) {
  return <TagsListComponent {...args} />
}

TagsList.args = {
  tagsArray: ['recipe', 'tutorial', 'lifehack'],
}
