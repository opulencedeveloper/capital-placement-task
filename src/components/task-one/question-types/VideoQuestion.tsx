import React, { useState } from "react";

import ButtonLayout from "../task-one-ui/ButtonLayout";
import useHttp from "../../../hooks/useHttp";
import { CommonProps, VideoQuestionProps } from "../../../../shared/types";

const VideoQuestion: React.FC<CommonProps> = ({ deleteQuestion }) => {
    const [question, setQuestion] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [videoDuration, setVideoDuration] = useState<string>("");
    const [minSec, setMinSec] = useState<string>("");
    const { isLoading, error, sendRequest: postVideoQuestion } = useHttp();

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.target.value);
    };

    const descriptionChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const videoDurationChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVideoDuration(event.target.value);
    };
    const minSecChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMinSec(event.target.value);
    };


    const postVideoQuestionRequestResponse = (res: any) => {
        console.log(res);
    };

    const saveVideoQuestionHandler = () => {
        console.log(minSec)
        if (question === "" || description === "" || videoDuration === "" || minSec === "") return;

        const videoQuestion: VideoQuestionProps = {
            type: "Video question",
            question: question,
            description: description,
            videoDuration: videoDuration + minSec,
        };

        console.log(videoQuestion);

        postVideoQuestion({
            url: "530.3660965525686/programs/voluptatibus",
            method: "PUT",
            body: videoQuestion,
        }, postVideoQuestionRequestResponse);
    };

    return (
        <>
            <div className="mt-4 border-b border-secondary-0 pb-7">
                <div className="flex justify-between items-center">
                    <div className="">
                        <p className="text-secondary-1 text-[14px]">4 Minutes</p>
                        <p className="text-[20px] font-semibold leading-tight">Tell us more about yourself?</p>

                    </div>
                    <div className="w-[16px] h-[17px]">
                        <img src="./asset/icons/edit-icon.svg" className="h-full w-full" alt="edit icon" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-7">
                <div className="mr-10">
                    <p className="text-secondary-1 text-[14px]">2 Minutes</p>
                    <p className="text-[20px] font-semibold leading-tight">Why did you apply for this program?</p>

                </div>
                <div className="w-[16px] h-[17px]">
                    <img src="./asset/icons/edit-icon.svg" className="h-full w-full" alt="edit icon" />
                </div>
            </div>
            <div className="flex flex-col space-y-3 mt-12 mb-7">
                <label htmlFor="question" className="text-[20px] font-semibold leading-tight">
                    Question
                </label>
                <input
                    name="question"
                    type="text"
                    onChange={onChangeHandler}
                    placeholder="Q: Tell us about yourself?"
                    className="text-[16px] pl-5 placeholder-black font-medium rounded-[5px] h-[51px] outline-none border border-black"
                />
            </div>

            <textarea
                onChange={descriptionChangeHandler}
                placeholder="Please talk about your achievements, goals and what you worked on as the latest project."
                className="text-[16px] p-5 placeholder-black resize-none font-medium rounded-[5px] h-[144px] w-full outline-none border border-black">
            </textarea>
            <div className="flex justify-between text-[14px] mt-10 w-full h-[68px]">
                <input
                    name="video duration"
                    onChange={videoDurationChangeHandler}
                    type="text"
                    placeholder="Max duration of Video"
                    className="pl-5 font-medium rounded-[5px] w-[60%] h-full outline-none border border-black"
                />
                <select
                    onChange={minSecChangeHandler}
                    className="select text-secondary-1 h-full border w-[35%] border-black outline-none rounded-[5px] pl-5 space-y-8"
                >
                    <option value="" defaultValue="Select a question">
                        in (sec/min)
                    </option>
                    <option
                        value="minutes"
                    >
                        Minutes
                    </option>
                    <option value="seconds">Seconds</option>
                </select>
            </div>
            <ButtonLayout
                deleteQuestion={deleteQuestion}
                saveQuestion={saveVideoQuestionHandler}
                layoutStyle="flex justify-between pt-10"
                iconUrl="./asset/icons/delete-icon.svg"
                iconButtonTitleStyle="font-semibold text-[15px] text-errorColor-0"
                iconTitle="Delete Question"
            />
            <button className="mt-7 text-primary-4 font-semibold text-semibold">
                + Add video interview questions
            </button>
        </>
    );
};

export default VideoQuestion;
