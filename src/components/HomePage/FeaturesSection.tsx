import React from "react";
import FeatureCard from "./FeatureCard";
import returns from "../../../public/return.png";
import services from "../../../public/service.png";
import star from "../../../public/star.png";

const FeaturesSection = () => {
  return (
    <div className="px-24">
      <div className="grid sm:grid-cols-3 justify-between items-center">
        <FeatureCard
          description="All of our products go through very strict inspection before we dispatch them"
          title="High Quality"
          image={star}
          imageAlt="high quality"
        />
        <FeatureCard
          description="Our return policy is simple and that is why customers love our shop"
          title="Easy Returns"
          image={star}
          imageAlt="Easy Returns"
        />
        <FeatureCard
          description="We offer amazing customer service no matter what happens"
          title="Customer Service"
          image={star}
          imageAlt="Customer Service"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
