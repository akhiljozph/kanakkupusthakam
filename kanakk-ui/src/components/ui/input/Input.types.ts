export type InputProps = {
    type?: 'text' | 'textarea' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    onChange?: (value: string) => void;
};