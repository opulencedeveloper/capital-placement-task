import { useState } from "react";

let buttonColor = "bg-green-500";

const ToggleButton = () => {
    const [buttonState, setButtonState] = useState(true);
    const toggleButton = () => {
        setButtonState((prevState) => !prevState);
        buttonColor = buttonState ? "bg-white" : "bg-green-500";
    };
    return <label
        htmlFor="toggle-button"
        className="flex justify-end items-center cursor-pointer w-[49px]"
    >
        <div className="relative w-[49px]">
            <input
                type="checkbox"
                id="toggle-button"
                className="hidden"
                checked={buttonState}
                onChange={toggleButton}
            />
            <div className={`${buttonColor} w-[49px] h-[24px] rounded-full border`}></div>
            <div
                className={`absolute left-1 top-1 w-4 h-4 rounded-full transition ${!buttonState ? "translate-x-[25px] bg-secondary-2" : "translate-x-0 bg-white"
                    }`}
            ></div>
        </div>
    </label>
}

export default ToggleButton;