import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import Logo from '../svgs/Logo'
import { Card } from './ui/card'
import { TbBrandSupabase } from "react-icons/tb";
import { PiHouseSimple, PiSlackLogoLight, PiStackSimpleBold, PiStackSimpleLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {
	LogOut,
	Settings,
	User,
	Users,
	UserRoundPlus
} from "lucide-react"

const Navbar = () => {
	const [open, setOpen] = React.useState(false)
	return (
		<nav className='border-b w-full flex justify-center'>
			<MaxWidthWrapper>
				<div className='flex justify-between items-center'>
					<div className='w-full flex items-center py-3 gap-3'>
						<Logo />
						<div className='gap-3 hidden sm:flex text-[#475467] font-medium'>
							<a href="" className='h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md'>Home</a>
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Products</NavigationMenuTrigger>
										<NavigationMenuContent>
											<Card className='h-40 w-80 border-none'>

											</Card>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
										<NavigationMenuContent>
											<Card className='h-40 w-80 border-none'>

											</Card>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
							<a href="" className='h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md'>Pricing</a>
						</div>
					</div>
					<button onClick={() => setOpen(!open)} className='p-1 rounded-lg text-[#344054]'>
						{open ?
							<IoMdClose size={25} />
							: <svg className='sm:hidden' width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7H19M1 1H19M1 13H19" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						}
					</button>
					<DropdownMenu>
						<DropdownMenuTrigger className='rounded-full'>
							<img src="/Avatar.png" alt="" className='h-10 w-10 object-cover rounded-full border hidden sm:block' />
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-fit -translate-x-[45%]">
							<DropdownMenuLabel className='flex items-center gap-3'>
								<img src="/Avatar.png" alt="" className='h-10 w-10 object-cover rounded-full' />
								<div className='text-[#475467]'>
									<p className='text-[#101828]'>Olivia Rhye</p>
									<p className='text-sm'>oliviarhye@untitledui.com</p>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<User />
									<span>Profile</span>
									<DropdownMenuShortcut>⌘K→P</DropdownMenuShortcut>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings />
									<span>Settings</span>
									<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<TbBrandSupabase />
									<span>Keyboard shortcuts</span>
									<DropdownMenuShortcut>?</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<PiHouseSimple />
									<span>Company profile</span>
									<DropdownMenuShortcut>⌘K→C</DropdownMenuShortcut>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Users />
									<span>Team</span>
									<DropdownMenuShortcut>⌘K→T</DropdownMenuShortcut>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<UserRoundPlus />
									<span>Invite colleagues</span>
									<DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<PiStackSimpleBold />
								<span>Change log</span>
								<DropdownMenuShortcut>⌘K→C</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<PiSlackLogoLight />
								<span>Slack community</span>
								<DropdownMenuShortcut>⌘K→S</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<BsQuestionCircle />
								<span>Support</span>
								<DropdownMenuShortcut>⌘/</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<IoCubeOutline />
								<span>API</span>
								<DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut />
								<span>Log out</span>
								<DropdownMenuShortcut>¯\_⌘Q</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar