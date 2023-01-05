import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../util/posts-util'

export default function HomePage(props) {
  return (
    <Fragment>
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
