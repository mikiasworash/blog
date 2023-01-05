import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

export default function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting started with NextJs',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJs in a react framework production - it make building react app and sites a breeze and ships with SSR.',
      date: '2023-01-05',
    },
    {
      slug: 'getting-started-with-nextjs2',
      title: 'Getting started with NextJs',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJs in a react framework production - it make building react app and sites a breeze and ships with SSR.',
      date: '2023-01-05',
    },
    {
      slug: 'getting-started-with-nextjs3',
      title: 'Getting started with NextJs',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJs in a react framework production - it make building react app and sites a breeze and ships with SSR.',
      date: '2023-01-05',
    },
    {
      slug: 'getting-started-with-nextjs4',
      title: 'Getting started with NextJs',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJs in a react framework production - it make building react app and sites a breeze and ships with SSR.',
      date: '2023-01-05',
    },
  ]
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}
