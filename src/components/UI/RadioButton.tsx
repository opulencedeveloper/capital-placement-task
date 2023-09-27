import { useState } from "react";

const RadioButton = () => {
    const [val, setVal] = useState(false);
    const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //const id = event.target.id;
        const value = event.target.checked;
        setVal(value);
    };
    return <input
        type="checkbox"
        checked={val}
        className="checkbox"
        onChange={checkboxHandler}
    />
}

export default RadioButton;