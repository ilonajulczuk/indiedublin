
export default function GreenLink({ href, children }) {
    return <a href={href} target='_blank' className='underline underline-offset-2 text-green-700'>{children}</a>;
}