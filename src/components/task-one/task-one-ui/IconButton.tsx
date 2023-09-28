import React from "react";

import { IconButtonProps } from "../../../../shared/types";

const IconButton: React.FC<IconButtonProps> = ({ iconUrl, title, titleStyle, onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center space-x-3">
            <div className="w-[28px] h-[28px]">
                <img src={iconUrl} className="h-full w-full" alt="delete icon" />
            </div>
            <p className={titleStyle}>{title}</p>
        </button>
    );
};

export default IconButton;
