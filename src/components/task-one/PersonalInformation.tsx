import CommonLayout from "../UI/CommonLayout";
import IconButton from "../UI/IconButton";
import TextRadioButton from "../UI/TextRadioButton";
import ToggleButton from "../UI/ToggleButton";


import { PersonalInfoProps } from "../../../shared/types";

const personalInfoLabel: string[] = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Nationality",
    "Current Residence",
    "ID Number",
    "Date of Birth",
    "Gender"];

const PersonalInformation: React.FC<PersonalInfoProps> = ({ addQuestion }) => {
    return <CommonLayout  title="Personal Information">
        {personalInfoLabel.map((label, index) => <div key={index}
            className="flex justify-between items-center border-b border-secondary-0 pt-2  pb-4 w-[90%]">
            <p className="text-[20px] font-semibold">
                {label}
                {index === 3 && <span className="text-sm pl-1 font-medium">(without dial code)</span>}
            </p>
            {index > 2 && <div className="flex space-x-10">
                <TextRadioButton  label="Internal" />
                <div className="flex space-x-2 items-center text-[15px]">
                    <ToggleButton />
                    <p>Internal</p>
                </div>
            </div>}
        </div>
        )} 
        <div className="w-[90%] mt-7"><IconButton onClick={addQuestion} iconUrl="./asset/icons/add-icon.svg" titleStyle="font-semibold text-[15px]" title="Add a question" /></div>
    </CommonLayout>
}

export default PersonalInformation;