import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="py-5 px-10 bg-gray-700 text-center text-white">
                <span className="flex text-sm">
                    <span>
                        Developed by
                    </span>

                    <div className="flex flex-row items-center">
                        <FaGithub className="w-12 h-6" />
                        <a href="https://github.com/Ivanelterrible990729" target="_blank" className="underline text-blue-500 hover:text-blue-300">Ivanelterrible990729</a>
                    </div>

                    <div className="hidden md:flex flex-row items-center border-l ml-5 pl-5">
                        <FaLinkedin className="w-12 h-6" />
                        <a href="https://www.linkedin.com/in/ivan-alvarez-chavez/" target="_blank" className="underline text-blue-500 hover:text-blue-300">Iván Alvarez Chávez</a>
                    </div>

                    <div className="hidden lg:flex flex-row items-center border-l ml-5 pl-5">
                        <FaEnvelope className="w-12 h-6" />
                        <a href="mailto:ivanalejandro290799@gmail.com" className="underline text-blue-500 hover:text-blue-300">ivanalejandro290799@gmail.com</a>
                    </div>
                </span>
            </footer>
        </>
    );
}