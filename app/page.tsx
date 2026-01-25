"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LANGUAGES = [
  "Tamil", "English", "Spanish", "Japanese", "Chinese", "Korean", "French",
  "German", "Italian", "Portuguese", "Hindi", "Arabic", "Russian", "Thai",
  "Vietnamese", "Turkish", "Dutch", "Polish", "Indonesian", "Telugu",
  "Malayalam", "Kannada", "Bengali", "Marathi"
];

// App Store Icon Component
const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

// Play Store Icon Component
const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
);

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Header with Branding */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl sm:text-3xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            NedilAI
          </motion.div>
          <motion.button
            onClick={() => scrollToSection("download")}
            className="px-6 py-2 glass rounded-lg hover:bg-primary-accent/20 transition-all duration-200 text-sm sm:text-base"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Download App
          </motion.button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
        {/* Background gradient shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-indigo opacity-20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-navy opacity-20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center">
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-primary-accent uppercase tracking-wider">
                AI that speaks for you in any language
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight space-y-1 sm:space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block">You speak your language.</span>
              <span className="block">They hear theirs.</span>
              <span className="block">NedilAI translates both sides live.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tell NedilAI what you need. It speaks for you, translates both sides, and gives you a clear summary.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative group">
                <button
                  disabled
                  className="flex items-center gap-3 px-6 py-4 glass rounded-xl opacity-60 cursor-not-allowed transition-all duration-200"
                >
                  <AppStoreIcon />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>
                <span className="absolute -top-2 -right-2 px-2 py-1 bg-primary-accent text-xs font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
              
              <div className="relative group">
                <button
                  disabled
                  className="flex items-center gap-3 px-6 py-4 glass rounded-xl opacity-60 cursor-not-allowed transition-all duration-200"
                >
                  <PlayStoreIcon />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
                <span className="absolute -top-2 -right-2 px-2 py-1 bg-primary-accent text-xs font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <motion.button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm flex items-center gap-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              See how it works
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Product Value Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Not just another translator app
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "An interpreter that knows your goal",
                description: "Explain your task once (check into a hotel, see a doctor, buy something important), and NedilAI keeps that goal in mind for the whole conversation.",
              },
              {
                title: "Cultural tips as you go",
                description: "Get helpful cultural context during conversations – like bargaining tips, local customs, or food recommendations – so you can navigate situations like a local.",
              },
              {
                title: "On-the-fly interventions",
                description: "At any moment you can step in: ask it to slow down, clarify, be firmer, be softer, or ask a new question. You stay in control; NedilAI does the talking.",
              },
              {
                title: "Clear summaries, not just transcripts",
                description: "After the conversation, you get an easy-to-read summary, key decisions, and important details – so you don't have to scroll through long chat logs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass glass-glow glass-glow-hover p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it feels simple for anyone */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card-glass/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Made for everyone.  
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            NedilAI is designed so anyone can use it comfortably.
            Explain what you need, and NedilAI guides rest of the conversation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Simple flow",
                description: "Describe what you need, choose who you're talking to, then let NedilAI speak. No complex menus or setup.",
              },
              {
                title: "Cultural tips included",
                description: "Get helpful cultural context during conversations – from bargaining tips to local customs – so you can navigate like a local.",
              },
              {
                title: "Speak or type",
                description: "You can talk to NedilAI in your own language, or type if you prefer. It adapts to how you want to communicate.",
              },
              {
                title: "You stay in control",
                description: "At any point you can pause, correct, or change what NedilAI says — so you can feel safe letting it speak.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass p-6 rounded-2xl h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card-glass/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            How it works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: "1", title: "Describe your task", description: "Tell NedilAI what you need help with – like checking into a hotel or ordering food." },
              { step: "2", title: "AI confirms", description: "NedilAI confirms it understands your goal and asks any clarifying questions if needed." },
              { step: "3", title: "Choose language", description: "Select who you're talking to. NedilAI opens the conversation and translates both sides in real-time, with helpful cultural tips along the way." },
              { step: "4", title: "Get summary", description: "Intervene anytime to guide the conversation. Afterward, get a clear summary with key decisions and important details." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-indigo rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Supported languages
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            {LANGUAGES.length}+ languages and counting
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {LANGUAGES.map((language, index) => (
              <motion.span
                key={language}
                className="px-6 py-3 glass rounded-full text-sm font-medium glass-glow-hover cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {language}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section (Bottom) */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card-glass/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to break language barriers?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            NedilAI is launching soon on iOS and Android. Be ready to experience seamless multilingual conversations.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <button
                disabled
                className="flex items-center gap-3 px-8 py-5 glass rounded-xl opacity-60 cursor-not-allowed transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <AppStoreIcon />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <span className="absolute -top-2 -right-2 px-3 py-1 bg-primary-accent text-xs font-medium rounded-full shadow-lg">
                Coming Soon
              </span>
            </motion.div>
            
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <button
                disabled
                className="flex items-center gap-3 px-8 py-5 glass rounded-xl opacity-60 cursor-not-allowed transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <PlayStoreIcon />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
              <span className="absolute -top-2 -right-2 px-3 py-1 bg-primary-accent text-xs font-medium rounded-full shadow-lg">
                Coming Soon
              </span>
            </motion.div>
          </div>
          
          <p className="text-sm text-gray-400">
            Available for iOS and Android devices. Stay tuned for the official launch.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-400 text-sm mb-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NedilAI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
