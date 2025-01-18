import React from 'react'

const Feature = ({icon, title, description}) => {
  return (
	<div className='w-full flex flex-col items-center gap-3'>
		<div className='border p-2 rounded-md shadow'>
			{icon}
		</div>
		<p className='font-semibold text-lg text-[#101828] text-center'>{title}</p>
		<p className='text-[#475467] text-center'>{description}</p>
	</div>
  )
}

export default Feature