import React from 'react'

const Heading = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <h2 className='text-2xl font-medium'>{children}</h2>
    )
}

export default Heading;
