"use client";
import { motion } from "motion/react";

const TermsOfServicePage = () => {
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
              Terms and Conditions
            </h1>
            
            <div className="prose prose-lg max-w-none text-body-color dark:text-body-color-dark">
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="mb-6 leading-relaxed">
                Welcome to eCraft.tech. By using our website or engaging our services, you agree to the following Terms and Conditions. Please read them carefully before starting any project with us.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                2. Our Work Process
              </h2>
              <p className="mb-4 leading-relaxed">
                At eCraft.tech, we believe in building trust through results. That's why we offer our clients a 4-day preview period to review our work before entering a full contract.
              </p>
              <p className="mb-4 leading-relaxed">
                During this initial phase, you can evaluate our quality, communication, and workflow.
              </p>
              <p className="mb-6 leading-relaxed">
                After the 4-day trial, if you are satisfied, we proceed to sign a formal agreement.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                3. Contracts and Payments
              </h2>
              <p className="mb-4 leading-relaxed">Once you decide to move forward:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>A contract can be created directly through Upwork, Fiverr, or a direct agreement with us via email.</li>
                <li>Payments can be made securely to our local bank account or through your chosen freelance platform.</li>
                <li>After the contract is confirmed, the project will be divided into weekly or monthly milestones, depending on the scope and duration.</li>
                <li>We also support percentage-based payments, allowing flexibility as the project progresses.</li>
                <li>Each milestone will represent a clear deliverable, and work will continue once each milestone payment is completed.</li>
              </ul>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                4. Quality Assurance
              </h2>
              <p className="mb-4 leading-relaxed">
                We believe in quality over quantity. At eCraft.tech, we do not overpromise or take on more work than we can handle.
              </p>
              <p className="mb-4 leading-relaxed">
                Our focus is to deliver high-quality, result-oriented work that meets or exceeds your expectations.
              </p>
              <p className="mb-6 leading-relaxed">
                We treat every project with the same level of dedication and skill — ensuring our clients get real value, not just words.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                5. Meetings and Communication
              </h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Clients are encouraged to schedule meetings with us at any time to discuss project updates, feedback, or new ideas.</li>
                <li>Meetings can be arranged through our scheduling system or by direct contact.</li>
                <li>Clear and consistent communication ensures your project stays on track and meets your goals.</li>
              </ul>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                6. Our Commitment
              </h2>
              <p className="mb-4 leading-relaxed">
                We are a passionate and skilled team — not just another agency.
              </p>
              <p className="mb-4 leading-relaxed">
                Our commitment is to give 100% effort and attention to every project we accept.
              </p>
              <p className="mb-6 leading-relaxed">
                We aim to build long-term professional relationships based on trust, transparency, and performance.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                7. Client Responsibilities
              </h2>
              <p className="mb-4 leading-relaxed">Clients are expected to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate and timely project details.</li>
                <li>Share necessary assets or credentials required to complete the work.</li>
                <li>Give feedback and approvals within agreed timelines to avoid project delays.</li>
              </ul>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                8. Refunds and Cancellations
              </h2>
              <p className="mb-4 leading-relaxed">
                Refunds or cancellations will be reviewed on a case-by-case basis, depending on the project's progress and milestones completed.
              </p>
              <p className="mb-6 leading-relaxed">
                If work has already been delivered as per milestone terms, that portion will not be refundable.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                9. Legal
              </h2>
              <p className="mb-4 leading-relaxed">
                These Terms and Conditions are governed by applicable laws of our jurisdiction and the client's jurisdiction.
              </p>
              <p className="mb-6 leading-relaxed">
                Any disputes shall first be resolved through mutual discussion, and if necessary, through legal arbitration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;