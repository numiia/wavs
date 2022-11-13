import Link from 'next/link';

export default function Root() {
	return (
		<section className="flex items-center justify-center w-screen h-screen bg-gray-50">
			<div className="w-full max-w-md overflow-hidden border border-gray-100 shadow-xl rounded-2xl">
				<div className="flex flex-col items-center justify-center px-4 py-6 pt-8 space-y-3 text-center bg-white border-b border-gray-200 sm:px-16">
					<Link href="/">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-10 h-10 rounded-full blur-0 grayscale-0"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13 3H21V11H13V3ZM15 5H19V9H15V5Z"
								fill="currentColor"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M17 21V13H11V7H3V21H17ZM9 9H5V13H9V9ZM5 19L5 15H9V19H5ZM11 19V15H15V19H11Z"
								fill="currentColor"
							/>
						</svg>
					</Link>

					<h3 className="text-xl font-semibold leading-[1.1]">Sign Up</h3>
					<p className="text-sm leading-normal text-slate-700">
						Find out what's going on in the world.
					</p>
				</div>

				<form className="flex flex-col px-4 py-8 space-y-4 bg-gray-50 sm:px-16">
					<div>
						<label htmlFor="email" className="block text-xs text-gray-600">
							EMAIL ADDRESS
						</label>
						<input
							id="email"
							type="email"
							placeholder="account@wavs.co"
							className="block w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-black focus:outline-none focus:ring-black sm:text-sm"
						/>
					</div>
					<button className="flex items-center justify-center w-full h-10 text-sm text-white transition-all bg-black border border-black rounded-md hover:bg-white hover:text-black focus:outline-none">
						<p>Send magic link</p>
					</button>
					<p className="text-sm text-center text-gray-600">
						Already registered?
						<Link className="ml-1 font-semibold text-gray-800" href="/signin">
							Sign in
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}
