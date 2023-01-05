import React, { useState, useEffect, useRef } from "react";
import {
  HamburgerButtonContainer,
  Navbar,
  SettingsSection,
  SettingsHeader,
  HorizontalLine,
  SideBarClose,
  FixedContainer,
  SubtotalContainer,
  SubtotalSection,
  SubtotlHeader,
  SubtotalDescription,
  CheckoutButton,
  CartLengthHeader,
  AddedCartProducts,
  AddedCartImage,
  AddedCartProductInfo,
  QuantityContainer,
  QuantityValue,
} from "./Sidebar.components";
import Client from "shopify-buy";

const SideBar = (props) => {
  const { size, color, quantity, data } = props;
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }
      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  const client = Client.buildClient({
    domain: "galleri5.myshopify.com",
    storefrontAccessToken: "0b231b7dd203ed99cbfad0f7bfaefa9f",
  });

  function previousQuantity() {
    setSelectedQuantity((prevPage) => prevPage - 1);
  }

  function nextQuantity() {
    setSelectedQuantity((prevPage) => prevPage + 1);
  }

  const handleBuyNow = () => {
    client.checkout.create().then((checkout) => {
      const checkoutID = checkout?.id;
      const productId = "gid://shopify/Product/8069698126116";
      client.product.fetch(productId).then((product) => {
        const lineItemsToAdd = [
          {
            variantId: product?.variants?.[0]?.id,
            quantity: selectedQuantity,
            customAttributes: [],
          },
        ];
        client.checkout
          .addLineItems(checkoutID, lineItemsToAdd)
          .then((checkout) => {
            window.open(checkout?.webUrl);
          });
      });
    });
  };

  const CART_LENGTH =
    JSON.parse(localStorage?.getItem("addedToCartData")) !== null
      ? JSON.parse(localStorage?.getItem("addedToCartData"))?.length
      : 0;

  return (
    <div>
      <HamburgerButtonContainer>
        <i
          className="fa-solid fa-cart-shopping"
          style={{ marginLeft: "2px" }}
          onClick={() => toggleDrawer(true)}
        ></i>
        <CartLengthHeader>{CART_LENGTH}</CartLengthHeader>
      </HamburgerButtonContainer>
      <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
        <SettingsSection>
          <SettingsHeader>Your shopping bag</SettingsHeader>
          <SideBarClose onClick={() => toggleDrawer(false)}>X</SideBarClose>
        </SettingsSection>
        <HorizontalLine />
        <AddedCartProducts>
          <div>
            <AddedCartImage src={data?.imageURLs?.[0]} alt="addedProduct" />
          </div>
          <div>
            <AddedCartProductInfo>
              <h1>{data?.title}</h1>
              <h1>&#8377;{data?.mrp}</h1>
            </AddedCartProductInfo>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
              <i
                class="fa-solid fa-trash-can"
                style={{ color: "red", fontSize: "18px" }}
              ></i>
            </div>
          </div>
        </AddedCartProducts>
        <FixedContainer>
          <SubtotalContainer>
            <SubtotalSection>
              <SubtotlHeader>Subtotal</SubtotlHeader>
              <SubtotlHeader>&#8377;&nbsp;{data?.mrp}</SubtotlHeader>
            </SubtotalSection>
            <SubtotalDescription>
              Shipping, taxes, and discount codes calculated at checkout.
            </SubtotalDescription>
          </SubtotalContainer>
          <CheckoutButton onClick={() => handleBuyNow()}>
            <p>Continue to Checkout</p>
          </CheckoutButton>
        </FixedContainer>
      </Navbar.Items>
    </div>
  );
};

export default SideBar;
