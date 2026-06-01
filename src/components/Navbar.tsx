import logo from '../assets/logo-abc.png'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Project ABC"
            className="h-12 w-auto"
          />

          <div>
            <h1 className="font-bold text-gray-800">
              Project ABC
            </h1>

            <p className="text-xs text-gray-500">
              Abli • Basa • Community
            </p>
          </div>
        </div>

        <ul className="hidden gap-8 font-medium md:flex">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#impact">Impact</a>
          </li>

          <li>
            <a href="#programs">Programs</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}