import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TicketModal from './components/TicketModal';
import WelcomeModal from './components/WelcomeModal';
import RegistrationThankYouModal from './components/RegistrationThankYouModal';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Organiser from './sections/Organiser';
import Tracks from './sections/Tracks';
import Schedule from './sections/Schedule';
import Prizes from './sections/Prizes';
import Sponsors from './sections/Sponsors';
import Venue from './sections/Venue';
import Registration from './sections/Registration';
import FAQ from './sections/FAQ';
import ContactConnect from './sections/ContactConnect';
import CTA from './sections/CTA';
import AboutGDG from './pages/AboutGDG';
import { EVENT_DETAILS } from './data/eventData';

// Scroll restoration component for router
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function HomePage({
  registeredAttendee,
  registeredCount,
  selectedTrackPref,
  handleSelectTrack,
  handleRegisterSuccess,
  setIsPassModalOpen,
  scrollToRegister,
  scrollToSchedule
}) {
  return (
    <div className="relative min-h-screen bg-[#FFF8E7] text-[#252525] font-sans selection:bg-[#FFD500]/40 selection:text-[#252525] lego-baseplate-pattern">
      {/* Sticky Navigation */}
      <Navbar 
        onOpenPass={() => setIsPassModalOpen(true)} 
        registeredUser={registeredAttendee}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero 
          registeredCount={registeredCount}
          onRegisterClick={scrollToRegister}
          onScheduleClick={scrollToSchedule}
        />

        <About />

        {/* Dedicated Organiser Section */}
        <Organiser />

        <Tracks 
          onSelectTrack={handleSelectTrack}
        />

        <Schedule />

        <Prizes />

        <Sponsors />

        <Venue />

        {/* Upgraded Dual-Category Registration */}
        <Registration 
          registeredCount={registeredCount}
          onSuccessRegister={handleRegisterSuccess}
          selectedTrackPref={selectedTrackPref}
          alreadyRegisteredAttendee={registeredAttendee}
        />

        {/* New Interactive FAQ Accordion */}
        <FAQ />

        {/* Dedicated Contact & Connect Section */}
        <ContactConnect />

        <CTA 
          onRegisterClick={scrollToRegister}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top smooth button */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [registeredAttendee, setRegisteredAttendee] = useState(null);
  const [registeredCount, setRegisteredCount] = useState(EVENT_DETAILS.initialRegistered);
  const [selectedTrackPref, setSelectedTrackPref] = useState(null);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);

  useEffect(() => {
    // Check if user already registered previously in this browser
    try {
      const savedTicket = localStorage.getItem('devsync_26_my_ticket');
      if (savedTicket) {
        setRegisteredAttendee(JSON.parse(savedTicket));
      }

      const allRegs = JSON.parse(localStorage.getItem('devsync_26_registrations') || '[]');
      if (allRegs.length > 0) {
        setRegisteredCount(Math.min(EVENT_DETAILS.capacity, EVENT_DETAILS.initialRegistered + allRegs.length));
      }
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
    }
  }, []);

  const handleLoadingFinish = () => {
    setIsLoading(false);
    try {
      const hasWelcomed = sessionStorage.getItem('devsync_26_welcomed');
      if (!hasWelcomed) {
        setTimeout(() => {
          setIsWelcomeModalOpen(true);
        }, 120);
      }
    } catch (e) {
      setTimeout(() => {
        setIsWelcomeModalOpen(true);
      }, 120);
    }
  };

  const handleCloseWelcome = () => {
    setIsWelcomeModalOpen(false);
    try {
      sessionStorage.setItem('devsync_26_welcomed', 'true');
    } catch (e) {}
  };

  const handleRegisterSuccess = (newAttendee) => {
    setRegisteredAttendee(newAttendee);
    setRegisteredCount(prev => Math.min(EVENT_DETAILS.capacity, prev + 1));
    setIsThankYouModalOpen(true);
  };

  const handleSelectTrack = (trackTitle) => {
    setSelectedTrackPref(trackTitle);
    const registerEl = document.getElementById('register');
    if (registerEl) {
      const top = registerEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToRegister = (e) => {
    if (e) e.preventDefault();
    const registerEl = document.getElementById('register');
    if (registerEl) {
      const top = registerEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToSchedule = (e) => {
    if (e) e.preventDefault();
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      const top = scheduleEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        {/* Homepage Route */}
        <Route 
          path="/" 
          element={
            <HomePage 
              registeredAttendee={registeredAttendee}
              registeredCount={registeredCount}
              selectedTrackPref={selectedTrackPref}
              handleSelectTrack={handleSelectTrack}
              handleRegisterSuccess={handleRegisterSuccess}
              setIsPassModalOpen={setIsPassModalOpen}
              scrollToRegister={scrollToRegister}
              scrollToSchedule={scrollToSchedule}
            />
          } 
        />

        {/* Dedicated About GDG MMMUT Page */}
        <Route 
          path="/about-gdg" 
          element={<AboutGDG />} 
        />

        {/* Catch-all redirect to Home */}
        <Route 
          path="*" 
          element={
            <HomePage 
              registeredAttendee={registeredAttendee}
              registeredCount={registeredCount}
              selectedTrackPref={selectedTrackPref}
              handleSelectTrack={handleSelectTrack}
              handleRegisterSuccess={handleRegisterSuccess}
              setIsPassModalOpen={setIsPassModalOpen}
              scrollToRegister={scrollToRegister}
              scrollToSchedule={scrollToSchedule}
            />
          } 
        />
      </Routes>

      {/* Initial LEGO Brick Loading Screen */}
      {isLoading && (
        <LoadingScreen onFinish={handleLoadingFinish} />
      )}

      {/* Global Welcome Modal */}
      <WelcomeModal
        isOpen={isWelcomeModalOpen}
        onClose={handleCloseWelcome}
        onRegisterClick={() => {
          handleCloseWelcome();
          const el = document.getElementById('register');
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }}
      />

      {/* Actual Registration Thank-You Popup */}
      <RegistrationThankYouModal
        isOpen={isThankYouModalOpen}
        onClose={() => setIsThankYouModalOpen(false)}
        attendee={registeredAttendee}
        onViewPass={() => {
          setIsThankYouModalOpen(false);
          setIsPassModalOpen(true);
        }}
      />

      {/* Global Ticket Pass Modal */}
      <TicketModal 
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        attendee={registeredAttendee}
      />
    </BrowserRouter>
  );
}
