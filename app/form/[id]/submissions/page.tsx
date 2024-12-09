import { getFormSubmissions } from "@/backend/submissions";

export default async function FormSubmissions({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const formId = (await params)?.id;
	const formDetails = await getFormSubmissions(formId);

	console.log({ formId, formDetails });

	return (
		<div className="p-4 h-screen flex justify-center items-start md:items-center ">
			{formDetails?.title &&
			(Array.isArray(formDetails) || !formDetails?.length) ? (
					<>
						
					</>
			) : (
				<p className="font-bold text-xl">Sorry, No Submissions yet.</p>
			)}
		</div>
	);
}
