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
	isNoBorderVariant = true,
	classes = "",
}): ReactElement => {
	return (
		<input
			name={name}
			type={type}
			disabled={disabled}
			className={`${
				isNoBorderVariant ? "no-border-variant" : "border border-gray-200s"
			} rounded-md p-1 w-full ${classes}`}
			placeholder={placeholder}
			required={isRequired}
			maxLength={maxLength}
			onChange={(event: React.FormEvent<HTMLInputElement>) => {
				event.preventDefault();
				changeEvent(event);
			}}
		/>
	);
};

export default InputField;
