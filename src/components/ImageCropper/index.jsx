import React from "react";
import { CloseIcon } from "../../svg/Close";
import { Cropper } from "react-cropper";

const ImageCopper = ({ image, setImage, cropperRef,getCropData }) => {
  return (
    <div className="h-screen w-full fixed bg-[#deddddc2] top-0 left-0 flex items-center justify-center">
      <div className="w-[30%] bg-white p-4 rounded-md relative ">
        <div>
          <h3 className="text-center font-robotoRegular text-base text-black">
            Upload Photo
          </h3>
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setImage()}>
            <CloseIcon />
          </div>
        </div>
        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          />
        </div>
        <div className="mt-5">
          <Cropper
            ref={cropperRef}
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
          />
        </div>
        <button className="bg-red-600 text-white rounded-md w-full py-2 mt-3" onClick={getCropData}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default ImageCopper;
