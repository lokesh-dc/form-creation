export interface fieldWrapperProps {
    title: string;
    description: string;
    placeholder: string;
    isRequired: boolean;
    maxLength?: number;
    options?: Array<{
        label: string;
        value: string;
    }>
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
    maxLength: number;
    disabled?: boolean;
    autofocus?: boolean;
}


export interface inputFieldProps extends inputFieldCommonprops {
    type?: string;
    value?: string | number;

}

export interface textareaProps extends inputFieldCommonprops {
    cols?: number;
}