import { Suspense, lazy } from "react";
import loadingSvg from "../../src/assets/loading-spinner.Svg";

const Today = lazy(() => import("../components/today/Today"));
const Highlights = lazy(() => import("../components/highlights/Highlights"));

function Loading() {
  return <img src={loadingSvg} alt="Loading..." />;
}

function MainPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Highlights />
        <Today />
      </Suspense>
    </div>
  );
}

export default MainPage;
