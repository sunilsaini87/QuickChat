/* eslint-disable react/prop-types */
import { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";
import { motion } from "framer-motion";

const ChatItem = ({
  avatar = {},
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  // Ensure avatar is an object
  const avatarObject = typeof avatar === "string" ? { url: avatar } : avatar;

  return (
    <Link
      sx={{ padding: 0, backgroundColor: "rgb(161 161 170)" }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "rgb(203 213 225)" : "unset",
          color: sameSender ? "black" : "unset",
          position: "relative",
          padding: "1rem",
        }}
      >
        <AvatarCard avatar={avatarObject} />

        <Stack>
          <Typography variant="body1">{name}</Typography>
          {newMessageAlert && (
            <Typography variant="body2" color="textSecondary">
              {newMessageAlert.count} New Message
              {newMessageAlert.count > 1 ? "s" : ""}
            </Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default memo(ChatItem);
