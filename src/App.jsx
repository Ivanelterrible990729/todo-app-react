import { useState } from 'react'

import Header from './components/layout/Header';
import Home from './pages/Home';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-1 container mx-auto p-4'>
				<Home />
			</main>
		</div>
	);
}

export default App
