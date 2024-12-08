import React, { ReactElement } from "react";

import { fieldWrapperProps } from "@/Constants/Typescript";

import dropdownIcon from "@/public/fields/long-answer-icon.svg";
import reorderIcon from "@/public/reorder-icon.svg";

import {
	DateFieldType,
	LongAnwerFieldType,
	ShortAnswerFieldType,
	SingleSelectFieldType,
} from "@/Constants/Fields";

import NextImage from "../Images";
import DateInputField from "@/Components/Fields/DateInputField";
import SingleSelectField from "@/Components/Fields/SignleSelectField";
import InputField from "@/Components/Fields/InputField";
import TextareaField from "@/Components/Fields/TextareaField";

const FieldWrapper: React.FC<fieldWrapperProps> = ({
	name = "",
	title = "",
	description = "",
	placeholder = "",
	isRequired = true,
	maxLength = 200,
	fieldType = "",
	disabled = false,
	isFormCreating = false,
}): ReactElement => {
	const fieldProps = {
		disabled,
		placeholder,
		name,
		title,
		changeEvent: () => {},
		isRequired,
		maxLength,
		isFormCreating,
	};
	return (
		<div className="border border-gray-200 rounded-xl p-4  w-full flex flex-col gap-2">
			<div className="flex justify-between items-start">
				<div className="w-full flex flex-col gap-1 ">
					{isFormCreating ? (
						<InputField
							placeholder={title}
							changeEvent={() => {}}
							isRequired={false}
							isNoBorderVariant={true}
							classes="w-full"
						/>
					) : title ? (
						<label className="font-semibold">{title}</label>
					) : null}

					{isFormCreating ? (
						<InputField
							placeholder={description}
							changeEvent={() => {}}
							isRequired={false}
							isNoBorderVariant={true}
							classes="w-full"
						/>
					) : description ? (
						<label className="font-semibold">{description}</label>
					) : null}
				</div>
				<div className="flex gap-2">
					<NextImage alt="dropdown icon" src={dropdownIcon} />
					<NextImage
						alt="dropdown icon"
						src={reorderIcon}
						height={20}
						width={20}
					/>
				</div>
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

			{fieldType == DateFieldType ? <DateInputField {...fieldProps} /> : null}
		</div>
	);
};

export default FieldWrapper;
