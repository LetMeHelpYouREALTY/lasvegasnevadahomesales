import { Button } from '../../../components/Button/Button';
import { SEOHead } from '../../../components/SEO/SEOHead';

// Template testimonials, the 4.9/5 badge and the review schema were removed on Oct 29, 2026.
// Named client quotes stay off this page until Dr. Jan confirms each one is a real client.
const REALTOR_REVIEWS_URL = 'https://www.realtor.com/realestateagents/63340593275bf055fedf5ff1';

export default function TestimonialsPage() {
  return (
    <>
      <SEOHead
        title="Client Reviews | Las Vegas Nevada Home Sales"
        description="Read verified client reviews of Dr. Jan Duffy on Realtor.com and Google."
        keywords="Dr. Jan Duffy reviews, Las Vegas realtor reviews, Las Vegas Nevada Home Sales reviews"
        canonical="/testimonials"
        ogImage="/images/og-testimonials.jpg"
      />

      <section className="bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Client Reviews
            </h1>
            <p className="mb-8 text-xl font-light text-yellow-100 md:text-2xl">
              Read verified client reviews of Dr. Jan Duffy on Realtor.com and Google.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-2 text-4xl font-bold text-gray-900">5.0★ on Realtor.com</div>
          <div className="mb-8 text-lg text-gray-600">From 50 verified client reviews</div>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href={REALTOR_REVIEWS_URL} className="bg-yellow-900 text-white hover:bg-yellow-800">
              Read Realtor.com Reviews
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Dr. Jan Duffy
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
