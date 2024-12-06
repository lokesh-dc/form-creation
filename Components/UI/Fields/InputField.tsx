import React, { ReactElement } from "react";

import { inputFieldProps } from "@/Constants/Typescript";

const InputField: React.FC<inputFieldProps> = ({
	placeholder = "",
	isRequired = true,
	maxLength = 200,
}): ReactElement => {
	return (
		<input
			className="border border-gray-200 rounded-md p-1"
			placeholder={placeholder}
			required={isRequired}
			maxLength={maxLength}
		/>
	);
};

export default InputField;
