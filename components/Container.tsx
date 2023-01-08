import React from 'react'

const Container = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <div className='w-full max-w-6xl px-8 xl:p-0'>
            {children}
        </div>
    )
}

export default Container;
