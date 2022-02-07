import { Button } from "@mui/material";
import React, { useContext } from "react";

import { FileUploadContext } from "../../Context/FileUploadContextProvider";
import UploadButton from "../../core/UploadButton";
import { isVideoFileValid } from "../../Utils/file-utils";

const FileUpload = () => {
  const { uploadFile, fileInvalid, setFileInvalid, file, setFile } =
    useContext(FileUploadContext);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const isFileValid = isVideoFileValid(file);

    if (!isFileValid) return;

    setFileInvalid(false);
    setFile(file);
  };

  return (
    <div style={{ margin: "2%" }}>
      <UploadButton handleChange={handleChange} />
      {file.name}

      <Button variant="contained" onClick={uploadFile} disabled={fileInvalid}>
        upload
      </Button>
    </div>
  );
};

export default FileUpload;
