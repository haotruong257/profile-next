const projects = [
  {
    title: "Project 1",
    link: "#",
    description: "This is a description of project 1",
  },
  {
    title: "Project 2",
    link: "#",
    description: "This is a description of project 2",
  },
];

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {projects.map((project) => (
          <div key={project.title} className="p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
