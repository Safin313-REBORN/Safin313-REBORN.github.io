import React, { useState, useCallback, useMemo } from 'react';
import { CARD_DETAILS } from './data/cardDetails';
import { CardDetail } from './types/portfolio';

// Common Architectural Primitives
import { GlobalCursorSpotlight } from './components/common/GlobalCursorSpotlight';
import { BootScreen } from './components/common/BootScreen';
import { StarlightSky } from './components/common/StarlightSky';
import { AnimatedSection } from './components/common/AnimatedSection';
import { ProgressiveBlur } from './components/ui/progressive-blur';

// Layout Structure
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';

// Unlumen UI Physics Cursor
import { CursorProvider, Cursor } from './components/unlumen-ui/cursor';

// Modals - Code-split for optimal initial load performance
const ActiveDetailModal = React.lazy(() =>
  import('./components/modals/ActiveDetailModal').then((m) => ({ default: m.ActiveDetailModal }))
);

import { EditorialHero } from './components/sections/EditorialHero';
import { StorySection } from './components/sections/StorySection';
import { EducationSection } from './components/sections/EducationSection';
import { WebDevSection } from './components/sections/WebDevSection';
import { RoboticsIoTSection } from './components/sections/RoboticsIoTSection';
import { CybersecuritySection } from './components/sections/CybersecuritySection';
import { PublicationSection } from './components/sections/PublicationSection';
import { CompetitiveProgrammingSection } from './components/sections/CompetitiveProgrammingSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';

export const App: React.FC = () => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);

  const handleSelectDetail = useCallback((detailId: string) => {
    setTriggerEl(document.activeElement as HTMLElement | null);
    setActiveDetailId(detailId);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveDetailId(null);
  }, []);

  const handleNavigateSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const activeDetail: CardDetail | null = activeDetailId ? CARD_DETAILS[activeDetailId] || null : null;

  const mainContent = useMemo(
    () => (
      <main id="main-content" className="relative z-10 w-full">
        {/* Pixel-Faithful First Page: Marcus — Bennet Editorial Hero with User Portrait */}
        <EditorialHero onNavigateSection={handleNavigateSection} />

        {/* 01: Story & Pillars */}
        <AnimatedSection id="story">
          <StorySection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* 02: Academics & Foundations */}
        <AnimatedSection id="academics">
          <EducationSection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Dedicated Sector 01: Web Systems & Full-Stack Architecture */}
        <AnimatedSection id="web-dev">
          <WebDevSection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Dedicated Sector 02: Robotics, Firmware & Embedded IoT */}
        <AnimatedSection id="robotics-iot">
          <RoboticsIoTSection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Dedicated Sector 03: Cybersecurity & Defensive Auditing */}
        <AnimatedSection id="cybersecurity">
          <CybersecuritySection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Dedicated Sector 04: Academic Research & Scientific Publications */}
        <AnimatedSection id="publications">
          <PublicationSection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Dedicated Sector 05: Competitive Programming & Algorithmic Rigor (Live GitHub Graph) */}
        <AnimatedSection id="competitive-programming">
          <CompetitiveProgrammingSection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Strategic Progression: Roadmap */}
        <AnimatedSection id="roadmap">
          <RoadmapSection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Industry Credentials & Training */}
        <AnimatedSection id="certificates" showEdgeBlur={false}>
          <CertificatesSection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Leadership & Institutional Experience */}
        <AnimatedSection id="leadership">
          <ExperienceSection onSelectDetail={handleSelectDetail} />
        </AnimatedSection>

        {/* Inquire & Direct Connect */}
        <AnimatedSection id="connect">
          <ContactSection />
        </AnimatedSection>
      </main>
    ),
    [handleNavigateSection, handleSelectDetail]
  );

  return (
    <CursorProvider global className="relative min-h-screen text-foreground selection:bg-gold/20 selection:text-foreground font-hn transition-colors duration-300">
      {/* Full Background Layer: Luxury BMW Starlight Shimmering Golden Sky */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden starlight-sky-bg"
      >
        <StarlightSky />
      </div>

      {/* Cinematic Uiverse dexter-st Boot Screen */}
      <BootScreen />

      {/* Velocity-Responsive Tilt & Physics Cursor (Desktop Pointer Only) */}
      <div className="hidden md:block">
        <Cursor className="text-foreground drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)]" />
      </div>

      {/* 0-Re-render Ambient Cursor Spotlight */}
      <GlobalCursorSpotlight />

      {/* Viewport Top Progressive Edge Blur (Softens incoming/outgoing page content under Navbar) */}
      <ProgressiveBlur
        side="top"
        size="88px"
        strength={6}
        tintStrength={0.65}
        className="fixed top-0 inset-x-0 z-40 pointer-events-none"
      />


      {/* Floating Glass Navigation Header */}
      <Navbar
        onOpenMobile={() => setIsMobileOpen((prev) => !prev)}
        isMobileOpen={isMobileOpen}
      />

      {/* Accessible Mobile Slide-Out Drawer for lower portfolio sections */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      {/* Main Content Area */}
      {mainContent}

      {/* Footer */}
      <Footer />

      {/* Accessible WCAG 2.1 AA Deep-Dive Dossier Dialog */}
      <React.Suspense fallback={null}>
        <ActiveDetailModal
          detail={activeDetail}
          onClose={handleCloseModal}
          triggerElementRef={triggerEl}
        />
      </React.Suspense>
    </CursorProvider>
  );
};

export default App;
