import React from 'react'
import { LuBook, LuCirclePlay } from "react-icons/lu";
import { HiOutlineSparkles } from "react-icons/hi";
import { Card } from './ui/card';

const MenuCard = () => {
	const items = [
		{
			icon: <LuBook size={25} />,
			title: 'Blogs',
			description: 'The latest industry news, updates and info'
		},
		{
			icon: <HiOutlineSparkles size={25} />,
			title: 'Customer stories',
			description: 'Learn how our customers are making big changes.'
		},
		{
			icon: <LuCirclePlay size={25} />,
			title: 'Video tutorials',
			description: 'Get up and running on new features and techniques.'
		}
	]
	return (
		<Card className='w-[650px] border-none grid grid-cols-2'>
			<div className='flex flex-col w-full h-full p-4 gap-3'>
				{items.map((item, index) => (
					<CardItem key={index} icon={item.icon} title={item.title} description={item.description} />
				))}
			</div>
			<div className='w-full h-full bg-[#F9FAFB] p-6 flex flex-col justify-center'>
				<img src="/MenuImg.jpeg" className='rounded-xl' alt="" />
				<p className='text-[#101828] font-semibold mt-4'>We've just released an update!</p>
				<p className='text-[#475467]/60 my-2'>Checkout the all new dashboard view. Page now loads faster.</p>
				<div className='flex gap-2'>
					<p className='text-[#475467]'>Dismiss</p>
					<p className='text-[#9E77ED]'>Changelog</p>
				</div>
			</div>
		</Card>
	)
}

export default MenuCard

const CardItem = ({ icon, title, description }) => {
	return (
		<div className='flex gap-x-3 p-4 rounded-2xl hover:bg-[#F9FAFB] cursor-pointer'>
			<div className='text-[#9E77ED]'>{icon}</div>
			<div className='flex flex-col'>
				<p className='text-[#101828] font-semibold leading-tight'>{title}</p>
				<p className='text-[#475467]'>{description}</p>
			</div>
		</div>
	);
}