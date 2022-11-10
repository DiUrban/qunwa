import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  IconButton,
  Box,
  Typography,
  useTheme,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Add,
  Remove,
  FavoriteBorderOutlined,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useNavigate, useParams } from "react-router-dom";
import Item from "../../components/Item";
import "./itemDetails.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ItemDetails() {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `https://localhost:1337/api/items/${itemId}?populate=descImages`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `https://localhost:1337/api/items/?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]);
  if (item != null) {
    return (
      <Box className="itemDetailsWrapper">
        <Box className="itemBox">
          {/*images*/}
          <Box className="itemImageBox">
            <Carousel
              className="carousel"
              autoPlay={true}
              infiniteLoop={false}
              showThumbs={false}
              showStatus={false}
              stopOnHover={true}
              onSwipeMove={true}
              transitionTime="2000"
              showIndicators={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton onClick={onClickHandler} className="prevButton">
                  <NavigateBefore className="icon" />
                </IconButton>
              )}
              renderArrowNext={(onClickHandler, hasNext, label) => (
                <IconButton onClick={onClickHandler} className="nextButton">
                  <NavigateNext className="icon" />
                </IconButton>
              )}
            >
              {Object.values(item.attributes.descImages.data).map(
                (texture, index) => (
                  <Box key={`carousel-image-${index}`}>
                    <img
                      src={`https://localhost:1337${texture.attributes.formats.medium.url}`}
                      alt={`carousel-${index}`}
                      className="image"
                    />
                  </Box>
                )
              )}
            </Carousel>
            {/*Actions */}
          </Box>
          <Box className="actionsBox">
            <Box className="innerBox">
              <Box>Home/Item</Box>
              <Box>Prev Next</Box>
            </Box>
            <Box className="descBox">
              <Typography variant="h3">{item?.attributes?.name}</Typography>
              <Typography>${item?.attributes?.price}</Typography>
              <Typography className="descText">
                {item?.attributes?.arabicDesc}
              </Typography>
              <Typography className="descText">
                {item?.attributes?.englishDesc}
              </Typography>
            </Box>
            <Box className="countOuterbox">
              <Box
                className="countInnerBox"
                border={`1.5px solid ${shades.neutral[300]}`}
              >
                <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                  <Remove />
                </IconButton>
                <Typography className="count">{count}</Typography>
                <IconButton onClick={() => setCount(Math.max(count + 1))}>
                  <Add />
                </IconButton>
              </Box>
              <Button
                className="addToCartButton"
                onClick={() =>
                  dispatch(addToCart({ item: { ...item, count } }))
                }
              >
                ADD TO CART
              </Button>
            </Box>
            <Box>
              {/*<Box className="wishList">
                <FavoriteBorderOutlined />
                <Typography className="wishListText">
                  ADD TO WISHLIST
                </Typography>
              </Box>*/}
              <Typography>CATEGORIES: {item.attributes.category}</Typography>
            </Box>
          </Box>
        </Box>
        {/*INFORMATION*/}
        <Box className="informationTabBox">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="DESCRIPTION" value="description" />
            <Tab label="REVIEWS" value="reviews" />
          </Tabs>
        </Box>
        <Box className="informationBox">
          {value === "description" && <div>{item.attributes.englishDesc}</div>}
          {value === "reviews" && <div>{item?.attributes?.reviews}</div>}
        </Box>
        {/*RELATED ITEMS*/}
        <Box className="relatedItemsBox">
          <Typography variant="h3" fontWeight="bold">
            Related Products
          </Typography>
          <Box className="relatedItems">
            {items.slice(0, 3).map((item, i) => (
              <Item key={`${item.name}-${i}`} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default ItemDetails;
