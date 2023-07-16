import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import GreenLink from './green-link'


const Intro = () => {
  return (
    <section className="flex-col flex mt-16 md:mt-20 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold  md:text-left tracking-tighter leading-tight">
        Indie Hackers Dublin ☘️
      </h1>
      <div className='flex flex-col'>
        <h2 className="text-left text-xl md:text-3xl my-5">
          Building a business is hard, but much more fun with the right community!
        </h2>
        <p className='text-left my-2'>
          Welcome to the Ireland's #1 community of independent tech entrepreneurs!
        </p>
        <h4 className="text-left text-xl my-2 mt-4"> Who are indie hackers?</h4>
        <ul className='list-disc list-inside'>
          <li>People building an online project that can generate revenue
          </li>
          <li>People seeking financial independence, creative freedom, and the ability to work on their own schedule
          </li>
        </ul>
        <p className='text-left my-4'>
          Interested? Join our <GreenLink href="https://www.meetup.com/indie-hackers-dublin/">meetups</GreenLink> and <GreenLink href="https://discord.gg/Y4hvQJ2n6t">discord</GreenLink>!
        </p>

      </div>
      <Image
        src={'/assets/index/meetups.png'}
        alt={`Cover Image for`}
        className={cn('w-full my-8 lg:my-20', {
          '': 'stuff',
        })}
        width={1300}
        height={630}
      />
    </section>
  )
}

export default Intro
