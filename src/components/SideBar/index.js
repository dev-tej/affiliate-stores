import React, { useState, useEffect, useRef } from "react";
import Client from "shopify-buy";
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
  EmptyCartContainer,
} from "./Sidebar.components";
import EmptyCart from "../../assets/Theme1/EmptyCart.svg";

const SideBar = () => {
  const data = JSON.parse(localStorage?.getItem("addedToCartProducts"));
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  const [selectedQuantity, setSelectedQuantity] = useState(data?.quantity);

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

  const handleBuyNow = (prodId) => {
    client.checkout.create().then((checkout) => {
      const checkoutID = checkout?.id;
      const productId = `gid://shopify/Product/${prodId}`;
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

  const CART_LENGTH = data !== null ? data?.length : 0;

  const TOTAL_CART_VALUE = data
    ?.map((prod) => prod?.product?.price)
    ?.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div>
      {data?.length >= 1 ? (
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
            {data?.map((prod, index) => {
              return (
                <AddedCartProducts key={index}>
                  <div>
                    <AddedCartImage
                      src={prod?.product?.image}
                      alt="addedProduct"
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <AddedCartProductInfo>
                      <h1>{prod?.product?.title}</h1>
                      <h1>&#8377;{prod?.product?.price}</h1>
                    </AddedCartProductInfo>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <QuantityContainer>
                        {prod?.quantity <= 1 ? (
                          <button>
                            <p>-</p>
                          </button>
                        ) : (
                          <button onClick={previousQuantity}>
                            <p>-</p>
                          </button>
                        )}
                        <QuantityValue>{prod?.quantity}</QuantityValue>
                        <button onClick={nextQuantity}>
                          <p>+</p>
                        </button>
                      </QuantityContainer>
                      <i
                        className="fa-solid fa-trash-can"
                        style={{ color: "red", fontSize: "18px" }}
                      ></i>
                    </div>
                  </div>
                </AddedCartProducts>
              );
            })}
            <FixedContainer>
              <SubtotalContainer>
                <SubtotalSection>
                  <SubtotlHeader>Subtotal</SubtotlHeader>
                  <SubtotlHeader>&#8377;&nbsp;{TOTAL_CART_VALUE}</SubtotlHeader>
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
      ) : (
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
            <SideBarClose onClick={() => toggleDrawer(false)}>X</SideBarClose>
            <EmptyCartContainer>
              <img src={EmptyCart} alt="emptyCart" />
              <h1>Your cart is empty</h1>
            </EmptyCartContainer>
          </Navbar.Items>
        </div>
      )}
    </div>
  );
};

export default SideBar;
