import { getFormDetails } from "@/backend/forms";
import FormSubmission from "@/Components/Forms/FormSubmission";
import NavigationBar from "@/Components/Navigation";

export default async function FormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const formId = (await params)?.id;
	const formDetails = await getFormDetails(formId);

	return (
		<div className="flex flex-col gap-10">
			<NavigationBar />
			<div className="flex justify-center items-start md:items-center ">
				{formDetails?.formTitle &&
				(Array.isArray(formDetails?.formField) ||
					!formDetails?.formField?.length) ? (
					<FormSubmission formDetails={formDetails} />
				) : (
					<p className="font-bold text-xl">Sorry, Couldn't find your form</p>
				)}
			</div>
		</div>
	);
}
