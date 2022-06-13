import ItemsMock from "../DropdownMenu/mock";

const MenuItemsMock = [
  {
    label: "Exchange",
    href: "/",
    items: ItemsMock,
  },
  {
    label: "Liquidity",
    href: "/",
    items: ItemsMock,
  },
  {
    label: "Farms",
    href: "/",
    items: ItemsMock,
  },
  {
    label: "Referral",
    href: "/",
    items: [ItemsMock[0]],
  },
  // {
  //   label: "...",
  //   href: "/",
  //   items: ItemsMock,
  // },
];

export default MenuItemsMock;
