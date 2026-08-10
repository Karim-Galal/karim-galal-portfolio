import { socials } from "@/data/socials";


const socialLinks = socials.filter((social) =>
  ["whatsapp", "telegram", "github"].includes(social.id)
);

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