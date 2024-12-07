import React from "react";
import { singleSelectFieldProps } from "@/Constants/Typescript";

const SingleSelectField: React.FC<singleSelectFieldProps> = ({
	name,
	options,
}) => {
	return (
		<>
			{options?.map((optionItem, optionId) => (
				<div className="flex items-center gap-2">
					<input name={name} type="radio" />
					<label className="w-full border border-gray-200 py-1 px-2 rounded-md">
						{optionItem?.label}
					</label>
				</div>
			))}
		</>
	);
};

export default SingleSelectField;
