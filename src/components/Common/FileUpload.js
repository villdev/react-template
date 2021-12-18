import React, { useState, createRef, useEffect } from "react";
import styled from "styled-components";
import EditIcon from "../../images/icon_edit_primary.svg";
import {
  convertBytesToMegaBytes,
  MAX_IMAGE_FILE_SIZE,
} from "../../utils/fileUpload";
import TextBox from "./TextBox";

// interface Props {
//   // isUploading: (uploading: boolean) => void;
//   uploadedFile?: (fileUrl: string) => void;
//   component?: React.ReactElement;
//   label: string;
//   customFileChange?: (file: File) => void;
//   error?: string;
//   validExt: string[];
// }

// interface FileAcceptType {
//   [key: string]: string;
// }

const AvatarWrapper = styled.div`
  & {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #808080;
    position: relative;
    cursor: pointer;
  }
  &:after {
    content: "";
    background-color: black;
    position: absolute;
    right: -10%;
    bottom: -8%;
    background-image: url(${EditIcon});
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const fileAcceptMap = {
  pdf: "application/pdf",
  word: "application/msword",
  excel:
    "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  image: "image/*",
};

const FileUpload = ({
  // isUploading,
  //   uploadedFile,
  avatar,
  label,
  customFileChange,
  error,
  validExt,
}) => {
  const [imgFile, setImgFile] = useState("");

  const fileUploadRef = createRef();

  //   const fileUploadState = useSelector<AppState>(
  //     (state) => state.fileUpload,
  //   ) as FileUploadState;

  //   const dispatch = useDispatch();

  const onFileChange = (file) => {
    if (file) {
      if (convertBytesToMegaBytes(file.size) <= MAX_IMAGE_FILE_SIZE) {
        setImgFile(file);
        // dispatch(fileUploadSubmit(file));
      } else {
        // dispatch(setError(`Max. image size is ${MAX_IMAGE_FILE_SIZE}MB`));
      }
    }
  };

  const onChange = (value) => {
    if (value) {
      // isUploading(true);
    } else {
      // isUploading(false);
    }
  };

  let accepetedFiles = validExt.reduce((acc, ext) => {
    return acc + fileAcceptMap[ext] + ",";
  }, "");

  //   useEffect(() => {
  //     if (uploadedFile && fileUploadState.data) {
  //       uploadedFile(fileUploadState.data.url);
  //     }
  //   }, [fileUploadState.data]);

  // useEffect(() => {
  //   isUploading(fileUploadState.isUploading);
  // }, [fileUploadState.isUploading]);
  return (
    <React.Fragment>
      {!avatar ? (
        <TextBox
          acceptFiles={accepetedFiles}
          onChange={onChange}
          type={"file"}
          label={label || "Upload"}
          onFileChange={customFileChange || onFileChange}
          className="w-100"
          error={error}
        />
      ) : (
        <React.Fragment>
          <AvatarWrapper onClick={() => fileUploadRef.current.click()}>
            {imgFile && <img src={URL.createObjectURL(imgFile)} alt="" />}
          </AvatarWrapper>
          <input
            ref={fileUploadRef}
            id="fileUpload"
            style={{ display: "none" }}
            onChange={(e) => e.target.files && onFileChange(e.target.files[0])}
            type="file"
            accept={accepetedFiles}
          ></input>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default FileUpload;
