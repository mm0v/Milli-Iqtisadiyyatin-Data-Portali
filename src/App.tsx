import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "./assets/sass/styles.scss";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import About from "./pages/About";

import Analytics from "./pages/Analytics";
import EconomicIndicators from "./pages/EconomicIndicators";
import MacroEconomic from "./pages/MacroEconomic";
import DemoEconomic from "./pages/DemoEconomic";
import StateServices from "./pages/StateServices";
import Crimes from "./pages/Crimes";
import SectorEconomic from "./pages/SectorEcenomic";
import LaborMarket from "./pages/LaborMarket";

import HelpAndContact from "./pages/HelpAndContact";
import FAQ from "./pages/FAQ";
import UserManual from "./pages/UserManual";
import ContactForm from "./pages/ContactForm";

import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Report from "./pages/Report";
import AcademicReports from "./pages/AcademicReports";
import EconomicReports from "./pages/EconomicReports";
import FinancialReports from "./pages/FinancialReports";
import ScienceReports from "./pages/ScienceReports";
import AcademicPublications from "./pages/AcademicPublications";
import PublicationEconomic from "./pages/PublicationEconomic";
import PublicationFinancial from "./pages/PublicationFinancial";
import PublicationScience from "./pages/PublicationScience";

import ProfileSettings from "./pages/ProfileSettings";

import InternationalDemonstrators from "./pages/InternationalDemonstrators";

import OpenInfoAllData from './pages/OpenInfoAllData.tsx'
import OpenInfoPages from './pages/OpenInfoPages.tsx'

import OpenInfobase from "./pages/OpenInfobase";

import Subscriptions from "./pages/Subscriptions";
import SubscriptionsInfo from "./pages/SubscriptionsInfo";
import PaymentInfo from "./pages/PaymentInfo";
import ReCapcha from "./pages/ReCapcha";
import ConfirmDetails from "./pages/ConfirmDetails";
import NewPassword from "./pages/NewPassword";

import Profile from "./pages/Profile";
import PersonalInfo from "./pages/PersonalInfo";
import SecuritySettings from "./pages/SecuritySettings";
import PaymentHistory from "./pages/PaymentHistory";
import ReceiptDetails from "./pages/ReceiptDetails";
import LanguageSwitch from "./pages/LanguageSwitch";
import ProfileDeactivate from "./pages/ProfileDeactivate";
import GlobalInnovationIndexRank from "./pages/GlobalInnovationIndexRank";
import AiReadinessRank from "./pages/AiReadinessRank";
import EGovernmentDevelopmentIndex from "./pages/EGovernmentDevelopmentIndex";
import ReportDetails from "./pages/ReportDetails";
import Purpose from "./pages/Purpose";
import Mission from "./pages/Mission";
import AboutLayout from "./layout/AboutLayout";
import OpenInfoHealth from "./pages/OpenInfoHealth.tsx";
import OpenInfoTourism from "./pages/OpenInfoTourism.tsx";
import OpenInfoEnergy from "./pages/OpenInfoEnergy.tsx";
import OpenInfoDemographicIndicators from "./pages/OpenInfoDemographicIndicators.tsx";
import OpenInfoAgriculture from "./pages/OpenInfoAgriculture.tsx";
import OpenInfoEconomicMap from "./pages/OpenInfoEconomicMap.tsx";
import OpenInfoStaticCalendar from "./pages/OpenInfoStaticCalendar.tsx";
import OpenInfoDataPolicy from "./pages/OpenInfoDataPolicy.tsx";


