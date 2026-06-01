import logo from '../assets/logo.png'

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
              {" "}
              {/* <span className="text-red-500">A</span>
              <span className="text-purple-500">B</span>
              <span className="text-blue-500">C</span> */}
            </h1>

            <p className="text-xs text-gray-500">
              <span className="text-red-500">Abli •</span>
              <span className="text-purple-500">Basa •</span>
              <span className="text-blue-500">Community</span>
            </p>
          </div>
        </div>

        <ul className="hidden gap-8 font-medium md:flex text-purple-600">
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