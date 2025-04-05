
import Link from 'next/link'
import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
    return (
        <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
                Made by
                <IoMdHeart size={13} className="text-emerald-500" />
                <Link target='_blank' href='https://www.linkedin.com/in/anderson-engel-wirth/' className='text-emerald-400 hover:text-emerald-200'>Anderson Wirth</Link>
            </span>
        </footer>
    )
}