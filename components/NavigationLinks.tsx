import Link from 'next/link';
import React from 'react'

function NavigationLinks() {
    return (
        <ul className='flex flex-row items-center justify-between gap-10 text-lg font-normal font-sfPro'>
            <Link href='#'>
                <li>Home</li>
            </Link>
            <Link href='#'>
                <li>About</li>
            </Link>
            <Link href='#'>
                <li>Menu</li>
            </Link>
            <Link href='#'>
                <li>Blog</li>
            </Link>
            <Link href='#'>
                <li>Contact</li>
            </Link>
        </ul>
    )
}

export default NavigationLinks;
