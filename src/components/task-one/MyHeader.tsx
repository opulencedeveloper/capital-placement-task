const labelText: string[] = [
    "Program Details",
    "Application Form",
    "Workflow",
    "Preview"
];

const MyHeader = () => {
    return <div className="flex items-center h-[129px] shadow-custom-shadow w-full mt-32 pl-14">
            {labelText.map((label, index) => {
                const border = index === 2 ? "border-r border-secondary-0" : "";
                const activeStyle = index === 1 ? "bg-primary-0 text-white h-full" : "h-[5rem]";
                return <div key={index} className="flex h-full items-center">
                    <div className={`${border} ${activeStyle} flex items-center justify-center px-14 text-[20px] font-medium`}>
                        {label}

                    </div>
                    {index === 1 && <div className="flex flex-col justify-center flex-shrink-0 overflow-hidden inline-block w-6 h-9">
                        <div className="bg-primary-0 rotate-45 transform origin-top-left h-20"></div>
                    </div>}
                </div>
            })}

        </div>
}

export default MyHeader;