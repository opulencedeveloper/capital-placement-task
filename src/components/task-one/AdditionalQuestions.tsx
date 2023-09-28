import React from "react";

import ButtonLayout from "./task-one-ui/ButtonLayout";
import CommonLayout from "./task-one-ui/CommonLayout";
import CommonQuestionLayout from "./task-one-ui/CommonQuestionLayout";
import IconButton from "./task-one-ui/IconButton";

import { AdditionalQuestionsProps } from "../../../shared/types";

const additionalQuestions = [
    {
        title: "Paragraph",
        question: "Please tell me about yourself in less than 500 words",
        isDropdown: false,
    },
    {
        title: "Dropdown",
        question: "Please select year of graduation from list below",
        isDropdown: true,
    },
    {
        title: "Yes/No questions",
        question: "Have you ever been rejected by the UK embassy?",
        isDropdown: false,
    },
];

const AdditionalQuestions: React.FC<AdditionalQuestionsProps> = ({ addQuestion }) => {
    return (
        <CommonLayout title="Additional Questions">
            {additionalQuestions.map((data, index) => (
                <div key={index} className="mt-4 border-b border-secondary-0 pb-7 w-[90%]">
                    <div className="flex justify-between items-center">
                        <div className="mr-10">
                            <p className="text-secondary-1 text-[14px]">{data.title}</p>
                            <p className="text-[20px] font-semibold leading-tight">{data.question}</p>
                            {data.isDropdown && (
                                <div className="flex flex-col space-y-3 mt-9">
                                    <label htmlFor="question" className="text-[20px] font-semibold leading-tight">
                                        Question
                                    </label>
                                    <input
                                        name="question"
                                        type="text"
                                        placeholder="Type here"
                                        className="text-[16px] pl-5 rounded-[5px] h-[68px] outline-none border border-black"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col space-y-3 mt-8">
                                {data.isDropdown && <CommonQuestionLayout />}
                                <ButtonLayout
                                    layoutStyle="flex justify-between pt-10 pb-7"
                                    iconUrl="./asset/icons/delete-icon.svg"
                                    iconButtonTitleStyle="font-semibold text-[15px] text-errorColor-0"
                                    iconTitle="Delete Question"
                                />
                            </div>
                        </div>
                        <div className="w-[16px] h-[17px]">
                            <img src="./asset/icons/edit-icon.svg" className="h-full w-full" alt="edit icon" />
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-[90%] mt-7">
                <IconButton onClick={addQuestion} iconUrl="./asset/icons/add-icon.svg" titleStyle="font-semibold text-[15px]" title="Add a question" />
            </div>
        </CommonLayout>
    );
};

export default AdditionalQuestions;
