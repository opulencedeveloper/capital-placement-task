import CommonLayout from "./task-one-ui/CommonLayout";
import IconButton from "./task-one-ui/IconButton";
import TextRadioButton from "./task-one-ui/TextRadioButton";
import ToggleButton from "./task-one-ui/ToggleButton";
import { PersonalInfoProps } from "../../../shared/types";
import { camelCaseConverter } from "../../helpers/camelCaseConverter";


const PersonalInformation: React.FC<PersonalInfoProps> = ({ addQuestion, personalInfo }) => {
    console.log(personalInfo)
    return (
        <CommonLayout title="Personal Information">
            {Object.keys(personalInfo).map((key) => {
                return key !== "personalQuestions" && <div
                    key={key}
                    className="flex justify-between items-center border-b border-secondary-0 pt-2 pb-4 w-[90%]"
                >
                    <p className="text-[20px] font-semibold">
                        {camelCaseConverter(key)}
                        {key === "phoneNumber" && (
                            <span className="text-sm pl-1 font-medium">
                                (without dial code)
                            </span>
                        )}
                    </p>

                    <div className="flex space-x-10">
                        <TextRadioButton isChecked={personalInfo[key].internalUse} label="Internal" />
                        <div className="flex space-x-2 items-center text-[15px]">
                            <ToggleButton id={key} buttonStateValue={personalInfo[key].show} />
                            <p className="text-secondary-5">Hide</p>
                        </div>
                    </div>
                </div>
            })}
            <div className="w-[90%] mt-7">
                <IconButton
                    onClick={addQuestion}
                    iconUrl="./asset/icons/add-icon.svg"
                    titleStyle="font-semibold text-[15px]"
                    title="Add a question"
                />
            </div>
        </CommonLayout>
    );
};

export default PersonalInformation;



