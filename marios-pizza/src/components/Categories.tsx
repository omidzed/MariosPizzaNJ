import { useEffect, useState } from 'react';

type Category = {
	name: string;
	imageUrl: string;
};

type CategoriesProps = {
	range: string;
};

export function Categories({ range }: CategoriesProps) {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const sheetId = '13cjuES8Db3U6x9VtAdryAzLu2IkCYrMrBy1t-rCGpJs';
			const apiKey = 'AIzaSyDKOPJtMHAG_g7wZQPonXdqcAd5DlUVAtM';
			const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range + '!A2:C'}?key=${apiKey}`;

			const response = await fetch(url);
			const data = await response.json();
			const fetchedCategories: Category[] = data.values.map((row: string[]) => ({
				name: row[0],
				imageUrl: row[2],
			}));
			setCategories(fetchedCategories);
			console.log(data);
		};

		fetchCategories();
	}, [range]);

	return (
		<div className='flex justify-center items-center flex-wrap cursor-pointer my-6'>
			{categories.map((category, index) => (
				<div
					className='m-4 flex flex-col items-center'
					key={index}
					style={{ width: '100px' }}>
					<div className='rounded-full w-24 h-24 overflow-hidden'>
						<img
							className='w-full h-full object-cover'
							src={category.imageUrl}
							alt={category.name}
						/>
					</div>
					<p
						className='text-center mt-2 h-2'
						style={{ overflowWrap: 'break-word' }}>
						{category.name}
					</p>
				</div>
			))}
		</div>
	);
}