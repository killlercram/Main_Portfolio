import Projects from "../Data/Projects.json";
export const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500
to-cyan-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Projects.map((section, id) => {
            return (
              <div
                key={id}
                className="p-6 rounded-xl border border-white/10 
          hover:-translate-y-1 hover:border-blue-500/25 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{section.Pname}</h3>
                <p className="text-gray-400 mb-4">{section.PDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {section.Tech.map((tech, id) => (
                    <span
                      key={id}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Displaying project */}
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-5 mx-2"
                  >
                    {" "}
                    View Project
                  </a>

                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-5 mx-2"
                  >
                    {" "}
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
