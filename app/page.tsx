"use client";
import FormCreation from "@/Components/Forms/FormCreation";

export default function Home() {
	return (
		<div className="flex items-center justify-center w-screen h-screen flex-col gap-4 p-10">
			<h1 className="text-2xl font-bold">Create New Form</h1>
			<FormCreation />
		</div>
	);
}
