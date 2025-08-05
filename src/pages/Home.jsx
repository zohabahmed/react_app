export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-r from-purple-200 to-blue-200 min-h-screen">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Personal Website</h1>
        <p className="text-xl text-gray-700 mb-8">
          Hi, I'm <span className="font-semibold">Zohab Ahmed</span>, a passionate web developer
          who loves creating modern, responsive, and user-friendly websites.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg">
          View My Work
        </button>
      </div>
    </div>
  );
}
