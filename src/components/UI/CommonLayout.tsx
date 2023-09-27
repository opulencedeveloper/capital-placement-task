import { CommonLayoutProps } from "../../../shared/types";

const CommonLayout: React.FC<CommonLayoutProps> = ({ children, title }) => {
    return <div className="flex flex-col overflow-hidden rounded-[20px] items-center shadow-custom-shadow w-[560px] mt-20 ml-12 pb-4">
        <div className="flex items-center mb-4 pl-8 h-[78px] w-full text-[25px] font-semibold bg-primary-1">
            {title}
        </div>
        {children}
       
    </div>
}

export default CommonLayout