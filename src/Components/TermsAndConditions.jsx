import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#FFE1FF] min-h-screen px-6 py-12 text-[#2f2f2f]">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl border-l-8 border-[#7E60BF] p-10">
        <h1 className="text-4xl font-bold text-[#433878] mb-8 text-center">
          Terms & Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">1. Acceptance</h2>
          <p>
            By using <strong>FOODSHARE</strong>, you agree to these Terms &
            Conditions. This platform is meant solely for sharing and requesting
            homemade food ethically and responsibly.
          </p>
        </section>

        <section className="mb-6 bg-[#E4B1F0]/30 p-5 rounded">
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">2. Your Role</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ensure all shared food is homemade and hygienic.</li>
            <li>Respect all other users and their dietary needs.</li>
            <li>Do not resell or promote commercial products.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">3. Liability</h2>
          <p>
            We are not liable for food-related issues, allergies, or user
            disputes. Please disclose all relevant ingredients when sharing food.
          </p>
        </section>

        <section className="mb-6 bg-[#E4B1F0]/30 p-5 rounded">
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">4. Termination</h2>
          <p>
            FOODSHARE may suspend accounts for misconduct, harmful content, or
            violation of policies without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#7E60BF] mb-2">5. Revisions</h2>
          <p>
            These terms may change over time. Continued use of FOODSHARE implies
            acceptance of the most recent version.
          </p>
        </section>

        <footer className="mt-10 text-center text-sm text-[#433878]">
          Last updated: July 19, 2025
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
