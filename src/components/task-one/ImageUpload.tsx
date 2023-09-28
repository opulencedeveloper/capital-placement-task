import { useState, ChangeEvent } from "react";

import CommonLayout from "./task-one-ui/CommonLayout";
import ImagePreview from "./ImagePreview";

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const deleteImageHandler = () => {
        setSelectedImage(null);
    }

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            const selectedFile = files[0];
            setSelectedImage(selectedFile);
        }
    };

    return selectedImage ? (
        <ImagePreview imageFile={selectedImage} deleteImage={deleteImageHandler} />
    ) : (
        <CommonLayout title="Upload Cover Image">
            <div className="w-[85%] h-[210px] mt-10 mb-10 rounded-[5px] border-dotted border-black border-[2px]">
                <input
                    type="file"
                    onChange={handleImageUpload}
                    accept=".jpg, .png, .jpeg"
                    id="fileInput"
                    className="hidden"
                />
                <label
                    htmlFor="fileInput"
                    className="h-full w-full flex flex-col justify-center items-center cursor-pointer"
                >
                    <div className="h-[33px] w-[33px]">
                        <img
                            src="./asset/icons/upload-icon.svg"
                            className="h-full w-full"
                            alt="upload icon"
                        />
                    </div>
                    <p className="text-[14px] font-semibold">Upload Cover Image</p>
                    <p className="text-[14px] text-secondary-1">
                        16:9 ratio is recommended. Max image size 1mb
                    </p>
                </label>{" "}
            </div>
        </CommonLayout>
    );
};

export default ImageUpload;
