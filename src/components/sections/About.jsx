import { School } from "lucide-react";
import { Education } from "./Education";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 text-center"
    >
      {/* outer div */}
      <div className="max-w-3xl mx-auto px-4 ">
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500
to-cyan-400 bg-clip-text text-transparent"
        >
          About Me
        </h2>

        {/* small para*/}
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-0.5 transition-all flex justify-center flex-col items-center">
          <p className="text-gray-300 mb-6 ">
            I'm an aspiring Software Engineer who loves learning new things and
            solving problems with technology. I'm always curious and motivated
            to grow both personally and professionally. I enjoy working with
            others to build useful and creative solutions. I'm always eager to
            contribute, adapt, and grow in different and fast-changing
            environments.
          </p>

          <div className=" gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10  hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex justify-center gap-2 ">
                <School />
                Education
              </h3>
              <Education />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
