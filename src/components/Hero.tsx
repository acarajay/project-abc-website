import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="bg-[#FFFDF8]">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center px-6 py-20 md:flex-row">
        <div className="flex-1">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm text-red-600">
            Empowering Young Readers
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Opening Minds Through
            <span className="text-red-500"> Reading</span>,
            <span className="text-yellow-500"> Learning</span>,
            and
            <span className="text-blue-500"> Community</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Building a future where every child has access
            to literacy, learning opportunities, and a
            supportive community.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-red-500 px-6 py-3 text-white">
              Join Us
            </button>

            <button className="rounded-lg border px-6 py-3">
              Learn More
            </button>
          </div>
        </div>

        <div className="mb-10 flex-1 md:mb-0">
          <img
            src={heroImg}
            alt="Hero"
            className="mx-auto max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}