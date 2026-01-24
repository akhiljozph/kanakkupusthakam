import type { ButtonProps } from "./Button.types"

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}
export default Button;