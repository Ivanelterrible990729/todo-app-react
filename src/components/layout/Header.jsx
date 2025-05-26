import { FaCheckSquare, FaGithub } from 'react-icons/fa';

export default function Header() {
    return (
        <>
            <header className="px-10 py-5 bg-gray-700 text-white text-left shadow-md">
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-min-full flex flex-row items-center'>
                        <FaCheckSquare className='h-6 w-6 mr-2' />
                        <span className='text-base font-medium'>
                            To-Do App with React!
                        </span>
                    </div>

                    <span className="flex ml-auto text-base">
                        <span className='hidden sm:flex'>
                            Developed by
                        </span>

                        <div className="flex flex-row items-center">
                            <FaGithub className="w-12 h-6" />
                            <a href="https://github.com/Ivanelterrible990729" target="_blank" className="underline text-blue-500 hover:text-blue-300">Ivanelterrible990729</a>
                        </div>
                    </span>
                </div>
            </header>
        </>
    );
}