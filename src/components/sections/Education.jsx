import { Calendar } from "lucide-react";

export const Education = () => {
  return(
  <ul className="timeline timeline-snap-icon  timeline-vertical text-gray-300">
    {/* first Component */}
    <li>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-start mb-10 md:text-end">
        <time className="font-mono italic">2022-2026</time>
        <div className="text-lg font-black">B.Tech CSE</div>
        <span>DIT University</span>
      </div>
      <hr />
    </li>

    {/* Second Component */}
    <li>
      <hr />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end md:mb-10">
        <time className="font-mono italic text-left">2019-2021</time>
        <div className="text-lg font-black">Secondary School</div>
        <span>CBSE BOARD</span>
      </div>
      <hr />
    </li>

    {/* Third Component */}
    <li>
      <hr />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-start mb-10 md:text-end">
        <time className="font-mono italic">2018-2019</time>
        <div className="text-lg font-black ">High School</div>
        <span>ICSE BOARD</span>
       
      </div>
      <hr />
    </li>
  </ul>);
}