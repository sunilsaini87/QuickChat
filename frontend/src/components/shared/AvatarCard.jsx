/* eslint-disable react/prop-types */
import { Avatar, AvatarGroup, Stack } from "@mui/material";
import { transformImage } from "../../lib/features";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <AvatarGroup max={max}>
        {avatar.slice(0, max).map((avatarItem, index) => (
          <Avatar
            key={avatarItem.id || `avatar-${index}`}
            src={transformImage(avatarItem.image)}
            alt={`Avatar ${index + 1}`}
            sx={{
              width: { xs: "3rem", sm: "3rem" },
              height: { xs: "3rem", sm: "3rem" },
              position: "relative",
              left: `${index * 0.5}rem`, // Adjust positioning as needed
            }}
          />
        ))}
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
