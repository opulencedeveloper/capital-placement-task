import { ChildrenProps } from "../../../../shared/types";
import Navigation from "./Navigation";


const Layout: React.FC<{ children: ChildrenProps }> = ({ children }) => {
    return (
        <div className="flex">
            <Navigation />
            <main className="bg-primary-4 flex-1">
                {children}
            </main>
        </div>
    );
};

export default Layout;