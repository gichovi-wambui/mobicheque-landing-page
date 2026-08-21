import { ArrowRightIcon } from "./Icons";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  primary:
    "bg-mc-green text-white shadow-mc-green hover:bg-[#019660] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-mc-ink border border-mc-border hover:border-mc-green/40 hover:bg-mc-green-wash hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-mc-ink hover:text-mc-green",
  onDark:
    "bg-white text-mc-green-dark hover:bg-mc-green-wash hover:-translate-y-0.5 active:translate-y-0",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  withArrow = false,
  className = "",
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
