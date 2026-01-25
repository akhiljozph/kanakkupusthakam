import type { DropDownProps } from "./DropDown.types";

const DropDown = (props: DropDownProps) => {

    const options = props?.options;

    return (
        <select>
            <option value="">Please select one value</option>
            {options.map((elem, index) => (
                <option value={elem.value} key={index}>
                    {elem.name}
                </option>
            ))}
        </select>
    )
}
export default DropDown;