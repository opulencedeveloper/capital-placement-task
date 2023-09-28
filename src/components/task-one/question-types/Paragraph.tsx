import useHttp from "../../../hooks/useHttp";
import InputText from "../../UI/InputText";

const Paragraph = () => {
    const { isLoading, error, sendRequest: postParagraphQuestion } = useHttp();

    const postParagraphQuestionRequestResponse = (res: any) => {
        const { status, message } = res;
        if (status === "success") {
        }
    };

    postParagraphQuestion(
        {
            body: {
                //appointmentid: appointmentId,
            },
        },
        postParagraphQuestionRequestResponse
    );

    return <InputText label="Question" inputPlaceHolder="Type here" />
}

export default Paragraph;