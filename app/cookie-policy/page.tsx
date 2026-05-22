import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | NexWerk Technologies",
  description: "NexWerk Technologies Cookie Policy — how and why we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalLayout title="Cookie Policy" lastUpdated="May 1, 2026">
          <h2>1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, analyze traffic, and provide a better user experience.</p>

          <h2>2. How We Use Cookies</h2>
          <p>NexWerk Technologies uses cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website, so we can improve it.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (only with your consent).</li>
          </ul>

          <h2>3. Third-Party Cookies</h2>
          <p>We may use third-party services such as Google Analytics that set their own cookies. These services have their own privacy policies governing the use of their cookies.</p>

          <h2>4. Managing Cookies</h2>
          <p>You can control and/or delete cookies through your browser settings. Most browsers allow you to:</p>
          <ul>
            <li>See which cookies have been set</li>
            <li>Block cookies from specific or all websites</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>Note that disabling cookies may affect the functionality of our website.</p>

          <h2>5. Consent</h2>
          <p>By continuing to use our website, you consent to our use of cookies as described in this policy. You may withdraw consent at any time by adjusting your browser settings.</p>

          <h2>6. Updates to This Policy</h2>
          <p>We may update this Cookie Policy periodically. We will notify you of significant changes by updating the date at the top of this page.</p>

          <h2>7. Contact</h2>
          <p>For questions about cookies or this policy, contact us at: <strong>contact@nexwerktechnologies.com</strong></p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
