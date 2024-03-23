import "./skills.css";
import Lottie from "lottie-react";
import ProgressBar from '../progress-bar/ProgressBar';
import skills from "../../animation/skills.json";

export default function Skills() {

  return (
    <section id="skills" className="skills">
        <h1 className="title">Skills</h1>
        <div className="main flex">
            <div className="left-section">
              <Lottie
                loop={true}
                style={{ height: 350 }}
                animationData={skills}
              />
            </div>
            <div className="right-section">
                <ProgressBar per={0.8} skill={"HTML & CSS"}/>
                <ProgressBar per={0.7} skill={"JavaScript-TypeScript-NodeJs"}/>
                <ProgressBar per={0.6} skill={"Angular"}/>
                <ProgressBar per={0.7} skill={"ReactJs-NextJs"}/>
                <ProgressBar per={0.75} skill={"JAVA-SpringBoot"}/>
                <ProgressBar per={0.6} skill={"Docker-Kubernetes-DevOps"}/>
                <ProgressBar per={0.4} skill={"Blockchain-Solidity"}/>
            </div>
        </div>
    </section>
  )
}
