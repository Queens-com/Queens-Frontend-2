import React from "react";
import FeatureCard from "./FeatureCard";
import returns from "../../../../public/return.png";
import services from "../../../../public/service.png";
import star from "../../../../public/star.png";

const FeaturesSection = () => {
  return (
    <div className="md:px-24 p-2 pb-6">
      <div className="grid md:grid-cols-3 justify-between items-center">
        <FeatureCard
          description="All of our products go through very strict inspection before we dispatch them"
          title="High Quality"
          image={star}
          imageAlt="high quality"
        />
        <FeatureCard
          description="Our return policy is simple and that is why customers love our shop"
          title="Easy Returns"
          image={returns}
          imageAlt="Easy Returns"
        />
        <FeatureCard
          description="We offer amazing customer service no matter what happens"
          title="Customer Service"
          image={services}
          imageAlt="Customer Service"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
