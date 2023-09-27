import { useState } from "react";
import Navigation from "./components/UI/Navigation";
import Portal from "./components/UI/Portal";
import AdditionalQuestions from "./components/task-one/AdditionalQuestions";
import ImageUpload from "./components/task-one/ImageUpload";
import MyHeader from "./components/task-one/MyHeader";
import PersonalInformation from "./components/task-one/PersonalInformation";
import Profile from "./components/task-one/Profile";
import Questions from "./components/task-one/Questions";





function App() {
  const [showQuestion, setShowQuestion] = useState(false);

  const switchQuestionHander = () => {
    setShowQuestion(prev => !prev);
  }

  return (
    <div className="flex text-3xl h-screen overflow-hidden">
      {showQuestion && <Portal><Questions deleteQuestion={switchQuestionHander} /></Portal>}
      <Navigation />
      <div className="w-full overflow-auto">
        <MyHeader />
        <ImageUpload />
        <PersonalInformation addQuestion={switchQuestionHander}/>
        <Profile addQuestion={switchQuestionHander}/>
        <AdditionalQuestions />
      </div>
    </div>
  );
}

export default App;


