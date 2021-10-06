import React, {useState} from "react";
import {Box,TextField} from "@mui/material";
import Hello from "./Tab";
import RemoveIcon from '@mui/icons-material/Remove';

const ChatWidget = () => {
  const [visibility, setVisibility]=useState(false);
  return (
    <Box>
      <button onClick={()=>{setVisibility(true)}}>Click me!</button>
      <button style={{backgroundColor:"white"}}><i class="far fa-comment-alt fa-lg" /> </button> 
    <Box style={{ border: "1px solid black", width: "380px", height: "570px", marginLeft:"450px",display:visibility===true?"":"none" }}>
      <Box
        style={{
          border: "1px solid black",
          backgroundColor: "#804294",
          width: "380px",
          height: "42px",
          color: "white",
          display:"flex",
          justifyContent:"space-between"

        }}
      >
        <i class="far fa-comment fa-lg" style={{marginTop:"17px"}}></i>
          <span style={{marginTop:"7px"}}>Task ID:235897 Shubham Singh</span>
          <RemoveIcon style={{float:"right",marginRight:"5px"}} onClick={()=>{setVisibility(false)}} />
       
      </Box>
      <Box style={{paddingRight:"15px"}}>
        <Hello />
      </Box>
      <Box style={{textAlign:"center",position:"fixed",marginTop:"40px",marginLeft:"10px"}}>
      <TextField
      style={{width:"350px",height:"50px"}}
        InputProps={{endAdornment: <i class="fas fa-arrow-circle-right fa-lg"></i>}}
      />
      </Box>
    </Box>
    {/* <i class="fas fa-arrow-alt-down"></i>
    <button style={{backgroundColor:"white"}}><i class="far fa-comment-alt fa-lg" /> </button> */}
    </Box> 
  );
};
export default ChatWidget;
