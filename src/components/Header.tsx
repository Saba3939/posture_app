import React from "react";

const Header = () => {
	return (
		<div className=' flex w-full bg-gray-400 items-center justify-between px-8 h-16'>
			<h1 className='text-2xl font-bold'>POSTURE APP</h1>
			<nav>
				<ul className='flex space-x-2'>
					<li>
						<a href='#' className='hover:text-white'>
							Home
						</a>
					</li>
					<li>
						<a href='#' className='hover:text-white'>
							Menu
						</a>
					</li>
					<li>
						<a href='#' className='hover:text-white'>
							Login
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
