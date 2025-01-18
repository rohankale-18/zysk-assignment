import React from 'react'
import { Card } from './ui/card'

const BlogCard = ({ src, type, title, description, avatar, name, date }) => {
	return (
		<Card className='border-none shadow-none'>
			<img src={src} className='w-full h-60 object-cover' alt="" />
			<div className='flex flex-col gap-1.5 mt-4'>
				<p className='text-xs text-[#E63F3A] font-medium'>{type}</p>
				<div className='flex items-center justify-between'>
					<p className='text-xl font-medium'>{title}</p>
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<p className='text-[#475467] text-sm font-normal'>{description}</p>
				<div className='flex items-center gap-2 mt-4'>
					<img src={avatar} alt="" className='h-10 w-10 object-cover rounded-full' />
					<div className='text-[#475467]'>
						<p className='text-[#101828] font-medium'>{name}</p>
						<p className='text-sm'>{date}</p>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default BlogCard