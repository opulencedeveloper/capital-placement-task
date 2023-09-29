import { useEffect, useState } from "react";

import Navigation from "./components/task-one/task-one-ui/Navigation";
import Portal from "./components/task-one/task-one-ui/Portal";
import AdditionalQuestions from "./components/task-one/AdditionalQuestions";
import ImageUpload from "./components/task-one/ImageUpload";
import MyHeader from "./components/task-one/MyHeader";
import PersonalInformation from "./components/task-one/PersonalInformation";
import Profile from "./components/task-one/Profile";
import Questions from "./components/task-one/Questions";
import useHttp from "./hooks/useHttp";

import { QuestionResponseType } from "../shared/types";


const App = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<QuestionResponseType>({});
  const [profileInfo, setProfileInfo] = useState<QuestionResponseType>({});
  const { isLoading, error, sendRequest: getQuestionsRequest } = useHttp();

  useEffect(() => {
    const getQuestionsRequestResponse = (res: any) => {
      console.log(res)
      const { attributes } = res.data;
      console.log(attributes);
      setPersonalInfo(attributes.personalInformation);
      setProfileInfo(attributes.profile);
    };

    getQuestionsRequest(
      {
        url: "649.0956116773887/programs/iste",
      },
      getQuestionsRequestResponse
    );

  }, [])

  const switchQuestionHander = () => {
    setShowQuestion(prev => !prev);
  }

  return (error ? <p className="text-center text-red-500 mt-10 w-full h-[48px]">{error}</p>
    : <div className="flex text-3xl w-[1300px] h-screen overflow-auto md:w-full ">
      {showQuestion && <Portal><Questions deleteQuestion={switchQuestionHander} /></Portal>}
      <Navigation />
      <div className="w-full h-full overflow-auto">
        <MyHeader />
        <ImageUpload />
        <PersonalInformation personalInfo={personalInfo} addQuestion={switchQuestionHander} />
        <Profile profileInfo={profileInfo} addQuestion={switchQuestionHander} />
        <AdditionalQuestions addQuestion={switchQuestionHander} />
      </div>
    </div>
  );
}

export default App;


