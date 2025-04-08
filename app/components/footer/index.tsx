import { IoMdHeart } from 'react-icons/io'
import { Link } from '../link'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made with
        <IoMdHeart size={13} className="text-emerald-500" />
        by
        <Link
          href="https://www.linkedin.com/in/anderson-engel-wirth/"
          target="_blank"
          className="font-medium text-emerald-600"
        >
          Anderson Wirth
        </Link>
      </span>
    </footer>
  )
}
