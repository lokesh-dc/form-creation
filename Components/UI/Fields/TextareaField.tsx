import { textareaProps } from "@/Constants/Typescript";
import React, { ReactElement } from "react";

const TextareaField: React.FC<textareaProps> = ({
	placeholder = "",
	isRequired = true,
	maxLength = 400,
	disabled = false,
	cols = 20,
}): ReactElement => {
	return (
		<textarea
			className="border border-gray-200 rounded-md p-1"
			placeholder={placeholder}
			required={isRequired}
			maxLength={maxLength}
			disabled={disabled}
			cols={cols}
		/>
	);
};

export default TextareaField;
