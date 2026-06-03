export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* HERO */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-2)] px-3 py-1 text-[11px] tracking-[0.1em] text-[var(--text-3)] mb-8">
                OPEN TO ML ENGINEER &amp; DATA ANALYST ROLES
              </div>

              <h1 className="mb-6 tracking-[-0.035em] leading-none">
                CheukYin LAM
              </h1>

              <div className="max-w-[620px] text-[17px] leading-relaxed text-[var(--text-2)] mb-10">
                Year 4 student in Computer Science and Computational Finance at City University of Hong Kong.
                I build practical machine learning tools and data systems, with a focus on time series forecasting,
                risk analytics, and turning complex methods into reliable, usable applications.
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#work" className="btn btn-primary text-base px-7 py-3.5">
                  View Selected Work
                </a>
                {/* <a 
                  href="https://drive.google.com/drive/folders/1P1-7yb6Qk9pDmoivqNhPfTH0Eg5dSJfb" 
                  target="_blank"
                  className="btn btn-secondary text-base px-7 py-3.5"
                >
                  Proof Documents
                </a> */}
              </div>
            </div>

            {/* Photo */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[420px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-3)]">
                <img 
                  src="cheukyin-lam.png" 
                  alt="CheukYin LAM" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="uppercase tracking-[0.12em] text-xs text-[var(--text-3)] mb-4">About</div>
          
          <div className="prose prose-lg max-w-none text-[15.5px] leading-relaxed text-[var(--text-2)] space-y-6">
            <p>
              I build things that work with real data. My work centers on time series forecasting, 
              portfolio risk systems, and applied modeling, always with the goal of creating tools 
              that are actually useful to others.
            </p>
            <p>
              I have shipped two substantial deployed applications: a full featured portfolio risk 
              management dashboard with Monte Carlo simulation, stress testing, and optimization, 
              and an LSTM based stock prediction system with two trained models and live forecasting. 
              Both are publicly accessible and actively used.
            </p>
            <p>
              My background in computational finance gives me strong intuition for financial and 
              time series data problems. I am currently developing brain inspired predictive models 
              under the CityU Sino Grand Challenges Scholars Program, with plans to continue this 
              as my final year project.
            </p>
            <p>
              I am looking for roles as an ML Engineer or Data Analyst where I can contribute 
              immediately and keep building production grade systems.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="uppercase tracking-[0.12em] text-xs text-[var(--text-3)] mb-6">Experience</div>

          <div className="space-y-10">
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-x-4 gap-y-1 mb-2">
                <div className="font-semibold text-[17px]">(Incoming) Quantitative Analyst Intern</div>
                <div className="text-sm text-[var(--text-3)]">Sep 2026 - Oct 2026</div>
              </div>
              <div className="text-[var(--text-2)] mb-3">Caerus Global Management</div>
              /* {/* <ul className="text-[var(--text-2)] space-y-1.5 text-[15px] pl-1">
                <li></li>
                <li></li>
                <li></li>
              </ul> */} */
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-x-4 gap-y-1 mb-2">
                <div className="font-semibold text-[17px]">IT Intern (Data Analyst)</div>
                <div className="text-sm text-[var(--text-3)]">Jun 2026 - Aug 2026</div>
              </div>
              <div className="text-[var(--text-2)] mb-3">Q P Printing Limited</div>
              {/* <ul className="text-[var(--text-2)] space-y-1.5 text-[15px] pl-1">
                <li>Analyzed loan portfolios to estimate customer default probability and identified key risk factors.</li>
                <li>Developed a Random Forest model to predict potential loan defaults.</li>
                <li>Applied statistical and machine learning techniques to real credit risk data.</li>
              </ul> */}
            </div>


            
            {/* Sportopia */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-x-4 gap-y-1 mb-2">
                <div className="font-semibold text-[17px]">Data Analyst Intern</div>
                <div className="text-sm text-[var(--text-3)]">Aug 2025 – Nov 2025</div>
              </div>
              <div className="text-[var(--text-2)] mb-3">Sportopia Ltd · Hong Kong</div>
              <ul className="text-[var(--text-2)] space-y-1.5 text-[15px] pl-1">
                <li>Optimized data retrieval efficiency by 50 percent, significantly improving speed and reliability of business operations.</li>
                <li>Maintained data integrity across three databases through integration and quality assurance.</li>
                <li>Designed and implemented automated document generation pipelines using Lark, reducing manual workload for client facing quotations and product catalogs.</li>
              </ul>
            </div>

            {/* JPM */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-x-4 gap-y-1 mb-2">
                <div className="font-semibold text-[17px]">Quantitative Researcher Virtual Experience Program</div>
                <div className="text-sm text-[var(--text-3)]">Aug 2025</div>
              </div>
              <div className="text-[var(--text-2)] mb-3">JPMorgan Chase &amp; Co.</div>
              <ul className="text-[var(--text-2)] space-y-1.5 text-[15px] pl-1">
                <li>Analyzed loan portfolios to estimate customer default probability and identified key risk factors.</li>
                <li>Developed a Random Forest model to predict potential loan defaults.</li>
                <li>Applied statistical and machine learning techniques to real credit risk data.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--bg-2)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="uppercase tracking-[0.12em] text-xs text-[var(--text-3)] mb-2">Selected Work</div>
              <h2 className="tracking-[-0.02em]">Things I have built and shipped</h2>
            </div>
            <a 
              href="https://github.com/6309-lcy" 
              target="_blank"
              className="hidden md:block text-sm text-[var(--text-2)] hover:text-[var(--text)] underline underline-offset-4"
            >
              All projects on GitHub
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Portfolio Risk Dashboard */}
            <div className="group card p-7 md:p-8 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-2)]">Live Deployed</div>
                  <div className="text-xs px-3 py-1 rounded-full bg-[var(--accent)] text-white">Featured</div>
                </div>
                
                <h3 className="text-2xl tracking-[-0.015em] mb-3">Portfolio Management and Risk Dashboard</h3>
                
                <p className="text-[var(--text-2)] mb-6 leading-relaxed">
                  Full featured web application for portfolio construction, real time risk analytics, 
                  Monte Carlo simulation, historical stress testing, and Modern Portfolio Theory optimization.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 text-xs">
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">Streamlit</span>
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">Python</span>
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">Plotly</span>
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">yfinance</span>
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">PyPortfolioOpt</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex gap-3">
                <a 
                  href="https://portfoliomanagementandriskdashbroadapplication-wqbbck77j8sms65.streamlit.app/" 
                  target="_blank"
                  className="btn btn-primary flex-1 justify-center"
                >
                  Open Live Demo
                </a>
                <a 
                  href="https://github.com/6309-lcy/Portfolio_Management_and_Risk_dashbroad_Application" 
                  target="_blank"
                  className="btn btn-secondary flex-1 justify-center"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* LSTM Stock Predictor */}
            <div className="group card p-7 md:p-8 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-2)]">Live Deployed</div>
                </div>
                
                <h3 className="text-2xl tracking-[-0.015em] mb-3">Stock Prediction with LSTM</h3>
                
                <p className="text-[var(--text-2)] mb-6 leading-relaxed">
                  Two production LSTM models (StandardScaler vs MinMaxScaler) for stock price forecasting. 
                  Interactive interface with historical predictions, moving averages, and 7 day forward forecasts.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 text-xs">
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">TensorFlow Keras</span>
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">Streamlit</span>
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">Python</span>
                  <span className="px-3 py-1 rounded bg-[var(--bg-3)] text-[var(--text-2)]">yfinance</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex gap-3">
                <a 
                  href="https://stock-prediction-by-lstm-ntqvmpntpsyeqvtoqy6uud.streamlit.app" 
                  target="_blank"
                  className="btn btn-primary flex-1 justify-center"
                >
                  Open Live Demo
                </a>
                <a 
                  href="https://github.com/6309-lcy/Stock-Prediction-by-LSTM" 
                  target="_blank"
                  className="btn btn-secondary flex-1 justify-center"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL PROJECTS AND REPORTS */}
      <section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="uppercase tracking-[0.12em] text-xs text-[var(--text-3)] mb-6">Additional Work</div>
          <h2 className="mb-8 tracking-[-0.015em]">Reports and competitions</h2>

          <div className="space-y-6 text-[15px]">
            {/* VWAP */}
            <div className="p-6 rounded-xl border border-[var(--border)]">
              <div className="font-medium mb-1">VWAP Algorithm Performance Analysis</div>
              <div className="text-[var(--text-2)] mb-3">Self directed research report on a static VWAP execution algorithm designed for trading one million shares per day. Includes slippage analysis and performance evaluation across different market conditions.</div>
              <a 
                href="https://drive.google.com/file/d/1_A9DqwKTHKuVEsjyHu3AWwpzkG8YL5O-/view?usp=sharing" 
                target="_blank"
                className="verified hover:border-[var(--text-2)]"
              >
                View PDF Report
              </a>
            </div>

            {/* Citi Global Markets Challenge / FMMA */}
            <div className="p-6 rounded-xl border border-[var(--border)]">
              <div className="font-medium mb-1">Citi Global Markets Challenge 2026</div>
              <div className="text-[var(--text-2)] mb-3">
                Developed a macro data driven long short equity strategy that exploits short term market mispricing around geopolitical sanction events. 
                Used the 2022 Russia Ukraine sanctions as a historical analog to model potential impacts in other regions. 
                Backtested performance significantly outperformed the benchmark with strong risk adjusted returns.
              </div>
              <a 
                href="https://drive.google.com/file/d/1xgAIWdhz-PPBRttPeocMY9UhNgJ1SZ8J/view?usp=sharing" 
                target="_blank"
                className="verified hover:border-[var(--text-2)]"
          
              >
                View PDF Report
              </a>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border)]">
              <div className="font-medium mb-1">KCC Elite Development Programme: Li Ning Report</div>
              <div className="text-[var(--text-2)] mb-3">
                Report from the KCC Elite Development Programme. Developed a five year strategic expansion plan for Li Ning Co. Ltd covering domestic consolidation and international market entry. Advanced to the final round held in Malaysia.
              </div>
              <a 
                href="https://drive.google.com/file/d/1j8fAT-oti7QaWGr0pSFz5VMUA-7ZrjZW/view?usp=sharing" 
                target="_blank"
                className="verified hover:border-[var(--text-2)]"
              >
                 View PDF Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF DOCUMENTS (PDFs only, no CV) */}
      <section id="proof" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="uppercase tracking-[0.12em] text-xs text-[var(--text-3)] mb-4">Proof</div>
          <h2 className="mb-8 tracking-[-0.015em]">Supporting documents</h2>

          <div className="space-y-3 text-[15px]">
            <a 
              href="https://drive.google.com/file/d/1_XEpV3CZGAJZKn0z2jpViPipht5eJYlo/view?usp=sharing" 
              target="_blank"
              className="flex items-center justify-between gap-4 p-5 rounded-xl border border-[var(--border)] hover:bg-[var(--bg-2)] transition-colors group"
            >
              <div>
                <div className="font-medium">CityU Grand Challenges Research Proposal</div>
                <div className="text-xs text-[var(--text-3)] mt-0.5">Predictive Coding Model for Motion Parallax Depth Perception</div>
              </div>
              <div className="verified group-hover:border-[var(--text-2)]">PDF</div>
            </a>
          </div>

          
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="border-t border-[var(--border)] py-12 text-sm">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-y-4 text-[var(--text-2)]">
          <div>
            CheukYin LAM · City University of Hong Kong · Class of 2028
          </div>
          <div className="flex gap-6">
            <a href="mailto:lcy20050603@gmail.com" className="hover:text-[var(--text)]">Email</a>
            <a href="https://github.com/6309-lcy" target="_blank" className="hover:text-[var(--text)]">GitHub</a>
            <a href="https://linkedin.com/in/cheuk-yin-lam-374b83337" target="_blank" className="hover:text-[var(--text)]">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
