import { useState } from "react";
import Button from "../button/Button";
import CheckBox from "../check-box/CheckBox";
import type { MultiSelectProps } from "./MultiSelect.types";
import "./MultiSelect.scss";

const MultiSelect = (props: MultiSelectProps) => {

    const options = props?.options;

    const [isOpen, setIsOpen] = useState(false);

    const onTriggerOptions = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="options-drawer">
            <Button onClick={() => { onTriggerOptions() }}>Please select Options</Button>
            {isOpen && (
                <div className="options-drawer">
                    {options?.map((elem, index) => (
                        <div key={index}>
                            <label>
                                <CheckBox />
                                {elem.name}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default MultiSelect;