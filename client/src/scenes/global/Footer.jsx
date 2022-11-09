import { useTheme, Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import "./footer.scss";
import Logo from "../../logo/qunwa.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  const navigate = useNavigate();
  const sendEmail = () => {
    window.location = "mailto:qunwa@emrani.co.uk";
  };
  return (
    <Box className="footerWrapper" backgroundColor={neutral.light}>
      <Box className="footerBox">
        <Box className="footerLogo">
          <img src={Logo} className="logo" onClick={() => navigate("/")} />
        </Box>
        <Box className="aboutUsBox">
          <Typography
            variant="h4"
            className="aboutUs"
            onClick={() => navigate("/aboutUs")}
          >
            About us
          </Typography>
          <Typography
            className="footerText"
            onClick={() => navigate("/reviews")}
          >
            Reviews
          </Typography>
          <Typography
            className="footerText"
            onClick={() => navigate("/shippingReturns")}
          >
            Shipping & Returns
          </Typography>
          <Typography
            className="footerText"
            onClick={() => navigate("/privacyPolicy")}
          >
            Privacy Policy
          </Typography>
        </Box>
        <Box className="contactUsBox">
          <Typography
            className="contactUs"
            onClick={() => navigate("/contactUs")}
          >
            Contact Us
          </Typography>
          <Typography
            className="footerText"
            onClick={() => navigate("/contactUs")}
          >
            Online: https://qunwa.emrani.co.uk/contact-us
          </Typography>
          <Typography className="footerText" onClick={() => sendEmail()}>
            Email: qunwa@emrani.co.uk
          </Typography>
          <Typography className="footerText">
            By mail: 36 Howse Drive Northeast, Calgary, AB T4B 3P6
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
