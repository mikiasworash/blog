import PostHeader from './post-header'
import styles from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function PostContent({ postData }) {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${postData.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   )
    // },

    p(paragraph) {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${postData.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { className, children } = code
      const language = className.split('-')[1] // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      )
    },
  }

  return (
    <article className={styles.content}>
      <PostHeader title={postData.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {postData.content}
      </ReactMarkdown>
    </article>
  )
}
