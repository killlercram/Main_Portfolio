import skillData from "../Data/skillData.json";
import * as LucideIcons from "lucide-react";

export const Skill = () => {
  return (
    //     <section
    //       id="skill"
    //       className="min-h-screen flex justify-center items-center py-20 "
    //     >
    //       <div className="w-3xl px-4">
    //         {/* Heading */}
    //         <h2
    //           className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500
    // to-cyan-400 bg-clip-text text-transparent text-center"
    //         >
    //           Skills
    //         </h2>
    //         {/* Main Accordion */}
    //         <div className="join join-vertical w-full">

    //           {/* Technologies */}
    //           <div className="collapse collapse-arrow join-item border-base-300 border">
    //             <input type="radio" name="my-accordion-4" defaultChecked />
    //             <div className="collapse-title flex items-center gap-4">
    //             <LucideIcons.AudioWaveform className="size-9 text-blue-400"/>
    //             <div>
    //             <h2 className="font-bold text-2xl ">Technologies</h2>
    //              <p className="font-normal text-xs leading-4">Frameworks</p>
    //             </div>
    //             </div>

    //             {/* Inside Tech */}
    //             <div className="collapse-content text-sm flex flex-col space-y-3">
    //               {/* Linux */}
    //               <div>
    //                 <span className="font-semibold text-lg">Linux</span>
    //                 <progress
    //                   className="progress progress-info"
    //                   value="80"
    //                   max="100"
    //                 ></progress>
    //               </div>
    //               {/* ReactJs */}
    //               <div>
    //                 <span className="font-semibold text-lg">ReactJS</span>
    //                 <progress
    //                   className="progress progress-info"
    //                   value="68"
    //                   max="100"
    //                 ></progress>
    //               </div>
    //               {/* Node */}
    //               <div>
    //                 <span className="font-semibold text-lg">ReactJS</span>
    //                 <progress
    //                   className="progress progress-info"
    //                   value="72"
    //                   max="100"
    //                 ></progress>
    //               </div>
    //               {/* Sql */}
    //               <div>
    //                 <span className="font-semibold text-lg">SQL</span>
    //                 <progress
    //                   className="progress progress-info"
    //                   value="79"
    //                   max="100"
    //                 ></progress>
    //               </div>
    //               {/* EC2 */}
    //               <div>
    //                 <span className="font-semibold text-lg">Elastic Compute Cloud</span>
    //                 <progress
    //                   className="progress progress-info"
    //                   value="90"
    //                   max="100"
    //                 ></progress>
    //               </div>
    //               {/* S3 */}
    //               <div>
    //                 <span className="font-semibold text-lg">Simple Storage Service</span>
    //                 <progress
    //                   className="progress progress-info"
    //                   value="90"
    //                   max="100"
    //                 ></progress>
    //               </div>

    //             </div>
    //           </div>

    //         </div>
    //       </div>
    //     </section>

    // Dynamic Section Making
    <section
      id="skill"
      className="min-h-screen flex justify-center items-center py-20 "
    >
      <div className="w-3xl px-4">
        {/* Heading */}
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500
to-cyan-400 bg-clip-text text-transparent text-center"
        >
          Skills
        </h2>
        {/* Main Accordion */}
        <div className="join join-vertical w-full">
          {skillData.map((section, index) => {
            // Getting the Lucid Icon Values
            const Icon = LucideIcons[section.icon] || LucideIcons.Circle;
            return (
              // Main Div Container or a Tech
              <div
                key={index}
                className="collapse collapse-arrow join-item border-base-300 border"
              >
                <input type="checkbox" name="my-accordion-07" defaultChecked={index === 0} />
                <div className="collapse-title flex items-center gap-4">
                  <Icon className="size-9 text-blue-400" />
                  {/* Title and sub */}
                  <div>
                    <h2 className="font-bold text-2xl ">{section.title}</h2>
                    <p className="font-normal text-xs leading-4">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                {/* Collapse Component Container*/}
                <div className="collapse-content text-sm flex flex-col space-y-3">
                  {/* Componets inside the Collapase*/}
                  {section.skills.map((skill, id) => (
                    <div key={id}>
                      <span className="font-semibold text-lg">
                        {skill.name}
                      </span>
                      <progress
                        className="progress progress-info"
                        value={skill.value}
                        max="100"
                      ></progress>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
