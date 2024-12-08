import React, { ReactElement } from "react";

import FieldWrapper from "@/Components/Wrappers/Fields";

import { fieldsContainer } from "@/Constants/Typescript";

const FieldsContainer: React.FC<fieldsContainer> = ({
	data,
	isFormCreating = false,
	handleFieldChanges = () => {},
}): ReactElement => {
	return (
		<>
			{data && Array.isArray(data) && data?.length
				? data?.map(({ order, fieldType, disabled, id: fieldId }) => (
						<FieldWrapper
							key={fieldId}
							fieldId={fieldId}
							title={"Write a question"}
							description={
								"Write a help text or caption (leave empty if not needed)."
							}
							placeholder={""}
							isRequired={false}
							fieldType={fieldType}
							disabled={disabled}
							isFormCreating={isFormCreating}
							name={fieldId}
							handleFieldChanges={handleFieldChanges}
						/>
				  ))
				: null}
		</>
	);
};

export default FieldsContainer;
