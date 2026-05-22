import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | NexWerk Technologies",
  description: "NexWerk Technologies Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalLayout title="Privacy Policy" lastUpdated="May 1, 2026">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including when you fill out our contact form, subscribe to our newsletter, or communicate with us. This may include:</p>
          <ul>
            <li>Name and email address</li>
            <li>Phone number and company name</li>
            <li>Project details and requirements</li>
            <li>Communication history</li>
          </ul>
          <p>We also automatically collect certain technical information when you visit our website, such as IP address, browser type, pages visited, and time spent on pages.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send project updates and communications</li>
            <li>Improve our website and services</li>
            <li>Send marketing communications (only with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

          <h2>5. Cookies</h2>
          <p>Our website uses cookies to enhance your browsing experience. Please refer to our Cookie Policy for details on how we use cookies and how you can manage them.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at contact@nexwerktechnologies.com.</p>

          <h2>7. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting a notice on our website or sending you an email.</p>

          <h2>9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at: <strong>contact@nexwerktechnologies.com</strong></p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
