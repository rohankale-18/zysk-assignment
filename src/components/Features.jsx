import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Feature from './Feature'

const Features = () => {
	const features = [
		{
			icon: <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5.09436 10.2288C5.03221 9.82823 4.99996 9.41786 4.99996 9C4.99996 4.58172 8.60525 1 13.0526 1C17.4999 1 21.1052 4.58172 21.1052 9C21.1052 9.99807 20.9213 10.9535 20.5852 11.8345C20.5154 12.0175 20.4804 12.109 20.4646 12.1804C20.4489 12.2512 20.4428 12.301 20.4411 12.3735C20.4394 12.4466 20.4493 12.5272 20.4692 12.6883L20.8717 15.9585C20.9153 16.3125 20.9371 16.4895 20.8782 16.6182C20.8266 16.731 20.735 16.8205 20.6211 16.8695C20.4911 16.9254 20.3146 16.8995 19.9617 16.8478L16.7765 16.3809C16.6101 16.3565 16.527 16.3443 16.4512 16.3448C16.3763 16.3452 16.3245 16.3507 16.2511 16.3661C16.177 16.3817 16.0823 16.4172 15.893 16.4881C15.0097 16.819 14.0524 17 13.0526 17C12.6344 17 12.2237 16.9683 11.8227 16.9073M6.63158 21C9.59648 21 12 18.5376 12 15.5C12 12.4624 9.59648 10 6.63158 10C3.66668 10 1.26316 12.4624 1.26316 15.5C1.26316 16.1106 1.36028 16.6979 1.53955 17.2467C1.61533 17.4787 1.65322 17.5947 1.66566 17.6739C1.67864 17.7567 1.68091 17.8031 1.67608 17.8867C1.67145 17.9668 1.65141 18.0573 1.61134 18.2383L1 21L3.9948 20.591C4.15827 20.5687 4.24 20.5575 4.31137 20.558C4.38652 20.5585 4.42641 20.5626 4.50011 20.5773C4.5701 20.5912 4.67416 20.6279 4.88227 20.7014C5.43059 20.8949 6.01911 21 6.63158 21Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			,
			title: 'Share team inboxes',
			description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
		},
		{
			icon: <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11 1L2.09346 11.6879C1.74465 12.1064 1.57024 12.3157 1.56758 12.4925C1.56526 12.6461 1.63373 12.7923 1.75326 12.8889C1.89075 13 2.16318 13 2.70803 13H10L9 21L17.9065 10.3121C18.2554 9.89358 18.4298 9.68429 18.4324 9.50754C18.4347 9.35388 18.3663 9.2077 18.2467 9.11111C18.1093 9 17.8368 9 17.292 9H10L11 1Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			,
			title: 'Deliver instant answers',
			description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
		},
		{
			icon: <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9 2H5.8C4.11984 2 3.27976 2 2.63803 2.32698C2.07354 2.6146 1.6146 3.07354 1.32698 3.63803C1 4.27976 1 5.11984 1 6.8V15.2C1 16.8802 1 17.7202 1.32698 18.362C1.6146 18.9265 2.07354 19.3854 2.63803 19.673C3.27976 20 4.11984 20 5.8 20H14.2C15.8802 20 16.7202 20 17.362 19.673C17.9265 19.3854 18.3854 18.9265 18.673 18.362C19 17.7202 19 16.8802 19 15.2V12M10 7H14V11M13.5 2.5V1M17.4393 3.56066L18.5 2.5M18.5103 7.5H20.0103M1 12.3471C1.65194 12.4478 2.31987 12.5 3 12.5C7.38636 12.5 11.2653 10.3276 13.6197 7" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			,
			title: 'Manage your team with reports',
			description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
		},
		{
			icon: <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.99962 12C7.99962 12 9.31213 13.5 11.4996 13.5C13.6871 13.5 14.9996 12 14.9996 12M14.2496 7H14.2596M8.74962 7H8.75962M11.4996 18C16.194 18 19.9996 14.1944 19.9996 9.5C19.9996 4.80558 16.194 1 11.4996 1C6.8052 1 2.99962 4.80558 2.99962 9.5C2.99962 10.45 3.15547 11.3636 3.443 12.2166C3.55119 12.5376 3.60529 12.6981 3.61505 12.8214C3.62469 12.9432 3.6174 13.0286 3.58728 13.1469C3.55677 13.2668 3.48942 13.3915 3.35472 13.6408L1.71906 16.6684C1.48575 17.1002 1.36909 17.3161 1.3952 17.4828C1.41794 17.6279 1.50337 17.7557 1.6288 17.8322C1.7728 17.9201 2.01692 17.8948 2.50517 17.8444L7.62619 17.315C7.78127 17.299 7.85881 17.291 7.92949 17.2937C7.999 17.2963 8.04807 17.3029 8.11586 17.3185C8.18478 17.3344 8.27145 17.3678 8.44478 17.4345C9.39283 17.7998 10.4228 18 11.4996 18ZM14.7496 7C14.7496 7.27614 14.5258 7.5 14.2496 7.5C13.9735 7.5 13.7496 7.27614 13.7496 7C13.7496 6.72386 13.9735 6.5 14.2496 6.5C14.5258 6.5 14.7496 6.72386 14.7496 7ZM9.24962 7C9.24962 7.27614 9.02577 7.5 8.74962 7.5C8.47348 7.5 8.24962 7.27614 8.24962 7C8.24962 6.72386 8.47348 6.5 8.74962 6.5C9.02577 6.5 9.24962 6.72386 9.24962 7Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			,
			title: 'Connect with customers',
			description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
		},
		{
			icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7 7V4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7H7ZM7 7V13M7 7H13M7 13V16C7 17.6569 5.65685 19 4 19C2.34315 19 1 17.6569 1 16C1 14.3431 2.34315 13 4 13H7ZM7 13H13M13 13H16C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16V13ZM13 13V7M13 7V4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4C19 5.65685 17.6569 7 16 7H13Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			,
			title: 'Connect the tools you already use',
			description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
		},
		{
			icon: <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M19.9996 9.5C19.9996 14.1944 16.194 18 11.4996 18C10.4228 18 9.39283 17.7998 8.44478 17.4345C8.27145 17.3678 8.18478 17.3344 8.11586 17.3185C8.04807 17.3029 7.999 17.2963 7.92949 17.2937C7.85881 17.291 7.78127 17.299 7.62619 17.315L2.50517 17.8444C2.01692 17.8948 1.7728 17.9201 1.6288 17.8322C1.50337 17.7557 1.41794 17.6279 1.3952 17.4828C1.36909 17.3161 1.48575 17.1002 1.71906 16.6684L3.35472 13.6408C3.48942 13.3915 3.55677 13.2668 3.58728 13.1469C3.6174 13.0286 3.62469 12.9432 3.61505 12.8214C3.60529 12.6981 3.55119 12.5376 3.443 12.2166C3.15547 11.3636 2.99962 10.45 2.99962 9.5C2.99962 4.80558 6.8052 1 11.4996 1C16.194 1 19.9996 4.80558 19.9996 9.5Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path fillRule="evenodd" clipRule="evenodd" d="M11.4965 6.94925C10.5968 5.9104 9.09651 5.63095 7.96924 6.58223C6.84196 7.5335 6.68326 9.12399 7.56851 10.2491C8.11696 10.9461 9.49351 12.2191 10.4616 13.087C10.8172 13.4057 10.995 13.5651 11.2084 13.6293C11.3914 13.6844 11.6017 13.6844 11.7847 13.6293C11.9981 13.5651 12.1759 13.4057 12.5315 13.087C13.4996 12.2191 14.8761 10.9461 15.4246 10.2491C16.3098 9.12399 16.1705 7.5235 15.0238 6.58223C13.8772 5.64096 12.3963 5.9104 11.4965 6.94925Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			,
			title: 'Our people make the difference',
			description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
		}
	]
	return (
		<div className='w-full flex flex-col items-center border-t'>
			<MaxWidthWrapper className='flex flex-col items-center justify-center'>
				<div className='w-full flex flex-col items-center justify-center gap-6 my-14'>
					<p className='text-sm text-[#E63F3A] font-medium'>Features</p>
					<h2 className='text-3xl font-medium text-center px-2'>Analytics that feels like it’s from the future</h2>
					<p className='text-[#475467] font-medium text-center md:px-10 max-w-[700px]'>
						Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
					</p>
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
						{features.map((feature, index) => <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />)}
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

export default Features