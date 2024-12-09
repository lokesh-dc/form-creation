import { getUserForms } from "@/backend/forms";
import NavigationBar from "@/Components/Navigation";
import { creationFormStateProps } from "@/Constants/Typescript";
import Link from "next/link";

export default async function YourFormsPage() {
	const forms = await getUserForms();
	return (
		<>
			<NavigationBar />
			<div className="flex flex-col gap-2 p-4">
				<h1 className="text-xl font-bold">Your Forms</h1>
				{(Array.isArray(Object.values(forms)) ? Object.values(forms) : [])?.map(
					(props) => (
						<div className="w-fit border border-gray-200 rounded-md p-4">
							<h1>{props?.formTitle || "Untitled Form"}</h1>
							<Link
								className="text-blue-800 text-sm"
								href={`/form/${props?.id}/submissions`}
							>
								Go To Submissions
							</Link>
						</div>
					)
				)}
			</div>
		</>
	);
}
