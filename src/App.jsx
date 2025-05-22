import { useState } from 'react'

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
const [count, setCount] = useState(0);

return (
		<div className='min-h-screen bg-gray-100 flex flex-col'>
			<Header />
			<main className='flex-1 container mx-auto p-4'>
				Hello World!
			</main>
			<Footer />
		</div>
	);
}

export default App
