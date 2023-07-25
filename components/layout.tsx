import Footer from './footer'
import Meta from './meta'

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})
 

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className={"min-h-screen text-xl " + roboto.className}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
