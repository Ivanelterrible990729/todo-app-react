import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

export default function Header() {
    return (
        <>
            <header class="py-5 bg-gray-700 text-white text-left">
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="animate-pulse" alt="React logo" />
                </a>
                Sticky Header and Footer with Tailwind
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </header>
        </>
    );
}