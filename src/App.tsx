import { FC } from "react";
import "./App.css";
import DisplayVideos from "./Components/DisplayVideos/DisplayVideos";
import FileUpload from "./Components/FileUpload/FileUpload";
import FileUploadContextProvider from "./Context/FileUploadContextProvider";

const App: FC = () => {
  return (
    <FileUploadContextProvider>
      <div className="App">
        <FileUpload />
        <DisplayVideos />
      </div>
    </FileUploadContextProvider>
  );
};

export default App;
