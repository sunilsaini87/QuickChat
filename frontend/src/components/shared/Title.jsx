/* eslint-disable react/prop-types */
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

export default Title;