const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  const navbarRoutes = ["/", "/about", "/analytics", "/contact", "/report"];
  const showNavbar = navbarRoutes.includes(location.pathname);

  return (
    <div className="page">
      <div>
        <Header />
      </div>

      <main>
        {showNavbar && <Navbar />}
        <Outlet />
      </main>

      {isHomePage && (
        <div className="ml-4 mr-4 pb-4">
          <Footer />
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Auth routes without layout */}
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/recapcha" element={<ReCapcha />} />
      <Route path="/confirm-details" element={<ConfirmDetails />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />

      {/* Main layout with nested routes */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<AboutLayout />}>
          <Route path="purpose" element={<Purpose />}></Route>
          <Route path="mission" element={<Mission />}></Route>
        </Route>
        <Route path="/analytics" element={<Analytics />}>
          <Route path="economic_indicators" element={<EconomicIndicators />}>
            <Route path="macro" element={<MacroEconomic />} />
            <Route path="sector" element={<SectorEconomic />} />
            <Route path="demo" element={<DemoEconomic />} />
            <Route path="state_services" element={<StateServices />} />
            <Route path="crimes" element={<Crimes />} />
            <Route path="labor_market" element={<LaborMarket />} />
          </Route>
          <Route
            path="international_demonstrators"
            element={<InternationalDemonstrators />}
          >
            <Route
              path="global_innovation"
              element={<GlobalInnovationIndexRank />}
            />
            <Route path="ai_readness" element={<AiReadinessRank />} />
            <Route path="e_gov" element={<EGovernmentDevelopmentIndex />} />
          </Route>

          
          <Route path="international_demonstrators" element={<InternationalDemonstrators />} />
          <Route path='open_info' element={<OpenInfoPages/>}>
            <Route path='all_data' element={<OpenInfoAllData/>}/>
            <Route path='health'  element={<OpenInfoHealth/>}/> 
            <Route path='tourism' element={<OpenInfoTourism/>}/> 
            <Route path='energy' element={<OpenInfoEnergy/>}/> 
            <Route path='demographic_indicators' element={<OpenInfoDemographicIndicators/>}/> 
            <Route path='agriculture' element={<OpenInfoAgriculture/>}/> 
            <Route path='economic_map' element={<OpenInfoEconomicMap/>}/> 
            <Route path='statistical_calendar' element={<OpenInfoStaticCalendar/>}/> 
            <Route path='open_data_policy' element={<OpenInfoDataPolicy/>}/> 
            <Route path='data_request' element={<OpenInfoDataPolicy/>}/> 
          </Route>
          

        </Route>
          <Route path="open_infobase" element={<OpenInfobase />} />

        <Route path="/report" element={<Report />} />
        <Route path="/report/:type/:id" element={<ReportDetails />} />
        <Route path="/contact" element={<HelpAndContact />}>
          <Route path="faq" element={<FAQ />} />
          <Route path="user_manual" element={<UserManual />} />
          <Route path="contact_form" element={<ContactForm />} />
        </Route>
        <Route path="/academic_reports" element={<AcademicReports />} />
        <Route
          path="/academic_reports/economic_reports"
          element={<EconomicReports />}
        />
        <Route
          path="/academic_reports/financial_reports"
          element={<FinancialReports />}
        />
        <Route
          path="/academic_reports/science_reports"
          element={<ScienceReports />}
        />
        <Route
          path="/academic_publications/economic_publication"
          element={<PublicationEconomic />}
        />
        <Route
          path="/academic_publications/financial_publication"
          element={<PublicationFinancial />}
        />
        <Route
          path="/academic_publications/science_publication"
          element={<PublicationScience />}
        />
        <Route
          path="/academic_publications"
          element={<AcademicPublications />}
        />

        <Route path="/profile" element={<Profile />}>
          <Route index element={<PersonalInfo />} />
          <Route path="personal_info" element={<PersonalInfo />} />
          <Route path="settings" element={<ProfileSettings />}>
            <Route index element={<LanguageSwitch />} />
            <Route path="language" element={<LanguageSwitch />} />
            <Route path="subscriptions" element={<Subscriptions />} />

            <Route
              path="subscriptions/:planId"
              element={<SubscriptionsInfo />}
            />
            <Route
              path="subscriptions/:planId/payment"
              element={<PaymentInfo />}
            />
            <Route path="deactivate" element={<ProfileDeactivate />} />
          </Route>
          <Route path="security" element={<SecuritySettings />} />
          <Route path="payment-history" element={<PaymentHistory />}>
            <Route path="receipt" element={<ReceiptDetails />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

// import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
// import { useState, useEffect, ReactElement } from 'react';
// import './App.css';
// import Home from './pages/Home';
// import Header from './layout/Header';
// import Footer from './layout/Footer';
// import Login from './auth/Login';
// import Register from './auth/Register';
// import About from './pages/About';
// import HelpAndContact from './pages/HelpAndContact';
// import Analytics from './pages/Analytics';
// import ForgotPassword from './pages/ForgotPassword';
// import NotFound from './pages/NotFound';
// import Terms from './pages/Terms';
// import Privacy from './pages/Privacy';
// import Report from './pages/Report';
// import Academic_reports from './pages/AcademicReports';
// import AcademicPublications from './pages/AcademicPublications';
// import EconomicReports from './pages/EconomicReports';
// import FinancialReports from './pages/FinancialReports';
// import ScienceReports from './pages/ScienceReports';
// import PublicationEconomic from './pages/PublicationEconomic';
// import PublicationFinancial from './pages/PublicationFinancial';
// import PublicationScience from './pages/PublicationScience';
// interface PageTransitionLoaderProps {
//   isLoading: boolean;
// }

// const PageTransitionLoader = ({ isLoading }: PageTransitionLoaderProps): ReactElement | null => {
//   if (!isLoading) return null;

//   return (
//     <div className="page-transition-loader">
//       <div className="loader-container">
//         <div className="circle-loader"></div>
//         <div className="particle-loader">
//           {[...Array(35)].map((_, i) => (
//             <div key={i} className="particle"></div>
//           ))}
//         </div>
//         <div className="loading-text">Loading...</div>
//       </div>
//     </div>
//   );
// };

// const addStylesForAnimation = (): void => {
//   const styleElement = document.createElement('style');
//   styleElement.textContent = `
//     .page-transition-loader {
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.99);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       z-index: 9999;
//     }

//     .loader-container {
//       position: relative;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//     }

//     .circle-loader {
//       width: 120px;
//       height: 120px;
//       border: 4px solid transparent;
//       border-top: 4px solid #3498db;
//       border-radius: 50%;
//       animation: spin 1s linear infinite, colorChange 3s linear infinite;
//     }

//     .particle-loader {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//     }

//     .particle {
//       position: absolute;
//       width: 10px;
//       height: 10px;
//       background-color: #3498db;
//       border-radius: 50%;
//       animation: particleMove 2s linear infinite;
//     }

//     .loading-text {
//       margin-top: 24px;
//       color: white;
//       font-size: 20px;
//       letter-spacing: 3px;
//       animation: pulse 1.5s ease-in-out infinite;
//     }

//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }

//     @keyframes colorChange {
//       0% { border-top-color: #3498db; }
//       33% { border-top-color: #e74c3c; }
//       66% { border-top-color: #2ecc71; }
//       100% { border-top-color: #3498db; }
//     }

//     @keyframes particleMove {
//       0% {
//         transform: translate(0, 0);
//         opacity: 1;
//       }
//       100% {
//         transform: translate(var(--x, 50px), var(--y, 50px));
//         opacity: 0;
//       }
//     }

//     @keyframes pulse {
//       0%, 100% { opacity: 1; }
//       50% { opacity: 0.5; }
//     }
//   `;
//   document.head.appendChild(styleElement);
// };

// // Setup the animation for particles
// const setupParticleAnimations = (): void => {
//   setTimeout(() => {
//     const particles = document.querySelectorAll('.particle');
//     particles.forEach((particle) => {
//       if (particle instanceof HTMLElement) {
//         const randomX = (Math.random() - 0.5) * 320;
//         const randomY = (Math.random() - 0.5) * 320;
//         particle.style.setProperty('--x', `${randomX}px`);
//         particle.style.setProperty('--y', `${randomY}px`);

//         // Random delay and size
//         particle.style.animationDelay = `${Math.random() * 0.3}s`;
//         const size = 5 + Math.random() * 20;
//         particle.style.width = `${size}px`;
//         particle.style.height = `${size}px`;

//         // Random colors
//         const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
//         particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//       }
//     });
//   }, 10);
// };

// // Create a context for loading state
// import { createContext, useContext } from 'react';

// interface LoadingContextType {
//   setLoading: (value: boolean) => void;
//   isLoading: boolean;
// }

// const LoadingContext = createContext<LoadingContextType | null>(null);

// // Provider component
// const LoadingProvider = ({ children }: { children: React.ReactNode }): ReactElement => {
//   const [isLoading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (isLoading) {
//       setupParticleAnimations();
//     }
//   }, [isLoading]);

//   return (
//     <LoadingContext.Provider value={{ isLoading, setLoading }}>
//       <PageTransitionLoader isLoading={isLoading} />
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// const useLoading = (): LoadingContextType => {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error('useLoading must be used within a LoadingProvider');
//   }
//   return context;
// };

// const NavigationHandler = ({ children }: { children: React.ReactNode }): ReactElement => {
//   const location = useLocation();
//   const { setLoading } = useLoading();

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [location.pathname, setLoading]);

//   return <>{children}</>;
// };

// // MainLayout component
// const MainLayout = (): ReactElement => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/' || location.pathname === '';

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>

//       <main>
//         <Outlet />
//       </main>

//       {isHomePage && (
//         <div className="ml-4 mr-4 pb-4">
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// };

// function App(): ReactElement {
//   useEffect(() => {
//     addStylesForAnimation();
//   }, []);

//   return (
//     <LoadingProvider>
//       <NavigationHandler>
//         <Routes>
//           {/* Auth routes without layout */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/privacy" element={<Privacy />} />

//           {/* Main layout with nested routes */}
//           <Route element={<MainLayout />}>
//             <Route index element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/report" element={<Report />} />
//             <Route path="/contact" element={<HelpAndContact />} />
//             <Route path="/academic_reports" element={<Academic_reports />} />
//             <Route path="/academic_reports/economic_reports" element={<EconomicReports />} />
//             <Route path="/academic_reports/financial_reports" element={<FinancialReports />} />
//             <Route path="/academic_reports/science_reports" element={<ScienceReports />} />
//             <Route path="/academic_publications/economic_publication" element={<PublicationEconomic />} />
//             <Route path="/academic_publications/financial_publication" element={<PublicationFinancial />} />
//             <Route path="/academic_publications/science_publication" element={<PublicationScience />} />
//             <Route path="/academic_publications" element={<AcademicPublications />} />
//           </Route>

//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </NavigationHandler>
//     </LoadingProvider>
//   );
// }

// export default App;
