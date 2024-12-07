import React, { ReactElement } from "react";

import FieldWrapper from "@/Components/Wrappers/Fields";

import { fieldsContainer } from "@/Constants/Typescript";

const FieldsContainer: React.FC<fieldsContainer> = ({ data }): ReactElement => {
	return (
		<>
			{data && Array.isArray(data) && data?.length
				? data?.map(({ order, fieldType, disabled }) => (
						<FieldWrapper
							title={"Write a question"}
							description={
								"Write a help text or caption (leave empty if not needed)."
							}
							placeholder={""}
							isRequired={false}
							fieldType={fieldType}
							disabled={disabled}
						/>
				  ))
				: null}
		</>
	);
};

export default FieldsContainer;
