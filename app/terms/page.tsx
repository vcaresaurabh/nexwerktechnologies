import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | NexWerk Technologies",
  description: "NexWerk Technologies Terms of Service — the terms governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <LegalLayout title="Terms of Service" lastUpdated="May 1, 2026">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the NexWerk Technologies website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>

          <h2>2. Services</h2>
          <p>NexWerk Technologies provides IT services including web development, CRM systems, business automation, managed IT services, app development, and cloud security. The specific scope, deliverables, timelines, and pricing for each engagement are defined in individual service agreements or statements of work.</p>

          <h2>3. Intellectual Property</h2>
          <p>Upon full payment, clients receive ownership of custom-developed code and deliverables as specified in the relevant service agreement. NexWerk Technologies retains ownership of proprietary tools, frameworks, and methodologies used in delivery. The content on our website (text, graphics, logos) is the property of NexWerk Technologies and may not be reproduced without written permission.</p>

          <h2>4. Payment Terms</h2>
          <p>Payment terms are specified in individual service agreements. Generally, we require a deposit before commencing work. Late payments may result in project pauses and may attract interest charges as specified in the service agreement.</p>

          <h2>5. Confidentiality</h2>
          <p>Both parties agree to maintain the confidentiality of sensitive information shared during the engagement. NexWerk Technologies will not disclose client business information to third parties without consent, except as required by law.</p>

          <h2>6. Limitation of Liability</h2>
          <p>NexWerk Technologies shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.</p>

          <h2>7. Termination</h2>
          <p>Either party may terminate an engagement with written notice as specified in the service agreement. In case of termination, payment is due for all work completed up to the termination date.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Delhi, India.</p>

          <h2>9. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of the updated terms.</p>

          <h2>10. Contact</h2>
          <p>For questions about these Terms, contact us at: <strong>contact@nexwerktechnologies.com</strong></p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
