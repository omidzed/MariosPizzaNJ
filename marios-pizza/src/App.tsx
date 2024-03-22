//import { MenuView } from './components/MenuView';
import { Navbar } from './components/NavBar';
//import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import { ContactUs } from './components/ContactUs';

function App() {
	return (
		<div className='bg-primary h-screen'>
			<div>
				<Navbar />
			</div>
			<div className='mt-6'>
				{/* <Categories range='categories' /> */}
			</div>
			<div className='bg-primary'>
				{/* <MenuView range='Pizza' /> */}
				{/* <MenuView range="Soup" /> */}
			</div>
			<ContactUs />
				<Footer />
		</div>
	);
}

export default App;
