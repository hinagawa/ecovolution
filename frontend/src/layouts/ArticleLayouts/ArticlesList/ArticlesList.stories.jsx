import React from 'react'

import templateImg from '../../../assets/images/rat.jpg'

import ArticlesListComponent from './ArticlesList'

const disabled = {
  table: {
    disable: true,
  },
}
export default {
  title: 'Layouts/Article/ArticlesList',
  component: ArticlesListComponent,
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

export function ArticlesList({ ...args }) {
  return <ArticlesListComponent {...args} />
}

ArticlesList.args = {
  src: templateImg,
  text: 'Lorem ipsum',
  headerText: 'Lorem ipsum',
  tagsArray: ['recipe', 'places', 'tutorial'],
}
