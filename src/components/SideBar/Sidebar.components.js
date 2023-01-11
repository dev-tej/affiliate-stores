import styled from "styled-components";

export const HamburgerButtonContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  background: #ffc323;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & i {
    color: #11100d;
  }
`;

export const HamburgerButton = {
  MenuIcon: styled.img`
    width: 16px;
    height: 12px;
  `,
};

export const SettingsSection = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsHeader = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 0;
  border: 0.5px solid rgba(163, 163, 163, 0.5);
`;

export const SideBarClose = styled.a`
  position: fixed;
  right: 10px;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
`;

export const Navbar = {
  Wrapper: styled.nav`
    width: 100%;
    height: 100vh;
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    position: fixed !important;
    top: 0px !important;
    width: 100%;
    padding: 10px;
  `,

  Items: styled.span`
    margin-left: 50px;
    display: flex;
    list-style: none;
    width: 90%;
    height: 100vh !important;
    position: fixed;
    right: 0;
    top: 0px;
    height: 100%;
    color: #858585;
    flex-direction: column;
    background-color: #11100d;
    padding: 8px;
    transition: 0.2s ease-out;
    max-width: 480px;
    z-index: 999999;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
  `,
  Item: styled.a`
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none !important;
    padding: 1rem 0;
    cursor: default;
    color: #858585 !important;
    &:hover {
      color: #89023e !important;
    }
  `,
};

export const SideBarSection = styled.div`
  margin-left: 10px;
  width: auto;
  display: flex;
  align-items: center;
  margin-bottom: -10px;
`;

export const SideBarProfileLogo = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 10px;
`;

export const SideBarLogOutLogo = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 10px;
`;

export const FixedContainer = styled.div`
  position: fixed;
  background: #000;
  bottom: 0;
  padding: 20px;
  width: 100%;
  padding-bottom: 50px;
  box-shadow: 0 -15px 15px -15px rgba(0, 0, 0, 1);
  border-top: 1px solid rgba(163, 163, 163, 0.5);
`;

export const SubtotalContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

export const SubtotalSection = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubtotlHeader = styled.h1`
  font-style: normal;
  font-weight: bolder;
  font-size: 16px;
  color: #fff;
`;

export const SubtotalDescription = styled.h1`
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
`;

export const CheckoutButton = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffc323;
  border-radius: 8px;
  outline: none;
  border: none;

  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #11100d;
  }
`;

export const CartLengthHeader = styled.p`
  margin-left: 2px;
  margin-top: -5px;
  font-size: 14px;
`;

export const AddedCartProducts = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  // display: grid;
  // grid-auto-flow: column;
  // align-items: center;
  column-gap: 20px;
`;

export const AddedCartImage = styled.img`
  width: 98px;
  height: 98px;
  border-radius: 12px;
  object-fit: contain;
`;

export const AddedCartProductInfo = styled.div`
  width: 100% !important;
  display: flex;
  justify-content: space-between !important;
  column-gap: 25px;
  margin-bottom: 30px;

  & h1 {
    font-style: normal;
    font-weight: bolder;
    font-size: 1rem;
    color: #fff;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;

  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px;
    gap: 10px;
    width: 27px;
    height: 26px;
    border: 1px solid #8c8888;
    background: transparent !important;
    border-radius: 6px;

    & p {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 9px;
      color: #8c8888;
    }
  }
`;

export const QuantityValue = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffc323;
`;

export const EmptyCartContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    height: 200px;
  }

  & h1 {
    margin-top: 20px;
    font-family: Lora;
    font-size: 22px;
    color: #ffc323;
  }
`;
