export default function Home() {
	return (
		<>
			<section className="container grid items-center justify-center gap-6 pt-8 md:pt-12 lg:pt-24">
				<div className="flex flex-col items-start gap-4 md:max-w-[800px]">
					<h1 className="text-3xl font-black leading-[1.1] sm:text-4xl md:text-6xl">
						Communities for Everyone
					</h1>
					<p className="max-w-[85%] text-lg leading-normal text-slate-700 sm:text-xl sm:leading-8">
						Unique platform inspired by twitter and discord to create communities.
					</p>
				</div>
				<div className="flex gap-4">
					<a
						className="relative inline-flex h-11 items-center rounded-md border border-transparent bg-brand-500 px-8 py-2 font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
						href="/login"
					>
						Get Started
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="ml-2 h-4 w-4"
						>
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</a>
					<a
						href="https://github.com/numiia/wavs"
						target="_blank"
						rel="noreferrer"
						className="relative inline-flex h-11 items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
					>
						GitHub
					</a>
				</div>
			</section>

			<div className="md:py-18 container py-12 lg:py-24">
				<hr className="border-slate-100" />
			</div>

			<section className="container grid justify-center gap-6">
				<div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-[860px] md:grid-cols-3">
					<div className="relative overflow-hidden rounded-lg border border-slate-100 bg-white p-2 shadow-2xl">
						<div className="flex h-[180px] flex-col justify-between rounded-md bg-[#61DAFB]/20 p-6">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="-ml-2 h-12 w-12"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
									fill="currentColor"
								/>
								<path
									d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
									fill="currentColor"
								/>
							</svg>
							<div className="space-y-2">
								<h3 className="font-bold text-slate-900">Users</h3>
								<p className="text-sm text-slate-900">
									User accounts, users segmented by type and interests to promote participation.
								</p>
							</div>
						</div>
					</div>

					<div className="relative overflow-hidden rounded-lg border border-slate-100 bg-white p-2 shadow-2xl">
						<div className="flex h-[180px] flex-col justify-between rounded-md bg-[#29d7c4]/20 p-6">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="-ml-2 h-12 w-12"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7 8V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V8H7ZM5 4H19V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V4Z"
									fill="currentColor"
								/>
							</svg>
							<div className="space-y-2">
								<h3 className="font-bold text-slate-900">Safety</h3>
								<p className="text-sm text-slate-900">
									Filtering unwanted content, protecting the user from the magic of the Internet.
								</p>
							</div>
						</div>
					</div>

					<div className="relative overflow-hidden rounded-lg border border-slate-100 bg-white p-2 shadow-2xl">
						<div className="flex h-[180px] flex-col justify-between rounded-md bg-[#f45e1e]/20 p-6">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="-ml-2 h-12 w-12"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.8055 18.4151C17.1228 17.4003 18.7847 15.1667 18.9806 12.525C18.1577 12.9738 17.12 13.3418 15.9371 13.598C15.7882 15.4676 15.3827 17.1371 14.8055 18.4151ZM9.1945 5.58487C7.24725 6.43766 5.76275 8.15106 5.22208 10.244C5.4537 10.4638 5.84813 10.7341 6.44832 11.0008C6.89715 11.2003 7.42053 11.3798 8.00537 11.5297C8.05853 9.20582 8.50349 7.11489 9.1945 5.58487ZM10.1006 13.9108C10.2573 15.3675 10.5852 16.6202 10.9992 17.5517C11.2932 18.2133 11.5916 18.6248 11.8218 18.8439C11.9037 18.9219 11.9629 18.9634 12 18.9848C12.0371 18.9634 12.0963 18.9219 12.1782 18.8439C12.4084 18.6248 12.7068 18.2133 13.0008 17.5517C13.4148 16.6202 13.7427 15.3675 13.8994 13.9108C13.2871 13.9692 12.6516 14 12 14C11.3484 14 10.7129 13.9692 10.1006 13.9108ZM8.06286 13.598C8.21176 15.4676 8.61729 17.1371 9.1945 18.4151C6.8772 17.4003 5.21525 15.1666 5.01939 12.525C5.84231 12.9738 6.88001 13.3418 8.06286 13.598ZM13.9997 11.8896C13.369 11.9609 12.6993 12 12 12C11.3008 12 10.631 11.9609 10.0003 11.8896C10.0135 9.66408 10.4229 7.74504 10.9992 6.44832C11.2932 5.78673 11.5916 5.37516 11.8218 5.15605C11.9037 5.07812 11.9629 5.03659 12 5.01516C12.0371 5.03659 12.0963 5.07812 12.1782 5.15605C12.4084 5.37516 12.7068 5.78673 13.0008 6.44832C13.5771 7.74504 13.9865 9.66408 13.9997 11.8896ZM15.9946 11.5297C15.9415 9.20582 15.4965 7.11489 14.8055 5.58487C16.7528 6.43766 18.2373 8.15107 18.7779 10.244C18.5463 10.4638 18.1519 10.7341 17.5517 11.0008C17.1029 11.2003 16.5795 11.3798 15.9946 11.5297Z"
									fill="currentColor"
								/>
							</svg>

							<div className="space-y-2">
								<h3 className="font-bold text-slate-900">Global</h3>
								<p className="text-sm text-slate-900">
									Focused on participation, collaboration and global communication.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
