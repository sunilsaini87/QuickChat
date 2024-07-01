import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "QuickChat",
  description = "Enjoy secure and private messaging with QuickChat.",
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
