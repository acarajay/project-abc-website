export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          What is Project ABC?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-red-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-red-500">
              Abli
            </h3>

            <p>
              Opening opportunities through education,
              access to resources, and meaningful learning.
            </p>
          </div>

          <div className="rounded-2xl bg-yellow-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-yellow-600">
              Basa
            </h3>

            <p>
              Promoting literacy and inspiring a love of
              reading among children.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-blue-500">
              Community
            </h3>

            <p>
              Bringing together volunteers, schools,
              families, and partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}