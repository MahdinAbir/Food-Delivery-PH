import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#FFE1FF] min-h-screen px-6 py-12 text-[#2f2f2f]">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl border-l-8 border-[#7E60BF] p-10">
        <h1 className="text-4xl font-bold text-[#433878] mb-8 text-center">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">1. Overview</h2>
          <p>
            FOODSHARE respects your privacy. This policy explains how your
            personal information is collected, used, and secured.
          </p>
        </section>

        <section className="mb-6 bg-[#E4B1F0]/30 p-5 rounded">
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">
            2. What We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and email for account creation</li>
            <li>Location data (if you allow it) for food matching</li>
            <li>Information you include in posts</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">
            3. How We Use It
          </h2>
          <p>
            Your information is only used to improve your experience on
            FOODSHARE. We do not sell or share your personal data without
            permission.
          </p>
        </section>

        <section className="mb-6 bg-[#E4B1F0]/30 p-5 rounded">
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">
            4. Your Control
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You can update or delete your data anytime.</li>
            <li>You can contact us to see what we store about you.</li>
            <li>You may opt out of non-essential notifications.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">5. Updates</h2>
          <p>
            If we change our policy, we’ll notify you. Continued use of the
            platform means you accept those changes.
          </p>
        </section>

        <footer className="mt-10 text-center text-sm text-[#433878]">
          Last updated: July 19, 2025
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
