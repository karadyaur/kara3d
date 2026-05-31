// Figma: Style Guide › Logos page (node-id=5352:56245)
// bg-malachite-darker, shows CompanyLogo and PlaceholderLogo in light/dark context

import { CompanyLogo } from "./CompanyLogo";
import { PlaceholderLogo } from "./PlaceholderLogo";

function PreviewBox({ alternate = false, children }: { alternate?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`flex items-center justify-center p-8 rounded-3xl ${alternate ? "bg-neutral-darkest" : "bg-white"}`}
    >
      {children}
    </div>
  );
}

export function Logos() {
  return (
    <div className="bg-malachite-darker p-16 flex flex-col gap-16">
      <header>
        <CompanyLogo alternate />
      </header>

      <h1 className="font-display font-semibold text-h1 text-white">Logos</h1>

      <div className="flex flex-col gap-20">
        {/* Company Logo */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-display font-semibold text-h4 text-white">Company Logo</h4>
            <p className="font-sans font-normal text-medium-body text-white-60">
              Logo of your company used in Navbars and Footers.
            </p>
          </div>
          <div className="flex gap-4">
            <PreviewBox>
              <CompanyLogo />
            </PreviewBox>
            <PreviewBox alternate>
              <CompanyLogo alternate />
            </PreviewBox>
          </div>
        </div>

        {/* Placeholder Logos */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-display font-semibold text-h4 text-white">Placeholder Logos</h4>
            <p className="font-sans font-normal text-medium-body text-white-60">
              Placeholder logos used in components such as Logos and Testimonials.
            </p>
          </div>
          <div className="flex gap-4">
            <PreviewBox>
              <div className="flex flex-col gap-6">
                <PlaceholderLogo logo="1" />
                <PlaceholderLogo logo="2" />
              </div>
            </PreviewBox>
            <PreviewBox alternate>
              <div className="flex flex-col gap-6">
                <PlaceholderLogo logo="1" alternate />
                <PlaceholderLogo logo="2" alternate />
              </div>
            </PreviewBox>
          </div>
        </div>
      </div>
    </div>
  );
}
