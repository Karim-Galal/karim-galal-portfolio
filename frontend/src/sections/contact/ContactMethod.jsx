function ContactMethod({ method }) {
  const Icon = method.icon;

  return (
    <a
      href={method.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex w-fit items-center gap-3 text-sm text-foreground-muted transition-colors duration-200 hover:text-foreground"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors duration-200 group-hover:border-primary/40 group-hover:text-primary">
        <Icon className="text-lg" />
      </span>

      <span className="font-medium">
        {method.name}
      </span>
    </a>
  );
}

export default ContactMethod;