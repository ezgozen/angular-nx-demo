export class NewFormModel {
    inputType?: string;
    label?: string;
    name?: string;
    config?: {
        type?: string;
    };
    defaultValue?: any;
    validations?: {
        isRequired?: boolean;
        max?: number;
        min?: number;
        message?: string;
    } [];
    options?: { key: string; value: number; } []
}