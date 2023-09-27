import RadioButton from "./RadioButton";

import { TextRadioButtonProps } from "../../../shared/types";

const TextRadioButton: React.FC<TextRadioButtonProps> = ({ label, layoutStyle }) =>  {
    return <div className={`flex space-x-2 items-center text-[15px] ${layoutStyle} `}>
        <RadioButton />
        <p>{label}</p> </div>
}

export default TextRadioButton;