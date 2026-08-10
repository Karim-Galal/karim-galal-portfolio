import SectionHeading from "@/shared/components/section/SectionHeading";
import SectionLabel from "@/shared/components/section/SectionLabel";

import ContactMethods from "./ContactMethods";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto  max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-12">
        <SectionHeading>CONTACT</SectionHeading>

        <SectionLabel className="mt-6">
          LET'S WORK TOGETHER
        </SectionLabel>
        
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-foreground-muted sm:text-base">
            Have a project in mind or want to discuss an idea? Send me a
            message and I'll get back to you.
          </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16">
        <ContactMethods />

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;