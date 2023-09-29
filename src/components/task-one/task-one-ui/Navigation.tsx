const Navigation = () => {
    const iconStyle = "w-[36px] h-[35px] mb-8";

    return (
        <div className="w-[118px] shadow-xl flex flex-col mt-12 items-center">
            <div className="mb-10">
                <div className={iconStyle}>
                    <img src="./asset/icons/handburger-icon.svg" className="h-full w-full" alt="hamburger icon" />
                </div>
            </div>
            <div className={iconStyle}>
                <img src="./asset/icons/home-icon.svg" className="h-full w-full" alt="home icon" />
            </div>
            <div className={iconStyle}>
                <img src="./asset/icons/list-icon.svg" className="h-full w-full" alt="list icon" />
            </div>
        </div>
    );
};

export default Navigation;
