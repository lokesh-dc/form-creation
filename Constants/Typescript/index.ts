import { fieldDisabled, fieldOrder, fieldType, formFields, formTitleField } from "../Fields";

export interface fieldWrapperProps {
    name: string;
    fieldId: string;
    title: string;
    fieldType: string;
    description: string;
    placeholder: string;
    isRequired: boolean;
    maxLength?: number;
    options?: Array<string>;
    disabled: boolean;
    isFormCreating: boolean;
    handleFieldChanges: Function;

}

export interface imageProps {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
}

export interface inputFieldCommonprops {
    name?: string;
    placeholder: string;
    isRequired: boolean;
    maxLength?: number;
    disabled?: boolean;
    autofocus?: boolean;
    min?: string;
    max?: string;
    isFormCreating?: boolean
}


export interface inputFieldProps extends inputFieldCommonprops {
    type?: string;
    value?: string | number;
    changeEvent: Function;
    isNoBorderVariant?: boolean
    classes?: string
}

export interface textareaProps extends inputFieldCommonprops {
    cols?: number;
}

export interface singleSelectFieldProps {
    name: string;
    options?: Array<string>;
    isRequired: boolean;
    disabled?: boolean;
}

export interface ButtonProps {
    background?: string;
    title: string;
    actionOnClick: Function;
    buttonType: string;
    leftIcon?: string;
    rightIcon?: string;
    classes?: string;
    buttonSizes?: {
        height?: number;
        width?: number
    };
    isNoBorderVariant?: boolean
}


export interface buttonTypes {
    [key: string]: string | undefined
}

export interface formCreationProps {
    // title: string;
}

export interface fieldValidator {
    id: string;
    [fieldType]: string;
    [fieldOrder]: number;
    [fieldDisabled]: boolean;
}

export interface creationFormStateProps {
    [formTitleField]?: string;
    [formFields]?: Array<fieldValidator>
}


export interface fieldsContainer {
    data?: Array<fieldValidator>;
    isFormCreating: boolean;
    handleFieldChanges: Function;

}

export interface questionTypeProps {
    buttonTitle?: string | undefined;
    buttonIconSrc?: string;
    handleDropdownSelection: Function;
    buttonSizes?: {
        height?: number;
        width?: number
    };
    buttonRightIcon?: string;
    isButtonNoBorderVariant?: boolean
}