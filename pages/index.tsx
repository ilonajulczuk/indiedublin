import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import GreenLink from '../components/green-link'
import Image from 'next/image'


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

              <div className='flex flex-col lg:flex-row lg:items-center'>
                <p className='text-left my-2'>
                  Join our casual coffee <GreenLink href="https://www.meetup.com/indie-hackers-dublin/">meetups</GreenLink> and <GreenLink href="https://discord.gg/Y4hvQJ2n6t">discord</GreenLink>. Good vibes only!
                </p>
                <Image
                  src='/assets/coffee.png'
                  alt={`Coffee background image`}
                  objectFit='cover'
                  width={300}
                  height={300}
                  style={{ 'zIndex': -10 }}
                />
              </div>

            </div>
          </div>

          <div className="py-4 flex flex-col relative">

          </div>
          <div className='flex gap-2 lg:gap-6 items-center'>
          <Image
            className='order-3 lg:order-1'
              src='/assets/keyboard.png'
              alt={`keyboard background image`}
              // layout='fill'
              objectFit='cover'
              width={200}
              height={100}
            />
            <h2 className="order-2 my-12 md:my-24 mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">From our blog</h2>
           
          </div>
          <div className="py-4 flex flex-col relative">

          </div>

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
