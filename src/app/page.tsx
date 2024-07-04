import FAQs from "@/components/HomePage/FAQs";
import FeaturesSection from "@/components/HomePage/FeaturesSection";
import Intro from "@/components/HomePage/Intro";
import NewArrivals from "@/components/HomePage/NewArrivals";
import ShopNow from "@/components/HomePage/ShopNow";
import Layout from "@/layout/layout";
import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="min-h-screen">
          <Intro />
          <FeaturesSection />
          <NewArrivals />
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
