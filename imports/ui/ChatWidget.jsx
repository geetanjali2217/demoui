import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Hello from "./Hello";

const ChatWidget = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box style={{ border: "1px solid black", width: "380px", height: "570px" }}>
      <Box
        style={{
          border: "1px solid black",
          backgroundColor: "#804294",
          width: "380px",
          height: "42px",
        }}
      >
        <p style={{ color: "white" }}>
          <img
            src="https://dw-iconusers.flaticon.com/54122/54122415/1633350526084.svg?token=exp=1633351452~hmac=b7dbcb27c84d39e4247177edf1976a79"
            height="20px"
          ></img>{" "}
          <span>Task ID:235897 Shubham Singh</span>{" "}
          <img src="https://dw-iconusers.flaticon.com/54122/54122415/1633350661128.svg?token=exp=1633351596~hmac=c715439695c6ac97f6da6d248e9daada"
          height="20px"></img>
        </p>
      </Box>
      <Box style={{paddingRight:"15px"}}>
        <Hello />
      </Box>
      <Box style={{textAlign:"center"}}>
          <TextField style={{width:"360px"}}></TextField>
      </Box>
    </Box>
  );
};
export default ChatWidget;
