import axios from "axios";
import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { GET_VIDEO_URL, UPLOAD_URL } from "../Constants";
import { VideoFile } from "../core/interfaces";

interface FileUploadContextProps {
  isFileUploaded: boolean;
  setIsFileUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  fileInvalid: boolean;
  uploadFile: () => Promise<void>;
  getVideos: () => Promise<void>;
  videos: VideoFile[];
  setFileInvalid: React.Dispatch<React.SetStateAction<boolean>>;

  file: any;
  setFile: React.Dispatch<React.SetStateAction<any>>;
}

export const FileUploadContext = createContext<FileUploadContextProps>(
  {} as FileUploadContextProps
);

const FileUploadContextProvider: FC = (props) => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const [file, setFile] = useState("");
  const [fileInvalid, setFileInvalid] = useState(true);
  const [videos, setVideos] = useState<VideoFile[]>([]);

  const getVideos = async (): Promise<void> => {
    const response = await axios.get(GET_VIDEO_URL);

    setVideos(response.data);
    setIsFileUploaded(false);
  };

  const uploadFile = async (): Promise<void> => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(UPLOAD_URL, formData, {});

      if (!response) return;

      setFileInvalid(true);
      setIsFileUploaded(true);
      setFile("");
    } catch (e) {}
  };

  useEffect(() => {
    getVideos();
  }, [isFileUploaded]);

  return (
    <FileUploadContext.Provider
      value={{
        isFileUploaded,
        setIsFileUploaded,
        fileInvalid,
        uploadFile,
        videos,
        getVideos,
        setFileInvalid,
        file,
        setFile,
      }}
    >
      {props.children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadContextProvider;
