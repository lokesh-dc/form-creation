import React, { ReactElement } from "react";

import { inputFieldProps } from "@/Constants/Typescript";

const InputField: React.FC<inputFieldProps> = ({
	name = "",
	type = "text",
	placeholder = "",
	isRequired = true,
	maxLength = 200,
	disabled = false,
	changeEvent = () => {},
	isNoBorderVariant = false,
	classes = "",
	isFormCreating = false,
}): ReactElement => {
	return (
		<input
			name={name}
			type={type}
			disabled={isFormCreating || disabled ? true : false}
			className={`${
				isNoBorderVariant ? "no-border-variant" : "border border-gray-200s"
			} rounded-md p-1 w-full ${classes}`}
			placeholder={placeholder}
			required={isRequired}
			maxLength={maxLength}
			onChange={(event: React.FormEvent<HTMLInputElement>) => {
				event.preventDefault();
				// @ts-ignore
				const { name, value } = event.target;
				changeEvent({ name, value });
			}}
		/>
	);
};

export default InputField;
