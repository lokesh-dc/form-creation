interface optionsProps {
    label: string;
    value: string;
}
export interface fieldWrapperProps {
    title: string;
    description: string;
    placeholder: string;
    isRequired: boolean;
    maxLength?: number;
    options?: Array<optionsProps>
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

}

export interface textareaProps extends inputFieldCommonprops {
    cols?: number;
}

export interface singleSelectFieldProps {
    name: string;
    options?: Array<optionsProps>;
    isRequired: boolean;
    disabled?: boolean;
}