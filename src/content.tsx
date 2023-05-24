import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import Logo from "./assets/logo.png";

export const content = {
  brandname: "Myntra",
  navbar: {
    logo: Logo,
    leftmenuitems: [
      {
        listname: "MEN",
        url: "/men",
      },
      {
        listname: "WOMEN",
        url: "/women",
      },
      {
        listname: "KIDS",
        url: "/kids",
      },
      {
        listname: "HOME & LIVING",
        url: "/home-and-living",
      },
      {
        listname: "BEAUTY",
        url: "/beauty",
      },
      {
        listname: "STUDIO",
        url: "/studio",
        tag: "NEW",
      },
    ],
    rightmenuitems: [
      {
        listname: "Profile",
        url: "/profile",
        icon: <FiUser style={{ width: "20px", height: "20px" }} />,
      },
      {
        listname: "Wishlist",
        url: "/wishlist",
        icon: <FiHeart style={{ width: "20px", height: "20px" }} />,
      },
      {
        listname: "Bag",
        url: "/bag",
        icon: <FiShoppingBag style={{ width: "20px", height: "20px" }} />,
      },
    ],
  },
};
