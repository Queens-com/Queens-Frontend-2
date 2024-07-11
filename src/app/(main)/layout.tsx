import Layout from "@/layout/layout";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <section className="">{children}</section>
    </Layout>
  );
};

export default MainLayout;
