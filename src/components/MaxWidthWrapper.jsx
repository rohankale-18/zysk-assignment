import React from 'react'

const MaxWidthWrapper = ({ children }) => {
	return (
		<div className="w-full max-w-7xl px-4 md:px-6">
			{children}
		</div>
	)
}

export default MaxWidthWrapper
