import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'
import { FaArrowRight, FaRegCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
	return (
		<div className='w-full flex flex-col items-center'>
			<MaxWidthWrapper className='flex flex-col items-center justify-center'>
				<div className='w-full flex flex-col items-center justify-center gap-6 mt-20'>
					<div className='text-nowrap text-sm md:text-base bg-[#E63F3A] bg-opacity-[0.1] flex items-center p-1 border-2 rounded-full border-[#E63F3A]/30 w-fit gap-2 text-[#E63F3A] font-medium'>
						<div className='bg-white border px-2 border-[#E63F3A]/50 rounded-full'>
							<p>New feature</p>
						</div>
						<p>Check out the team dashboard</p>
						<FaArrowRight opacity={0.6} className='mr-1' />
					</div>
					<h1 className='text-4xl md:text-5xl font-semibold text-center'>Beautiful analytics to grow smarter</h1>
					<p className='text-[#475467] text-center md:px-10 max-w-[700px]'>
						Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
					</p>
					<div className='w-full flex flex-col-reverse sm:flex-row items-center justify-center gap-4 py-5'>
						<Button variant='outline' className='text-[#344054] border-2 rounded-full flex justify-center py-3 items-center gap-2 w-full sm:w-fit'>
							<FaRegCirclePlay />
							<p className='flex items-center text-center leading-none text-base'>
								Demo
							</p>
						</Button>
						<Button className='rounded-full leading-none text-base w-full sm:w-fit'>
							Sign up
						</Button>
					</div>
					<div className='rounded-2xl max-h-[400px] overflow-hidden border-4 border-black w-full max-w-[1000px]'>
						<img src="/HeroImg.png" className='w-full object-cover object-top rounded-xl' alt="" />
					</div>
					<div className='flex flex-col items-center space-y-5 mt-5 mb-14'>
						<p className='text-[#475467] font-medium'>
						Join 4,000+ companies already growing
						</p>
						<div className='w-full flex flex-wrap gap-8 items-center justify-center'>
							<div className='flex gap-8 items-center justify-center'>
							<img src="companylogo1.png" alt="" className='h-10' />
							<img src="companylogo2.png" alt="" className='h-10' />
							</div>
							<div className='flex gap-8 items-center justify-center'>
							<img src="companylogo3.png" alt="" className='h-10' />
							<img src="companylogo4.png" alt="" className='h-10' />
							</div>
							<div className='flex gap-8 items-center justify-center'>
							<img src="companylogo5.png" alt="" className='h-10' />
							<img src="companylogo6.png" alt="" className='h-10' />
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

export default HeroSection