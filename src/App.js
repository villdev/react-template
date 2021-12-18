import React from "react";
import Button from "./components/Common/Button";
import ErrorMessage from "./components/Common/ErrorMessage";
import Loader from "./components/Common/Loader";
import SelectBox from "./components/Common/SelectBox";
import TextBox from "./components/Common/TextBox";
import TextArea from "./components/Common/TextArea";
import "./css/style.css";
import FileUpload from "./components/Common/FileUpload";
import { Toaster } from "react-hot-toast";
import { successNotify } from "./components/Common/Toast";

export default function App() {
  return (
    <div>
      <h1>test</h1>
      <Loader />
      <Button onClick={() => successNotify("WORKING!")} />
      <Button text={"test"} loading={true} />
      <Button text={"test"} disabled={true} />
      <ErrorMessage error={"test"} />
      <SelectBox
        values={["test", "test2"]}
        onChange={() => {}}
        placeholder={"placeholder"}
      />
      <TextBox onChange={() => {}} />
      <TextArea onChange={() => {}} />
      <FileUpload validExt={["image"]} />
      <FileUpload validExt={["image"]} avatar={true} />
      <Toaster position="bottom-center" />
    </div>
  );
}
