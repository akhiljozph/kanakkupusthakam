import type { DropDownProps } from "./DropDown.types";

const DropDown = (props: DropDownProps) => {

    const options = props?.options;

    return (
        <select>
            <option value="">Please select one value</option>
            {options.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}
export default DropDown;