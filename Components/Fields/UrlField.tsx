import React from "react";

import InputField from "./InputField";

import { inputFieldProps } from "@/Constants/Typescript";

const UrlInputField: React.FC<inputFieldProps> = ({
	placeholder = "",
	changeEvent,
}) => {
	return (
		<>
			<InputField
				type="url"
				placeholder={placeholder}
				isRequired={false}
				disabled={true}
				changeEvent={changeEvent}
			/>
		</>
	);
};

export default UrlInputField;
