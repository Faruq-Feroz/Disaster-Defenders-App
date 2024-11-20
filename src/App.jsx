import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AppProvider from "./context/AppContext";
import MainPage from "./Pages/MainPage"; 
import DisasterAlerts from "./Pages/DisasterAlerts/DisasterAlerts"
import Preparedness from "./Pages/Preparedness";
import Blog from "./Pages/Blog";
import Map from "./Pages/Map";
import Response from "./Pages/Response";
import GetInvolved from "./Pages/GetInvolved";
import Contact from "./Pages/Contact";
import Resources from "./Pages/Resources";
import Education from "./Pages/Education";
import Report from "./Pages/Report";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Main Layout Route */}
          <Route path="/" element={<Layout />}>
            {/* Default Route */}
            <Route index element={<MainPage />} />

            {/* Nested Routes */}
            <Route path="disaster-alerts" element={<DisasterAlerts />} />
            <Route path="preparedness" element={<Preparedness />} />
            <Route path="blog" element={<Blog />} />
            <Route path="map" element={<Map />} />
            <Route path="response" element={<Response />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resources" element={<Resources />} />
            <Route path="education" element={<Education />} />
            <Route path="report" element={<Report />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
