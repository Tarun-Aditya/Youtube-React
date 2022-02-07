import { CSSProperties, useContext } from "react";
import { FileUploadContext } from "../../Context/FileUploadContextProvider";

import { VideoFile } from "../../core/interfaces";

const VIDEO_WIDTH = "400";
const VIDEO_HEIGHT = "225";
const VIDEO_THUMBNAIL_DEFAULT_TIMESTAMP = 2;

const DisplayVideos = () => {
  const { videos } = useContext(FileUploadContext);

  if (!videos) return <></>;

  const onHover = (event: any): void => event.target.play();

  const onMouseOut = (event: any): void => event.target.pause();

  const onplay = (event: any): void => {
    if (event.target.currentTime < 3) {
      event.target.currentTime = 0;
    }
  };

  return (
    <div style={styleVideoContainer}>
      {videos.length > 0 &&
        videos.map((file: VideoFile) => (
          <div style={styleVideo}>
            <video
              width={VIDEO_WIDTH}
              height={VIDEO_HEIGHT}
              muted
              key={file.name}
              onMouseOver={onHover}
              onMouseOut={onMouseOut}
              onPlay={onplay}
              src={`${file.path}#t=${VIDEO_THUMBNAIL_DEFAULT_TIMESTAMP}`}
              controls
            />
          </div>
        ))}
    </div>
  );
};

const styleVideoContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
};

const styleVideo: CSSProperties = { paddingBottom: "2px" };

export default DisplayVideos;
