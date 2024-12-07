import React, { ReactElement } from "react";

import { inputFieldProps } from "@/Constants/Typescript";

const InputField: React.FC<inputFieldProps> = ({
	type = "text",
	placeholder = "",
	isRequired = true,
	maxLength = 200,
	disabled = false,
}): ReactElement => {
	return (
		<input
			type={type}
			disabled={disabled}
			className="border border-gray-200 rounded-md p-1"
			placeholder={placeholder}
			required={isRequired}
			maxLength={maxLength}
		/>
	);
};

export default InputField;
