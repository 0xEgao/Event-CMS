"use client";
import React, { ReactNode } from "react";
import { Theme, Box, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "../../styles/home.css";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Theme appearance="dark" accentColor="cyan" grayColor="gray">
      <Box className="glowing-bar-container">
        <div className="glow-effect"></div>
        <div className="glowing-bar">
          <Text className="bar-title">Home</Text>
        </div>

        <div className="glow-effect"></div>
        <div className="glowing-bar">
          <Text className="bar-title">Events</Text>
        </div>

        <div className="glow-effect"></div>
        <div className="glowing-bar">
          <Text className="bar-title">Create Event</Text>
        </div>
      </Box>
      <Box className="glowing-bar-container">{children}</Box>
    </Theme>
  );
};

export default HomeLayout;
