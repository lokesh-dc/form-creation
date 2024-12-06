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

export interface inputFieldProps {
    placeholder: string;
    isRequired: boolean;
    maxLength: number;
}

export interface imageProps {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
}