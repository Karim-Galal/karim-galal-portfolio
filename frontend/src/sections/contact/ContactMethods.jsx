import SectionLabel from "@/shared/components/section/SectionLabel";
import ContactMethod from "./ContactMethod";
import { socials } from "@/data/socials";


const contactMethods = socials.filter((social) =>
  ["whatsapp", "telegram", "email"].includes(social.id)
);



function ContactMethods() {
  return (
    <div>
      <SectionLabel 
        className="my-6 text-start">
          FIND ME
      </SectionLabel>

      <div className="mt-6 pt-3 flex lg:flex-col gap-6 md:gap-12 lg:gap-3">
        {contactMethods.map((method) => (
          <ContactMethod
            key={method.name}
            method={method}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactMethods;