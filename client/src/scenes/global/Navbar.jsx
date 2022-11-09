import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  MenuOutlined,
  PersonOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import Logo from "../../logo/qunwa.png";
import "./navbar.scss";
import { setIsCartOpen } from "../../state";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Box className="navbarWrapper">
      <Box className="navBox">
        <Box
          className="logoBox"
          onClick={() => navigate("/")}
          color={shades.secondary[500]}
        >
          <img src={Logo} alt="qunwa" className="logo" />
        </Box>
        <Box className="iconsBox">
          <IconButton className="iconButton">
            <SearchOutlined className="icons" />
          </IconButton>
          <IconButton className="iconButton">
            <PersonOutlined className="icons" />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-bade": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              className="iconButton"
              onClick={() => dispatch(setIsCartOpen({}))}
            >
              <ShoppingBagOutlined className="icons" />
            </IconButton>
          </Badge>
          <IconButton className="iconButton">
            <MenuOutlined className="icons" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
