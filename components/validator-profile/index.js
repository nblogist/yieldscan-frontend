import { useRouter } from "next/router";
import { Twitter, Link, ChevronRight } from "react-feather";

const ValidatorProfile = () => {
	const router = useRouter();
	console.log(router.query);

	return (
		<div className="px-16 py-24">
			<div className="flex">
				<img src="http://placehold.it/300" className="w-24 h-24 mr-5 rounded-full" />
				<div className="flex flex-col">
					<div className="flex justify-between items-center mb-2">
						<h3 className="text-2xl text-gray-700 font-semibold">Validator Name</h3>
						<div className="flex items-center">
							<button className="mr-4 text-sm flex items-center hover:underline" style={{ color: '#1DA1F2' }}>
								<Twitter className="mr-1 mt-px" size="1rem" />
								<span>@akshatbhargava123</span>
							</button>
							<button className="text-sm flex items-center hover:underline">
								<Link className="mr-1 mt-px" size="1rem" />
								<span>www.staking.com</span>
							</button>
						</div>
					</div>
					<p className="text-gray-500 text-sm mb-2">
						Staked runs the most reliable and secure validation services for crypto investors. The smartest investors in crypto choose Staked because of our secure technology and offerings that encompass the most proof-of-stake chains.
					</p>
					<div>
						<button className="flex items-center text-xs text-gray-700 hover:underline">
							<span>Own this profile? Connect Wallet now to verify</span>
							<ChevronRight size="1rem" className="text-gray-700" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ValidatorProfile;
