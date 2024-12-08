import React, { ReactElement, useState } from "react";
import { nanoid } from "nanoid";
import {
	creationFormStateProps,
	fieldValidator,
	formCreationProps,
} from "@/Constants/Typescript";

import PreviewIcon from "@/public/external-link.svg";
import addQuestionIcon from "@/public/add-icon.svg";

import {
	fieldDescription,
	fieldDisabled,
	fieldOptions,
	fieldOrder,
	fieldTitle,
	fieldType,
	formTitleField,
	ShortAnswerFieldType,
} from "@/Constants/Fields";

import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import FieldsContainer from "@/Components/Containers/Fields";
import QuestionsTypeDropDown from "@/Components/Dropdowns/QuestionsType";
import InputField from "@/Components/Fields/InputField";

const FormCreation: React.FC<formCreationProps> = (): ReactElement => {
	const [formDetails, setFormDetails] = useState<creationFormStateProps>({});
	const [isFormEditionPhase, toggleFormEditionPhase] = useState("");

	const handleFormChanges = (event: {
		preventDefault(): unknown;
		target: { name: any; value: any };
	}) => {
		event.preventDefault();
		try {
			const { name, value } = event?.target;
			setFormDetails({
				...formDetails,
				[name]: value,
			});
		} catch (err) {}
		{
		}
	};

	const handleFieldAddition = ({ type }: { type: string }) => {
		let initialFieldSetup = {
			id: nanoid(),
			[fieldType]: type || ShortAnswerFieldType,
			[fieldOrder]: 1,
			[fieldDisabled]: false,
			[fieldDescription]: "",
			[fieldTitle]: "",
			[fieldOptions]: [],
		};

		toggleFormEditionPhase(initialFieldSetup?.id);
		setFormDetails((prev) => {
			return {
				...prev,
				formFields: [...(prev.formFields || []), initialFieldSetup],
			};
		});
	};

	const handleFieldChanges = (field: fieldValidator) => {
		const fields = formDetails?.formFields || [];
		for (let index = 0; index < fields?.length; index++) {
			if (field?.id == fields[index]?.id) {
				let updatedField = {
					...fields[index],
					...field,
				};
				fields[index] = updatedField;
				setFormDetails({
					...formDetails,
					formFields: fields,
				});
				break;
			}
		}
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
				<FieldsContainer
					data={formDetails?.formFields}
					isFormCreating={isFormEditionPhase}
					handleFieldChanges={handleFieldChanges}
					handleFieldSave={() => toggleFormEditionPhase("")}
					isAdminSideForm={true}
				/>
				<QuestionsTypeDropDown
					disabled={isFormEditionPhase}
					buttonTitle="Add Question"
					buttonIconSrc={addQuestionIcon}
					handleDropdownSelection={handleFieldAddition}
				/>
			</div>
		</div>
	);
};

export default FormCreation;
