import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../../AxiosInstance";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import toast, { Toaster } from "react-hot-toast";
import {
  CollectionContainer,
  CollectionProductBuyNowButton,
  CollectionProductName,
  CollectionProductPrice,
  CollectionProductsContainer,
  CollectionProductsDisplay,
  CollectionProductSection,
  CollectionProductsInfo,
  CollectionTitle,
  ProductDetailsInfoSection,
  ProductDetailsSizeContainer,
  ProductDetailsSizeHeader,
  ProductDescription,
  ButtonsContainer,
  AddToBagButton,
  BuyNowButton,
  SheetProductDisplay,
  QuantityContainer,
  QuantityValue,
  CollectionCarouselContainer,
  CollectionPostsContentImage,
  CollectionSheetCloseContainer,
  CollectionPriceContainer,
  CollectionPriceSection,
  CollectionMRP,
  CollectionOriginalPrice,
  CollectionDiscountText,
  CollectionProductInfoSection,
  CollectionProductTitle,
  SpinnerInfoContainer,
} from "./Collections.components";
import Sheet from "react-modal-sheet";
import SideBar from "../../../components/SideBar";
import Spinner from "../../../components/Spinner/Spinner";
import Loader from "../../../components/Loader";
import Product1 from "../../../assets/NewLayout/Product1.svg";
import Product2 from "../../../assets/NewLayout/Product2.svg";
import Product3 from "../../../assets/NewLayout/Product3.svg";
import Client from "shopify-buy";
// import { CarouselContainer, PostsContentImage } from "./Posts.components";

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

export const CartContext = createContext();

const COLLECTION_DATA = [
  {
    id: 0,
    collectionName: "Beauty Products",
    collectionProducts: [
      {
        id: 0,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17097806/2022/2/10/aa9f5212-f2eb-4531-b836-1df0c3d3fe2d1644484313283MastHarbourMenWhiteStripedSneakers1.jpg",
        name: "Anouk Women Pink Floral Printed Bell Sleeves Kurta",
        price: "₹ 929",
      },
      {
        id: 1,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11752834/2022/4/25/ad749a37-5563-426a-8595-17e97a1e3f131650883720089MastHarbourMenWhiteSneakers1.jpg",
        name: "Sangria Women Green & Golden Ethnic Motifs Printed Kurta",
        price: "₹ 809",
      },
      {
        id: 2,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16204284/2022/4/11/d096fd54-551f-49bf-95f1-9e103c1b773e1649673356852-Mast--Harbour-Men-White-Textured-Sneakers-1861649673356535-1.jpg",
        name: "HERE&NOW Women Ethnic Motifs Polyester Hyper Texture Kurta Set",
        price: "₹ 869",
      },
      {
        id: 3,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12542722/2022/7/15/c07376d3-f049-482d-9974-50d8512f62bc1657861312644MastHarbourMenBlueSlimTaperedFitMid-RiseCleanLookStretchable1.jpg",
        name: "Anouk Women Beige Kurta with Trousers & With Dupatta",
        price: "₹ 1110",
      },
      {
        id: 4,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9690789/2019/11/14/1e18a4d5-8213-4125-91b9-2ff3307203e21573730779745-Mast--Harbour-Women-Mustard-Yellow--Cream-Coloured-Colourblo-1.jpg",
        name: "Anouk Women Pink & White Floral Printed Pure Cotton Kurta with Palazzos",
        price: "₹ 959",
      },
    ],
  },
  {
    id: 1,
    collectionName: "Western Products",
    collectionProducts: [
      {
        id: 0,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17097806/2022/2/10/aa9f5212-f2eb-4531-b836-1df0c3d3fe2d1644484313283MastHarbourMenWhiteStripedSneakers1.jpg",
        name: "Anouk Women Pink Floral Printed Bell Sleeves Kurta",
        price: "₹ 929",
      },
      {
        id: 1,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11752834/2022/4/25/ad749a37-5563-426a-8595-17e97a1e3f131650883720089MastHarbourMenWhiteSneakers1.jpg",
        name: "Sangria Women Green & Golden Ethnic Motifs Printed Kurta",
        price: "₹ 809",
      },
      {
        id: 2,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16204284/2022/4/11/d096fd54-551f-49bf-95f1-9e103c1b773e1649673356852-Mast--Harbour-Men-White-Textured-Sneakers-1861649673356535-1.jpg",
        name: "HERE&NOW Women Ethnic Motifs Polyester Hyper Texture Kurta Set",
        price: "₹ 869",
      },
      {
        id: 3,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12542722/2022/7/15/c07376d3-f049-482d-9974-50d8512f62bc1657861312644MastHarbourMenBlueSlimTaperedFitMid-RiseCleanLookStretchable1.jpg",
        name: "Anouk Women Beige Kurta with Trousers & With Dupatta",
        price: "₹ 1110",
      },
      {
        id: 4,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9690789/2019/11/14/1e18a4d5-8213-4125-91b9-2ff3307203e21573730779745-Mast--Harbour-Women-Mustard-Yellow--Cream-Coloured-Colourblo-1.jpg",
        name: "Anouk Women Pink & White Floral Printed Pure Cotton Kurta with Palazzos",
        price: "₹ 959",
      },
    ],
  },
  {
    id: 2,
    collectionName: "Ethnic Wear Products",
    collectionProducts: [
      {
        id: 0,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17097806/2022/2/10/aa9f5212-f2eb-4531-b836-1df0c3d3fe2d1644484313283MastHarbourMenWhiteStripedSneakers1.jpg",
        name: "Anouk Women Pink Floral Printed Bell Sleeves Kurta",
        price: "₹ 929",
      },
      {
        id: 1,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11752834/2022/4/25/ad749a37-5563-426a-8595-17e97a1e3f131650883720089MastHarbourMenWhiteSneakers1.jpg",
        name: "Sangria Women Green & Golden Ethnic Motifs Printed Kurta",
        price: "₹ 809",
      },
      {
        id: 2,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16204284/2022/4/11/d096fd54-551f-49bf-95f1-9e103c1b773e1649673356852-Mast--Harbour-Men-White-Textured-Sneakers-1861649673356535-1.jpg",
        name: "HERE&NOW Women Ethnic Motifs Polyester Hyper Texture Kurta Set",
        price: "₹ 869",
      },
      {
        id: 3,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12542722/2022/7/15/c07376d3-f049-482d-9974-50d8512f62bc1657861312644MastHarbourMenBlueSlimTaperedFitMid-RiseCleanLookStretchable1.jpg",
        name: "Anouk Women Beige Kurta with Trousers & With Dupatta",
        price: "₹ 1110",
      },
      {
        id: 4,
        thumbnail:
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9690789/2019/11/14/1e18a4d5-8213-4125-91b9-2ff3307203e21573730779745-Mast--Harbour-Women-Mustard-Yellow--Cream-Coloured-Colourblo-1.jpg",
        name: "Anouk Women Pink & White Floral Printed Pure Cotton Kurta with Palazzos",
        price: "₹ 959",
      },
    ],
  },
];

