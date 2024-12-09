"use client";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import FieldsContainer from "@/Components/Containers/Fields";
import { formDetailsProps } from "@/Constants/Typescript";
import React, { useState } from "react";

const FormSubmission: React.FC<formDetailsProps> = ({ formDetails }) => {
	const [formComplete, setFormComplete] = useState(80);

	return (
		<div className="w-[500px] flex flex-col gap-5 border rounded-xl border-gray-200">
			<div className="px-4 py-2 flex justify-between items-start md:items-center flex-col md:flex-row">
				<h1 className="text-xl font-bold">{formDetails?.formTitle}</h1>
				<div>
					<div>Form Completeness - 80%</div>
					<div className="min-w-[180px] h-[5px] rounded-md bg-gray-200">
						<div
							style={{ width: `${formComplete}%` }}
							className={`min-h-[5px] bg-green-600 rounded-md`}
						></div>
					</div>
				</div>
			</div>
			<hr />

			<div className="px-4 py-2 flex flex-col gap-4">
				<FieldsContainer
					data={formDetails?.formFields}
					isFormCreating={""}
					handleFieldChanges={() => {}}
					handleFieldSave={() => {}}
					isAdminSideForm={false}
				/>
			</div>

			<div className="p-3 w-full flex justify-end">
				<PrimaryButton
					buttonType="primary"
					title="Submit"
					actionOnClick={() => {}}
				/>
			</div>
		</div>
	);
};

export default FormSubmission;
