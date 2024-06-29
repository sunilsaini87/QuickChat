import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  description = "This is the Chat App called Chattu",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Title;
