import React from 'react'

import templateImg from '../../../assets/images/rat.jpg'

import ShortArticleComponent from './ShortArticle'

const disabled = {
  table: {
    disable: true,
  },
}
export default {
  title: 'Layouts/Article/ShortArticle',
  component: ShortArticleComponent,
  argTypes: {
    src: disabled,
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

export function ShortArticle({ ...args }) {
  return <ShortArticleComponent {...args} />
}

ShortArticle.args = {
  src: templateImg,
  text: 'Lorem ipsum',
  headerText: 'Lorem ipsum',
  tagsArray: ['recipe', 'places', 'tutorial'],
}
