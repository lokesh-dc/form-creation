import React from "react";

import InputField from "./InputField";

import { inputFieldProps } from "@/Constants/Typescript";

const UrlInputField: React.FC<inputFieldProps> = ({
	placeholder = "",
	changeEvent,
	disabled = "",
	name = "",
}) => {
	return (
		<>
			<InputField
				name={name}
				type="url"
				placeholder={placeholder}
				isRequired={false}
				disabled={disabled ? true : false}
				changeEvent={changeEvent}
			/>
		</>
	);
};

export default UrlInputField;
