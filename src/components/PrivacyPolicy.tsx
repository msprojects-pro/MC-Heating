const PrivacyPolicy = ({ onBack }: { onBack: () => void }) => {
  return (
    <div style={{ maxWidth: "800px", margin: "60px auto", padding: "0 20px", color: "#fff", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      
      <button onClick={onBack} style={{ color: "#f97316", background: "none", border: "none", cursor: "pointer", marginBottom: "20px", fontSize: "14px" }}>
        ← Back to Home
      </button>

      <h1 style={{ color: "#f97316" }}>Privacy Policy</h1>
      <p style={{ color: "#aaa" }}>Last updated: May 2025</p>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>Who We Are</h2>
      <p>MC Heating & Plumbing is a professional heating and plumbing service based in Birmingham, UK. This privacy policy explains how we handle any information submitted through this website.</p>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>What Information We Collect</h2>
      <p>We only collect information you voluntarily provide via our contact form, which may include your name, email address, and phone number.</p>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>How We Use Your Information</h2>
      <p>Your details are used solely to respond to your enquiry. We do not store, sell, or share your data with any third parties.</p>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>Third-Party Services</h2>
      <p>Our contact form is powered by Web3Forms, which processes submitted data on our behalf. You can review their privacy policy at <a href="https://web3forms.com/privacy" style={{ color: "#f97316" }}>web3forms.com/privacy</a>.</p>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>Cookies</h2>
      <p>This website does not use tracking cookies or analytics tools.</p>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>Your Rights</h2>
      <p>Under UK GDPR, you have the right to request access to or deletion of any personal data we hold. Contact us at <a href="mailto:info@mcheatingandplumbing.co.uk" style={{ color: "#f97316" }}>info@mcheatingandplumbing.co.uk</a></p>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>Contact</h2>
      <p>MC Heating & Plumbing, Birmingham, UK</p>
    </div>
  );
};

export default PrivacyPolicy;
