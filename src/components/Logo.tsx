type LogoProps = {
  className?: string;
};

export function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return (
    <img
      src="/logo.jpg"
      alt="Logo"
      className={className}
    />
  );
}