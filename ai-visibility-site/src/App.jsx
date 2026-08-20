import React, { useState } from 'react';
import { ContactModal } from './pages/ContactModal';
import "./App.css";

function App() {
  const [contactOpen, setContactOpen] = useState(false);


  return (
    <div className="site">

      {/* Decorative side borders */}
      <div className="side-pattern side-pattern-left"></div>
      <div className="side-pattern side-pattern-right"></div>

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <a href="#hero" className="logo">
            AI<span>VISIBILITY</span>
          </a>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#audit">Audit</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="header-contact">
            Contact us
          </a>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="hero section-frame" id="hero">
          <div className="hero-content">

            <div className="eyebrow">
              AI VISIBILITY AUDIT
            </div>

            <h1>
              Does AI
              <span>recommend</span>
              your product?
            </h1>

            <p className="hero-description">
              ChatGPT, Claude, Gemini and Perplexity are becoming
              a new way people discover products and make decisions.
              Find out how AI sees your business.
            </p>

            <a href="#contact" className="cta-button">
              Contact us
            </a>

          </div>

          {/* AI dashboard visual */}
          <div className="hero-visual">

            <div className="dashboard-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="dashboard-title">
                AI Visibility™
              </div>

              <div className="dashboard-icon">
                +
              </div>
            </div>

            <div className="dashboard">

              <div className="dashboard-grid"></div>

              <div className="connection connection-1"></div>
              <div className="connection connection-2"></div>
              <div className="connection connection-3"></div>
              <div className="connection connection-4"></div>

              <div className="node node-1">
                <span>AI Recommendation</span>
              </div>

              <div className="node node-2">
                <span>Brand Visibility</span>
              </div>

              <div className="node node-3">
                <span>Competitors</span>
              </div>

              <div className="node node-4">
                <span>Content Signals</span>
              </div>

              <div className="node node-5">
                <span>AI Sources</span>
              </div>

              <div className="score-card">
                <small>AI VISIBILITY SCORE</small>
                <strong>67<span>/&nbsp;&nbsp;&nbsp;&nbsp;100</span></strong>
                <div className="score-line">
                  <div></div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* AFTER HERO CTA */}
        <section className="after-hero section-frame">
          <div className="section-label">
            THE NEW SEARCH
          </div>

          <h2>
            Your customers are already
            <span>asking AI.</span>
          </h2>

          <p>
            AI systems increasingly influence which products,
            companies and services people discover. If AI does
            not understand your product, your competitors may
            become the answer instead.
          </p>

          <a href="#contact" className="cta-button">
            Contact us
          </a>
        </section>


        {/* ABOUT */}
        <section className="about section-frame" id="about">

          <div className="section-heading">
            <div className="section-label">
              AI VISIBILITY
            </div>

            <h2>
              Be seen where
              <span>decisions happen.</span>
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-card large-card">
              <div className="card-number">01</div>

              <h3>
                How does AI
                see your brand?
              </h3>

              <p>
                We test how leading AI systems understand,
                describe and recommend your product across
                relevant customer scenarios.
              </p>

              <div className="card-line"></div>

              <div className="card-meta">
                ChatGPT / Claude / Gemini / Perplexity
              </div>
            </div>

            <div className="about-card">
              <div className="card-number">02</div>

              <h3>
                Where do you
                lose visibility?
              </h3>

              <p>
                Identify the gaps in your content,
                positioning, website and external signals
                that prevent AI from understanding your business.
              </p>
            </div>

            <div className="about-card">
              <div className="card-number">03</div>

              <h3>
                Why do competitors
                get recommended?
              </h3>

              <p>
                Compare your brand against competing products
                and discover which signals influence AI
                recommendations.
              </p>
            </div>

          </div>
        </section>


        {/* AUDIT */}
        <section className="audit section-frame" id="audit">

          <div className="section-label">
            WHAT WE ANALYZE
          </div>

          <h2>
            One audit.
            <span>Six dimensions.</span>
          </h2>

          <div className="audit-grid">

            <div className="audit-item">
              <span>01</span>
              <h3>AI Visibility</h3>
              <p>
                How often and where AI recommends your product.
              </p>
            </div>

            <div className="audit-item">
              <span>02</span>
              <h3>Competitors</h3>
              <p>
                Why competing brands appear instead of yours.
              </p>
            </div>

            <div className="audit-item">
              <span>03</span>
              <h3>Content</h3>
              <p>
                Missing information that limits AI understanding.
              </p>
            </div>

            <div className="audit-item">
              <span>04</span>
              <h3>AI Sources</h3>
              <p>
                Websites and mentions influencing AI responses.
              </p>
            </div>

            <div className="audit-item">
              <span>05</span>
              <h3>Customer Queries</h3>
              <p>
                Real scenarios potential customers may search.
              </p>
            </div>

            <div className="audit-item">
              <span>06</span>
              <h3>Priorities</h3>
              <p>
                The changes with the highest potential impact.
              </p>
            </div>

          </div>
        </section>


        {/* PROCESS */}
        <section className="process section-frame" id="process">

          <div className="section-label">
            HOW IT WORKS
          </div>

          <h2>
            From AI testing
            <span>to strategy.</span>
          </h2>

          <div className="process-list">

            <div className="process-step">
              <div className="step-number">01</div>

              <div>
                <h3>Research</h3>
                <p>
                  We study your product, market,
                  competitors and potential search scenarios.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>

              <div>
                <h3>AI Testing</h3>
                <p>
                  We test relevant queries across leading
                  AI search systems.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>

              <div>
                <h3>Analysis</h3>
                <p>
                  We identify visibility, content,
                  positioning and external signal gaps.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>

              <div>
                <h3>Strategy</h3>
                <p>
                  You receive clear priorities and a
                  90-day roadmap for implementation.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* REPORT */}
        <section className="report section-frame">

          <div className="report-content">

            <div className="section-label">
              THE DELIVERABLE
            </div>

            <h2>
              Not just a report.
              <span>A plan of action.</span>
            </h2>

            <p>
              Your AI Visibility Audit shows where your brand
              stands today, what is holding it back and what
              should happen next.
            </p>

          </div>

          <div className="report-preview">

            <div className="report-top">
              <span>AI VISIBILITY AUDIT</span>
              <span>2026</span>
            </div>

            <div className="report-score">
              <small>VISIBILITY SCORE</small>

              <strong>
                67<span>/100</span>
              </strong>
            </div>

            <div className="report-bars">

              <div>
                <span>ChatGPT</span>
                <i>
                  <b style={{ width: "72%" }}></b>
                </i>
                <strong>72%</strong>
              </div>

              <div>
                <span>Claude</span>
                <i>
                  <b style={{ width: "61%" }}></b>
                </i>
                <strong>61%</strong>
              </div>

              <div>
                <span>Gemini</span>
                <i>
                  <b style={{ width: "79%" }}></b>
                </i>
                <strong>79%</strong>
              </div>

              <div>
                <span>Perplexity</span>
                <i>
                  <b style={{ width: "54%" }}></b>
                </i>
                <strong>54%</strong>
              </div>

            </div>

          </div>
        </section>


        {/* 90 DAY ROADMAP */}
        <section className="roadmap section-frame">

          <div className="section-label">
            90-DAY ROADMAP
          </div>

          <h2>
            Know what to do.
            <span>And when to do it.</span>
          </h2>

          <div className="roadmap-line">

            <div className="roadmap-step">
              <span>MONTH 01</span>

              <h3>Foundation</h3>

              <p>
                Fix critical content gaps and clarify
                product positioning.
              </p>
            </div>

            <div className="roadmap-step">
              <span>MONTH 02</span>

              <h3>Authority</h3>

              <p>
                Build comparison content, FAQs and
                external signals.
              </p>
            </div>

            <div className="roadmap-step">
              <span>MONTH 03</span>

              <h3>Optimization</h3>

              <p>
                Re-test AI visibility and optimize
                the weakest areas.
              </p>
            </div>

          </div>
        </section>


        {/* FINAL CTA */}
        <section className="final-cta section-frame" id="contact">

          <div className="final-cta-content">

            <div className="section-label">
              START HERE
            </div>

            <h2>
              Find out how AI
              <span>sees your business.</span>
            </h2>

            <p>
              Understand where you are losing potential
              customers and what you can do about it.
            </p>

            <button className="cta-button large" onClick={() => setContactOpen(true)}>
              Contact us
            </button>

            <ContactModal
              isOpen={contactOpen}
              onClose={() => setContactOpen(false)}
            />

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="logo">
            AI<span>VISIBILITY</span>
          </div>

          <div className="footer-copy">
            AI Visibility Audit
          </div>

          <div className="footer-copy">
            © 2026
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;