import React, { useState } from "react";

import InputText from "../task-one-ui/InputText";
import TextRadioButton from "../task-one-ui/TextRadioButton";
import CommonQuestionLayout from "../task-one-ui/CommonQuestionLayout";
import ButtonLayout from "../task-one-ui/ButtonLayout";
import useHttp from "../../../hooks/useHttp";
import { CommonProps, DropdownQuestion } from "../../../../shared/types";

const DropDown: React.FC<CommonProps> = ({ deleteQuestion }) => {
    const [question, setQuestion] = useState<string>("");
    const [otherOption, setOtherOption] = useState<boolean>(false);
    const [choices, setChoices] = useState<string[]>([]);
    const { isLoading, error, sendRequest: postDropdownQuestion } = useHttp();

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setQuestion(selectedValue);
    };

    const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.checked;
        setOtherOption(value);
    };

    const handleChoiceChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const newChoices = [...choices];
        newChoices[index] = value;
        setChoices(newChoices);
    };

    const postDropDownQuestionRequestResponse = (res: any) => {
        console.log(res);
    };

    const saveDropdownQuestionHandler = () => {
        if (question === "" || choices.length === 0) return;

        const dropdownQuestion: DropdownQuestion = {
            type: "Dropdown",
            question: question,
            other: otherOption,
            choices: choices,
        };

        console.log(dropdownQuestion);

        postDropdownQuestion(dropdownQuestion, postDropDownQuestionRequestResponse);
    };

    return (
        <>
            <InputText
                onChange={onChangeHandler}
                label="Question"
                inputPlaceHolder="Type here"
            />
            <CommonQuestionLayout
                onChange={handleChoiceChange}
                layoutStyle="w-[94%]"
            />
            <TextRadioButton
                checkboxHandler={checkboxHandler}
                isChecked={otherOption}
                label='Enable "Other" Option'
                layoutStyle="mt-4"
            />
            <ButtonLayout
                deleteQuestion={deleteQuestion}
                saveQuestion={saveDropdownQuestionHandler}
                layoutStyle="flex justify-between pt-10"
                iconUrl="./asset/icons/delete-icon.svg"
                iconButtonTitleStyle="font-semibold text-[15px] text-errorColor-0"
                iconTitle="Delete Question"
            />
        </>
    );
};

export default DropDown;
