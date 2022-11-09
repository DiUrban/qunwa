import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import { MarkEmailReadOutlined } from "@mui/icons-material";
import { useState } from "react";
import "./subscribe.scss";
import usePost from "../../hooks/usePost";

const Subscribe = () => {
  const { signup, handleChange, handleSignup } = usePost(
    "http://localhost:1337/api/email",
    "http://localhost:1337/api/news-letter-subscribers"
  );
  return (
    <Box className="subscribeWrapper">
      <IconButton>
        <MarkEmailReadOutlined className="icon" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Box className="subscribeBox">
        <InputBase
          className="inputBox"
          placeholder="Enter Your Email"
          onChange={handleChange}
          value={signup}
        />
        <Divider className="divider" orientation="vertical" />
        <Typography className="subscribeText" onClick={() => handleSignup()}>
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
