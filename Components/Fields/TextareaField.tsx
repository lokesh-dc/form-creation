import { textareaProps } from "@/Constants/Typescript";
import React, { ReactElement } from "react";

const TextareaField: React.FC<textareaProps> = ({
	placeholder = "",
	isRequired = true,
	maxLength = 400,
	disabled = false,
	cols = 20,
	changeEvent,
	name,
}): ReactElement => {
	return (
		<textarea
			name={name}
			className="border border-gray-200 rounded-md p-1"
			placeholder={placeholder}
			required={isRequired}
			maxLength={maxLength}
			disabled={disabled}
			cols={cols}
			onChange={(event: React.FormEvent<HTMLTextAreaElement>) => {
				event.preventDefault();
				// @ts-ignore
				const { name, value } = event.target;
				changeEvent({ name, value });
			}}
		/>
	);
};

export default TextareaField;