const SELECTED_PRODUCT_DATA = {
  title: "Checked Cotton Shirt",
  imageURLs: [Product1, Product2, Product3],
  name: "Mast and Harbour and Tan Brown Solid and Tan Brown Solid Harbour and Tan Brown Solid and Tan Brown Solid ",
  description:
    "100% Cotton. Available in plain or floral print. Straight design. Mao neckline. Long sleeve. Button fastening on the front section",
  size: ["XS", "S", "M", "L"],
  color: ["Blue", "White", "Green", "Yellow"],
  originalPrice: "240",
  mrp: "200",
};

const Collections = () => {
  const client = Client.buildClient({
    domain: "g5-0-1.myshopify.com",
    storefrontAccessToken: "5c9eec032ca6e13f2eec12c7788f18ee",
  });
  const { brand, slug, username } = useParams();
  const [loading, setLoading] = useState(false);
  const [userCollectionData, setUserCollectionData] = useState([]);
  const [selectedProductData, setSelectedProductData] = useState({});
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [titleReadMore, setTitleReadMore] = useState(false);
  const [descriptionReadMore, setDescriptionReadMore] = useState(false);

  useEffect(() => {
    let fetchUserPostsData = async () => {
      setLoading(true);
      let result = await axiosInstance.get(
        `/${brand}/collections/${slug}/${username}`
      );
      setUserCollectionData(result?.data);
      setLoading(false);
    };
    fetchUserPostsData();
  }, [brand, slug, username]);

  const handleCloseSheet = () => {
    setOpen(false);
    setQuantity(1);
    setSelectedSize("");
    setSelectedColor("");
  };

  const handleSizeChange = (val) => {
    setSelectedSize(val);
  };

  const handleColorChange = (val) => {
    setSelectedColor(val);
  };

  function previousQuantity() {
    setQuantity((prevPage) => prevPage - 1);
  }

  function nextQuantity() {
    setQuantity((prevPage) => prevPage + 1);
  }

  const handleChekcout = () => {
    client.checkout.create().then((checkout) => {
      // Do something with the checkout
      console.log(checkout, "Checkout");
      const checkoutID = checkout?.id;
      console.log(checkoutID, "CID");
      const productId = "gid://shopify/Product/8069698126116";
      // Fetch Product Data
      client.product.fetch(productId).then((product) => {
        // Do something with the product
        console.log(product, "Product");
        const lineItemsToAdd = [
          {
            variantId: product?.variants?.[0]?.id,
            quantity: 1,
            customAttributes: [],
          },
        ];
        // Add an item to the checkout
        client.checkout
          .addLineItems(checkoutID, lineItemsToAdd)
          .then((checkout) => {
            // Do something with the updated checkout
            console.log(checkout.lineItems, "Line Items"); // Array with one additional line item
          });
      });
    });
  };

  const ADDED_TO_CART = [];
  const handleAddToCart = () => {
    ADDED_TO_CART?.push(SELECTED_PRODUCT_DATA);
    localStorage?.setItem("addedToCartData", JSON.stringify(ADDED_TO_CART));
    setQuantity(1);
    setSelectedSize("");
    setSelectedColor("");
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

  const handleCheckOut = () => {
    client.checkout.create().then((checkout) => {
      // Do something with the checkout
      console.log(checkout);
    });
  };

  const handleBuyNow = () => {
    setLoading(true);
    client.checkout.create().then((checkout) => {
      const checkoutID = checkout?.id;
      const productId = "gid://shopify/Product/8069698126116";
      client.product.fetch(productId).then((product) => {
        const lineItemsToAdd = [
          {
            variantId: product?.variants?.[0]?.id,
            quantity: quantity,
            customAttributes: [],
          },
        ];
        client.checkout
          .addLineItems(checkoutID, lineItemsToAdd)
          .then((checkout) => {
            console.log(checkout, "Checkout");
            setLoading(false);
            // window.location.pathname(checkout?.webUrl);
            window.open(checkout?.webUrl);
          });
      });
    });
  };

  return loading ? (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "flex-start",
    //     alignItems: "flex-start",
    //     background: "rgba(0, 0, 0, 0.5)",
    //   }}
    // >
    //   <Spinner loading={loading} />
    //   <SpinnerInfoContainer>
    //     <h1>Hang Tight!</h1>
    //     <p>
    //       You’re being redirected to another page, it may take upto 5 second
    //     </p>
    //   </SpinnerInfoContainer>
    // </div>
    <Loader loading={loading} />
  ) : (
    <CartContext.Provider value={ADDED_TO_CART}>
      <Toaster position="top-center" />
      <CollectionContainer>
        <div>
          {userCollectionData?.map((collection, index) => {
            return (
              <div key={index}>
                <CollectionTitle>{collection?.title}</CollectionTitle>
                <CollectionProductsContainer>
                  {collection?.meta?.map((product, index) => {
                    return (
                      <CollectionProductSection
                        key={index}
                        thumbnail={product?.image}
                      >
                        <CollectionProductsDisplay>
                          <CollectionProductsInfo>
                            <CollectionProductName>
                              {product?.description?.substring(0, 20)}...
                            </CollectionProductName>
                            <CollectionProductPrice>
                              {product?.price}
                            </CollectionProductPrice>
                          </CollectionProductsInfo>
                          <CollectionProductBuyNowButton
                            onClick={() => {
                              setOpen(true);
                              setSelectedProductData(product);
                            }}
                          >
                            <p>{product?.urlText}</p>
                          </CollectionProductBuyNowButton>
                        </CollectionProductsDisplay>
                      </CollectionProductSection>
                    );
                  })}
                </CollectionProductsContainer>
              </div>
            );
          })}
          {/* -------------------------------------------------------SELECTED PRODUCT DATA DISPLAY--------------------------------------------- */}
          <Sheet
            isOpen={open}
            onClose={() => setOpen(false)}
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
              <SheetProductDisplay>
                <CollectionSheetCloseContainer
                  onClick={() => handleCloseSheet()}
                >
                  <i className="fas fa-times" style={{ color: "#595656" }}></i>
                </CollectionSheetCloseContainer>
                <ProductDetailsInfoSection>
                  <CollectionCarouselContainer>
                    <Carousel
                      showDots
                      responsive={responsive}
                      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                      dotListclassName={"Posts_customDots"}
                      autoPlay
                      infinite
                      // autoPlaySpeed={1000}
                    >
                      {[selectedProductData?.image]?.map((content, index) => {
                        return (
                          <div key={index}>
                            <CollectionPostsContentImage src={content} />
                          </div>
                        );
                      })}
                    </Carousel>
                  </CollectionCarouselContainer>
                  <CollectionProductInfoSection>
                    <CollectionPriceContainer>
                      <CollectionPriceSection>
                        <CollectionMRP>
                          &#8377;&nbsp;{selectedProductData?.mrp || ""}
                        </CollectionMRP>
                        <CollectionOriginalPrice>
                          {selectedProductData?.price}
                        </CollectionOriginalPrice>
                      </CollectionPriceSection>
                      <CollectionDiscountText>67% OFF</CollectionDiscountText>
                    </CollectionPriceContainer>
                    {titleReadMore ? (
                      <CollectionProductTitle>
                        {selectedProductData?.title}&nbsp;&nbsp;
                        <span
                          onClick={() => setTitleReadMore(!descriptionReadMore)}
                        >
                          SEE LESS
                        </span>
                      </CollectionProductTitle>
                    ) : (
                      <CollectionProductTitle>
                        {selectedProductData?.title?.substring(0, 30)}
                        ...&nbsp;&nbsp;
                        <span
                          onClick={() => setTitleReadMore(!descriptionReadMore)}
                        >
                          SEE MORE
                        </span>
                      </CollectionProductTitle>
                    )}
                    {descriptionReadMore ? (
                      <ProductDescription>
                        {selectedProductData?.description}&nbsp;&nbsp;
                        <span
                          onClick={() =>
                            setDescriptionReadMore(!descriptionReadMore)
                          }
                        >
                          SEE LESS
                        </span>
                      </ProductDescription>
                    ) : (
                      <ProductDescription>
                        {selectedProductData?.description?.substring(0, 100)}
                        ...&nbsp;&nbsp;
                        <span
                          onClick={() =>
                            setDescriptionReadMore(!descriptionReadMore)
                          }
                        >
                          SEE MORE
                        </span>
                      </ProductDescription>
                    )}
                    <div style={{ marginTop: "12px", marginLeft: "8px" }}>
                      <ProductDetailsSizeHeader>
                        Quantity
                      </ProductDetailsSizeHeader>
                      <QuantityContainer>
                        {quantity <= 1 ? (
                          <button>
                            <p>-</p>
                          </button>
                        ) : (
                          <button onClick={previousQuantity}>
                            <p>-</p>
                          </button>
                        )}
                        <QuantityValue>{quantity}</QuantityValue>
                        <button onClick={nextQuantity}>
                          <p>+</p>
                        </button>
                      </QuantityContainer>
                    </div>
                    {selectedProductData?.sizes?.length >= 1 && (
                      <div style={{ marginLeft: "8px" }}>
                        <ProductDetailsSizeHeader>
                          Size
                        </ProductDetailsSizeHeader>
                        <ProductDetailsSizeContainer>
                          {SELECTED_PRODUCT_DATA?.size?.map((size, index) => {
                            return (
                              <button
                                key={index}
                                className={
                                  selectedSize === size
                                    ? "selectedContainer"
                                    : "defaultContainer"
                                }
                                onClick={() => handleSizeChange(size)}
                              >
                                <p>{size}</p>
                              </button>
                            );
                          })}
                        </ProductDetailsSizeContainer>
                      </div>
                    )}
                    {selectedProductData?.colors?.length >= 1 && (
                      <div
                        style={{
                          marginTop: "12px",
                          marginBottom: "30px",
                          marginLeft: "8px",
                        }}
                      >
                        <ProductDetailsSizeHeader>
                          Color
                        </ProductDetailsSizeHeader>
                        <ProductDetailsSizeContainer>
                          {SELECTED_PRODUCT_DATA?.color?.map((color, index) => {
                            return (
                              <button
                                key={index}
                                className={
                                  selectedColor === color
                                    ? "selectedContainer"
                                    : "defaultContainer"
                                }
                                onClick={() => handleColorChange(color)}
                              >
                                {color}
                              </button>
                            );
                          })}
                        </ProductDetailsSizeContainer>
                      </div>
                    )}
                  </CollectionProductInfoSection>
                </ProductDetailsInfoSection>
              </SheetProductDisplay>
              <ButtonsContainer>
                <AddToBagButton
                  onClick={() => {
                    setOpen(false);
                    handleAddToCart();
                  }}
                >
                  <p>ADD TO BAG</p>
                </AddToBagButton>
                <BuyNowButton
                  onClick={() => {
                    setOpen(false);
                    handleBuyNow();
                  }}
                >
                  <p>BUY NOW</p>
                </BuyNowButton>
              </ButtonsContainer>
            </Sheet.Container>
          </Sheet>
        </div>
        <SideBar
          data={SELECTED_PRODUCT_DATA}
          quantity={quantity}
          size={selectedSize}
          color={selectedColor}
        />
      </CollectionContainer>
    </CartContext.Provider>
  );
};

export default Collections;
