import { useEffect } from "react";
import hirely from "../../assets/images/Hirely.png";
import easyStaff from "../../assets/images/EasyStaff.png";
import formify from "../../assets/images/Formify.png";
import bloggy from "../../assets/images/Bloggy.png";
import planitio from "../../assets/images/Planitio.png";
import learningCafe from "../../assets/images/LearningCafe.png";
import { BsGithub, BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({color}) => {
  useEffect(() => {
    let containers = document.querySelectorAll(".container");

    containers.forEach((container) => {
      const imgContainer = container.querySelector(".img-container");
      const img = container.querySelector(".img");
      const textContainer = container.querySelector(".text-container");
      const contentLine = textContainer.children[0].children[0];
      const contentP = textContainer.children[1];
      const contentBtn = textContainer.children[2];

      gsap.delayedCall(1, () => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 65%",
              end: "top top",
              toggleActions: "play none resume pause",
            },
          })
          .set(container, {
            duration: 0.5,
            visibility: "visible",
            ease: "power4.Out",
          })
          .to(
            imgContainer,
            {
              duration: 1.6,
              width: "0%",
              ease: "power4.out",
            },
            0.2
          )
          .from(
            img,
            {
              duration: 1.6,
              scale: 1.6,
              ease: "power4.out",
            },
            0.2
          )
          .from(
            contentLine.firstChild,
            {
              duration: 1,
              y: "54px",
              ease: "power4.inOut",
            },
            0.5
          )
          .from(
            contentP,
            {
              duration: 1,
              y: 20,
              opacity: 0,
              ease: "power4.inOut",
            },
            1
          )
          .from(
            contentBtn,
            {
              duration: 1,
              y: 20,
              opacity: 0,
              ease: "power4.inOut",
            },
            1.2
          );
      });

      const tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#project-heading",
            start: "top 95%",
            toggleActions: "play none resume pause",
          },
        })
        .fromTo(
          "#project-heading",
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power4.inOut",
            duration: 1.4,
          }
        );
    });
  }, []);

  return (
    <div
      className={`w-full bg-${color} pb-40 xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10`}
      id="projects"
    >
      <h1
        id="project-heading"
        className="text-white/70 font-Glimer-Outlined font-semibold z-40 lg:mb-32 mb-20 vvs:text-[4rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7.5rem] xl:text-[9.2rem] 2xl:text-[10.8rem]  text-[3.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default"
      >
        Featured Projects
      </h1>
      <div className="sm:space-y-40 space-y-32 xl:space-y-[35vh] z-30">
        {/*NOVA*/}
        <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
          <div className={`lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper bg-${color}`}>
            <img
              src={learningCafe}
              alt="project image"
              className="absolute w-full object-cover h-full img"
            />
            <div className={`img-container absolute top-0 right-0 bg-${color} w-full h-full`}></div>
          </div>

          <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
            <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
              <div className={`content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-${color}`}>
                <div className="content-line-inner">NOVA</div>
              </div>
            </h1>
            <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl  sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
            Nova Voice Assistant is a simple Python-based virtual assistant that can perform various tasks through voice commands. It utilizes speech recognition and text-to-speech capabilities to interact with users.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/Johnwick-400/NOVA-an-AI-based-Voice-Assistant"
                >
                  <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/Johnwick-400/NOVA-an-AI-based-Voice-Assistant"
                >
                  <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*DDUP */}
        <div className="container lg:space-x-2  flex flex-col-reverse lg:flex-row lg:justify-between  lg:items-center items-start invisible ">
          <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3 ">
            <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
              <div className={`content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-${color}`}>
                <div className="content-line-inner">Drowsiness Detection</div>
              </div>
            </h1>
            <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base text-sm">
            Drowsiness Detection it Utilizing OpenCV and a facial landmark detection
            model for real-time drowsiness detection.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/Johnwick-400/Drowsiness-Detector"
                >
                  <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/Johnwick-400/Drowsiness-Detector"
                >
                  <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                </a>
              </div>
            </div>
          </div>

          <div className={`lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper bg-${color}`}>
            <img
              src={hirely}
              alt="project image"
              className="absolute w-full object-cover h-full img"
            />
            <div className={`img-container absolute top-0 left-0 bg-${color} w-full h-full`}></div>
          </div>
        </div>

        {/* Formify */}
        <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
          <div className={`lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper bg-${color}`}>
            <img
              src={formify}
              alt="project image"
              className="absolute w-full object-cover h-full img"
            />
            <div className={`img-container absolute top-0 right-0 bg-${color} w-full h-full`}></div>
          </div>

          <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
            <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
              <div className={`content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-${color}`}>
                <div className="content-line-inner">NOVA v2</div>
              </div>
            </h1>
            <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl  sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
            NOVA: AI-powered home automation app revolutionizing smart device control.
Effortlessly manage lighting, temperature, and security for enhanced convenience.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/Johnwick-400/NOVA-an-AI-based-Home-Automation-System"
                >
                  <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/Johnwick-400/NOVA-an-AI-based-Home-Automation-System"
                >
                  <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                </a>
              </div>
            </div>
          </div>
        </div>

        


      </div>
    </div>
  );
};

Projects.defaultProps = {
  color: "primary",
};

export default Projects;