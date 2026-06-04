const programs = [
  {
    title: 'Reading Sessions',
    description:
      'Interactive reading activities for children.',
  },
  {
    title: 'Book Donations',
    description:
      'Providing access to books and learning materials.',
  },
  {
    title: 'Community Outreach',
    description:
      'Connecting communities through literacy programs.',
  },
]

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Programs
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="mb-4 text-xl font-bold">
                {program.title}
              </h3>

              <p className="text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}