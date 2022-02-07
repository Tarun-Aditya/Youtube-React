import { ALLOWED_VIDEO_EXTENSIONS } from "../Constants";

export const isVideoFileValid = (file: any) => {
  if (!ALLOWED_VIDEO_EXTENSIONS.exec(file.name)) {
    return false;
  }

  return true;
};
