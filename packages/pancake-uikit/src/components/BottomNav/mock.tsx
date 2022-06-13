import ItemsMock from "../DropdownMenu/mock";
import { MenuItemsType } from "../MenuItems/types";

const MenuItemsMock: MenuItemsType[] = [
  {
    label: "Exchange",
    href: "/swap",
    icon: "Trade",
    items: ItemsMock,
    showItemsOnMobile: true,
  },
  {
    label: "Liquidity",
    href: "/liquidity",
    icon: "Pool",
    items: ItemsMock,
    showItemsOnMobile: true,
  },
  {
    label: "Farms",
    href: "/farms",
    icon: "Nft",
    items: ItemsMock,
    showItemsOnMobile: true,
  },
    {
    label: "Referral",
    href: "/referral",
    icon: "Ticket",
    items: ItemsMock,
    showItemsOnMobile: true,
  },
  {
    label: "More",
    href: "/more",
    icon: "More",
    items: ItemsMock,
    showItemsOnMobile: true,
  },
];

export default MenuItemsMock;
