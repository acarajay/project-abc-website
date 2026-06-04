const impacts = [
  {
    value: '150',
    label: 'Children Reached',
    color: 'text-red-500',
  },
  {
    value: '20',
    label: 'Volunteers',
    color: 'text-yellow-500',
  },
  {
    value: '3',
    label: 'Reading Sessions',
    color: 'text-blue-500',
  },
  {
    value: '3',
    label: 'Partner Schools',
    color: 'text-green-500',
  },
]

export default function Impact() {
  return (
    <section
      id="impact"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Impact
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {impacts.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3
                className={`text-5xl font-bold ${item.color}`}
              >
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}