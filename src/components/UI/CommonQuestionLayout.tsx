import { useState } from "react";

import { CommonQuestionLayoutProps } from "../../../shared/types";

const CommonQuestionLayout: React.FC<CommonQuestionLayoutProps> = ({ layoutStyle }) => {
    const [inputCount, setInputCount] = useState(1);

    const handleAddInput = () => {
        setInputCount((prev) => prev + 1);
    };

    return <div className={layoutStyle}>
        <label htmlFor="question" className="text-[20px] ml-10 font-medium leading-tight">Choice</label>
        <div className="flex items-center w-full mt-2">
            <div className=" w-[87%] space-y-5">
                {Array.from({ length: inputCount }).map((_, index) => (
                    <div key={index} className="flex  items-center"> <div className="w-[36px] h-[28px] mr-3">
                        <img src="./asset/icons/unorderedList-icon.svg" className="h-full w-full" alt="unorderedList icon" />
                    </div>
                        <input name="question" type="text" placeholder="Type here" className="text-[16px] pl-5 w-full rounded-[5px] h-[68px] outline-none border border-secondary-3" />
                    </div>
                ))}

            </div>
            <button onClick={handleAddInput} className="w-[18px] ml-3 h-[18px]">
                <img src="./asset/icons/add-icon.svg" className="h-full w-full" alt="add icon" />
            </button>
        </div>
    </div>

}
export default CommonQuestionLayout;