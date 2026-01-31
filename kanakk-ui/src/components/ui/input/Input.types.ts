export type InputProps = {
    type?: 'text' | 'textarea' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
};