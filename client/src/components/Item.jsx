import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import "./item.scss";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();
  const { category, price, name, image, categoryAge } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box className="itemWrapper" width={width}>
      <Box
        className="itemButtons"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          className="image"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
        />
        <Box className="buttonsOuterBox" display={isHovered ? "block" : "none"}>
          <Box className="buttonInnerBox">
            {/*Amount*/}
            <Box
              className="amountButtons"
              backgroundColor={shades.neutral[100]}
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <Remove />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(Math.max(count + 1))}>
                <Add />
              </IconButton>
            </Box>
            {/*Button*/}
            <Button
              className="addButton"
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{ backgroundColor: shades.primary[300] }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="item">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/(A-Z)/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
