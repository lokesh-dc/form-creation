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

import { publishForm } from "@/backend/forms";

import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import FieldsContainer from "@/Components/Containers/Fields";
import QuestionsTypeDropDown from "@/Components/Dropdowns/QuestionsType";
import InputField from "@/Components/Fields/InputField";

const FormCreation: React.FC<formCreationProps> = (): ReactElement => {
	const [formDetails, setFormDetails] = useState<creationFormStateProps>({
		id: nanoid(),
	});

	const [formErrors, setFormErrors] = useState<{
		common?: string;
		title?: string;
	}>({
		common: "",
		title: "",
	});
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

	const handleFormPublishing = async ({ isPublishing = true }) => {
		if (isPublishing) {
			if (!formDetails[formTitleField]) {
				setFormErrors({
					...formErrors,
					common: "Please add form title",
				});
				return;
			}
		}

		if (
			!formDetails?.formFields ||
			!Array.isArray(formDetails?.formFields) ||
			!formDetails?.formFields?.length
		) {
			setFormErrors({
				...formErrors,
				common: "Please add atleast one field",
			});
			return;
		}

		await publishForm(formDetails);
		setFormErrors({});

		window.open(`/form/${formDetails?.id}`, "_blank");
	};

	return (
		<>
			{formErrors?.common ? (
				<>
					<p className="text-red-400 font-semibold">*{formErrors?.common}</p>
				</>
			) : null}
			<div
				className={`border ${
					formErrors?.common ? "border-red-300" : "border-gray-200"
				} rounded-xl flex flex-col gap-1`}
			>
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
						actionOnClick={() => handleFormPublishing({ isPublishing: false })}
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
				<div className="flex justify-between w-full p-4 bg-gray-100 absolute right-0 bottom-0">
					<PrimaryButton
						title="Save as Draft"
						actionOnClick={() => handleFormPublishing({ isPublishing: false })}
						buttonType={""}
					/>
					<PrimaryButton
						title="Publish"
						actionOnClick={handleFormPublishing}
						buttonType={"primary"}
					/>
				</div>
			</div>
		</>
	);
};

export default FormCreation;
