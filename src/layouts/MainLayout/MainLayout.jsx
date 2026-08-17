 import Footer from "../../components/Footer/Footer";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="main-layout">

      <main className="main-content">
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;