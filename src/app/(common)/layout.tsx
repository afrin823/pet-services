 
import Footer from "../../components/shared/footer/footer";
import Headers from "../../components/shared/header/header"
import SubHeader from "../../components/shared/header/SubHeader";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Headers />
      <SubHeader />
      <section className="min-h-screen">
        {children}
      </section>
      <Footer />
    </main>
  );
}