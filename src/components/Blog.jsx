import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'
import BlogCard from './BlogCard'

const Blog = () => {
	const blogs = [
		{
			src:'/Blog1.png',
			type:'Design',
			title:'UX review presentations',
			description:'How do you create compelling presentations that wow your colleagues and impress your managers?',
			avatar:'/Avatar.png',
			name:'Olivia Rhye',
			date:'20 Jan 2024'
		},
		{
			src:'/Blog2.png',
			type:'Product',
			title:'Migrating to Linear 101',
			description:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
			avatar:'/Avatar5.png',
			name:'Phoenix Baker',
			date:'19 Jan 2024'
		},
		{
			src:'/Blog3.png',
			type:'Software Engineering',
			title:'Building your API stack',
			description:'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
			avatar:'/Avatar6.png',
			name:'Lana Steiner',
			date:'18 Jan 2024'
		}
	]
	return (
		<div className='w-full flex justify-center border-t py-16'>
			<MaxWidthWrapper>
				<div className='w-full flex justify-between'>
					<div className='flex flex-col gap-2.5'>
						<p className='text-sm text-[#E63F3A] font-medium'>Our blog</p>
						<p className='text-3xl text-[#101828] font-semibold'>Latest blog posts</p>
						<p className='text-[#475467]'>Tool and strategies modern teams need to help their companies grow.</p>
					</div>
					<Button className='hidden sm:block'>View all posts</Button>
				</div>
				<div className='grid sm:grid-cols-3 gap-6 mt-12'>
					{blogs.map((blog, index) => <BlogCard key={index} {...blog} />)}
				</div>
					<Button className='sm:hidden w-full mt-10'>View all posts</Button>
			</MaxWidthWrapper>
		</div>
	)
}

export default Blog