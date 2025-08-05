import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">My Website</h1>

        <div className="space-x-8 text-lg font-medium">
         
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

         
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
