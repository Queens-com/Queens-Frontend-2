import React from 'react';
import FAQs from "@/components/pages/HomePage/FAQs";
import FeaturesSection from "@/components/pages/HomePage/FeaturesSection";
import Intro from "@/components/pages/HomePage/Intro";
import NewArrivals from "@/components/pages/HomePage/NewArrivals";
import ShopNow from "@/components/pages/HomePage/ShopNow";
import Layout from "@/layout/layout";
import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="min-h-screen">
          <Intro />
          <FeaturesSection />
          {/* <NewArrivals /> */}
          <ShopNow />
          <FAQs />
        </div>
      </Layout>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Home",
};
