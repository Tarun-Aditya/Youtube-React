export const APP_URL = process.env.REACT_APP_API_URL;

export const UPLOAD_URL = `${APP_URL}/upload`;

export const GET_VIDEO_URL = `${APP_URL}/getFiles`;

export const ALLOWED_VIDEO_EXTENSIONS =
  /(\.mov|\.avi|\.wmv|\.flv|\.3gp|\.mp4|\.mpg|\.ogm|\.webm|\.mov|\.asx|\.mpeg|\.m4v|\.avi|\.ogv)$/i;
