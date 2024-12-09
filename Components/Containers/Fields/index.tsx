import React, { ReactElement } from "react";

import FieldWrapper from "@/Components/Wrappers/Fields";

import { fieldsContainer } from "@/Constants/Typescript";

const FieldsContainer: React.FC<fieldsContainer> = ({
	data,
	isFormCreating = "",
	handleFieldChanges = () => {},
	handleFieldSave = () => {},
	isAdminSideForm = false,
}): ReactElement => {
	return (
		<>
			{data && Array.isArray(data) && data?.length
				? data?.map(
						({
							order,
							fieldType,
							disabled,
							id: fieldId,
							title,
							description,
						}) => (
							<FieldWrapper
								key={fieldId}
								fieldId={fieldId}
								title={title || "Write a question"}
								description={
									isAdminSideForm
										? description ||
										  "Write a help text or caption (leave empty if not needed)."
										: description
								}
								placeholder={""}
								isRequired={false}
								fieldType={fieldType}
								disabled={disabled || isFormCreating == fieldId}
								isFormCreating={isFormCreating}
								name={fieldId}
								handleFieldChanges={handleFieldChanges}
								handleFieldSave={handleFieldSave}
								isAdminSideForm={isAdminSideForm}
							/>
						)
				  )
				: null}
		</>
	);
};

export default FieldsContainer;
