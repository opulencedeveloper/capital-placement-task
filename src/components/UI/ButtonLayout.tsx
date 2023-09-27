import IconButton from "./IconButton";

import { ButtonLayoutProps } from "../../../shared/types";

const ButtonLayout: React.FC<ButtonLayoutProps> = ({ layoutStyle, iconUrl, iconButtonTitleStyle, iconTitle, deleteQuestion, saveQuestion }) => {
    return <div className={layoutStyle}>
        <IconButton onClick={deleteQuestion} iconUrl={iconUrl} titleStyle={iconButtonTitleStyle} title={iconTitle} />
        <button onClick={saveQuestion} className="bg-primary-2 w-[59px] h-[35px] rounded-[5px] text-white text-[14px] font-semibold">Save</button>
    </div>
}

export default ButtonLayout;