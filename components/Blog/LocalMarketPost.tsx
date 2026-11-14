// Dr. Jan Duffy's own local market post, published November 14, 2026.
// Numbers checked against the sources listed at the bottom of the post.
export default function LocalMarketPost() {
  return (
    <article className="mx-auto max-w-3xl text-left">
      <h3 className="mb-2 text-2xl font-bold md:text-3xl">{"Las Vegas Home Prices, October 2026: Flat Prices, More Homes for Sale"}</h3>
      <p className="mb-6 text-sm opacity-70">November 14, 2026 · Dr. Jan Duffy</p>
      <p className="mb-4 leading-relaxed">{"The median price of an existing single-family home in Southern Nevada was $475,000 in October 2026. That's up just 0.1% from a year ago and below the record $490,000 set in May and June."}</p>
      <p className="mb-4 leading-relaxed">{"More homes are for sale. There were 8,112 single-family homes listed without offers, up 7.6% from last year. That's nearly six months of supply, compared with about 4.5 months a year ago."}</p>
      <p className="mb-4 leading-relaxed">{"Homes are still moving. About 72% sold within 60 days, and cash buyers made up 26.2% of sales."}</p>
      <p className="mb-4 leading-relaxed">{"Rates are a factor. The 30-year fixed averaged 7.11% the week of November 12, up from 6.24% a year ago."}</p>
      <p className="mb-4 leading-relaxed">
        <strong>What it means for you:</strong> {"Buyers have the most choice in years, and sellers need sharp pricing to stand out. Want to know where your home fits? Call or text Dr. Jan at "}
        <a href="tel:7025001981" className="underline">(702) 500-1981</a>.
      </p>
      <p className="text-sm italic opacity-70">{"Sources: Las Vegas REALTORS October 2026 report (released November 6, single-family resale); Freddie Mac weekly rate survey (November 12, 2026)."}</p>
    </article>
  );
}
