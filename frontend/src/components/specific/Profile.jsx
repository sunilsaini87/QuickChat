import PropTypes from "prop-types";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  if (!user) {
    return <Typography variant="body1">Loading...</Typography>; // Optional: Replace with a loading spinner or message
  }

  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        src={user?.avatar?.url ? transformImage(user.avatar.url) : ""}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={user?.bio || "Not provided"} />
      <ProfileCard
        heading={"Username"}
        text={user?.username || "Not provided"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={user?.name || "Not provided"}
        Icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={
          user?.createdAt ? moment(user.createdAt).fromNow() : "Not provided"
        }
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    bio: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]).isRequired,
  }),
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"black"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"rgb(17 24 39)"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

ProfileCard.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.element,
  heading: PropTypes.string.isRequired,
};

export default Profile;
