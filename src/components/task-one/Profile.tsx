import CommonLayout from "./task-one-ui/CommonLayout";
import IconButton from "./task-one-ui/IconButton";
import RadioButton from "./task-one-ui/RadioButton";
import ToggleButton from "./task-one-ui/ToggleButton";
import { ProfileProps } from "../../../shared/types";
import { camelCaseConverter } from "../../helpers/camelCaseConverter";


const Profile: React.FC<ProfileProps> = ({ addQuestion, profileInfo }) => {
  return (
    <CommonLayout title="Profile">
      {Object.keys(profileInfo).map((key) => {
        return key !== "profileQuestions" && <div key={key} className="flex justify-between items-center border-b border-secondary-0 pt-2 pb-4 w-[90%]">
          <p className="text-[20px] font-semibold">{camelCaseConverter(key)} </p>
          <div className="flex space-x-10">
            <div className="flex space-x-2 items-center text-[15px]">
              <RadioButton isChecked={profileInfo[key].internalUse} />
              <p>Internal</p>
            </div>
            <div className="flex space-x-2 items-center text-[15px]">
              <ToggleButton id={key} buttonStateValue={profileInfo[key].show} />
              <p>Internal</p>
            </div>
          </div>
        </div>
      })}
      <div className="w-[90%] mt-7">
        <IconButton onClick={addQuestion} iconUrl="./asset/icons/add-icon.svg" titleStyle="font-semibold text-[15px]" title="Add a question" />
      </div>
    </CommonLayout>
  );
};

export default Profile;
