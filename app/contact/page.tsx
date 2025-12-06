import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-[#e05d44]"></span>
            <span className="text-[#e05d44] font-bold uppercase tracking-widest text-sm">
              Get in Touch
            </span>
            <span className="h-px w-12 bg-[#e05d44]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to make a reservation? We'd love to hear
            from you. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <ContactForm />

        <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-sm border border-gray-100">
          <iframe
            title="Mako Restaurant Location"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728969854298!2d3.4275!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e764fd%3A0x7a092819dc78526!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          ></iframe>
        </div>

        <FAQ />
      </div>
    </main>
  );
}
