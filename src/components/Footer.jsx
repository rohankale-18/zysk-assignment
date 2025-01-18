import React from 'react'
import FooterElements from './FooterElements'
import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from '@/svgs/Logo'

const Footer = () => {
	return (
		<div className='w-full bg-white flex flex-col items-center'>
			<MaxWidthWrapper>
				<div className='w-full max-w-7xl py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5'>
					<FooterElements
						title={'Product'}
						services={['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']}
					/>
					<FooterElements
						title={'Company'}
						services={['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact']}
					/>
					<FooterElements
						title={'Resources'}
						services={['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support']}
					/>
					<FooterElements
						title={'Use cases'}
						services={[
							'Startups',
							'Enterprise',
							'Government',
							'Saas centre',
							'Marketplaces',
							'Ecommerce'
						]}
					/>
					<FooterElements
						title={'Social'}
						services={['Twitter', 'Linkedin', 'Facebook', 'Github', 'Angelist', 'Dribbble']}
					/>
					<FooterElements
						title={'Legal'}
						services={['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']}
					/>
				</div>
				<div className='w-full border-t py-8 flex flex-col sm:flex-row gap-4 sm:items-center justify-between'>
					<Logo />
					<p className='text-[#667085]'>© 2077 zysktechnologies. All rights reserved.</p>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

export default Footer