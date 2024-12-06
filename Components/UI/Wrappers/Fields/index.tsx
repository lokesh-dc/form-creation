import React, { ReactElement } from "react";

import { fieldWrapperProps } from "@/Constants/Typescript";

import dropdownIcon from "@/public/fields/long-answer-icon.svg";
import reorderIcon from "@/public/reorder-icon.svg";

import InputField from "../../Fields/InputField";
import NextImage from "../Images";

const FieldWrapper: React.FC<fieldWrapperProps> = ({
	title = "",
	description = "",
	placeholder = "",
	isRequired = true,
	maxLength = 200,
}): ReactElement => {
	return (
		<div className="border border-gray-200 rounded-xl p-4  w-2/3 flex flex-col gap-2">
			<div className="flex justify-between items-start">
				<div className="flex flex-col gap-1 ">
					{title ? <label className="font-semibold">{title}</label> : null}
					{description ? <label className="">{description}</label> : null}
				</div>
				<div className="flex gap-2">
					<NextImage alt="dropdown icon" src={dropdownIcon} />
					<NextImage
						alt="dropdown icon"
						src={reorderIcon}
						height={20}
						width={20}
					/>
				</div>
			</div>
			<InputField
				placeholder={placeholder}
				isRequired={isRequired}
				maxLength={maxLength}
			/>
		</div>
	);
};

export default FieldWrapper;
