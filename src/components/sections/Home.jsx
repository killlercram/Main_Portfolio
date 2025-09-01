import { DownloadIcon } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src="/assets/hero/heroImage.png"
          alt="Shashwat_Image"
          className="z-10 py-4 max-w-[60%] animate-floating "
        />
      </div>

      {/* Name and Other */}
      <div className="text-center z-10 px-4">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi, I'm Shashwat Tandon
        </h1>
        <p className="text-gray-400 text-lg mb-7 max-w-lg mx-auto leading-relaxed">
          An aspiring Software Engineer.
        </p>

        {/* Links as button */}
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-blue-500 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden hover:-translate-y-1"
          >
            Contact Me
          </a>

          <a
            href="/assets/cv/ShashwatRes.pdf"
            className="flex border py-3 px-5 border-blue-400/50 text-blue-500 rounded font-medium transition-all overflow-hidden hover:-translate-y-1"
            download
          >
            Download Cv <DownloadIcon className="w-4 mx-0.5" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
