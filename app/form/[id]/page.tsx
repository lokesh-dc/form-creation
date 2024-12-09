import { getFormDetails } from "@/backend/forms";
import FormSubmission from "@/Components/Forms/FormSubmission";

export default async function FormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const formId = (await params)?.id;
	const formDetails = await getFormDetails(formId);

	return (
		<div className="h-screen flex justify-center items-start md:items-center ">
			<FormSubmission formDetails={formDetails} />
		</div>
	);
}
