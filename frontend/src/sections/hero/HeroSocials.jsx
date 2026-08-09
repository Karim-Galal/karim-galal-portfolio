import { FaGithub, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/201025136538",
    icon: FaWhatsapp,
    hoverClass: "text-green-500",
  },
  {
    name: "Telegram",
    href: "https://t.me/karim_gala",
    icon: FaTelegramPlane,
    hoverClass: "hover:text-sky-500",
  },
  {
    name: "GitHub",
    href: "https://github.com/karim-galal",
    icon: FaGithub,
    hoverClass: "hover:text-foreground",
  },
];

function HeroSocials() {

  
  return (
    <div className="flex items-center justify-center lg:justify-start gap-6">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className={`text-foreground-muted transition-colors duration-200 p-2 rounded-full hover:bg-surface-hover 
                        ${social.hoverClass}
                      `}
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </div>
  );
}

export default HeroSocials;