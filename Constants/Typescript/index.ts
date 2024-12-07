import { formTitleField } from "../Fields";

export interface fieldWrapperProps {
    title: string;
    description: string;
    placeholder: string;
    isRequired: boolean;
    maxLength?: number;
    options?: Array<string>
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
    classes?: string
}


export interface buttonTypes {
    [key: string]: string | undefined
}

export interface formCreationProps {
    // title: string;
}

export interface creationFormStateProps {
    [formTitleField]?: string;
}