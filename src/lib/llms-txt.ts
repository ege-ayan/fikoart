import { site } from "@/content/site";
import { works } from "@/content/works";
import { absoluteUrl } from "@/lib/seo";

export function llmsTxt() {
  const workLines = works
    .map((work) => {
      const url = absoluteUrl(`/work/${work.slug}`);
      return `- [${work.title.en}](${url}) (${work.year}): ${work.description.en}`;
    })
    .join("\n");

  return `# ${site.name}

> Portfolio of ${site.fullName} (${site.name}), ${site.role.en}, based in ${site.location.en}.

The site is available in English (default, no URL prefix) and Turkish (\`/tr\`).

## Pages

- [About](${absoluteUrl("/")}): Biography, skills, software, and contact
- [Portfolio](${absoluteUrl("/portfolio")}): Selected animation and illustration
- [CV](${absoluteUrl("/cv")}): Productions, experience, education, and exhibitions
- [About (TR)](${absoluteUrl("/tr")})
- [Portfolio (TR)](${absoluteUrl("/tr/portfolio")})
- [CV (TR)](${absoluteUrl("/tr/cv")})

## Works

${workLines}

## Contact

- Email: ${site.email}
- Instagram: ${site.socials.instagram}
- LinkedIn: ${site.socials.linkedin}
- CV PDF: ${absoluteUrl(site.cvHref)}
`;
}
