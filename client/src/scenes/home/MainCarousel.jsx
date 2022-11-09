import { Box, Typography, IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { shades } from "../../theme";
import "./mainCarousel.scss";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../carouselAssets", false, /\.(png|jpe?g|webp|svg)/)
);
const MainCarousel = () => {
  return (
    <Carousel
      className="carousel"
      autoPlay={true}
      transitionTime={3000}
      interval={8000}
      swipeable={true}
      emulateTouch={true}
      swipeScrollTolerance={5}
      centerSlidePercentage={1000}
      stopOnHover={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
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
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img src={texture} alt={`carousel-${index}`} className="image" />
          <Box className="textBox">
            <Typography color={shades.secondary[200]}>--NEW ITEMS</Typography>
            <Typography variant="h1">
              {texture.replace(/^[^A-Z]+/, "").replace(/\.(.*)/, "")}
            </Typography>
            <Typography className="discover" color={shades.secondary[300]}>
              Discover more
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
