import React from "react";

import InputField from "./InputField";

import { inputFieldProps } from "@/Constants/Typescript";

const DateInputField: React.FC<inputFieldProps> = ({
	min = "",
	max = "",
	placeholder = "",
}) => {
	return (
		<>
			<InputField
				min={min}
				max={max}
				type="date"
				placeholder={placeholder}
				isRequired={false}
				disabled={true}
			/>
		</>
	);
};

export default DateInputField;
