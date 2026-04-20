import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNavBar />
      {children}
      <Footer />
    </>
  );
}
