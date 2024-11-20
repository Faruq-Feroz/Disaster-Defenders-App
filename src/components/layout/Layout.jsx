import { Suspense, lazy, useState, useEffect } from "react";
import styles from "./Layout.module.scss";
import loadingSvg from "../../assets/loading-spinner.svg";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation, Link } from "react-router-dom";

const Header = lazy(() => import("../header/Header"));
const Footer = lazy(() => import("../footer/Footer"));
const Now = lazy(() => import("../now/Now"));
const Forecast = lazy(() => import("../forecast/Forecast"));

function Loading() {
  return <img src={loadingSvg} alt="Loading..." />;
}

// Breadcrumb Component
function Breadcrumb() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <nav className={styles.breadcrumb}>
      <Link to="/">Home</Link>
      {pathParts.map((part, index) => {
        const path = `/${pathParts.slice(0, index + 1).join("/")}`;
        const formattedPart = part.charAt(0).toUpperCase() + part.slice(1);
        return (
          <span key={index}>
            {" > "}
            <Link to={path}>{formattedPart}</Link>
          </span>
        );
      })}
    </nav>
  );
}

function Layout() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

 
  useEffect(() => {
    
    setShowSidebar(true);
    setShowHeaderFooter(true);
  }, [location]);

  const isMainPage = location.pathname === "/";

  return (
    <div className={styles.layoutContainer}>
      {showHeaderFooter && (
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>
      )}

      <div className={styles.contentWrapper}>
        {showSidebar && <Sidebar className={styles.sidebar} />}

        <main className={styles.main}>
          {/* Breadcrumb Navigation */}
          {!isMainPage && <Breadcrumb />}

          <section className={styles.leftContent}>
            {isMainPage && (
              <Suspense fallback={<Loading />}>
                <Now />
                <Forecast />
              </Suspense>
            )}
          </section>

          <section className={styles.rightContent}>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </section>
        </main>
      </div>

      {showHeaderFooter && (
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default Layout;
