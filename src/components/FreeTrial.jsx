import React from 'react'
import { Button } from './ui/button'

const FreeTrial = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center gap-5 py-10 bg-[#F9FAFB]'>
			<h2 className='text-3xl font-medium text-center'>Start your free trial</h2>
			<p className='text-[#475467] text-center px-4 md:px-10'>
				Join over 4,000+ startups already growing with Untitled.
			</p>
			<div className='w-full px-4 flex flex-col-reverse sm:flex-row items-center justify-center gap-3'>
				<Button className='w-full sm:w-fit' variant='outline'>Learn more</Button>
				<Button className='w-full sm:w-fit'>Get started</Button>
			</div>
		</div>
	)
}

export default FreeTrial