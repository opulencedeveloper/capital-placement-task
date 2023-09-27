import CommonLayout from "../UI/CommonLayout"
import IconButton from "../UI/IconButton";
import RadioButton from "../UI/RadioButton";
import ToggleButton from "../UI/ToggleButton";

import { ProfileProps} from "../../../shared/types";

const profileLabel: string[] = [
    "Education",
    "Experience",
    "Resume",];

const Profile: React.FC<ProfileProps> = ({ addQuestion }) => {
    return <CommonLayout title="Profile">
        {profileLabel.map((label, index) => <div key={index}
            className="flex justify-between items-center border-b border-secondary-0 pt-2  pb-4 w-[90%]">
            <p className="text-[20px] font-semibold">
                {label}
            </p>
            <div className="flex space-x-10">
                <div className="flex space-x-2 items-center text-[15px]">
                    <RadioButton />
                    <p>Internal</p> </div>
                <div className="flex space-x-2 items-center text-[15px]">
                    <ToggleButton />
                    <p>Internal</p>
                </div>
            </div>
        </div>
        )} 
        <div className="w-[90%] mt-7"><IconButton onClick={addQuestion} iconUrl="./asset/icons/add-icon.svg" titleStyle="font-semibold text-[15px]" title="Add a question" /></div>
    </CommonLayout>
}

export default Profile