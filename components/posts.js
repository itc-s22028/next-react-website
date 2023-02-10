import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/legacy/image'

export default function Posts ({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=''
                layout='responsive'
                width={eyecatch.width}
                height={eyecatch.height}
                placeholder='blur'
                blurDataURL={eyecatch.blurDataURL}
                blurDataUrl={eyecatch.blurDataUrl}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
