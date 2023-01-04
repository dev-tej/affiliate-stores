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
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: #cc7178;
`;

export const HorizontalLine = styled.hr`
  height: 0;
  border: 0.5px solid #e3e3e3;
`;

export const SideBarClose = styled.a`
  position: fixed;
  right: 10px;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
  color: #cc7178;
  margin-top: -20px;
`;

export const Navbar = {
  Wrapper: styled.nav`
    width: 100%;
    height: 100%;
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
    width: 100%;
    position: fixed;
    right: 0;
    top: 0px;
    height: 100%;
    color: #858585;
    flex-direction: column;
    background-color: #11100d;
    padding: 8px;
    transition: 0.2s ease-out;
    width: 300px;
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
