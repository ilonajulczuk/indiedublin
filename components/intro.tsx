import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import GreenLink from './green-link'


const Intro = () => {
  return (
    <section className="flex-col flex mt-16 md:mt-20 mb-4 md:mb-6">
      <h1 className="text-4xl md:text-8xl font-bold  md:text-left tracking-tighter leading-tight">
        Indie Hackers Dublin ☘️
      </h1>
      <div className='flex flex-col gap-2'>
        <h2 className="text-left text-2xl md:text-3xl mt-5">
          Ireland's #1 community of independent tech entrepreneurs!
        </h2>

        <Image
          src={'/assets/index/meetups.png'}
          alt={`Cover Image for`}
          className={cn('w-full my-8 lg:my-12', {
            '': '',
          })}
          width={1300}
          height={430}
        />
        
      </div>

    </section>
  )
}

export default Intro
