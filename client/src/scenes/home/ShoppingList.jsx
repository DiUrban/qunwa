import { useState, useEffect } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import "./shoppingList.scss";
const ShoppingList = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  async function getItems() {
    const items = await fetch(
      `${process.env.REACT_APP_SERVER_HOST}/api/items?populate=image`,
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }
  useEffect(() => {
    getItems();
  }, []);
  const topRatedItems = items.filter(
    (item) => item.attributes.topRated === true
  );
  const newArrivalItems = items.filter(
    (item) => item.attributes.newArrival === true
  );
  const bestSellerItems = items.filter(
    (item) => item.attributes.bestSeller === true
  );
  return (
    <Box className="shoppingListWrapper">
      <Typography variant="h3" className="featured">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        className="tabs"
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newAriivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box className="tabBox">
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newAriivals" &&
          newArrivalItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellerItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
