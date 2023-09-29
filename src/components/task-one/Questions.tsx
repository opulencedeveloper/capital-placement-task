import { useState } from "react";

import CommonLayout from "./task-one-ui/CommonLayout";
import { CommonProps } from "../../../shared/types";
import Paragraph from "./question-types/Paragraph";
import MultipleChoice from "./question-types/MultipleChoice";
import DropDown from "./question-types/DropDown";
import YesNo from "./question-types/YesNo";
import VideoQuestion from "./question-types/VideoQuestion";

enum QuestionType {
  Paragraph = "Paragraph",
  ShortAnswer = "Short Answer",
  YesNo = "Yes/No",
  Dropdown = "Dropdown",
  MultipleChoice = "Multiple choice",
  Date = "Date",
  Number = "Number",
  FileUpload = "File Upload",
  VideoQuestion = "Video question",
}

type QuestionComponents = Record<QuestionType, React.FC<CommonProps>>;

const questionComponents: QuestionComponents = {
  [QuestionType.Paragraph]: Paragraph,
  [QuestionType.ShortAnswer]: () => null,
  [QuestionType.YesNo]: YesNo,
  [QuestionType.Dropdown]: DropDown,
  [QuestionType.MultipleChoice]: MultipleChoice,
  [QuestionType.Date]: () => null,
  [QuestionType.Number]: () => null,
  [QuestionType.FileUpload]: () => null,
  [QuestionType.VideoQuestion]: VideoQuestion,
};

const Questions: React.FC<CommonProps> = ({ deleteQuestion }) => {
  const [selection, setSelection] = useState<QuestionType | "">("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as QuestionType | "";
    setSelection(selectedValue);
  };

  const QuestionComponent = selection ? questionComponents[selection] : undefined;

  return (
    <CommonLayout title={selection === QuestionType.VideoQuestion ? "Video based questions" : "Questions"}>
      <div className="w-[90%] h-max mt-5 pb-7">
        <p className="text-[20px] font-semibold">Type</p>
        <select
          onChange={onChangeHandler}
          className="select w-full text-[16px] h-[60px] border mt-3 border-black outline-none rounded-[5px] pl-5 space-y-8"
        >
          <option value="" defaultValue="Select a question">
            Choose an option
          </option>
          {Object.values(QuestionType).map((questionType, index) => (
            <option
              className="hover:bg-primary-3"
              key={index}
              value={questionType}
            >
              {questionType}
            </option>
          ))}
        </select>
        {QuestionComponent && <QuestionComponent deleteQuestion={deleteQuestion} />}
      </div>
    </CommonLayout>
  );
};

export default Questions;
