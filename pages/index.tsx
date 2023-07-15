import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Indie Hackers Dublin</title>
        </Head>
        <Container>
          <Intro />

          <div className="">
              <div className="py-8 lg:py-28 flex flex-col">
                <h4 className="text-left text-5xl md:text-7xl font-bold my-2 mt-4">Sounds interesting?</h4>

                <p className='text-left my-2'>
                  Join our <a href="https://www.meetup.com/indie-hackers-dublin/" target='_blank' className='underline underline-offset-2 text-blue-600'>meetups</a> and <a href="https://discord.gg/Y4hvQJ2n6t" className='underline underline-offset-2 text-blue-600' target='blank_'>discord</a>. Good vibes only!
                </p>
              </div>
          </div>

          <h2 className="mt-12 md:mt-24 mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">From our blog</h2>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
