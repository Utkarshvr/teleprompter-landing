import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}

export function NavLinks({ className, linkClassName, onNavigate }: NavLinksProps) {
  return (
    <ul className={cn("flex items-center gap-8", className)}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "text-sm font-medium text-text-secondary transition-colors hover:text-text",
              linkClassName,
            )}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
