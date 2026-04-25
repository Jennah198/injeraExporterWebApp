export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src="/images/injera-hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Authentic Ethiopian Injera
          <br />
          Exported Worldwide
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Premium quality. Bulk supply. Trusted globally.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a className="bg-[var(--color-primary)] px-6 py-3 rounded-lg">
            Get Quote
          </a>

          <a className="border border-white px-6 py-3 rounded-lg">
            View Products
          </a>
        </div>
      </div>
    </section>
  )
}
