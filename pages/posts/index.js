import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../util/posts-util'

export default function AllPostsPage(props) {
  return <AllPosts posts={props.allPosts} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      allPosts,
    },
  }
}
