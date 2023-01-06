import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../util/posts-util'
import Head from 'next/head'

export default function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>Mike's Blog | All Posts</title>
        <meta name="description" content="A list of all my posts" />
      </Head>
      <AllPosts posts={props.allPosts} />
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      allPosts,
    },
  }
}
