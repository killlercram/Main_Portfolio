export const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-6  md:flex-row md:gap-3 ">
      {/* Name */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-semibold tracking-noraml">
          Shashwat Tandon
        </h1>
        <p className="text-xl font-medium tracking-normal">
          Aspiring Software Developer
        </p>
      </div>
      {/* Logos */}
      <ul className="flex md:flex-col items-start gap-3 my-3">
        <li className="flex items-center gap-4 justify-center">
          <a className="text-xl" href="mailto:shashwatandon@gmail.com">
            <img src="/assets/contact/emailIcon.png" alt="Email Icon" />
          </a>
        </li>
        <li className="">
          <a
            className="text-xl"
            href="https://www.linkedin.com/in/shashwat-tandon-b7281021a/"
          >
            <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn Icon" />
          </a>
        </li>
        <li className="">
          <a className="text-xl" href="https://github.com/killlercram">
            <img src="/assets/contact/githubIcon.png" alt="Github Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};
