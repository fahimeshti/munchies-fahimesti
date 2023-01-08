import React from 'react'

type Props = {
    children?: React.ReactNode;
    onclick?: () => void;
    type?: 'submit' | 'button';
    disabled?: boolean;
};
const Button = ({ children, onclick, type, disabled }: Props): JSX.Element => {
    return (
        <button
            disabled={disabled}
            onClick={onclick}
            type={type}
            className='w-full py-2.5 bg-green text-white mt-4 rounded-3xl border-2 border-green hover:text-green hover:bg-transparent transition duration-150 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-500 disabled:border-gray-400'
        >
            {children}
        </button>
    )
}

export default Button;
