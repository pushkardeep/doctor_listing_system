import type { Metadata } from "next";

import React from "react";
import ListingPage from "./Listing/page";

const Page = () => {
  return <ListingPage />;
};

export const metadata: Metadata = {
  title: "Doctor Listing",
  description: "The listing page for doctors",
};

export default Page;
