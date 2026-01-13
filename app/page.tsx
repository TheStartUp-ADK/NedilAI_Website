"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const LANGUAGES = [
  "Tamil", "English", "Spanish", "Japanese", "Chinese", "Korean", "French",
  "German", "Italian", "Portuguese", "Hindi", "Arabic", "Russian", "Thai",
  "Vietnamese", "Turkish", "Dutch", "Polish", "Indonesian", "Telugu",
  "Malayalam", "Kannada", "Bengali", "Marathi"
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Successfully joined the waitlist!",
        });
        setEmail("");
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to connect. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onClick={() => scrollToSection("waitlist")}
            className="px-6 py-2 glass rounded-lg hover:bg-primary-accent/20 transition-all duration-200 text-sm sm:text-base"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Waitlist
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
              You tell NedilAI what you want to achieve. It checks it has understood you, then speaks on your behalf in the other person's language – translating both sides, respecting local culture, and gives a clear summary at the end.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-4 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-transparent w-full transition-all duration-200"
                disabled={isSubmitting}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-primary-accent hover:bg-primary-accent/90 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg shadow-primary-accent/20"
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
              </button>
            </form>
            {submitStatus.type && (
              <motion.p
                className={`text-sm ${
                  submitStatus.type === "success" ? "text-green-400" : "text-red-400"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {submitStatus.message}
              </motion.p>
            )}
            
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
                title: "Guided, respectful openings",
                description: "NedilAI opens the conversation for you with the right tone for the situation and culture – like a polite local helping you speak, not a robot reading text.",
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
                title: "Speak, don't type",
                description: "You can talk to NedilAI in your own language. It listens, and turns it into clear speech for the other person.",
              },
              {
                title: "Clear on-screen guidance",
                description: "Step-by-step screens make it easy to see what's happening at each stage of the conversation.",
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
              { step: "1", title: "Brief task", description: "Tell NedilAI what you need to communicate and your goals for the conversation." },
              { step: "2", title: "AI confirms intent", description: "NedilAI confirms understanding of your brief and clarifies any details needed." },
              { step: "3", title: "Live translate", description: "Choose your target language. NedilAI opens the conversation and translates both sides in real-time." },
              { step: "4", title: "Get summary", description: "Intervene anytime to steer the dialog. Afterward, receive concise summaries and full conversation history." },
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

      {/* Join Waitlist Section (Bottom) */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card-glass/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to break language barriers?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the waitlist and be among the first to experience seamless multilingual conversations.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-4 rounded-lg glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-opacity-50 w-full sm:w-auto sm:min-w-[300px]"
              disabled={isSubmitting}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-primary-accent hover:bg-primary-accent/90 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? "Joining..." : "Join the waitlist"}
            </button>
          </form>
          
          {submitStatus.type && (
            <motion.p
              className={`text-sm ${
                submitStatus.type === "success" ? "text-green-400" : "text-red-400"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {submitStatus.message}
            </motion.p>
          )}
          
          <p className="text-sm text-gray-400 mt-6">
            We respect your privacy. Your email will only be used to notify you about NedilAI updates.
          </p>
        </div>
      </section>
    </main>
  );
}
