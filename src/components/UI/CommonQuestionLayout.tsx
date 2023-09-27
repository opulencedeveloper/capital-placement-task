import { CommonQuestionLayoutProps } from "../../../shared/types";

const CommonQuestionLayout: React.FC<CommonQuestionLayoutProps> = ({ layoutStyle }) => {
    return <div className={layoutStyle}>
        <label htmlFor="question" className="text-[20px] ml-10 font-medium leading-tight">Choice</label>
        <div className="flex items-center w-full mt-2">
            <div className="w-[36px] h-[28px] mr-3">
                <img src="./asset/icons/unorderedList-icon.svg" className="h-full w-full" alt="unorderedList icon" />
            </div>
            <input name="question" type="text" placeholder="Type here" className="text-[16px] pl-5 w-full rounded-[5px] h-[68px] outline-none border border-secondary-3" />
            <div className="w-[18px] ml-3 h-[18px]">
                <img src="./asset/icons/add-icon.svg" className="h-full w-full" alt="add icon" />
            </div>
        </div>
    </div>

}
export default CommonQuestionLayout;