import React from 'react'
import crossStatic from '@/assets/cross.png'
import Image from 'next/image'
import { HyperText } from './magicui/hyper-text'

const Navbar = () => {

    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className='flex flex-row justify-between items-center select-none p-4 bg-[#1E1E1E] h-24 w-full text-white px-14 tracking-widest'>
            <div className='font-bold text-3xl'>XenoTech</div>
            <div className='flex font-bold text-2xl hover:underline cursor-pointer' onClick={handleClick}>
                Menu
            </div>

            {open && (
                <div className='absolute z-10 select-none w-full h-full top-0 left-0 text-black bg-white flex flex-col'>
                <div className='flex items-center justify-end px-10 h-16 text-white w-full'>
                    <Image src={crossStatic} alt="Loading..." className="w-12 h-12 object-contain cursor-pointer" onClick={handleClick} />
                </div>
                <div className='flex flex-col justify-center items-center flex-grow'>
                    <ul className='flex flex-col w-full h-full justify-center items-center space-y-4 text-2xl'>
                        <li className='hover:underline cursor-pointer'>
                            <HyperText>Home</HyperText>
                        </li>
                        <li className='hover:underline cursor-pointer'>
                            <HyperText>Our Projects</HyperText>
                        </li>
                        <li className='hover:underline cursor-pointer'>
                            <HyperText>Our Team</HyperText>
                        </li>
                        <li className='hover:underline cursor-pointer'>
                            <HyperText>Contact</HyperText>
                        </li>
                    </ul>
                </div>
            </div>
            )}
        </div>
    )
}

export default Navbar