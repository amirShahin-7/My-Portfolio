import AnimatedSection from "../../components/AnimatedSection";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  const contactInfo = [
    { icon: "FaMapMarkerAlt", label: "Location", value: "Cairo, Egypt" },
    {
      icon: "FaPhone",
      label: "Phone",
      value: "+201100445395",
      href: "tel:+201100445395",
    },
    {
      icon: "FaEnvelope",
      label: "Email",
      value: "amirshahin.1.512@gmail.com",
      href: "mailto:amirshahin.1.512@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: "FaGithub",
      label: "GitHub",
      href: "https://github.com/amirShahin-7",
    },
    {
      icon: "FaLinkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amir-shahin-7ala80360/",
    },
    { icon: "FaXTwitter", label: "X", href: "https://x.com/Amir_Shahin9" },
  ];

  const iconMap = {
    FaMapMarkerAlt: FaMapMarkerAlt,
    FaPhone: FaPhone,
    FaEnvelope: FaEnvelope,
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaXTwitter: FaXTwitter,
  };

  return (
    <main className="flex flex-col min-h-screen bg-[var(--background-gradient)] text-[var(--foreground)] p-4 sm:p-6 md:p-8">
      <AnimatedSection direction="left">
        <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto gap-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Me</h1>
          <p className="text-base sm:text-lg">
            Let's get in touch! Feel free to reach out through any of the
            methods below.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right">
        <div className="flex flex-col items-center max-w-screen-lg mx-auto gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                Personal Info
              </h2>
              {contactInfo.map((info, index) => {
                const IconComponent = iconMap[info.icon];
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#7bdff2] to-[#b2f7ef] dark:from-[#4da8c7] dark:to-[#80c9c0] p-4 rounded-lg flex items-center gap-3 border-l-4 border-[#f2b5d4] dark:border-[#c286a6] hover:border-[#f7d6e0] dark:hover:border-[#d4a9b5] transition-colors"
                  >
                    <IconComponent className="text-2xl text-[var(--foreground)] dark:text-white" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                Social Links
              </h2>
              {socialLinks.map((link, index) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#7bdff2] to-[#b2f7ef] dark:from-[#4da8c7] dark:to-[#80c9c0] p-4 rounded-lg flex items-center gap-3 border-l-4 border-[#f2b5d4] dark:border-[#c286a6] hover:border-[#f7d6e0] dark:hover:border-[#d4a9b5] transition-colors"
                  >
                    <IconComponent className="text-2xl text-[var(--foreground)] dark:text-white" />
                    <span className="text-[var(--foreground)]">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="pb-24"></div>
    </main>
  );
};

export default ContactPage;
