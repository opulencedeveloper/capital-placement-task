import RadioButton from "./RadioButton";
import { TextRadioButtonProps } from "../../../../shared/types";

const TextRadioButton: React.FC<TextRadioButtonProps> = ({ label, isChecked, checkboxHandler }) => {
    return (
        <div className="flex space-x-2 items-center text-[15px]">
            <RadioButton isChecked={isChecked} onChange={checkboxHandler} />
            <p>{label}</p>
        </div>
    );
};

export default TextRadioButton;
