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
	title = "",
	description = "",
	placeholder = "",
	isRequired = true,
	maxLength = 200,
	fieldType = "",
	disabled = false,
}): ReactElement => {
	const fieldProps = {
		disabled,
		placeholder,
		title,
		changeEvent: () => {},
		isRequired,
		maxLength,
	};
	return (
		<div className="border border-gray-200 rounded-xl p-4  w-full flex flex-col gap-2">
			<div className="flex justify-between items-start">
				<div className="flex flex-col gap-1 ">
					{title ? <label className="font-semibold">{title}</label> : null}
					{description ? <label className="">{description}</label> : null}
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
				<SingleSelectField options={[]} isRequired={false} name={"123"} />
			) : null}

			{fieldType == ShortAnswerFieldType ? (
				<InputField {...fieldProps} />
			) : null}

			{fieldType == LongAnwerFieldType ? (
				<TextareaField
					placeholder={placeholder}
					isRequired={isRequired}
					maxLength={maxLength}
				/>
			) : null}

			{fieldType == DateFieldType ? (
				<DateInputField
					placeholder={""}
					isRequired={false}
					changeEvent={() => {}}
				/>
			) : null}
		</div>
	);
};

export default FieldWrapper;
