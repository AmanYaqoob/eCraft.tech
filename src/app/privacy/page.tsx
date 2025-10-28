"use client";
import { motion } from "motion/react";

const PrivacyPage = () => {
  return (
    <div className="pt-32">
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 text-center">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-body-color dark:text-body-color-dark">
              <p className="mb-6 leading-relaxed">
                Welcome to eCraft.tech. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, communicate with us, or use our services.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-black dark:text-white mt-6 mb-3">
                a. Personal Information
              </h3>
              <p className="mb-4 leading-relaxed">
                When you contact us, fill out a form, or hire us for services, we may collect your name, email address, phone number, company name (if applicable), and payment details (only for invoicing or transactions).
              </p>

              <h3 className="text-xl font-semibold text-black dark:text-white mt-6 mb-3">
                b. Non-Personal Information
              </h3>
              <p className="mb-6 leading-relaxed">
                When you visit our website, we may automatically collect information such as your browser type and version, IP address, device information, pages visited, time spent on our site, and cookies or usage data.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">We use your information to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Communicate with you about projects, services, or inquiries</li>
                <li>Process payments and send invoices</li>
                <li>Provide updates or schedule meetings</li>
                <li>Improve our website, services, and client experience</li>
                <li>Comply with legal and financial obligations</li>
              </ul>
              <p className="mb-6 leading-relaxed">
                We do not sell, rent, or trade your personal data with any third parties.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 leading-relaxed">
                Our website may use cookies and similar technologies to improve functionality and user experience, track analytics (such as Google Analytics), and remember your preferences for future visits.
              </p>
              <p className="mb-6 leading-relaxed">
                You can choose to disable cookies through your browser settings, but some parts of our website may not function properly if you do.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Data Storage and Security
              </h2>
              <p className="mb-4 leading-relaxed">
                We store your personal information securely and take reasonable measures to prevent unauthorized access, loss, or misuse.
              </p>
              <p className="mb-6 leading-relaxed">
                We never store sensitive financial data such as credit card numbers on our servers. Payments are handled securely through banking channels or trusted third-party platforms such as Upwork, Fiverr, or PayPal.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Sharing of Information
              </h2>
              <p className="mb-4 leading-relaxed">We may share your information only in the following cases:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>With trusted service providers who help us operate our business (such as hosting, analytics, or payment processing)</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, prevent fraud, or enforce agreements</li>
              </ul>
              <p className="mb-6 leading-relaxed">
                We never share your data for marketing purposes without your consent.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Client Project Data
              </h2>
              <p className="mb-6 leading-relaxed">
                All client-provided materials, data, and credentials are treated as strictly confidential. We do not share or disclose project information to any third party without written consent from the client.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Data Retention
              </h2>
              <p className="mb-6 leading-relaxed">
                We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy and to comply with legal, tax, or accounting requirements. After this period, your data will be securely deleted.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Your Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                You have the right to access, review, correct, or delete your personal data, and to withdraw consent for its processing.
              </p>
              <p className="mb-6 leading-relaxed">
                To exercise your rights, contact us at privacy@ecraft.tech.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Third-Party Links
              </h2>
              <p className="mb-6 leading-relaxed">
                Our website may contain links to external sites such as Upwork, Fiverr, or payment gateways. We are not responsible for the content or privacy practices of those websites. Please review their respective privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                Updates to This Policy
              </h2>
              <p className="mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. Continued use of our website after changes means you accept the revised policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;