import { NavLink } from "react-router-dom";

const navData = [
    { icon: "home", link: "/" },
    { icon: "group", link: "/" },
    { icon: "calender", link: "/" },
    { icon: "share", link: "/" },
    { icon: "docs", link: "/" },
    { icon: "book", link: "/" },
    { icon: "favourite", link: "/" },
    { icon: "angle-left", link: "/" },
];


const Navigation = () => {
    return <header className="w-[72px] py-8 h-screen overflow-auto flex flex-col items-center justify-between">
        <nav className="flex flex-col justify-center mb-8 items-center space-y-5 ">
            <div className="rounded-full bg-secondary-4 flex-shrink-0 h-[32px] w-[32px]"></div>
            {navData.map((data, index) => <NavLink
                to={data.link}
                className="h-[48px] w-[48px] flex justify-center items-center rounded-[8px]"
                key={index}
            >
                <div className="h-[17px] w-[17px]">
                    <img src={`./asset/icons/${data.icon}-icon.svg`}
                        className="h-full w-full"
                        alt={`${data.icon} icon`} />
                </div>
            </NavLink>)}
        </nav>

        <div className="flex flex-col items-center mt-10 space-y-5">
            <div className="h-[17px] w-[17px]">
                <img src={`./asset/icons/settings-icon.svg`}
                    className="h-full w-full"
                    alt="settings icon" />
            </div>
            <div className="rounded-full bg-secondary-5 flex-shrink-0 h-[24px] w-[24px]"></div>
        </div>
    </header>
}

export default Navigation;