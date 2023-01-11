import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import toast, { Toaster } from "react-hot-toast";
import Sheet from "react-modal-sheet";
import { client } from "services/ShopifyClient";
import Spinner from "components/Spinner/Spinner";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// const PRODUCT_SIZES = [
//   {
//     id: 0,
//     isSizeAvailable: true,
//     title: "XS",
//   },
//   {
//     id: 1,
//     isSizeAvailable: true,
//     title: "S",
//   },
//   {
//     id: 2,
//     isSizeAvailable: true,
//     title: "M",
//   },
//   {
//     id: 3,
//     isSizeAvailable: false,
//     title: "L",
//   },
// ];

// const PRODUCT_COLORS = [
//   {
//     id: 0,
//     isColorAvailable: true,
//     title: "Blue",
//   },
//   {
//     id: 1,
//     isColorAvailable: true,
//     title: "Red",
//   },
//   {
//     id: 2,
//     isColorAvailable: false,
//     title: "White",
//   },
// ];

const BuyNow = (props) => {
  const { selectedProduct, open, onClose, variants } = props;

  const [loading, setLoading] = useState(false);
  const [titleReadMore, setTitleReadMore] = useState(false);
  const [descriptionReadMore, setDescriptionReadMore] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  // const [selectedSize, setSelectedSize] = useState("");
  // const [selectedColor, setSelectedColor] = useState("");
  const [addToCartProducts, setAddToCartProducts] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState("");

  const handleAddToCartProducts = () => {
    let temp = [...addToCartProducts];
    let obj = {
      product: selectedProduct,
      quantity: selectedQuantity,
    };
    temp.push(obj);
    setAddToCartProducts(temp);
    localStorage?.setItem("addedToCartProducts", JSON.stringify(temp));
    toast.success("Added to Cart", {
      style: {
        border: "1px solid #11100d",
        padding: "16px",
        color: "#ffc323",
        background: "#11100d",
      },
      iconTheme: {
        primary: "#ffc323",
        secondary: "#11100d",
      },
    });
  };

  const handleCloseSheet = () => {
    setSelectedQuantity(1);
    // setSelectedSize("");
    // setSelectedColor("");
    setSelectedVariant("");
  };

  // const handleSizeChange = (val) => {
  //   setSelectedSize(val);
  // };

  // const handleColorChange = (val) => {
  //   setSelectedColor(val);
  // };

  function previousQuantity() {
    setSelectedQuantity((prevPage) => prevPage - 1);
  }

  function nextQuantity() {
    setSelectedQuantity((prevPage) => prevPage + 1);
  }

  const SELECTED_PRODUCT_VARIANTS = variants?.map((variant) => variant?.title);
  const SELECTED_PRODUCT_VARIANT_ID = variants?.find(
    (variant) => variant?.title === selectedVariant
  );

  const handleBuyNow = () => {
    setLoading(true);
    client.checkout.create().then((checkout) => {
      const checkoutID = checkout?.id;
      const lineItemsToAdd = [
        {
          variantId: SELECTED_PRODUCT_VARIANT_ID?.id,
          quantity: selectedQuantity,
          customAttributes: [],
        },
      ];
      client.checkout
        .addLineItems(checkoutID, lineItemsToAdd)
        .then((checkout) => {
          setLoading(false);
          window.open(checkout?.webUrl);
        });
    });
  };

  return loading ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: "#11100d",
      }}
    >
      <Spinner loading={loading} />
      <div className="spinnerInfoContainer">
        <h1>Hang Tight!</h1>
        <p>
          You’re being redirected to another page, it may take upto 5 second
        </p>
      </div>
    </div>
  ) : (
    <>
      <Toaster position="top-center" />
      <Sheet
        isOpen={open}
        onClose={() => onClose()}
        style={{
          maxWidth: "480px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Sheet.Container
          style={{
            background: "#11100d",
          }}
        >
          <div className="sheetProductDisplay">
            <div
              className="collectionSheetCloseContainer"
              onClick={() => {
                onClose();
                handleCloseSheet();
              }}
            >
              <i
                className="fas fa-times"
                style={{ color: "#595656" }}
                onClick={() => {
                  onClose();
                  handleCloseSheet();
                }}
              ></i>
            </div>
            {/* Image Carousel */}
            <div className="productDetailsInfoSection">
              <Carousel
                showDots
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListclassName={"InfluencerPosts_customDots"}
                autoPlay
                infinite
              >
                {[selectedProduct?.image]?.map((content, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={content}
                        alt="contentImage"
                        className="collectionPostContentImage"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="selectedProductInfoContainer">
              {/* Product Price */}
              <div>
                <div className="selectedProductPriceSection">
                  <h1 className="selectedProductPriceDisplay">
                    &#8377; {selectedProduct?.price}
                  </h1>
                  <h1 className="selectedProductOriginalPriceDisplay">
                    {selectedProduct?.originalPrice}
                  </h1>
                </div>
                {/* <h1 className="selectedProductDiscountHeader">
                  {selectedProduct?.discount || "67% off"}
                </h1> */}
              </div>
              {/* Product Title & Description */}
              <div>
                {titleReadMore ? (
                  <h1 className="selectedProductTitle">
                    {selectedProduct?.title}&nbsp;&nbsp;
                    <span onClick={() => setTitleReadMore(!titleReadMore)}>
                      Read Less
                    </span>
                  </h1>
                ) : (
                  <h1 className="selectedProductTitle">
                    {selectedProduct?.title?.substring(0, 30)}...&nbsp;&nbsp;
                    <span onClick={() => setTitleReadMore(!titleReadMore)}>
                      Read More
                    </span>
                  </h1>
                )}
                {descriptionReadMore ? (
                  <h1 className="selectedProductDescription">
                    {selectedProduct?.description}&nbsp;&nbsp;
                    <span
                      onClick={() =>
                        setDescriptionReadMore(!descriptionReadMore)
                      }
                    >
                      Read Less
                    </span>
                  </h1>
                ) : (
                  <h1 className="selectedProductDescription">
                    {selectedProduct?.description?.substring(0, 100)}
                    ...&nbsp;&nbsp;
                    <span
                      onClick={() =>
                        setDescriptionReadMore(!descriptionReadMore)
                      }
                    >
                      Read More
                    </span>
                  </h1>
                )}
              </div>
              {/* Product Quantity etc., Info */}
              <div>
                <div className="selectedProductDefaultContainer">
                  <h1 className="defaultHeaderText">Quantity</h1>
                  <div className="defaultProductContainer">
                    {selectedQuantity === 1 ? (
                      <button className="actionQuantityContainer">
                        <p>-</p>
                      </button>
                    ) : (
                      <button
                        className="actionQuantityContainer"
                        onClick={previousQuantity}
                      >
                        <p>-</p>
                      </button>
                    )}
                    <p className="selectedQuantity">{selectedQuantity}</p>
                    <button
                      className="actionQuantityContainer"
                      onClick={nextQuantity}
                    >
                      <p>+</p>
                    </button>
                  </div>
                </div>
                <div className="selectedProductDefaultContainer">
                  <div className="defaultProductContainer">
                    {SELECTED_PRODUCT_VARIANTS?.map((variant, index) => {
                      return (
                        <div key={index}>
                          <button
                            onClick={() => setSelectedVariant(variant)}
                            className={
                              selectedVariant === variant
                                ? "selectedProductCategory"
                                : "defaultProductCategory"
                            }
                          >
                            <p>{variant}</p>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <div className="selectedProductDefaultContainer">
                  <h1 className="defaultHeaderText">Color</h1>
                  <div className="defaultProductContainer">
                    {PRODUCT_COLORS?.map((color, index) => {
                      return (
                        <div key={index}>
                          {color?.isColorAvailable ? (
                            <button
                              onClick={() => handleColorChange(color)}
                              className={
                                selectedColor === color
                                  ? "selectedProductCategory"
                                  : "defaultProductCategory"
                              }
                            >
                              <p>{color?.title}</p>
                            </button>
                          ) : (
                            <button className="notAvailableProductCategory">
                              <p>{color?.title}</p>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div> */}
              </div>
            </div>
            <div className="actionButtonsContainer">
              <button
                className="addToBagBtn"
                onClick={() => {
                  onClose();
                  handleAddToCartProducts();
                  handleCloseSheet();
                }}
              >
                <p>Add To Bag</p>
              </button>
              <button
                className="buyNowBtn"
                onClick={() => {
                  onClose();
                  handleCloseSheet();
                  handleBuyNow(selectedProduct?.id);
                }}
              >
                <p>Buy Now</p>
              </button>
            </div>
          </div>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default BuyNow;
