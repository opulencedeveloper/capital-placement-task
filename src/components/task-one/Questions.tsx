import React, { useState, useMemo } from "react";
import ButtonLayout from "../UI/ButtonLayout";
import CommonLayout from "../UI/CommonLayout";
import CommonQuestionLayout from "../UI/CommonQuestionLayout";
import InputText from "../UI/InputText";
import TextRadioButton from "../UI/TextRadioButton";

import { QuestionProps } from "../../../shared/types";

const questionTypes = [
    {
        label: "Paragraph",
        components: [
            <InputText label="Question" inputPlaceHolder="Type here" />,
        ],
    },
    {
        label: "Short Answer",
        components: [
            <InputText label="Question" inputPlaceHolder="Type here" />,
        ],
    },
    {
        label: "Yes/No",
        components: [
            <InputText label="Question" inputPlaceHolder="Type here" />,
            <TextRadioButton
                label="Disqualify candidate if answer is no"
                layoutStyle="mt-4"
            />,
        ],
    },
    {
        label: "Dropdown",
        components: [
            <InputText label="Question" inputPlaceHolder="Type here" />,
            <CommonQuestionLayout layoutStyle="w-[94%]" />,
            <TextRadioButton label='Enable "Other" Option' layoutStyle="mt-4" />,
        ],
    },
    {
        label: "Multiple choice",
        components: [
            <InputText label="Question" inputPlaceHolder="Type here" />,
            <CommonQuestionLayout layoutStyle="w-[94%]" />,
            <TextRadioButton label='Enable "Other" Option' layoutStyle="mt-4" />,
            <InputText
                label="Max Choice allowed"
                inputPlaceHolder="Enter number of choice allowed here"
            />,
        ],
    },
    {
        label: "Date",
        components: [],
    },
    {
        label: "Number",
        components: [],
    },
    {
        label: "File Upload",
        components: [],
    },
    {
        label: "Video question",
        components: [],
    },
];

const Questions: React.FC<QuestionProps> = ({ deleteQuestion }) => {
    const [selection, setSelection] = useState("");

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelection(selectedValue);
    };

    //Hello Capital Placement.
    //Incase you are wondering, I used useMemo to prevent unnecessary re-rendering of these components when the Questions component re-renders
    const selectedComponents = useMemo(() => {
        const selectedQuestionType = questionTypes.find(
            (q) => q.label === selection
        );
        return selectedQuestionType ? selectedQuestionType.components : [];
    }, [selection]);

    return (
        <CommonLayout title="Questions">
            <div className="w-[90%] overflow-auto h-max mt-5">
                <p className="text-[20px] font-semibold">Type</p>
                <select
                    onChange={onChangeHandler}
                    className="select w-full text-[16px] h-[60px] border mt-3 border-black outline-none rounded-[5px] pl-5 space-y-8"
                >
                    {questionTypes.map((questionType, index) => (
                        <option
                            className="hover:bg-primary-3"
                            key={index}
                            value={questionType.label}
                        >
                            {questionType.label}
                        </option>
                    ))}
                </select>

                {selectedComponents.map((component, index) => (
                    <div key={index}>{component}</div>
                ))}

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
    );
};

export default Questions;
