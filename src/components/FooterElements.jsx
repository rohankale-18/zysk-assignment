import React from 'react'

const FooterElements = ({ title, services }) => {
	return (
		<div className='flex flex-col gap-3'>
			<p className='text-[#667085] text-opacity-65 mb-3 font-semibold text-sm'>{title}</p>
			{services.map((service, index) => <span className='text-[#475467] font-semibold' key={index}>{service}</span>)}
		</div>
	)
}

export default FooterElements