import { Container, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function () {
  return (
    <Container>
      <Typography variant="h2">Hello World</Typography>
    </Container>
  );
}
