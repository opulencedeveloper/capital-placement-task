import CommonQuestionLayout from "../../UI/CommonQuestionLayout";
import InputText from "../../UI/InputText";
import TextRadioButton from "../../UI/TextRadioButton";

const MultipleChoice = () => {
    return <>
        <InputText label="Question" inputPlaceHolder="Type here" />
        <CommonQuestionLayout layoutStyle="w-[94%]" />
        <TextRadioButton label='Enable "Other" Option' layoutStyle="mt-4" />
        <InputText label="Max Choice allowed" inputPlaceHolder="Enter number of choice allowed here" />
    </>
}

export default MultipleChoice;