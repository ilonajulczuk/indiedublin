import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

const Intro = () => {
  return (
    <section className="flex-col flex mt-16 md:mt-20 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold  md:text-left tracking-tighter leading-tight">
        Indie Hackers Dublin
      </h1>
      <div className='flex flex-col'>
        <h2 className="text-left text-xl md:text-3xl my-5">
          Building a business is hard, but much more fun with the right community!
        </h2>
        <p className='text-left my-2'>
          Welcome to the Ireland's #1 Indie Hackers community.
        </p>
        <h4 className="text-left text-xl my-2 mt-4"> Who are indie hackers?</h4>
        <ul className='list-disc list-inside'>
          <li>People building an online project that can generate revenue
          </li>
          <li>People seeking financial independence, creative freedom, and the ability to work on their own schedule
          </li>
        </ul>
        <p className='text-left my-4'>
          Interested? Join our <a href="https://www.meetup.com/indie-hackers-dublin/" target='_blank' className='underline underline-offset-2 text-blue-600'>meetups</a> and <a href="https://discord.gg/Y4hvQJ2n6t" className='underline underline-offset-2 text-blue-600' target='blank_'>discord</a>!
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
