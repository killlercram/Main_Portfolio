import { DownloadIcon } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to bg-purple-600 bg-clip-text text-transparent">
          Hi, I'm Shashwat Tandon
        </h1>
        <p className="text-gray-400 text-lg mb-7 max-w-lg mx-auto leading-relaxed" >
        I'm an aspiring Software Engineer who loves learning new things and solving problems with technology. I'm always curious and motivated to grow both personally and professionally. I enjoy working with others to build useful and creative solutions. I'm always eager to contribute, adapt, and grow in different and fast-changing environments.
        </p>

        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-blue-500 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden hover:-translate-y-1">Contact Me</a>

          <a href="/assets/cv/Resume.pdf" className="flex border py-3 px-5 border-blue-400/50 text-blue-500 rounded font-medium transition-all overflow-hidden  hover:-translate-y-1" download>Download Cv <DownloadIcon className="w-4 mx-0.5"/> </a>
        </div>
      </div>
    </section>
  );
};
