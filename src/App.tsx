import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Login from './auth/Login'
import Register from './auth/Register'
import About from './pages/About'
import HelpAndContact from './pages/HelpAndContact'
import Analytics from './pages/Analytics'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Report from './pages/Report'
import Academic_reports from './pages/AcademicReports'
import AcademicPublications from './pages/AcademicPublications'
import EconomicReports from './pages/EconomicReports'
import FinancialReports from './pages/FinancialReports'
import ScienceReports from './pages/ScienceReports'
import PublicationEconomic from './pages/PublicationEconomic'
import PublicationFinancial from './pages/PublicationFinancial'
import PublicationScience from './pages/PublicationScience'

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <div>
      <div>
        <Header />
      </div>

      <main>
        <Outlet />
      </main>

      {isHomePage && (
        <div className="ml-4 mr-4 pb-4">
          <Footer />
        </div>
      )}

    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* Auth routes without layout */}
      <Route path="/login" element={
        <Login />
      } />

      <Route path="/register" element={
        <Register />
      } />
      <Route path="/forgot-password" element={
        <ForgotPassword />
      } />
      <Route path="/terms" element={
        <Terms />
      } />
      <Route path="/privacy" element={
        <Privacy />
      } />

      {/* Main layout with nested routes */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/report" element={<Report />} />
        <Route path="/contact" element={<HelpAndContact />} />
        <Route path="/contact" element={<HelpAndContact />} />
        <Route path="/academic_reports" element={<Academic_reports />} />
        <Route path="/academic_reports/economic_reports" element={<EconomicReports />} />
        <Route path="/academic_reports/financial_reports" element={<FinancialReports />} />
        <Route path="/academic_reports/science_reports" element={<ScienceReports />} />
        <Route path="/academic_publications/economic_publication" element={<PublicationEconomic />} />
        <Route path="/academic_publications/financial_publication" element={<PublicationFinancial />} />
        <Route path="/academic_publications/science_publication" element={<PublicationScience />} />
        <Route path="/academic_publications" element={<AcademicPublications />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App