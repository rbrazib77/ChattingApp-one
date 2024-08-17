import React, { useRef, useState } from "react";
import { CloseIcon } from "./../../svg/Close";
import { UploadIcon } from "./../../svg/Upload";
import ImageCopper from "../ImageCropper";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { LoggedInUser } from "../../features/Slices/LoginSlice";

const Modal = ({ setShow }) => {
  const auth = getAuth();
  const dispatch=useDispatch()
  const user = useSelector((user) => user.login.loggedIn);
  const fileRef = useRef(null);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const cropperRef = useRef();
  const storage = getStorage();
  const storageRef = ref(storage, user.uid);
  const handleChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const message4 = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
            // displayName: "Jane Q. User",
          }).then(()=>{
            dispatch(LoggedInUser({...user,photoURL:downloadURL}))
            localStorage.setItem('user',JSON.stringify({...user,photoURL:downloadURL}))
            setShow(false)
          });
        });
      });
    }
  };

  return (
    <>
      <div className="h-screen w-full fixed bg-[#deddddc2] top-0 left-0 flex items-center justify-center">
        <div className="w-[30%] bg-white p-4 rounded-md relative ">
          <div>
            <h3 className="text-center font-robotoRegular text-base text-black">
              Upload Photo
            </h3>
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setShow(false)}>
              <CloseIcon />
            </div>
          </div>
          <div className="w-full h-[300px] rounded-md border border-slate-400 mt-5 p-2 box-border cursor-pointer">
            <div
              className="bg-slate-200 rounded-md w-full h-full flex items-center justify-center"
              onClick={() => fileRef.current.click()}>
              <div>
                <div className="flex justify-center">
                  <UploadIcon />
                </div>
                <h3>Upload you Profile Photo</h3>
                <input
                  type="file"
                  placeholder=""
                  hidden
                  ref={fileRef}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        {image && (
          <ImageCopper
            setImage={setImage}
            cropperRef={cropperRef}
            image={image}
            getCropData={getCropData}
          />
        )}
      </div>
    </>
  );
};

export default Modal;
