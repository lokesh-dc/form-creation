"use client";
import FormCreation from "@/Components/Forms/FormCreation";
import NavigationBar from "@/Components/Navigation";

export default function Home() {
	return (
		<>
			<NavigationBar />
			<div className="w-screen h-full flex-col gap-4 p-2 md:p-10">
				<FormCreation />
			</div>
		</>
	);
}
