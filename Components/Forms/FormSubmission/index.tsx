"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import FieldsContainer from "@/Components/Containers/Fields";
import { formDetailsProps } from "@/Constants/Typescript";

import successIcon from "@/public/success.svg";
import { submitForm } from "@/backend/submissions/index";
import NextImage from "@/Components/Wrappers/Images";

const FormSubmission: React.FC<formDetailsProps> = ({ formDetails }) => {
	const [formData, setFormData] = useState({
		formTitle: formDetails?.formTitle,
		formId: formDetails?.id,
	});
	const [formComplete, setFormComplete] = useState(0);
	const [formStatus, setFormStatus] = useState("");

	let fields = formDetails?.formFields?.map((field) => field?.id) || [];
	const calculateFormCompletion = () => {
		let complete = 0;
		for (let key of fields) {
			// @ts-ignore
			if (formData[key]) complete++;
		}

		let formCompletion = (complete / fields?.length) * 100;
		setFormComplete(formCompletion);
	};

	useEffect(() => {
		calculateFormCompletion();
	}, [JSON.stringify(formData)]);

	const handleFormChanges = ({
		name,
		value,
		title,
	}: {
		name: string;
		value: string;
		title: string;
	}) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFormSubmission = async (event: {
		preventDefault: () => void;
	}) => {
		event.preventDefault();
		const response = await submitForm(formData);

		if (response?.status) {
			setFormStatus("completed");
		}
	};

	return (
		<div className="w-[500px] flex flex-col gap-5 border rounded-xl border-gray-200">
			<div className="px-4 py-2 flex justify-between items-start md:items-center flex-col md:flex-row">
				<h1 className="text-xl font-bold">{formDetails?.formTitle}</h1>
				{formStatus != "complete" ? (
					<div>
						<div>Form Completeness - {formComplete}%</div>
						<div className="min-w-[180px] h-[5px] rounded-md bg-gray-200">
							<div
								style={{ width: `${formComplete}%` }}
								className={`min-h-[5px] bg-green-600 rounded-md`}
							></div>
						</div>
					</div>
				) : null}
			</div>
			<hr />

			{formStatus == "completed" ? (
				<>
					<div className="flex flex-col gap-4 justify-center items-center">
						<NextImage src={successIcon} height={70} width={70} />
						<p className="font-bold text-2xl">Form Submitted Successfully </p>
					</div>
				</>
			) : (
				<>
					<div className="px-4 py-2 flex flex-col gap-4">
						<FieldsContainer
							data={formDetails?.formFields}
							isFormCreating={""}
							handleFieldChanges={handleFormChanges}
							handleFieldSave={() => {}}
							isAdminSideForm={false}
						/>
					</div>

					<div className="p-3 w-full flex justify-end">
						<PrimaryButton
							buttonType="primary"
							title={formStatus != "loading" ? "Submit" : "Submitting form"}
							actionOnClick={handleFormSubmission}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default FormSubmission;
