export const formTitleField = "formTitle";
export const formFields = "formFields";
export const fieldType = "fieldType";
export const fieldOrder = "order";
export const fieldDisabled = "disabled";

// Field Types
export const SingleSelectFieldType = "SingleSelectFieldType";
export const ShortAnswerFieldType = "ShortAnswerFieldType";
export const LongAnwerFieldType = "LongAnwerFieldType";
export const UrlFieldType = "UrlFieldType";
export const DateFieldType = "DateFieldType";

import longAnswerIcon from "@/public/fields/long-answer-icon.svg";
import shortAnswerIcon from "@/public/fields/short-answer-icon.svg";
import singleSelectIcon from "@/public/fields/single-select-icon.svg";
import urlIcon from "@/public/fields/url-icon.svg";
import dateIcon from "@/public/fields/date-icon.svg";

export const fieldTypeDetails = {
	[SingleSelectFieldType]: {
		label: "Single Select",
		icon: singleSelectIcon,
		type: SingleSelectFieldType,
	},
	[ShortAnswerFieldType]: {
		label: "Short Answer",
		type: ShortAnswerFieldType,
		icon: shortAnswerIcon,
	},
	[LongAnwerFieldType]: {
		label: "Long Answer",
		type: LongAnwerFieldType,
		icon: longAnswerIcon,
	},
	[DateFieldType]: {
		label: "Date",
		type: DateFieldType,
		icon: dateIcon,
	},
	[UrlFieldType]: { label: "URL", type: UrlFieldType, icon: urlIcon },
};
