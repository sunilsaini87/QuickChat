/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Grid, Link, Typography, Divider } from "@mui/material";

const footerStyles = css`
  padding: 1.5rem;
  background-color: #ffffff;
  @media (min-width: 640px) {
    padding: 2rem;
    background-color: #333333;
    color: #ffffff;
  }
`;

const logoStyles = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const logoImgStyles = css`
  margin-right: 0.75rem;
  height: 2rem; /* Adjust as needed */
`;

const resourcesColumnStyles = css`
  margin-bottom: 1.5rem;
`;

const footerLinkStyles = css`
  color: #666666;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <footer css={footerStyles}>
      <Grid container justifyContent="center" maxWidth="xl">
        <Grid item xs={12} md={6}>
          <div css={logoStyles}>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              css={logoImgStyles}
              alt="FlowBite Logo"
            />
            <Typography
              variant="h6"
              component="span"
              fontWeight="bold"
              sx={{ color: "inherit", fontSize: "1.5rem" }}
            >
              Flowbite
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} sx={{ mt: { xs: 4, md: 0 } }}>
            <Grid item xs={6} md={4} css={resourcesColumnStyles}>
              <Typography
                variant="overline"
                fontWeight="bold"
                sx={{ color: "inherit", mb: 1 }}
              >
                Resources
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link href="https://flowbite.com" css={footerLinkStyles}>
                    Flowbite
                  </Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/" css={footerLinkStyles}>
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} md={4} css={resourcesColumnStyles}>
              <Typography
                variant="overline"
                fontWeight="bold"
                sx={{ color: "inherit", mb: 1 }}
              >
                Follow us
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link
                    href="https://github.com/themesberg/flowbite"
                    css={footerLinkStyles}
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    css={footerLinkStyles}
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4} css={resourcesColumnStyles}>
              <Typography
                variant="overline"
                fontWeight="bold"
                sx={{ color: "inherit", mb: 1 }}
              >
                Legal
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link href="#" css={footerLinkStyles}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" css={footerLinkStyles}>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        sx={{ my: { xs: 3, md: 4 }, borderColor: "rgba(0, 0, 0, 0.12)" }}
      />
      <Grid container justifyContent="center">
        <Typography
          variant="body2"
          sx={{ color: "rgba(0, 0, 0, 0.54)", mb: { xs: 2, sm: 0 } }}
        >
          © {new Date().getFullYear()}{" "}
          <Link href="https://flowbite.com" css={footerLinkStyles}>
            Flowbite™
          </Link>
          . All Rights Reserved.
        </Typography>
        <Grid item xs={12} sm={6} textAlign="center">
          <Grid container spacing={2} justifyContent="center">
            {/* Social Icons Here */}
            {/* Example: Replace with your own SVG icons */}
            <Grid item>
              <Link href="#" css={footerLinkStyles}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
