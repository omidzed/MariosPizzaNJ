export function Navbar() {
	return (
		<div className='bg-secondary flex flex-row justify-between'>
			<div className='ml-10'>
				<img
					className='w-20 h-20'
					src='images/marios-pizzaman.png'
					alt='marios-pizzaman'
				/>
			</div>
			<div className='flex flex-nowrap mr-10'>
				<div className='flex flex-row  m-4 p-4'>
					<button className='text-white pr-4'>Home</button>
					<button className='text-white pr-4'>About Us</button>
					<button className='text-white pr-4'>Our Menu</button>
					<button className='text-white pr-4'>Contact Us</button>
				</div>
				<button className='bg-[#B91C1C] text-white h-10 w-28 rounded-lg mr-4 mt-6 shadow-md'>Order Now!</button>
			</div>
		</div>
	);
}
