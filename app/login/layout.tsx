import Footer from "@/components/landing-page/footer";
import Navbar from "@/components/landing-page/navbar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
