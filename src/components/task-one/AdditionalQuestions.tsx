import ButtonLayout from "../UI/ButtonLayout";
import CommonLayout from "../UI/CommonLayout";
import CommonQuestionLayout from "../UI/CommonQuestionLayout";
import IconButton from "../UI/IconButton";

const additonalQuestions = [
    { title: "Paragraph", question: "Please tell me about yourself in less than 500 words" },
    { title: "Dropdown", question: "Please select year of graduation from list below" },
    { title: "Yes/No questions", question: "Have you ever been rejected by the UK embassy?" },
];



const AdditionalQuestions = () => {
    return <CommonLayout title="Additional Question">
        {additonalQuestions.map((data, index) => <div key={index} className="mt-4 border-b border-secondary-0  pb-7 w-[90%]">
            <div className="flex justify-between items-center">
                <div className="mr-10">
                    <p className="text-secondary-1 text-[14px]">{data.title}</p>
                    <p className="text-[20px] font-semibold leading-tight">{data.question}</p>

                </div>
                <div className="w-[16px] h-[17px]">
                    <img src="./asset/icons/edit-icon.svg" className="h-full w-full" alt="hand burger icon" />
                </div>
            </div>
            {data.title === "Dropdown" && <>
                <div className="flex flex-col space-y-3 mt-9">
                    <label htmlFor="question" className="text-[20px] font-semibold leading-tight">Question</label>
                    <input name="question" type="text" placeholder="Type here" className="text-[16px] pl-5 rounded-[5px] h-[68px] outline-none border border-black" />
                </div>

                <div className="flex flex-col space-y-3 mt-8">
                    <CommonQuestionLayout />
                    <ButtonLayout
                        layoutStyle="flex justify-between pt-10 pb-7"
                        iconUrl="./asset/icons/delete-icon.svg"
                        iconButtonTitleStyle="font-semibold text-[15px] text-errorColor-0"
                        iconTitle="Delete Question"
                    />

                </div></>}
        </div>
        )}
        <div className="w-[90%] mt-7"><IconButton iconUrl="./asset/icons/add-icon.svg" titleStyle="font-semibold text-[15px]" title="Add a question" /></div>
    </CommonLayout>
}

export default AdditionalQuestions;