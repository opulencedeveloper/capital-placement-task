import { useState } from "react";

import { RadioButtonProps } from "../../../../shared/types";

const RadioButton: React.FC<RadioButtonProps> = ({ onChange, isChecked }) => {
    const [val, setVal] = useState(false);

    const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //const id = event.target.id;
        const value = event.target.checked;
        setVal(value);
    };
    return <input
        type="checkbox"
        checked={isChecked || val}
        className="checkbox"
        onChange={onChange || checkboxHandler}
    />
}

export default RadioButton;
