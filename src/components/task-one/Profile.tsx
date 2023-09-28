import React from "react";
import CommonLayout from "./task-one-ui/CommonLayout";
import IconButton from "./task-one-ui/IconButton";
import RadioButton from "./task-one-ui/RadioButton";
import ToggleButton from "./task-one-ui/ToggleButton";
import { ProfileProps } from "../../../shared/types";

const profileLabels: string[] = ["Education", "Experience", "Resume"];

const Profile: React.FC<ProfileProps> = ({ addQuestion }) => {
  return (
    <CommonLayout title="Profile">
      {profileLabels.map((label, index) => (
        <div key={index} className="flex justify-between items-center border-b border-secondary-0 pt-2 pb-4 w-[90%]">
          <p className="text-[20px] font-semibold">{label}</p>
          <div className="flex space-x-10">
            <div className="flex space-x-2 items-center text-[15px]">
              <RadioButton />
              <p>Internal</p>
            </div>
            <div className="flex space-x-2 items-center text-[15px]">
              <ToggleButton buttonStateValue={true} id={label} />
              <p>Internal</p>
            </div>
          </div>
        </div>
      ))}
      <div className="w-[90%] mt-7">
        <IconButton onClick={addQuestion} iconUrl="./asset/icons/add-icon.svg" titleStyle="font-semibold text-[15px]" title="Add a question" />
      </div>
    </CommonLayout>
  );
};

export default Profile;
