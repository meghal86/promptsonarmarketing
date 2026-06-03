export function DarkQuote() {
  return (
    <section className="py-24 bg-foreground">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <p className="font-playfair text-[28px] lg:text-[40px] font-normal italic leading-[1.35] tracking-tight mb-6"
          style={{ color: 'rgba(245,244,242,0.85)' }}>
          "Most AI failures do not start at the model. They start when untrusted input reaches memory, tools, or actions."
        </p>
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase"
          style={{ color: 'rgba(245,244,242,0.28)' }}>
          — PromptSonar
        </p>
      </div>
    </section>
  );
}
