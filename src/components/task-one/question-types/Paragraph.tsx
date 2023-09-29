import React, { useState } from "react";

import InputText from "../task-one-ui/InputText";
import ButtonLayout from "../task-one-ui/ButtonLayout";
import { CommonProps, ParagraphQuestion } from "../../../../shared/types";
import useHttp from "../../../hooks/useHttp";


const Paragraph: React.FC<CommonProps> = ({ deleteQuestion }) => {
    const [question, setQuestion] = useState<string>("");
    const { isLoading, error, sendRequest: postParagraphQuestion } = useHttp();

    const postParagraphQuestionRequestResponse = (res: any) => {
        console.log(res);
    };

    const saveParagraphQuestionHandler = () => {
        if (question === "") return;
        console.log(question);

        const paragraphQuestion: ParagraphQuestion = {
            type: "Paragraph",
            question: question,
        };

        postParagraphQuestion({
            url: "530.3660965525686/programs/voluptatibus",
            method: "PUT",
            body: paragraphQuestion,
          }, postParagraphQuestionRequestResponse);
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setQuestion(selectedValue);
    };

    return (
        <>
            <InputText
                onChange={onChangeHandler}
                label="Question"
                inputPlaceHolder="Type here"
            />
            <ButtonLayout
                deleteQuestion={deleteQuestion}
                saveQuestion={saveParagraphQuestionHandler}
                layoutStyle="flex justify-between pt-10"
                iconUrl="./asset/icons/delete-icon.svg"
                iconButtonTitleStyle="font-semibold text-[15px] text-errorColor-0"
                iconTitle="Delete Question"
            />
        </>
    );
};

export default Paragraph;
