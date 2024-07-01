/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Grid, Link, Typography } from "@mui/material";

const footerStyles = css`
  padding: 1.5rem;
  background-color: #ffffff;
  @media (min-width: 640px) {
    padding: 2rem;
    background-color: rgb(51 65 85);
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
  color: #ffffff;
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
            <img src="/public/logo.svg" css={logoImgStyles} alt="Logo.svg" />
            <Typography
              variant="h6"
              component="span"
              fontWeight="bold"
              sx={{ color: "inherit", fontSize: "1.5rem" }}
            >
              QuickChat
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
                Contact
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link
                    href="https://github.com/sunilsaini87"
                    css={footerLinkStyles}
                  >
                    Github
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://x.com/Suniltanwar97"
                    css={footerLinkStyles}
                  >
                    X
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

      <Grid container justifyContent="center">
        <Typography
          variant="body2"
          css={footerLinkStyles}
          sx={{ color: "rgba(0, 0, 0, 0.54)", mb: { xs: 2, sm: 0 } }}
        >
          © {new Date().getFullYear()} <Link href="/">QuickChat™</Link>. All
          Rights Reserved.
        </Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
