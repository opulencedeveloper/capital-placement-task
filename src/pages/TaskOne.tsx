import { useState } from "react";

import Navigation from "../components/task-one/task-one-ui/Navigation";
import Portal from "../components/task-one/task-one-ui/Portal";
import AdditionalQuestions from "../components/task-one/AdditionalQuestions";
import ImageUpload from "../components/task-one/ImageUpload";
import MyHeader from "../components/task-one/MyHeader";
import PersonalInformation from "../components/task-one/PersonalInformation";
import Profile from "../components/task-one/Profile";
import Questions from "../components/task-one/Questions";


const TaskOne = () => {
    const [showQuestion, setShowQuestion] = useState(false);

    const switchQuestionHander = () => {
        setShowQuestion(prev => !prev);
    }

    return (
        <div className="flex text-3xl w-[1300px] h-screen overflow-hidden md:w-full ">
            {showQuestion && <Portal><Questions deleteQuestion={switchQuestionHander} /></Portal>}
            <Navigation />
            <div className="w-full">
                <MyHeader />
                <ImageUpload />
                <PersonalInformation addQuestion={switchQuestionHander} />
                <Profile addQuestion={switchQuestionHander} />
                <AdditionalQuestions addQuestion={switchQuestionHander} />
            </div>
        </div>
    );
}

export default TaskOne;


