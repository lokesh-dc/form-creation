import { getFormDetails } from "@/backend/forms";

export default async function FormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const formId = (await params)?.id;
	const formDetails = await getFormDetails(formId);

	return (
		<div className="p-4">
			<h1 className="text-xl text-bold">{formDetails?.formTitle}</h1>
		</div>
	);
}
