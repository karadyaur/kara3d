// Figma: Style Guide › Radius page (node-id=6342:758)
// bg-malachite-darker, three sections: Large (40px/rounded-5xl), Medium (32px/rounded-4xl), Small (24px/rounded-3xl)

interface RadiusSection {
  label: string;
  description: string;
  swatchHeight: string;
  roundedClass: string;
  count: number;
}

const sections: RadiusSection[] = [
  {
    label: "Large",
    description: "40px border radius used for large cards, modals, and prominent containers.",
    swatchHeight: "h-[640px]",
    roundedClass: "rounded-5xl",
    count: 2,
  },
  {
    label: "Medium",
    description: "32px border radius used for standard cards and section blocks.",
    swatchHeight: "h-[416px]",
    roundedClass: "rounded-4xl",
    count: 3,
  },
  {
    label: "Small",
    description: "24px border radius used for buttons, inputs, and compact elements.",
    swatchHeight: "h-[192px]",
    roundedClass: "rounded-3xl",
    count: 6,
  },
];

export function Radius() {
  return (
    <div className="bg-malachite-darker p-16 flex flex-col gap-16">
      <header className="flex flex-col gap-4">
        <p className="font-sans font-semibold text-small text-white uppercase tracking-widest">
          kara3d
        </p>
        <h1 className="font-display font-semibold text-h1 text-white">Radius</h1>
      </header>

      <div className="flex flex-col gap-20">
        {sections.map((section) => (
          <div key={section.label} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="font-display font-semibold text-h4 text-white">{section.label}</h4>
              <p className="font-sans font-normal text-medium-body text-white-60">
                {section.description}
              </p>
            </div>
            <div className="flex gap-8">
              {Array.from({ length: section.count }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-malachite-darkest ${section.swatchHeight} ${section.roundedClass}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
