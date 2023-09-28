import { useState } from "react";

import ButtonLayout from "../UI/ButtonLayout";
import CommonLayout from "../UI/CommonLayout"
import { QuestionProps } from "../../../shared/types";
import Paragraph from "./question-types/Paragraph";
import MultipleChoice from "./question-types/MultipleChoice";
import DropDown from "./question-types/DropDown";
import YesNo from "./question-types/YesNo";

const questionsType: string[] = [
    "Paragraph",
    "Short Answer",
    "Yes/No",
    "Dropdown",
    "Multiple choice",
    "Date",
    "Number",
    "File Upload",
    "Video question"
];

const Questions: React.FC<QuestionProps> = ({ deleteQuestion }) => {
    const [selection, setSelection] = useState("");

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelection(selectedValue);
    }
    return <CommonLayout title="Questions">
        <div className="w-[90%] h-max mt-5">
            <p className="text-[20px] font-semibold">
                Type
            </p>
            <select onChange={onChangeHandler} className=" select w-full text-[16px] h-[60px] border mt-3 border-black outline-none rounded-[5px] pl-5 space-y-8 ">
            <option value="default" selected>Choose an option</option>
                {questionsType.map((questionData, index) => <option
                    className="hover:bg-primary-3"
                    key={index}
                    value={questionData}>
                    {questionData}
                </option>)}

            </select>

            {selection === "Paragraph" && <Paragraph />}
            {selection === "Multiple choice" && <MultipleChoice />}
            {selection === "Dropdown" && <DropDown />}
            {selection === "Yes/No" && <YesNo />}

            <ButtonLayout
                deleteQuestion={deleteQuestion}
                saveQuestion={() => { }}
                layoutStyle="flex justify-between pt-10 pb-7"
                iconUrl="./asset/icons/delete-icon.svg"
                iconButtonTitleStyle="font-semibold text-[15px] text-errorColor-0"
                iconTitle="Delete Question"
            />
        </div>
    </CommonLayout>
}// 

export default Questions


