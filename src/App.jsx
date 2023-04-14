import { motion } from "framer-motion";

export default function App() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<motion.div
				className="flex flex-col justify-center items-center"
				initial={{ opacity: 0.3 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4 }}
			>
				<div className="flex gap-2">
					<h1>Hi</h1>
					<input
						type="text"
						className="border-b-2 border-black focus:border-t-0 border-l-0 border-r-0 focus:outline-none py-0 text-5xl w-60"
						required
						aria-label="name"
					/>
				</div>
				<motion.button
					className=" bg-gray-200 my-4 px-6 hover:outline-none"
					whileHover={{ scale: 1.1, color: "#fff", backgroundColor: "#000" }}
					initial={{ x: -100, opacity: 0.4 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.4 }}
				>
					Submit
				</motion.button>
			</motion.div>
			<motion.div
				initial={{ x: 150, opacity: 0.5 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.4 }}
			>
				<div className="flex flex-col justify-center items-center">
					<div className="flex flex-col justify-center items-center bg-gray-200 w-96 h-96 rounded-xl shadow-xl">
						<div className="flex flex-col justify-center items-center">
							<img
								src="https://img.freepik.com/premium-vector/avatars-default-photo-placeholder-multiracial-profile-pictures_116137-1820.jpg"
								alt="profile"
								className="rounded-full w-32 h-32 object-cover"
							/>
							<h1 className="text-2xl font-bold mt-4">John Doe</h1>
							<p className="text-gray-500">Web Developer</p>
						</div>
						<div className="flex gap-4 mt-8">
							<button className="bg-blue-500 text-white px-4 py-2 rounded-full">
								Follow
							</button>
							<button className="bg-blue-500 text-white px-4 py-2 rounded-full">
								Message
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
