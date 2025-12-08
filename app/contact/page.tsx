import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-white pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-14 md:pb-16">
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="h-px w-8 sm:w-10 md:w-12 bg-[#e05d44]"></span>
            <span className="text-[#e05d44] font-bold uppercase tracking-widest text-xs sm:text-sm">
              Get in Touch
            </span>
            <span className="h-px w-8 sm:w-10 md:w-12 bg-[#e05d44]"></span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Have a question or want to make a reservation? We'd love to hear
            from you. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>

        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-sm border border-gray-100 mt-8 sm:mt-10 md:mt-12">
          <iframe
            title="Mako Restaurant Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728969854298!2d3.4275!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e764fd%3A0x7a092819dc78526!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          ></iframe>
        </div>

        <div>
          <FAQ />
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
