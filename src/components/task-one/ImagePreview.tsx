import IconButton from "../UI/IconButton"

import { ImagePreviewProps } from "../../../shared/types";

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageFile, deleteImage }) => {
    return <div className="flex flex-col overflow-hidden rounded-[20px] items-center shadow-custom-shadow max-w-[560px] mt-20 ml-12">
        <div className="w-full h-[300px] border rounded-[5px]">
            <img src={URL.createObjectURL(imageFile)} className="h-full w-full" />
        </div>
        <div className="flex w-[90%] py-5">
            <IconButton
                onClick={deleteImage}
                iconUrl="./asset/icons/delete-icon.svg"
                titleStyle="font-semibold text-errorColor-0 text-[15px]"
                title="Delete & re-upload" />
        </div>
    </div>

}

export default ImagePreview

