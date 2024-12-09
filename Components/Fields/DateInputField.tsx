import React from "react";

import InputField from "./InputField";

import { inputFieldProps } from "@/Constants/Typescript";

const DateInputField: React.FC<inputFieldProps> = ({
	min = "",
	max = "",
	placeholder = "",
	changeEvent,
	disabled = "",
	name = "",
}) => {
	return (
		<>
			<InputField
				min={min}
				max={max}
				type="date"
				name={name}
				placeholder={placeholder}
				isRequired={false}
				disabled={disabled ? true : false}
				changeEvent={changeEvent}
			/>
		</>
	);
};

export default DateInputField;
