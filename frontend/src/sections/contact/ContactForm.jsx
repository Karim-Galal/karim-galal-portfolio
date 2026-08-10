import { useRef, useState } from "react";
import SectionLabel from "@/shared/components/section/SectionLabel";


const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    return nextErrors;
  }

  function handleFieldKeyDown(event, nextRef) {
    if (event.key === "Enter" && !event.shiftKey && nextRef?.current) {
      event.preventDefault();
      nextRef.current.focus();
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Email/API integration will be added next.
      console.log("Contact form:", form);

      setForm(initialForm);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="max-w-2xl text-start"
    >

      <SectionLabel 
        className="mt-6  text-start">
          CONTACT FORM
      </SectionLabel>

      <div className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block font-mono text-sm text-primary"
          >
            &gt; name
          </label>

          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onKeyDown={(event) =>
              handleFieldKeyDown(event, emailRef)
            }
            autoComplete="name"
            className="mt-2 w-full border-b border-border bg-transparent px-0 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-primary"
            placeholder="Your name"
          />

          {errors.name && (
            <p className="mt-1 font-mono text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block font-mono text-sm text-primary"
          >
            &gt; email
          </label>

          <input
            ref={emailRef}
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onKeyDown={(event) =>
              handleFieldKeyDown(event, subjectRef)
            }
            autoComplete="email"
            className="mt-2 w-full border-b border-border bg-transparent px-0 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-primary"
            placeholder="you@example.com"
          />

          {errors.email && (
            <p className="mt-1 font-mono text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block font-mono text-sm text-primary"
          >
            &gt; subject
          </label>

          <input
            ref={subjectRef}
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            onKeyDown={(event) =>
              handleFieldKeyDown(event, messageRef)
            }
            className="mt-2 w-full border-b border-border bg-transparent px-0 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-primary"
            placeholder="Project inquiry"
          />

          {errors.subject && (
            <p className="mt-1 font-mono text-xs text-red-400">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block font-mono text-sm text-primary"
          >
            &gt; message
          </label>

          <textarea
            ref={messageRef}
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-primary"
            placeholder="Tell me a little about your project..."
          />

          {errors.message && (
            <p className="mt-1 font-mono text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;