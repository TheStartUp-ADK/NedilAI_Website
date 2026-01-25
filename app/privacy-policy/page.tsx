"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last Updated: January 24, 2025</p>

            <div className="glass glass-glow p-8 rounded-2xl space-y-8 prose prose-invert max-w-none">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Nedil AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your personal information. This Privacy Policy explains our practices regarding data collection, usage, and your rights when using the Nedil AI mobile application (the "App").
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  By using Nedil AI, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our App.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Account Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Email Address</strong>: Required for account creation, authentication, and communication</li>
                  <li><strong>Name</strong>: First name (required) and last name (optional) for personalization</li>
                  <li><strong>Password</strong>: Securely hashed and stored for authentication</li>
                  <li><strong>User ID</strong>: Unique identifier assigned to your account</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Profile Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Native Language</strong>: Your preferred language for translation</li>
                  <li><strong>Voice Gender Preference</strong>: Male or female voice preference for translations</li>
                  <li><strong>Onboarding Status</strong>: Whether you've completed the initial setup</li>
                  <li><strong>Notification Preferences</strong>: Your preferences for push notifications</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Conversation Data</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Audio Recordings</strong>: Voice recordings you make for translation</li>
                  <li><strong>Transcriptions</strong>: Text transcriptions of your voice recordings</li>
                  <li><strong>Translations</strong>: Translated text in target languages</li>
                  <li><strong>Task Briefings</strong>: Descriptions of tasks you want to accomplish</li>
                  <li><strong>Conversation History</strong>: Complete records of your conversations including messages, timestamps, and summaries</li>
                  <li><strong>Cultural Tips</strong>: Contextual information provided during conversations</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.4 Usage Data</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Audio Quota Usage</strong>: Amount of audio time used (tracked in seconds)</li>
                  <li><strong>Conversation Timestamps</strong>: When conversations were started and completed</li>
                  <li><strong>Feature Usage</strong>: Which features of the app you use</li>
                  <li><strong>Interaction Data</strong>: How you interact with the app (conversation history, settings changes)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.5 Technical Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Device Information</strong>: Basic device information necessary for app functionality</li>
                  <li><strong>App Version</strong>: Version of the app you're using</li>
                  <li><strong>Authentication Tokens</strong>: Secure tokens for maintaining your session</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">3.1 App Functionality</h3>
                <p className="text-gray-300 leading-relaxed mb-3">We use your information to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Authenticate and manage your account</strong>: Email and password for secure login</li>
                  <li><strong>Provide translation services</strong>: Process audio recordings, transcribe speech, and translate conversations</li>
                  <li><strong>Enable conversation features</strong>: Store and retrieve your conversation history</li>
                  <li><strong>Personalize your experience</strong>: Use your name in greetings and customize language preferences</li>
                  <li><strong>Manage audio quotas</strong>: Track usage to enforce fair usage limits</li>
                  <li><strong>Generate summaries</strong>: Create conversation summaries for your review</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Service Provider Processing</h3>
                <p className="text-gray-300 leading-relaxed mb-3">We use third-party service providers to process your data for app functionality:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>OpenAI</strong>: Processes audio recordings for speech-to-text transcription and text translation</li>
                  <li><strong>ElevenLabs</strong>: Converts translated text to speech in the target language</li>
                  <li><strong>Supabase</strong>: Provides secure database storage and authentication services</li>
                  <li><strong>Resend</strong>: Delivers OTP verification emails and password reset emails to your email address</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  These service providers process your data solely for the purpose of providing translation services and email delivery, and do not use your data for advertising or tracking purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Supabase</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Purpose</strong>: Authentication and database storage</li>
                  <li><strong>Data Stored</strong>: User accounts, profiles, conversations, messages, and usage data</li>
                  <li><strong>Location</strong>: Data is stored in secure Supabase servers</li>
                  <li><strong>Privacy</strong>: Supabase's privacy policy applies to data storage. See: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://supabase.com/privacy</a></li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">4.2 OpenAI</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Purpose</strong>: Speech-to-text transcription and text translation</li>
                  <li><strong>Data Processed</strong>: Audio recordings and text for translation</li>
                  <li><strong>Privacy</strong>: OpenAI processes data according to their API terms. Data is not used for training models or advertising. See: <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://openai.com/policies/privacy-policy</a></li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">4.3 ElevenLabs</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Purpose</strong>: Text-to-speech conversion</li>
                  <li><strong>Data Processed</strong>: Translated text for voice synthesis</li>
                  <li><strong>Privacy</strong>: ElevenLabs processes data according to their terms of service. See: <a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://elevenlabs.io/privacy</a></li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">4.4 Resend</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Purpose</strong>: Email delivery service for sending OTP verification codes and password reset emails</li>
                  <li><strong>Data Processed</strong>: Email addresses (for delivering OTP codes and account-related emails)</li>
                  <li><strong>Privacy</strong>: Resend processes email addresses solely for email delivery purposes. See: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://resend.com/legal/privacy-policy</a></li>
                </ul>

                <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
                  <strong>Important</strong>: We do not share your data with these service providers for advertising, marketing, or tracking purposes. They process your data solely to provide the translation services and email delivery you request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Data Storage and Security</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Data Storage</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Your data is stored securely in Supabase databases with encryption at rest</li>
                  <li>All data transmission uses HTTPS/TLS encryption</li>
                  <li>Data is stored in secure cloud infrastructure with industry-standard security measures</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Security Measures</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Encryption</strong>: All data in transit is encrypted using TLS/SSL</li>
                  <li><strong>Authentication</strong>: Secure password hashing and token-based authentication</li>
                  <li><strong>Access Controls</strong>: Row-level security (RLS) policies ensure users can only access their own data</li>
                  <li><strong>Regular Security Updates</strong>: We maintain and update our security practices regularly</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Local Device Storage</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Authentication Tokens</strong>: Stored locally on your device using secure storage (AsyncStorage on native platforms, localStorage on web)</li>
                  <li><strong>Purpose</strong>: Tokens are stored locally to maintain your login session and avoid requiring you to sign in repeatedly</li>
                  <li><strong>Security</strong>: Tokens are automatically cleared when you sign out</li>
                  <li><strong>No Sensitive Data</strong>: Passwords are never stored locally - only secure authentication tokens</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">5.4 Data Retention</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Account Data</strong>: Retained while your account is active</li>
                  <li><strong>Conversation History</strong>: Stored until you delete your account or individual conversations</li>
                  <li><strong>Audio Recordings</strong>: Processed in real-time and not permanently stored (only transcriptions are saved)</li>
                  <li><strong>Usage Data</strong>: Retained for quota management purposes</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You can delete your account at any time, which will permanently delete all associated data. Signing out will clear all locally stored authentication tokens.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Data Sharing and Disclosure</h2>
                <p className="text-gray-300 leading-relaxed mb-3">We do <strong>NOT</strong>:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Sell your personal information to third parties</li>
                  <li>Share your data with data brokers</li>
                  <li>Use your data for advertising or marketing purposes</li>
                  <li>Share your data for tracking purposes</li>
                  <li>Combine your data with third-party data for advertising</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4 mb-3">We may disclose your information only in the following circumstances:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Legal Requirements</strong>: If required by law, court order, or government regulation</li>
                  <li><strong>Service Providers</strong>: To trusted service providers (OpenAI, ElevenLabs, Supabase, Resend) who process data solely for app functionality</li>
                  <li><strong>Business Transfers</strong>: In the event of a merger, acquisition, or sale of assets (with notice to users)</li>
                  <li><strong>Protection of Rights</strong>: To protect our rights, property, or safety, or that of our users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Access and Correction</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>View Your Data</strong>: Access your profile, conversation history, and settings through the app</li>
                  <li><strong>Update Information</strong>: Modify your name, language preferences, and other profile settings in Settings</li>
                  <li><strong>Download Data</strong>: Request a copy of your data by contacting support</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Deletion Rights</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Delete Conversations</strong>: Remove individual conversations from your history</li>
                  <li><strong>Delete Account</strong>: Delete your entire account and all associated data by contacting support</li>
                  <li><strong>Right to be Forgotten</strong>: Request complete deletion of your personal data</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">7.3 GDPR Rights (European Users)</h3>
                <p className="text-gray-300 leading-relaxed mb-3">If you are located in the European Economic Area (EEA), you have additional rights:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Right to Access</strong>: Request copies of your personal data</li>
                  <li><strong>Right to Rectification</strong>: Request correction of inaccurate data</li>
                  <li><strong>Right to Erasure</strong>: Request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing</strong>: Request limitation of how we process your data</li>
                  <li><strong>Right to Data Portability</strong>: Request transfer of your data to another service</li>
                  <li><strong>Right to Object</strong>: Object to processing of your personal data</li>
                  <li><strong>Right to Withdraw Consent</strong>: Withdraw consent for data processing</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">7.4 CCPA Rights (California Users)</h3>
                <p className="text-gray-300 leading-relaxed mb-3">If you are a California resident, you have the right to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Know</strong>: Request information about what personal information we collect, use, and share</li>
                  <li><strong>Delete</strong>: Request deletion of your personal information</li>
                  <li><strong>Opt-Out</strong>: Opt-out of the sale of personal information (we do not sell personal information)</li>
                  <li><strong>Non-Discrimination</strong>: Not be discriminated against for exercising your privacy rights</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us through our <Link href="/support" className="text-primary-accent hover:underline">Support Page</Link> or visit our website at <a href="https://nedilai.com" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://nedilai.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nedil AI is not intended for children under the age of 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately, and we will delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using Nedil AI, you consent to the transfer of your information to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Supabase</strong>: Servers located in various regions (you can choose your region)</li>
                  <li><strong>OpenAI</strong>: Servers in the United States and other locations</li>
                  <li><strong>ElevenLabs</strong>: Servers in the United States and other locations</li>
                  <li><strong>Resend</strong>: Servers in the United States and other locations (for email delivery)</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We ensure that appropriate safeguards are in place to protect your data during international transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Audio Quota System</h2>
                <p className="text-gray-300 leading-relaxed mb-3">Nedil AI uses an audio quota system to ensure fair usage:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Default Limit</strong>: 300 seconds (5 minutes) of audio processing per week</li>
                  <li><strong>Reset Period</strong>: Quota resets automatically every 7 days</li>
                  <li><strong>Usage Tracking</strong>: We track your audio usage to enforce these limits</li>
                  <li><strong>Purpose</strong>: Quota data is used solely for managing fair usage, not for tracking or advertising</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed mb-3">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending you an email notification (if you have provided an email address)</li>
                  <li>Displaying a notice in the app</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Your continued use of the App after changes become effective constitutes acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  <li><strong>Website</strong>: <a href="https://nedilai.com" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://nedilai.com</a></li>
                  <li><strong>Support Page</strong>: <Link href="/support" className="text-primary-accent hover:underline">Support</Link></li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We will respond to your inquiry within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Additional Information</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">13.1 Data Controller</h3>
                <p className="text-gray-300 leading-relaxed">
                  For information about the data controller, please contact us through our <Link href="/support" className="text-primary-accent hover:underline">Support Page</Link> or visit our website at <a href="https://nedilai.com" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://nedilai.com</a>.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">13.2 Data Protection Officer</h3>
                <p className="text-gray-300 leading-relaxed">
                  If you are located in the EEA and have questions about data protection, please contact us through our <Link href="/support" className="text-primary-accent hover:underline">Support Page</Link> or visit our website at <a href="https://nedilai.com" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">https://nedilai.com</a>.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">13.3 Complaints</h3>
                <p className="text-gray-300 leading-relaxed">
                  If you are located in the EEA, you have the right to lodge a complaint with your local data protection authority if you believe we have violated your privacy rights.
                </p>
              </section>
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
