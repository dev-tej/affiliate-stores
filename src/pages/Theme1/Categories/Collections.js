import React, { useState } from "react";
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
  ProductDetailsHeaderSection,
  ProductDetailsImage,
  ProductDetailsImagesContainer,
  ProductDetailsInfoSection,
  ProductDetailsPriceContainer,
  ProductDetailsProductName,
  ProductDetailsSizeContainer,
  ProductDetailsSizeHeader,
  ProductDescription,
  ButtonsContainer,
  AddToBagButton,
  BuyNowButton,
  SheetProductDisplay,
  QuantityContainer,
  QuantityValue,
} from "./Collections.components";
import Sheet from "react-modal-sheet";
import SideBar from "../../../components/SideBar";
import Spinner from "../../../components/Spinner/Spinner";
import Product1 from "../../../assets/NewLayout/Product1.svg";
import Product2 from "../../../assets/NewLayout/Product2.svg";
import Product3 from "../../../assets/NewLayout/Product3.svg";
import Client from "shopify-buy";

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
  description:
    "100% Cotton. Available in plain or floral print. Straight design. Mao neckline. Long sleeve. Button fastening on the front section",
  size: ["XS", "S", "M", "L"],
  color: ["Blue", "White", "Green", "Yellow"],
  originalPrice: "240",
  mrp: "200",
};

const Collections = () => {
  // Initializing a client to return content in the store's primary language
  const client = Client.buildClient({
    domain: "galleri5.myshopify.com",
    storefrontAccessToken: "0b231b7dd203ed99cbfad0f7bfaefa9f",
  });

  client.collection.fetchAllWithProducts().then((collections) => {
    console.log(collections, "Collections");
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

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
            setLoading(false);
            window.open(checkout?.webUrl);
          });
      });
    });
  };

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <CollectionContainer>
      <div>
        {COLLECTION_DATA?.map((collection, index) => {
          return (
            <div key={index}>
              <CollectionTitle>{collection?.collectionName}</CollectionTitle>
              <CollectionProductsContainer>
                {collection?.collectionProducts?.map((product, index) => {
                  return (
                    <CollectionProductSection
                      key={index}
                      thumbnail={product?.thumbnail}
                    >
                      <CollectionProductsDisplay>
                        <CollectionProductsInfo>
                          <CollectionProductName>
                            {product?.name?.substring(0, 20)}...
                          </CollectionProductName>
                          <CollectionProductPrice>
                            {product?.price}
                          </CollectionProductPrice>
                        </CollectionProductsInfo>
                        <CollectionProductBuyNowButton
                          onClick={() => setOpen(true)}
                        >
                          <p>BUY NOW</p>
                        </CollectionProductBuyNowButton>
                      </CollectionProductsDisplay>
                    </CollectionProductSection>
                  );
                })}
              </CollectionProductsContainer>
            </div>
          );
        })}
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
              <ProductDetailsHeaderSection>
                <div>
                  <ProductDetailsProductName>
                    {SELECTED_PRODUCT_DATA?.title}
                  </ProductDetailsProductName>
                </div>
                <div onClick={() => handleCloseSheet()}>
                  <i
                    className="fas fa-times"
                    style={{ color: "#fff", marginRight: "10px" }}
                  ></i>
                </div>
              </ProductDetailsHeaderSection>
              <ProductDetailsInfoSection>
                <ProductDetailsImage
                  src={SELECTED_PRODUCT_DATA?.imageURLs?.[0]}
                />
                <ProductDetailsPriceContainer>
                  <h1>&#8377;{SELECTED_PRODUCT_DATA?.originalPrice}</h1>
                  <h2>&#8377;{SELECTED_PRODUCT_DATA?.mrp}</h2>
                </ProductDetailsPriceContainer>
                <ProductDetailsImagesContainer>
                  {SELECTED_PRODUCT_DATA?.imageURLs?.map((img, index) => {
                    return <img src={img} alt="img" key={index} />;
                  })}
                </ProductDetailsImagesContainer>
                <ProductDescription>
                  {SELECTED_PRODUCT_DATA?.description}
                  {/* <strong>Read more</strong> */}
                </ProductDescription>
                <div style={{ marginTop: "12px" }}>
                  <ProductDetailsSizeHeader>Quantity</ProductDetailsSizeHeader>
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
                <div>
                  <ProductDetailsSizeHeader>Size</ProductDetailsSizeHeader>
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
                <div style={{ marginTop: "12px", marginBottom: "30px" }}>
                  <ProductDetailsSizeHeader>Color</ProductDetailsSizeHeader>
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
                <hr
                  style={{
                    border: "1px solid #a3a3a3",
                    width: "100%",
                    opacity: 0.5,
                  }}
                />
                <ButtonsContainer>
                  <AddToBagButton onClick={() => handleAddToCart()}>
                    <p>ADD TO BAG</p>
                  </AddToBagButton>
                  <BuyNowButton onClick={() => handleBuyNow()}>
                    <p>BUY NOW</p>
                  </BuyNowButton>
                </ButtonsContainer>
              </ProductDetailsInfoSection>
            </SheetProductDisplay>
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
  );
};

export default Collections;
