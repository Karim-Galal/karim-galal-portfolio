import { Link } from "react-router-dom";
import { socials } from "@/data/socials";

function Footer() {
  const footerSocials = socials.filter(
    (social) => social.id !== "email"
  );

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              Karim Galal<span className="text-primary">.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-foreground-muted">
              Fullstack Laravel & React developer building clean,
              practical, and modern web applications.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {footerSocials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Navigation
            </p>

            <div className="mt-4 grid gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground-muted transition-colors duration-200 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-5 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Karim Galal. All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;