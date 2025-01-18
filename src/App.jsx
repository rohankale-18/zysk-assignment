import './App.css'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import FreeTrial from './components/FreeTrial'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Sisphysis from './components/Sisphysis'

function App() {
	return (
		<div className='w-full'>
			<Navbar />
			<HeroSection />
			<Features />
			<Sisphysis />
			<FAQ />
			<Blog />
			<FreeTrial />
			<Footer />
		</div>
	)
}

export default App
