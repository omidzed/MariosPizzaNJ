import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export function Footer() {
	return (
		<div className='fixed text-white text-sm lg:text-lg bg-secondary bottom-0 w-full flex flex-row justify-between p-4 h-[10%]'>
			<div className='w-1/3 lg:ml-4'>
				<p className='hidden lg:font-bold'>Hours:</p>
				<p>Sunday: 11a-8p</p>
				<p>Monday-Saturday: 11a-10p</p>
			</div>
			<div className='lg:pl-4 w-1/3 text-sm lg:text-lg cursor-pointer'>
				<p className='hidden md:font-bold'>Location:</p>
				<p>132 W Pleasant Ave Maywood, NJ 07607</p>
			</div>
			<div className='hidden lg:block lg:w-1/4 lg:border-black lg:border-2'>
				<p>Map</p>
			</div>
			<div className='flex flew-row gap-2 lg:gap-3 items-center w-1/4 justify-end lg:mr-4'>
				<a
					href='https://www.facebook.com/mariospizzanj'
					target='_blank'>
					<FaFacebook
						className='hover:scale-125 hover:ease-in duration-150 h-6 w-6 lg:h-[35px] lg:w-[35px]'
						size={25}
					/>
				</a>
				<a
					href='https://www.instagram.com/marios_pizzanj/'
					target='_blank'>
					<FaInstagram
						className='hover:scale-125 hover:ease-in duration-150 h-6 w-6 lg:h-[35px] lg:w-[35px]'
						size={25}
					/>
				</a>
				<a
					href='https://www.linkedin.com/company/mario-s-pizzeria-restaurant/'
					target='_blank'>
					<FaLinkedin
						className='hover:scale-125 hover:ease-in duration-150 h-6 w-6 lg:h-[35px] lg:w-[35px]'
						size={25}
					/>
				</a>
			</div>
		</div>
	);
}
