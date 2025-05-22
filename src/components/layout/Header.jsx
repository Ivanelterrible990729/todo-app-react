import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwind.svg'
import { FaCheckSquare } from 'react-icons/fa';

export default function Header() {
    return (
        <>
            <header className="px-10 py-5 bg-gray-700 text-white text-left shadow-md">
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-min-full flex flex-row items-center'>
                        <FaCheckSquare className='animate-pulse h-8 w-8 mr-2' />
                        <span className='text-2xl font-medium'>
                            To-Do App with React!
                        </span>
                    </div>

                    <div className='hidden sm:flex ml-auto flex-row items-center gap-x-4'>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} alt="React logo" />
                        </a>
                        <a href="https://vite.dev" target="_blank">
                            <img src={viteLogo} alt="Vite logo" />
                        </a>
                        <a href="https://tailwindcss.com" target="_blank">
                            <img src={tailwindLogo} className='w-12 icon' alt="Vite logo" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}