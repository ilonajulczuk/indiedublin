import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-[#0080006e] border-t border-green-300">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-lg lg:text-lg tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built and hosted by <a href="https://tinystruggles.com/about" target='blank_' className='underline underline-offset-2 text-blue-900'>Justyna Ilczuk</a>.
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
