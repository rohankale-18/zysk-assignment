import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
  } from "./ui/accordion"
import { Button } from './ui/button'

const FAQ = () => {
	const faqs = [
		{
			question: 'Is there a free trial available?',
			answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
		},
		{
			question: 'Is there a free trial available?',
			answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
		},
		{
			question: 'Can I change my plan later?',
			answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
		},
		{
			question: 'What is your cancellation policy?',
			answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
		},
		{
			question: 'How does billing work?',
			answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
		},
		{
			question: 'How do I change my account email?',
			answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
		}
	]
	return (
		<div className='w-full flex flex-col items-center border-t'>
			<MaxWidthWrapper className='flex flex-col items-center justify-center'>
				<div className='w-full flex flex-col items-center justify-center gap-6 my-14'>
					<h2 className='text-3xl font-medium text-center'>Frequently asked questions</h2>
					<p className='text-[#475467] font-medium text-center md:px-10 max-w-[700px]'>
						Everything you need to know about the product and billing.
					</p>	
					<Accordion type="single" collapsible className="w-full md:w-[80%]">
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index + 1}`}
							>
								<AccordionTrigger className="text-left text-[#101828] text-base pt-8 pb-6 font-medium">{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-left font-medium text-[#475467] text-sm pb-6">{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
					<div className='w-full bg-[#F9FAFB] flex flex-col justify-center items-center py-10 my-5 rounded-3xl'>
						<div className='relative h-14'>
							<img src="/Avatar3.png" alt="" className='rounded-full border border-white absolute top-0 -translate-x-1/2 translate-y-1 h-14 w-14' />
							<img src="/Avatar4.png" alt="" className='rounded-full border border-white absolute top-0 translate-x-1/2 translate-y-1 h-14 w-14' />
							<img src="/Avatar.png" alt="" className='relative rounded-full border border-white h-14 w-14' />
						</div>
						<p className='text-lg mt-6 mb-1 text-[#101828] font-medium'>Still have questions?</p>
						<p className='text-[#475467] mb-6 text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
						<Button>Get in touch</Button>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

export default FAQ