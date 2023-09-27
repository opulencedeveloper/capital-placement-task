import { QuestionTypeProps } from "../../../../shared/types";

const Paragraph: React.FC<QuestionTypeProps> = ({ questionsType }) => {

    return <div className="w-[90%] h-40 mt-5">
        <p className="text-[25px] font-semibold">
            Type
        </p>
        <select className=" select w-full text-[16px] h-[60px] border mt-3 border-black outline-none rounded-[5px] pl-3 space-y-8 ">
            {questionsType.map((questionData, index) => <option
                className="hover:bg-primary-3"
                key={index}
                value={questionData}>
                {questionData}
            </option>)}

        </select>

        <p className="text-[25px] font-semibold">
            Question
        </p>
        <input className="w-full text-[16px] h-[60px] border mt-3 border-black outline-none rounded-[5px] pl-3 space-y-8 " />

    </div>
}

export default Paragraph;