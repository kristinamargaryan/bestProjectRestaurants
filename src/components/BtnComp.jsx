import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function BtnComp(props) {
  let color;
  if(props.title === "SIGN-IN"){
color='#519259'
  }
  if(props.title === "SIGN-UP"){
    color='#F4CA16'
  }
  if(props.title === "About"){
    color='#455A64'
  }
  if(props.title === "Contact Us"){
    color='#CC397B'
  }
  if(props.title === "MY RESTAURANTS"){
    color='#4C83BB'
  }
  

  
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        style={{ 
          borderRadius:'15px',
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
          backgroundColor:color,
          padding:'5px',
          
          // border:'1px solid black',
          

        }}
        className="btn"
        size="medium"
        color="inherit"
        variant="inherit"
      >
        {props.title}
      </Button>
    </Stack>
  );
}
