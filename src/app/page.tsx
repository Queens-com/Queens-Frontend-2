import FeaturesSection from "@/components/HomePage/FeaturesSection";
import Intro from "@/components/HomePage/Intro";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className='min-h-screen'>
          <Intro />
          <FeaturesSection/>
        </div>
      </Layout>
    </div>
  );
}
