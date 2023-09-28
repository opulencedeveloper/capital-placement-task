import ReactDOM from "react-dom";
import { PortalPropType } from "../../../../shared/types";

const Portal: React.FC<PortalPropType> = ({ children }) => {
    const portalRoot = document.getElementById("navigation");

    if (!portalRoot) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed z-50 overflow-auto inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
            {children}
        </div>,
        portalRoot
    );
};

export default Portal;
