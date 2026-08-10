function SectionLabel({ className = "", children }) {
  return (
    <p className={`font-mono text-sm text-primary ${className}`}>
      {children}
    </p>
  );
}

export default SectionLabel;