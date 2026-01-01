// File: src/app/terms/page.tsx

// Section component for cleaner structure
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
    <div className="space-y-4 text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function TermsPage() {
  return (
    <main className="bg-white pt-32 pb-20">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl py-5 font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-500">Last updated: September 9, 2025</p>
        </div>

        <div className="prose lg:prose-lg max-w-none">
          <Section title="1. Introduction">
            <p>
              Welcome to Pasifixc. These Terms and Conditions govern your use of our services, including video editing, graphic design, web development, and audio production. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </Section>

          <Section title="2. Use of Services">
            <p>
              You agree to use our services only for lawful purposes and in accordance with applicable laws. You are fully responsible for all materials (footage, images, music) you provide to us and warrant that you have the necessary rights or licenses for such materials.
            </p>
            <p>
              The services we provide are the intellectual property of Pasifixc. You are not permitted to reproduce or redistribute the deliverables without our written consent, unless otherwise agreed in the project contract.
            </p>
          </Section>

          <Section title="3. Payment and Revisions">
            <p>
              All projects require a 50% upfront payment before work begins. The remaining balance must be paid after the project is completed and approved, before the final files are delivered. Revision terms will be specified in each project proposal.
            </p>
          </Section>
          
          <Section title="4. Limitation of Liability">
            <p>
              Pasifixc shall not be liable for any direct or indirect losses arising from the use of our services. Our maximum liability for any claim is limited to the total amount you have paid for the relevant service.
            </p>
          </Section>

          <Section title="5. Changes to Terms">
            <p>
              We reserve the right to modify or replace these Terms and Conditions at any time. Changes will be communicated via our website. By continuing to use our services after such changes, you are deemed to have accepted the new terms.
            </p>
          </Section>
        </div>

        <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
            <h3 className="font-bold text-red-800">Important Disclaimer</h3>
            <p className="mt-2 text-red-700">
This document is provided for informational purposes only and does not constitute legal advice. Pasifixc makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of this information for any particular purpose. Use of the information on this page is entirely at your own risk. For legal certainty, please seek assistance from a professional legal advisor.
            </p>
        </div>

      </div>
    </main>
  );
}