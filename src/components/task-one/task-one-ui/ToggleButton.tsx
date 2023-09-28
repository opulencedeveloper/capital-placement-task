import { useState } from "react";

import { ToggleButtonProps } from "../../../../shared/types";

const ToggleButton: React.FC<ToggleButtonProps> = ({ buttonStateValue, id }) => {
    const [buttonState, setButtonState] = useState(buttonStateValue);

    const toggleButton = () => {
        setButtonState((prevState) => !prevState);
    };

    const buttonColor = buttonState ? "bg-green-500" : "bg-white";

    return (
        <label htmlFor={id} className="flex justify-end items-center cursor-pointer w-[49px]">
            <div className="relative w-[49px]">
                <input
                    type="checkbox"
                    id={id}
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
    );
};

export default ToggleButton;
