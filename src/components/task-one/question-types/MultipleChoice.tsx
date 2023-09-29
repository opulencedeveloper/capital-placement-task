import React, { useState } from "react";

import InputText from "../task-one-ui/InputText";
import TextRadioButton from "../task-one-ui/TextRadioButton";
import CommonQuestionLayout from "../task-one-ui/CommonQuestionLayout";
import ButtonLayout from "../task-one-ui/ButtonLayout";
import useHttp from "../../../hooks/useHttp";
import { CommonProps } from "../../../../shared/types";

const MultipleChoice: React.FC<CommonProps> = ({ deleteQuestion }) => {
    const [question, setQuestion] = useState<string>("");
    const [otherOption, setOtherOption] = useState<boolean>(false);
    const [maxChoice, setMaxChoice] = useState<string>("");
    const [choices, setChoices] = useState<string[]>([]);
    const { isLoading, error, sendRequest: postMultipleChoiceQuestion } = useHttp();

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setQuestion(selectedValue);
    };

    const onChangeMaxChoiceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setMaxChoice(selectedValue);
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

    const postMultipleChoiceQuestionRequestResponse = (res: any) => {
        console.log(res);
    };
    const saveMultipleChoiceQuestionHandler = () => {
        if (question === "" || choices.length === 0) return;

        const payload = {
            type: "MultipleChoice",
            question: question,
            other: otherOption,
            maxChoice: parseInt(maxChoice, 10),
            choices: choices,
        };

        console.log(payload);

        postMultipleChoiceQuestion({
            url: "530.3660965525686/programs/voluptatibus",
            method: "PUT",
            body: payload,
        }, postMultipleChoiceQuestionRequestResponse);
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
            <InputText
                onChange={onChangeMaxChoiceHandler}
                label="Max Choice allowed"
                inputPlaceHolder="Enter number of choices allowed here"
            />
            <ButtonLayout
                deleteQuestion={deleteQuestion}
                saveQuestion={saveMultipleChoiceQuestionHandler}
                layoutStyle="flex justify-between pt-10"
                iconUrl="./asset/icons/delete-icon.svg"
                iconButtonTitleStyle="font-semibold text-[15px] text-errorColor-0"
                iconTitle="Delete Question"
            />
        </>
    );
};

export default MultipleChoice;
