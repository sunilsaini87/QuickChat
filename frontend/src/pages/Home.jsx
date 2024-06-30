import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Box
      bgcolor={grayColor}
      height={"100%"}
      sx={{
        border: "1px solid black",
      }}
    >
      <Typography p={"2rem"} variant="h5" textAlign={"center"} color={"white"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
