import InputText from "../../UI/InputText";
import TextRadioButton from "../../UI/TextRadioButton";

const YesNo = () => {
    return <>
        <InputText label="Question" inputPlaceHolder="Type here" />
        <TextRadioButton label='Disqualify candidate if answer is no' layoutStyle="mt-4" />
    </>
}

export default YesNo;