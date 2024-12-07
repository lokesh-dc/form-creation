import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import {
	creationFormStateProps,
	formCreationProps,
} from "@/Constants/Typescript";
import React, { ReactElement, useState } from "react";

import PreviewIcon from "@/public/external-link.svg";
import addQuestionIcon from "@/public/add-icon.svg";

import InputField from "@/Components/Fields/InputField";
import {
	fieldDisabled,
	fieldOrder,
	fieldType,
	formFields,
	formTitleField,
	ShortAnswerFieldType,
	SingleSelectFieldType,
} from "@/Constants/Fields";
import FieldsContainer from "@/Components/Containers/Fields";

const FormCreation: React.FC<formCreationProps> = (): ReactElement => {
	const [formDetails, setFormDetails] = useState<creationFormStateProps>({});

	const handleFormChanges = (event: {
		preventDefault(): unknown;
		target: { name: any; value: any };
	}) => {
		event.preventDefault();
		try {
			const { name, value } = event?.target;
			setFormDetails({
				[name]: value,
			});
		} catch (err) {}
		{
		}
	};

	const handleFieldAddition = () => {
		const initialFieldSetup = {
			id: "",
			[fieldType]: ShortAnswerFieldType,
			[fieldOrder]: 1,
			[fieldDisabled]: true,
		};

		setFormDetails((prev) => {
			return {
				...prev,
				formFields: [...(prev.formFields || []), initialFieldSetup],
			};
		});
	};

	return (
		<div className="border border-gray-200 rounded-xl flex flex-col gap-1">
			<div className="p-3 flex justify-between items-center gap-2">
				<InputField
					placeholder={formDetails[formTitleField] || "Untitled Form"}
					isRequired={true}
					name={formTitleField}
					changeEvent={handleFormChanges}
					isNoBorderVariant={true}
				/>
				<PrimaryButton
					title="Preview"
					actionOnClick={() => console.log("primary - clicked")}
					buttonType={"secondary"}
					rightIcon={PreviewIcon}
				/>
			</div>
			<hr />
			<div className="p-2 flex items-center flex-col gap-2">
				<FieldsContainer data={formDetails?.formFields} />
				<PrimaryButton
					title="Add Question"
					actionOnClick={handleFieldAddition}
					buttonType={"secondary"}
					leftIcon={addQuestionIcon}
					classes="w-fit"
				/>
			</div>
		</div>
	);
};

export default FormCreation;
