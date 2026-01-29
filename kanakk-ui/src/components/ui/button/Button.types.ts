import type { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'submit';
}