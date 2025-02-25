export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Hi, I&#39;m Hao Truong 👋</h1>
      <p className="mt-2 text-lg">Frontend Developer | UI/UX Enthusiast</p>
      <a
        href="/projects"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </main>
  );
}
