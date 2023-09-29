import React, { useState } from "react";

import InputText from "../task-one-ui/InputText";
import TextRadioButton from "../task-one-ui/TextRadioButton";
import { CommonProps, YesNoQuestion } from "../../../../shared/types";
import ButtonLayout from "../task-one-ui/ButtonLayout";
import useHttp from "../../../hooks/useHttp";


const YesNo: React.FC<CommonProps> = ({ deleteQuestion }) => {
    const [question, setQuestion] = useState<string>("");
    const [disqualify, setDisqualify] = useState<boolean>(false);
    const { isLoading, error, sendRequest: postYesNoQuestion } = useHttp();

    const postYesNoQuestionRequestResponse = (res: any) => {
        console.log(res);
    };

    const saveQuestionHandler = () => {
        if (question === "") return;
        console.log(question);
        console.log(disqualify);

        const yesNoQuestion: YesNoQuestion = {
            type: "YesNo",
            question: question,
            disqualify: disqualify,
        };

        postYesNoQuestion({
            url: "530.3660965525686/programs/voluptatibus",
            method: "PUT",
            body: yesNoQuestion,
        }, postYesNoQuestionRequestResponse);
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setQuestion(selectedValue);
    };

    const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.checked;
        setDisqualify(value);
    };

    return (
        <>
            <InputText
                onChange={onChangeHandler}
                label="Question"
                inputPlaceHolder="Type here"
            />
            <TextRadioButton
                isChecked={disqualify}
                checkboxHandler={checkboxHandler}
                label="Disqualify candidate if the answer is no"
                layoutStyle="mt-4"
            />
            <ButtonLayout
                deleteQuestion={deleteQuestion}
                saveQuestion={saveQuestionHandler}
                layoutStyle="flex justify-between pt-10"
                iconUrl="./asset/icons/delete-icon.svg"
                iconButtonTitleStyle="font-semibold text-[15px] text-errorColor-0"
                iconTitle="Delete Question"
            />
        </>
    );
};

export default YesNo;
