import type { Project } from "./content";
import { SubSec } from "./Sub";

export default function Portfolio({ projects }: { projects: Project[] }) {
  return (
    <>
      {projects.map((project) => (
        <SubSec
          key={project.num}
          id={`proyek-${project.num}`}
          label={`Proyek ${project.num}`}
          title={project.title}
        >
          <p className="sub-quote">&ldquo;{project.position}&rdquo;</p>

          <div className="sub-cols">
            <div>
              <h3>Masalah</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>Solusi</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          {project.flow && <p className="case-flow">{project.flow}</p>}

          <div className="case-lists">
            <div>
              <h3>Fungsi</h3>
              <ul>
                {project.function.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Dampak</h3>
              <ul>
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="sub-h3">Yang dipelajari dan dibangun N⁻¹ Labs</h3>
            <p>{project.learned}</p>
          </div>
        </SubSec>
      ))}
    </>
  );
}
