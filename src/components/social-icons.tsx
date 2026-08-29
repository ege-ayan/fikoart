import { site } from "@/content/site";

const iconClass = "h-4 w-4 fill-current";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={site.socials.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
      >
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zm4.35-2.95a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
        </svg>
      </a>
      <a
        href={site.socials.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
      >
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
          <path d="M6.5 9H4V20h2.5zm.2-3.75A1.75 1.75 0 1 1 4.95 3.5 1.75 1.75 0 0 1 6.7 5.25zM20 20h-2.5v-5.35c0-1.54-.55-2.6-1.93-2.6A2.09 2.09 0 0 0 13.6 13.5c-.1.22-.13.52-.13.83V20H11V9h2.4v1.51A2.86 2.86 0 0 1 16 9c2.36 0 4 1.54 4 4.86z" />
        </svg>
      </a>
      <a
        href={`mailto:${site.email}`}
        aria-label="Email"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
      >
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
          <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25zm1.7.6 7.3 5.1 7.3-5.1a.25.25 0 0 0-.25-.1H4.95a.25.25 0 0 0-.25.1zm14.6 1.66-6.84 4.77a1.25 1.25 0 0 1-1.52 0L4.7 9.01V16.9c0 .14.11.25.25.25h14.1a.25.25 0 0 0 .25-.25z" />
        </svg>
      </a>
    </div>
  );
}
