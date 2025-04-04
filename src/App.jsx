import "./App.css";
import Porfile from "./assets/Photo1.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [scrolling, setScrolling] = useState(false);
  const [result, setResult] = React.useState("");

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 400,
      easing: "ease-in-sine",
      delay: 150,
    });
    AOS.refresh();
    window.addEventListener("scroll", onPageScroll)
    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8110fe57-bde9-4d6a-aaba-5375a3e9608d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-7xl m-auto relative">
      <header className={`${scrolling ? 'border-b-2 border-gray-800' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className=" m-auto px-4 py-6 max-w-7xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
            <div>
              <h1 className="font-bold text-2xl">Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer sm:text-base text-xs">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer sm:text-base text-xs">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer sm:text-base text-xs">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#contactme" className="text-gray-400 hover:text-white cursor-pointer sm:text-base text-xs">
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col-reverse sm:flex-row gap-6 text-center sm:text-left" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200">
            <div className=" mt-16">
              <h2 className="font-bold text-2xl sm:text-4xl" >Hello, I'm Santhosh Kumar,</h2>
              <div>
                <h2 className="font-bold text-xl sm:text-4xl mt-1 gradiant-text" >Software developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400" >
                  Former Software Developer specialist, seeking to apply
                  competent development skills with focus on collaboration,
                  communication, and passion
                </p>
                <a href="https://drive.google.com/file/d/1gQkzsXr_XDAAEIi91NCScvAI3wWBrOvs/view?usp=drive_link" className=" mt-10">
                  <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 hover:scale-105 duration-150">
                    Download resume
                  </button>
                </a>
              </div>
              <div className=" flex flex-row gap-4 mt-5 sm:mt-8 text-4xl sm:text-5xl justify-center sm:justify-start">
                <a href="https://github.com/Santhosh1507/">
                  <FaGithub className=" text-blue-500 hover:text-blue-900 hover:scale-125 duration-150" />
                </a>
                <a href="https://www.linkedin.com/in/santhosh1507/">
                  <IoLogoLinkedin className=" text-blue-500 hover:text-blue-900 hover:scale-125 duration-150" />
                </a>
              </div>
            </div>
            <div className="relative" >
              <div className="" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-14 mt-11 max-w-5xl m-auto" >
              <div className="border border-gray-500 rounded-md p-5 flex-1 hover:scale-110 duration-100 hover:-rotate-2" data-aos="fade-up" data-aos-duration="800">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Furniture store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS/Javascript layout for online furniture store.
                </p>
                <div className="flex gap-2 mt-20">
                  <a href="https://furniture-store-landing-page.netlify.app/" className="flex-1 text-sm py-3 text-center bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </a>
                  <a href="https://github.com/Santhosh1507/furniture-store/" className="flex-1 text-sm text-center py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" >
                    Checkout github
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1 hover:scale-110 duration-100 hover:rotate-2" data-aos="fade-up" data-aos-duration="1200">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Designer coffee shop store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive Reactjs layout for online store of designer
                  coffee shop. HTML5, Tailwindcss.
                </p>
                <div className="flex gap-2 mt-12">
                  <a href="https://coffee-cup-shop.netlify.app/" className="flex-1 text-sm py-3 text-center bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </a>
                  <a href="https://github.com/Santhosh1507/coffee-shop.git" className="flex-1 text-sm text-center py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" >
                    Checkout github
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-14 mt-11 max-w-5xl m-auto">
              <div className="border border-gray-500 rounded-md p-5 flex-1 hover:scale-110 duration-100 hover:-rotate-2" data-aos="fade-up" data-aos-duration="800">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Landing page gym website for front-end developer
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive Reactjs layout for landing page gym website for front-end
                  developer. HTML5, Tailwindcss.
                </p>
                <div className="flex gap-4 mt-12">
                  <a href="https://main--gym-finess-web.netlify.app/" className="flex-1 text-sm py-3 text-center bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </a>
                  <a href="https://github.com/Santhosh1507/gym-fitness-web.git/" className="flex-1 text-sm text-center py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" >
                    Checkout github
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1 hover:scale-110 duration-100 hover:rotate-2" data-aos="fade-up" data-aos-duration="1200">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Website design for The frontend/backend developer project
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive Reactjs/Nodejs/Expressjs layout for The Venus project. HTML5, Tailwindcss, Rest Api.
                </p>
                <div className="flex gap-2 mt-12">
                  <a href="https://food-hotel-mern-frontend.vercel.app/" className="flex-1 text-sm py-3 text-center bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </a>
                  <a href="https://github.com/Santhosh1507/food-hotel-mern.git" className="flex-1 text-sm text-center py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" >
                    Checkout github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold" data-aos="fade-right">Technologies</h2>
            <div className="mt-14 max-w-4xl m-auto" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1200">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML, CSS, JAVASCRIPT, Reactjs</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python, Django, AI, LLM</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    MYSQL, PostgreSQL, MongoDB, SQl
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Data Science</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[100%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%] max-w-4xl m-auto">
              <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="800">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1200">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
              <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1400">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Communication
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%] max-w-4xl m-auto">
              <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1600">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Problem-solving
                </p>
              </div>
              <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1800">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  time management
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white  max-w-5xl m-auto">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] " data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                <h3 className="absolute left-0 text-lg font-semibold" >2025</h3>
                <p>
                  Graduated from Meenakshi College with a B.E in Computer Science and
                  Engineering, achieving a total grade point average of 8.1%. My academic journey
                  has equipped me with a solid foundation and a drive to harness technology in
                  addressing real-world challenges.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] " data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                <h3 className="absolute left-0 text-lg font-semibold">2025</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent python course and made a project.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                <h3 className="absolute left-0 text-lg font-semibold">2025</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Software Development.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="contactme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200">Contant me</h2>
            <div className=" p-3 shadow-lg dark:bg-dark-2 sm:p-12 max-w-4xl m-auto">
              <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className=" p-3 bg-zinc-900 border-2 hover:scale-105 duration-300 rounded-2xl"
                  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600"
                />
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Your Email"
                  className=" p-3 bg-zinc-900 border-2 hover:scale-105 duration-300 rounded-2xl"
                  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600"
                />
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Your Phone"
                  className=" p-3 bg-zinc-900 border-2 hover:scale-105 duration-300 rounded-2xl"
                  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600"
                />
                <textarea
                  typeof="text"
                  placeholder="Your Message"
                  name="message"
                  required
                  defaultValue=""
                  className=" p-3 h-52 bg-zinc-900 border-2 hover:scale-105 duration-300 rounded-2xl"
                  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600"
                />
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-xl border-none bg-primary p-3 text-white transition hover:bg-blue-700 bg-cyan-500 hover:scale-105 duration-200"
                    data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600"
                  >
                    Send Message
                  </button>
                </div>
                <span className="spanresult text-center">{result}</span>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2025</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://www.linkedin.com/in/santhosh1507/">
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
