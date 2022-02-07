import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none",
});

interface UploadButtonProps {
  handleChange: (e: any) => void;
}

const UploadButton: FC<UploadButtonProps> = (props: UploadButtonProps) => {
  const { handleChange } = props;
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          accept="video/*"
          id="contained-button-file"
          type="file"
          onChange={handleChange}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
  );
};

export default UploadButton;
