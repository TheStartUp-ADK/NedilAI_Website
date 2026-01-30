"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Accordion Component
const Accordion = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-primary-accent transition-colors"
      >
        <h3 className="text-lg font-semibold pr-4">{title}</h3>
        <motion.svg
          className="w-5 h-5 flex-shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-gray-300 leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function Support() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-white">
            NedilAI
          </Link>
          <Link
            href="/"
            className="px-6 py-2 glass rounded-lg hover:bg-primary-accent/20 transition-all duration-200 text-sm sm:text-base"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Help & Support</h1>
            <p className="text-gray-400 mb-8">Get help with NedilAI or contact our support team</p>

            {/* Quick Contact */}
            <div className="glass glass-glow p-6 rounded-2xl mb-8 text-center">
              <p className="text-gray-300 mb-2">Need help? Contact us at:</p>
              <a 
                href="mailto:support@nedilai.com" 
                className="text-2xl font-semibold text-primary-accent hover:text-primary-accent/80 transition-colors"
              >
                support@nedilai.com
              </a>
              <p className="text-sm text-gray-400 mt-2">We respond within 24-48 hours</p>
            </div>

            {/* Getting Started */}
            <div className="glass glass-glow p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Creating Your Account</h3>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Download NedilAI from the <a href="https://apps.apple.com/us/app/nedil-ai/id6757962583" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">App Store (iOS)</a> or Google Play Store (Android)</li>
                    <li>Open the app and tap "Sign Up"</li>
                    <li>Enter your email and verify with the OTP code sent to your email</li>
                    <li>Create a password and enter your name</li>
                    <li>Complete the setup wizard to configure your preferences</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white mt-6">Your First Conversation</h3>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Tap <strong>"Start New Task"</strong> (or use a Quick Action for common scenarios)</li>
                    <li>Describe what you need help with (e.g., "I need to check into my hotel")</li>
                    <li>Review and confirm when NedilAI confirms it understands</li>
                    <li>Select the language of the person you'll be speaking with</li>
                    <li>Review the cultural tips shown for that language</li>
                    <li>Tap <strong>"Start Conversation"</strong> to begin</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* How to Use */}
            <div className="glass glass-glow p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-semibold mb-6">How to Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Starting a Conversation</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Voice Input:</strong> Tap and hold the microphone button, speak your task, then release.</p>
                    <p><strong>Text Input:</strong> Type your task description and tap "Continue".</p>
                    <p><strong>Quick Actions:</strong> Use buttons like Hotel, Food, Transport, Health, Shopping, or Directions for common scenarios.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">During a Conversation</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p className="font-semibold text-white mb-2">Your Side (Bottom)</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Tap microphone to speak in your language</li>
                        <li>Type commands or corrections</li>
                        <li>Use quick action buttons (Accept, Ask price, Thank you, etc.)</li>
                        <li>Intervene anytime - whisper commands through earphones or type instructions</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Their Side (Top)</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Tap microphone when they're speaking</li>
                        <li>View translations in real-time</li>
                        <li>Get cultural tips automatically</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Ending a Conversation</h3>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Tap <strong>"End Conversation"</strong> when finished</li>
                    <li>Review the <strong>Bonding Phrase</strong> (a helpful phrase to remember)</li>
                    <li>View the <strong>Summary</strong> with key outcomes and important information</li>
                    <li>The conversation is automatically saved to your history</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Viewing Conversation History</h3>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Tap the <strong>"History"</strong> tab at the bottom of the screen</li>
                    <li>Browse your past conversations</li>
                    <li>Tap any conversation to view details, summary, and full transcript</li>
                    <li>Delete conversations by swiping left (iOS) or long-pressing (Android)</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Managing Settings</h3>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Tap the <strong>"Settings"</strong> tab at the bottom</li>
                    <li><strong>Language Settings</strong>: Change your native language preference</li>
                    <li><strong>Voice Settings</strong>: Choose male or female voice for translations</li>
                    <li><strong>Account</strong>: View your email and audio quota, sign out, or delete account</li>
                    <li><strong>Audio Quota</strong>: View your remaining audio time and reset date</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* FAQ Section with Accordion */}
            <div className="glass glass-glow p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-0">
                <Accordion title="What is NedilAI?">
                  <p>NedilAI is a real-time voice translation app that helps you communicate across language barriers. It translates both sides of a conversation in real-time using AI-powered speech-to-speech translation.</p>
                </Accordion>

                <Accordion title="How is NedilAI different from other translation apps?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Understands your goals and keeps context throughout conversations</li>
                    <li>Provides helpful cultural tips during conversations – like bargaining advice, local customs, food recommendations, and etiquette tips</li>
                    <li>Allows on-the-fly interventions to guide the conversation</li>
                    <li>Generates clear summaries instead of just transcripts</li>
                  </ul>
                </Accordion>

                <Accordion title="Is NedilAI free?">
                  <p>NedilAI offers a free tier with 300 seconds (5 minutes) of audio processing per week. Your quota resets automatically every 7 days.</p>
                </Accordion>

                <Accordion title="How do I start a conversation?">
                  <p>Tap "Start New Task" on the home screen, describe what you need help with, confirm the task, select languages, and tap "Start Conversation".</p>
                </Accordion>

                <Accordion title="How do I use voice input?">
                  <p>Hold the microphone button to record your voice. Release when done. Make sure microphone permissions are enabled in your device settings.</p>
                </Accordion>

                <Accordion title="Can I type instead of speaking?">
                  <p>Yes! You can type your task description and use text input during conversations to send commands or corrections.</p>
                </Accordion>

                <Accordion title="How do I guide the conversation?">
                  <p>During an active conversation, you can:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Whisper commands through your earphones</li>
                    <li>Type instructions in the text input</li>
                    <li>Use quick action buttons (Accept, Ask price, Thank you, etc.)</li>
                  </ul>
                </Accordion>

                <Accordion title="Where can I see my conversation history?">
                  <p>Tap the "History" tab at the bottom of the home screen. You can view, share, or delete past conversations from there.</p>
                </Accordion>

                <Accordion title="What is a bonding phrase?">
                  <p>A bonding phrase is a helpful phrase in the target language that you can use to connect with the other person. It's shown at the end of each conversation.</p>
                </Accordion>

                <Accordion title="What languages are supported?">
                  <p>NedilAI supports 20+ languages including English, Tamil, Spanish, Japanese, Chinese, Korean, French, German, Italian, Portuguese, Hindi, Arabic, Russian, Thai, Vietnamese, Turkish, Dutch, Polish, Indonesian, Telugu, Malayalam, Kannada, Bengali, and Marathi. See the language picker in the app for the complete list.</p>
                </Accordion>

                <Accordion title="What is the audio quota?">
                  <p>The audio quota is the amount of audio processing time you have available. The default is 300 seconds (5 minutes) per week. Your quota resets automatically every 7 days. You can see the reset date in Settings → Audio Quota.</p>
                </Accordion>

                <Accordion title="What happens when I run out of quota?">
                  <p>You'll see a message when your quota is exhausted. You'll need to wait until the reset date to continue using the app, or contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a> for assistance.</p>
                </Accordion>

                <Accordion title="How do I change my language preference?">
                  <p>Go to Settings → Language Settings → Select your native language.</p>
                </Accordion>

                <Accordion title="How do I change the voice gender?">
                  <p>Go to Settings → Voice Settings → Choose Male or Female.</p>
                </Accordion>

                <Accordion title="How do I sign out?">
                  <p>Go to Settings → Account → Tap "Sign Out".</p>
                </Accordion>

                <Accordion title="Can I increase my quota?">
                  <p>Contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a> to discuss quota options.</p>
                </Accordion>

                <Accordion title="How do I delete my account?">
                  <div className="space-y-3">
                    <p>You can delete your account directly from the app:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Go to <strong>Settings</strong></li>
                      <li>Scroll down to <strong>Account Actions</strong></li>
                      <li>Tap <strong>"Delete Account"</strong></li>
                      <li>Enter your email to confirm</li>
                      <li>Check your email for a verification code (OTP)</li>
                      <li>Enter the 6-digit code</li>
                      <li>Re-enter your email one final time to confirm</li>
                      <li>Confirm the permanent deletion</li>
                    </ol>
                    <p className="mt-3"><strong>Important:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Account deletion is <strong>permanent and cannot be undone</strong></li>
                      <li>All your data, conversations, and account information will be permanently deleted</li>
                      <li>Your email will be blocked from creating a new account for 30 days</li>
                      <li>If you need to remove the 30-day email restriction, contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a></li>
                    </ul>
                  </div>
                </Accordion>

                <Accordion title="Microphone not working?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Check that microphone permissions are enabled in your device settings</li>
                    <li>Restart the app</li>
                    <li>On iOS: Settings → Privacy → Microphone → Enable NedilAI</li>
                    <li>On Android: Settings → Apps → NedilAI → Permissions → Enable Microphone</li>
                  </ul>
                </Accordion>

                <Accordion title="App crashes or freezes?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Close the app completely and reopen it</li>
                    <li>Restart your device</li>
                    <li>Update the app to the latest version</li>
                    <li>If the issue persists, contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a></li>
                  </ul>
                </Accordion>

                <Accordion title="Can't sign in?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Verify your email address is correct</li>
                    <li>Check your internet connection</li>
                    <li>Try resetting your password</li>
                    <li>Contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a> if the issue persists</li>
                  </ul>
                </Accordion>

                <Accordion title="OTP code not received?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Check your spam/junk folder</li>
                    <li>Verify your email address is correct</li>
                    <li>Wait a few minutes and request a new code</li>
                    <li>Check that your email service is working</li>
                    <li>Contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a> if you still don't receive it</li>
                  </ul>
                </Accordion>

                <Accordion title="Audio not playing?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Check your device volume</li>
                    <li>Ensure your device is not in silent/Do Not Disturb mode</li>
                    <li>Try using headphones or earphones</li>
                    <li>Restart the app</li>
                  </ul>
                </Accordion>

                <Accordion title="Poor audio quality?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Speak clearly and at a normal pace</li>
                    <li>Reduce background noise</li>
                    <li>Hold your device closer when speaking</li>
                    <li>Use a quiet environment</li>
                  </ul>
                </Accordion>

                <Accordion title="Nedil Server Unreachable error?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Check your internet connection (Wi-Fi or mobile data)</li>
                    <li>Try switching between Wi-Fi and mobile data</li>
                    <li>Restart the app</li>
                    <li>Check if the app is up to date</li>
                    <li>Wait a few minutes and try again</li>
                  </ul>
                </Accordion>

                <Accordion title="Slow translation?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Check your internet connection speed</li>
                    <li>Close other apps using internet</li>
                    <li>Try again in a few moments</li>
                    <li>Contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a> if the issue persists</li>
                  </ul>
                </Accordion>

                <Accordion title="Incorrect translations?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Speak more clearly</li>
                    <li>Reduce background noise</li>
                    <li>Try rephrasing your message</li>
                    <li>Use the intervention feature to correct the conversation</li>
                  </ul>
                </Accordion>

                <Accordion title="Translation not in the right language?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Check that you selected the correct target language</li>
                    <li>Go to Settings and verify your language preferences</li>
                    <li>Start a new conversation with the correct language selection</li>
                  </ul>
                </Accordion>

                <Accordion title="Forgot password?">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the "Forgot Password" option on the sign-in screen</li>
                    <li>Check your email for password reset instructions</li>
                    <li>Contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a> if you need additional help</li>
                  </ul>
                </Accordion>
              </div>
            </div>

            {/* Account Management */}
            <div className="glass glass-glow p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-semibold mb-6">Account Management</h2>
              
              <div className="space-y-6">
                <Accordion title="Changing Language Preferences" defaultOpen={false}>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Go to <strong>Settings</strong></li>
                    <li>Tap <strong>Language Settings</strong></li>
                    <li>Select your native language</li>
                    <li>Changes apply to new conversations</li>
                  </ol>
                </Accordion>

                <Accordion title="Managing Voice Settings" defaultOpen={false}>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Go to <strong>Settings</strong></li>
                    <li>Tap <strong>Voice Settings</strong></li>
                    <li>Choose <strong>Male</strong> or <strong>Female</strong> voice</li>
                    <li>Changes apply to new conversations</li>
                  </ol>
                </Accordion>

                <Accordion title="Viewing Audio Quota" defaultOpen={false}>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Go to <strong>Settings</strong></li>
                    <li>Scroll to <strong>Audio Quota</strong></li>
                    <li>View: Used time, Remaining time, Total limit, and Next reset date</li>
                  </ol>
                </Accordion>

                <Accordion title="Deleting Conversations" defaultOpen={false}>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-white mb-2">Delete Individual Conversation:</p>
                      <ol className="list-decimal list-inside space-y-1 ml-4">
                        <li>Go to <strong>History</strong></li>
                        <li>Swipe left on the conversation (iOS) or long-press (Android)</li>
                        <li>Tap <strong>Delete</strong></li>
                      </ol>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Delete All Conversations:</p>
                      <p className="ml-4">Go to <strong>History</strong> and tap the <strong>Clear All</strong> button.</p>
                    </div>
                  </div>
                </Accordion>

                <Accordion title="Deleting Your Account" defaultOpen={false}>
                  <div className="space-y-3">
                    <p className="font-semibold text-white mb-2">How to Delete Your Account:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Go to <strong>Settings</strong></li>
                      <li>Scroll to <strong>Account Actions</strong> section</li>
                      <li>Tap <strong>"Delete Account"</strong> (below Sign Out)</li>
                      <li>Enter your email address to confirm</li>
                      <li>Check your email for a 6-digit verification code</li>
                      <li>Enter the verification code</li>
                      <li>Re-enter your email one final time to confirm deletion</li>
                      <li>Confirm the permanent deletion in the final warning dialog</li>
                    </ol>
                    <p className="mt-4 font-semibold text-white mb-2">What Happens When You Delete Your Account:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All your account data is permanently deleted</li>
                      <li>All your conversations and messages are permanently deleted</li>
                      <li>Your profile information is permanently deleted</li>
                      <li>Your email address is hashed and stored for 30 days to prevent immediate re-registration</li>
                      <li>After 30 days, the email hash is automatically removed</li>
                    </ul>
                    <p className="mt-4 font-semibold text-white mb-2">Email Blocking Period:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Your email will be blocked from creating a new account for 30 days after deletion</li>
                      <li>This is a security measure to prevent abuse</li>
                      <li>If you need to remove this restriction earlier, contact support at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a></li>
                    </ul>
                    <p className="mt-4 text-red-300 font-semibold">⚠️ Warning: Account deletion is permanent and cannot be undone. Make sure you want to delete your account before proceeding.</p>
                  </div>
                </Accordion>
              </div>
            </div>

            {/* Technical Requirements */}
            <div className="glass glass-glow p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-semibold mb-6">Technical Requirements</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Device Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p className="font-semibold text-white mb-2">iOS:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>iOS 13.0 or later</li>
                        <li>iPhone, iPad, or iPod touch</li>
                        <li>Microphone access required</li>
                        <li>Internet connection required</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Android:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Android 8.0 (API level 26) or later</li>
                        <li>Microphone access required</li>
                        <li>Internet connection required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Network Requirements</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Internet Connection</strong>: Required for all features</li>
                    <li><strong>Connection Type</strong>: Wi-Fi or mobile data (4G/5G)</li>
                    <li><strong>Bandwidth</strong>: Stable connection recommended</li>
                    <li><strong>HTTPS</strong>: All data transmission uses secure HTTPS</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Permissions Required</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Microphone</strong>: Required for voice recording and translation</li>
                    <li><strong>Internet</strong>: Required for API calls and data synchronization</li>
                    <li><strong>Storage</strong> (optional): For caching conversation data locally</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="glass glass-glow p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Email Support</h3>
                  <p className="text-gray-300 mb-2"><strong>Primary Support Email</strong>:</p>
                  <a 
                    href="mailto:support@nedilai.com" 
                    className="text-xl font-semibold text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    support@nedilai.com
                  </a>
                  <p className="text-sm text-gray-400 mt-2">We respond within 24-48 hours.</p>
                  
                  <p className="text-gray-300 mt-4 mb-2"><strong>What to Include:</strong></p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Your email address</li>
                    <li>Description of the issue</li>
                    <li>Steps to reproduce the problem</li>
                    <li>Screenshots</li>
                    <li>Device information (iOS/Android, device model, app version)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">In-App Support</h3>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Open the app</li>
                    <li>Go to <strong>Settings</strong></li>
                    <li>Tap <strong>Help & Support</strong></li>
                    <li>Fill out the contact form</li>
                    <li>Tap <strong>Send Email</strong></li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Other Resources</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>Website</strong>: <a href="https://nedilai.com" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://nedilai.com</a></p>
                    <p><strong>Privacy Policy</strong>: <Link href="/privacy-policy" className="text-primary-accent hover:underline">View Privacy Policy</Link></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="glass glass-glow p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
              
              <div className="space-y-6">
                <Accordion title="App Updates" defaultOpen={false}>
                  <p className="mb-3">Keep your app updated to the latest version for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bug fixes</li>
                    <li>New features</li>
                    <li>Performance improvements</li>
                    <li>Security updates</li>
                  </ul>
                  <p className="mt-4 mb-2"><strong>How to Update:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>iOS</strong>: App Store → Updates → Find Nedil AI → Tap Update</li>
                    <li><strong>Android</strong>: Google Play Store → My Apps & Games → Find Nedil AI → Tap Update</li>
                  </ul>
                </Accordion>

                <Accordion title="Feature Requests" defaultOpen={false}>
                  <p className="mb-3">Have an idea for a new feature? Contact us at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a> with:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Feature description</li>
                    <li>Use case</li>
                    <li>Why it would be helpful</li>
                  </ul>
                </Accordion>

                <Accordion title="Reporting Bugs" defaultOpen={false}>
                  <p className="mb-3">Found a bug? Contact us at <a href="mailto:support@nedilai.com" className="text-primary-accent hover:underline">support@nedilai.com</a> with:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Description of the bug</li>
                    <li>Steps to reproduce</li>
                    <li>Expected behavior</li>
                    <li>Actual behavior</li>
                    <li>Screenshots (if applicable)</li>
                    <li>Device information</li>
                  </ul>
                </Accordion>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Quick Tips</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-white mb-2">For Best Results:</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li><strong>Speak Clearly</strong>: Enunciate your words and speak at a normal pace</li>
                        <li><strong>Reduce Noise</strong>: Use the app in a quiet environment when possible</li>
                        <li><strong>Be Specific</strong>: Provide clear task descriptions for better context</li>
                        <li><strong>Use Quick Actions</strong>: Save time with quick action buttons for common scenarios</li>
                        <li><strong>Review Summaries</strong>: Check conversation summaries to remember important details</li>
                        <li><strong>Save Bonding Phrases</strong>: Note helpful phrases from bonding phrase cards</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Common Use Cases:</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li><strong>Hotel Check-in</strong>: "I need to check into my hotel. The reservation is under [name]."</li>
                        <li><strong>Restaurant Orders</strong>: "I want to order food. I'm looking for [cuisine type]."</li>
                        <li><strong>Transportation</strong>: "I need transportation. I want to go to [destination]."</li>
                        <li><strong>Medical Assistance</strong>: "I need medical assistance. I'm experiencing [symptoms]."</li>
                        <li><strong>Shopping</strong>: "I want to buy something. I'm looking for [item]."</li>
                        <li><strong>Directions</strong>: "I need directions to [location]."</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
