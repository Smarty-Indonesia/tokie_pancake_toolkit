import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "../Box";
import BottomNav from "./BottomNav";
import MenuItemsMock from "./mock";
import { BottomNavProps } from "./types";

export default {
  title: "Components/Menu/BottomNav",
  component: BottomNav,
  argTypes: {
    activeItem: {
      options: ["/swap", "/liquidity", "/farms", "/referral"],
      control: { type: "select" },
    },
  },
};

const Template: React.FC<BottomNavProps> = (args) => {
  return (
    <BrowserRouter>
      <Box height="100vh">
        <BottomNav {...args} />
      </Box>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: MenuItemsMock,
  activeItem: ["/swap", "/liquidity", "/farms", "/referral"],
  activeSubItem: "/swap",
};
