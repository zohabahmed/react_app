export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-3">
          © {new Date().getFullYear()} My Website. All Rights Reserved.
        </p>
        <div className="space-x-6">
          <a href="#" className="hover:text-blue-400 transition">Facebook</a>
          <a href="#" className="hover:text-blue-400 transition">Twitter</a>
          <a href="#" className="hover:text-blue-400 transition">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
