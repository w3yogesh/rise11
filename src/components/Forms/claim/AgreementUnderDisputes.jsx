import React from "react";
import { Typography, Button, Box } from "@mui/material";
import MyCard from "./MyCard";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import FileUpload from "../../Forms/FileUpload";
const AgreementUnderDisputes = () => {
  return (
    <MyCard
      title="Agreement under Disputes"
      Icon={
        <TextSnippetOutlinedIcon
          style={{ fontSize: "30px", color: "#1e83ff" }}
        />
      }
    >
     <Box sx={{
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
     }}>
      <FileUpload title={'Upload the Contract'}/>
      <FileUpload title={'Aribiration Agreement'} />
      </Box> 
    </MyCard>
  );
};

export default AgreementUnderDisputes;
