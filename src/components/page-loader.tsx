import { site } from "@/content/site";

export function PageLoader() {
  return (
    <div
      className="loader"
      role="status"
      aria-live="polite"
      aria-label={site.name}
    >
      <p className="loader-mark" aria-hidden>
        {site.name.split("").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="loader-letter"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            {letter}
          </span>
        ))}
      </p>
      <span className="loader-line" aria-hidden />
    </div>
  );
}
