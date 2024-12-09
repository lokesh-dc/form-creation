import React, { ReactElement } from "react";

import { fieldWrapperProps } from "@/Constants/Typescript";

import reorderIcon from "@/public/reorder-icon.svg";
import dropdownIcon from "@/public/dropdown.svg";

import {
	DateFieldType,
	fieldTypeDetails,
	LongAnwerFieldType,
	ShortAnswerFieldType,
	SingleSelectFieldType,
	UrlFieldType,
} from "@/Constants/Fields";

import NextImage from "../Images";
import DateInputField from "@/Components/Fields/DateInputField";
import SingleSelectField from "@/Components/Fields/SignleSelectField";
import InputField from "@/Components/Fields/InputField";
import TextareaField from "@/Components/Fields/TextareaField";
import QuestionsTypeDropdown from "@/Components/Dropdowns/QuestionsType";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import UrlInputField from "@/Components/Fields/UrlField";

const FieldWrapper: React.FC<fieldWrapperProps> = ({
	fieldId = "",
	name = "",
	title = "",
	description = "",
	placeholder = "",
	isRequired = true,
	maxLength = 200,
	fieldType = "",
	disabled = false,
	isFormCreating = "",
	handleFieldChanges,
	handleFieldSave,
	isAdminSideForm = false,
}): ReactElement => {
	const changeEvent = ({ name, value }: { name: string; value: string }) =>
		handleFieldChanges({ id: fieldId, [name]: value });

	const fieldProps = {
		disabled: disabled || isAdminSideForm,
		placeholder,
		name,
		title,
		changeEvent: ({ name, value }: { name: string; value: string }) => {
			handleFieldChanges({ name, value });
		},
		isRequired,
		maxLength,
		isFormCreating,
	};
	return (
		<div
			className={`${
				isAdminSideForm ? "border border-gray-200 p-4" : ""
			} rounded-xl w-full flex flex-col gap-2`}
		>
			<div className="flex justify-between items-start">
				<div className="w-full flex flex-col gap-1 ">
					{isFormCreating == fieldId ? (
						<InputField
							placeholder={title}
							changeEvent={(event: { target: { value: any } }) => {
								const { value } = event.target;
								changeEvent({ name: "title", value });
							}}
							isRequired={false}
							isNoBorderVariant={true}
							classes="w-full"
						/>
					) : title ? (
						<label className="font-semibold">{title}</label>
					) : null}

					{isFormCreating == fieldId ? (
						<InputField
							placeholder={description}
							changeEvent={(event: { target: { value: any } }) => {
								const { value } = event.target;
								changeEvent({ name: "description", value });
							}}
							isRequired={false}
							isNoBorderVariant={true}
							classes="w-full"
						/>
					) : description ? (
						<label className="">{description}</label>
					) : null}
				</div>
				{isAdminSideForm ? (
					<div className="flex gap-2">
						<QuestionsTypeDropdown
							// @ts-ignore
							buttonIconSrc={fieldTypeDetails[fieldType]?.icon}
							buttonSizes={{ height: 20, width: 20 }}
							buttonRightIcon={dropdownIcon}
							isButtonNoBorderVariant={true}
							handleDropdownSelection={({ type }: { type: string }) => {
								handleFieldChanges({ id: fieldId, fieldType: type });
							}}
							disabled={""}
						/>
						<NextImage
							alt="dropdown icon"
							src={reorderIcon}
							height={20}
							width={20}
						/>
					</div>
				) : null}
			</div>

			{fieldType == SingleSelectFieldType ? (
				<SingleSelectField options={[]} {...fieldProps} />
			) : null}

			{fieldType == ShortAnswerFieldType ? (
				<InputField {...fieldProps} />
			) : null}

			{fieldType == LongAnwerFieldType ? (
				<TextareaField {...fieldProps} />
			) : null}

			{fieldType == UrlFieldType ? <UrlInputField {...fieldProps} /> : null}

			{fieldType == DateFieldType ? <DateInputField {...fieldProps} /> : null}

			{isFormCreating == fieldId ? (
				<div className="flex justify-start">
					<PrimaryButton
						title="Save"
						actionOnClick={handleFieldSave}
						buttonType={"primary"}
						classes="w-[150px]"
					/>
				</div>
			) : null}
		</div>
	);
};

export default FieldWrapper;
