import { getFormSubmissions } from "@/backend/submissions";
import NavigationBar from "@/Components/Navigation";
import Link from "next/link";

export default async function FormSubmissions({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const formId = (await params)?.id;
	const formDetails = await getFormSubmissions(formId);

	return (
		<>
			<NavigationBar />
			<div className="p-4 h-screen flex flex-col gap-10 items-start  ">
				<Link className="text-blue-600" href={"/form/self"}>
					Back to Submissions
				</Link>
				{formDetails?.data &&
				Array.isArray(formDetails?.data) &&
				formDetails?.data?.length ? (
					<div className="w-full border border-gray-200 rounded-lg p-3 flex flex-col gap-2">
						<h1 className="text-2xl font-bold">{formDetails?.title}</h1>
						<div className="w-full border border-gray-200 rounded-lg flex ">
							{/* @ts-ignore */}
							{formDetails?.data?.map((fieldItem) => (
								<div className="">
									<h2 className="p-3 font-bold">{fieldItem?.title}</h2>
									<hr />
									<div className="flex flex-col">
										{/* @ts-ignore */}
										{fieldItem?.data?.map((subItem) => (
											<>
												<div className="p-3">{subItem}</div>
												<hr />
											</>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="w-full border border-gray-200 rounded-lg p-3 flex flex-col gap-2">
						<h1>{formDetails?.title}</h1>
						<p className="font-bold text-xl">Sorry, No Submissions yet.</p>
					</div>
				)}
			</div>
		</>
	);
}
