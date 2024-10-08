import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
        <Link href='/' className='md:flex-1'>
            <Image
                src="/assets/icons/logo-icon.svg"
                alt="Logo with name"
                width={50}
                height={50}
                className='hidden md:block'
            />
               <Image
                src="/assets/icons/logo-icon.svg"
                alt="Logo"
                width={50}
                height={50}
                className='mr-2 md:hidden'
            />
        </Link>
        {children}
    </div>
  )
}

export default Header