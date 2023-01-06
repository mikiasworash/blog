import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../util/posts-util'
import Head from 'next/head'

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Mike's Blog</title>
        <meta
          name="description"
          content="This a website where I blog about web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      featuredPosts,
    },
  }
}
