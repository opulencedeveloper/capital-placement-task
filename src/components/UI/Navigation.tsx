const Navigation = () => {
    return <div className="w-[118px] shadow-xl h-full flex flex-col mt-12 items-center">
        <div className="w-[36px] h-[35px] mb-24">
            <img src="./asset/icons/handburger-icon.svg" className="h-full w-full" alt="hand burger icon" />
        </div>
        <div className="w-[36px] h-[35px] mb-8">
            <img src="./asset/icons/home-icon.svg" className="h-full w-full" alt="hand burger icon" />
        </div>
        <div className="w-[36px] h-[35px]">
            <img src="./asset/icons/list-icon.svg" className="h-full w-full" alt="hand burger icon" />
        </div>
    </div>
}

export default Navigation;