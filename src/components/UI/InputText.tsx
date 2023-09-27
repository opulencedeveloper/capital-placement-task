import { InputTextProps } from "../../../shared/types";

const InputText: React.FC<InputTextProps> = ({ label, inputPlaceHolder }) => {
    return <div className="mt-7 mb-4"> <label htmlFor="question" className=" text-[20px] font-semibold">
        {label}
    </label>
        <input name="question" placeholder={inputPlaceHolder} className="w-full text-[16px] h-[60px] border mt-3 border-black outline-none rounded-[5px] pl-5 space-y-8 " />
    </div>
}

export default InputText;