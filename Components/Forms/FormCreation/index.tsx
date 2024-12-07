import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { formCreationProps } from "@/Constants/Typescript";
import React, { ReactElement, useState } from "react";

import PreviewIcon from "@/public/external-link.svg";

const FormCreation: React.FC<formCreationProps> = (): ReactElement => {
	const [formDetails, setFormDetails] = useState({});

	return (
		<div className="border border-gray-200 flex flex-col gap-1">
			<div className="p-3 flex justify-between items-center gap-2">
				<h3>Untitled Form</h3>
				<PrimaryButton
					title="Preview"
					actionOnClick={() => console.log("primary - clicked")}
					buttonType={"secondary"}
					rightIcon={PreviewIcon}
				/>
			</div>
		</div>
	);
};

export default FormCreation;
