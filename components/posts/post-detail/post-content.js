import PostHeader from './post-header'
import styles from './post-content.module.css'
import ReactMarkdown from 'react-markdown'

export default function PostContent({ postData }) {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`
  return (
    <article className={styles.content}>
      <PostHeader title={postData.title} image={imagePath} />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </article>
  )
}
