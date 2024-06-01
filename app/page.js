"use client";
import Typewriter from "typewriter-effect";
import styles from "../style/page.module.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {name, email, subject, message};
    const res = await fetch("http://localhost:3000/api/userQuery",{
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
    })
    const response = await res.json()
    if(response.success){
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast.success("Thanks for Contacting, We'll get back to you", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    else{
      toast.error('Invalid Credentials', {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

  };
  return (
    <>
      <div
        className={`${styles.titleSection} flex justify-center items-center mt-14`}
      >
      <ToastContainer
      position="bottom-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
        <div className={`${styles.description} py-32 px-48 `}>
          <p className="font-bold text-2xl">Hey... I am</p>
          <h4 className="font-bold text-6xl py-3">Gurpreet Singh</h4>
          <div className="typewriter text-4xl">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Designer",
                  "Freelancer",
                  "Web Application",
                ],
                autoStart: true,
                loop: true,
                delay: 200,
                deleteSpeed: 50,
                pauseFor: 1000,
              }}
              wrapperClassName="typewriter-wrapper"
              cursorClassName="typewriter-cursor"
            />
          </div>
          <div>
            <div className="buttons flex ">
              <div className="border-2 text-base cursor-pointer bg-gray-900 text-white w-23 p-2 border-black text-xl text-center my-8 rounded-md">
                <a href="Resume2.pdf" download>
                  View CV
                </a>
              </div>
              <div className="border-2 text-base cursor-pointer bg-gray-900 text-white ml-5 w-23 p-2 border-black text-xl text-center my-8 rounded-md">
                <a href="#" download>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.image} `}>
          <img src="image.png" alt="owner" />
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-center text-4xl font-bold my-5" id="projects">
            Projects
          </h3>
        </div>
        <div
          className={`${styles.projectContainer} flex items-center justify-center m-10`}
        >
          <div
            className={`${styles.projectCard} max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-7 mb-10`}
          >
            <a href="#">
              <img className="rounded-t-lg" src="ecommerce.png" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl text-white font-bold tracking-tight  ">
                  E-commerce Clothing Website
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Implemented custom APIs for seamless integration of various
                clothing types. Designed and executed intuitive functionalities
                including checkout carts for streamlined user experience.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={` ${styles.projectCard} max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-7 mb-10`}
          >
            <a href="#">
              <img className="rounded-t-lg" src="newsapp.png" alt="" />
            </a>
            <div className="p-5">
              <a href="https://github.com/Preet-Git9/NewsApp" target="_blank">
                <h5 className="mb-2 text-2xl text-white font-bold tracking-tight  ">
                  Realtime News website
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                News app with seamless API integration for accessing diverse
                articles. Offers categories including politics, technology,
                sports, and entertainment. Enhanced user experience with
                features like shimmer effect and loading bar.
              </p>
              <a
                href="https://github.com/Preet-Git9/NewsApp"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank"
              >
                Github
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={`${styles.projectCard} max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-7 mb-10`}
          >
            <a href="#">
              <img className="rounded-t-lg" src="textanalyzer.png" alt="" />
            </a>
            <div className="p-5">
              <a
                href="https://github.com/Preet-Git9/Text-Analyzer"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold text-white tracking-tight  ">
                  Text Analyzer
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Developed Text Analyzer app using frontend technologies for
                efficient text analysis.Implemented features like word/character
                count, text copying, and capitalization toggling. Enhanced
                usability with functions for extra space removal and real-time
                text preview.
              </p>
              <a
                href="https://github.com/Preet-Git9/Text-Analyzer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokelidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.skillContainer} flex flex-col  items-center`}>
        <h3 className="text-center text-4xl font-bold my-7" id="skills">
          My Skills
        </h3>
        <div className={`${styles.skills}`}>
          <div
            className={`${styles.skillBox} border-1 border-black p-5 bg-white w-48 rounded-lg`}
          >
            <img src="html.webp" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">HTML</h3>
          </div>
          <div
            className={`${styles.skillBox} border-1 border-black p-5  w-36 rounded-lg`}
          >
            <img src="css.png" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">CSS</h3>
          </div>
          <div
            className={`${styles.skillBox} border-1 border-black p-5  w-36 rounded-lg`}
          >
            <img src="tailwind.png" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">
              TailwindCSS
            </h3>
          </div>
          <div
            className={`${styles.skillBox} border-1 border-black p-5  w-36 rounded-lg`}
          >
            <img src="javascript.png" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">JavaScript</h3>
          </div>
          <div
            className={`${styles.skillBox} border-1 border-black p-5  w-36 rounded-lg`}
          >
            <img src="react.png" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">ReactJs</h3>
          </div>
          <div
            className={`${styles.skillBox} border-1 border-black p-5  w-36 rounded-lg`}
          >
            <img src="redux.webp" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">ReduxJs</h3>
          </div>
          <div
            className={`${styles.skillBox} border-1 border-black p-5  w-36 rounded-lg`}
          >
            <img src="next.png" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">NextJs 14</h3>
          </div>
          <div
            className={`${styles.skillBox} border-1 border-black p-5  w-36 rounded-lg`}
          >
            <img src="mongodb.png" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">MongoDB</h3>
          </div>
          <div
            className={`${styles.skillBox} border-1 border-black p-5  w-36 rounded-lg`}
          >
            <img src="github.png" alt="" />
            <h3 className="text-center text-2xl pt-2 text-black">Github</h3>
          </div>
        </div>
      </div>
      <div className={`${styles.contact}`}>
        <section id="contact">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center  ">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
              Got a technical issue? Want to send feedback about a feature? Need
              details about our Business plan? Let us know.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium  "
                >
                  Your Name
                </label>
                <input
                  value = {name}
                  onChange={(e)=>{setName(e.target.value)}}
                  type="name"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  "
                >
                  Your email
                </label>
                <input
                  value = {email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium  "
                >
                  Subject
                </label>
                <input
                  value = {subject}
                  onChange={(e)=>{setSubject(e.target.value)}}
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium  "
                >
                  Your message
                </label>
                <textarea
                  value = {message}
                  onChange={(e)=>{setMessage(e.target.value)}}
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm   rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white py-3 px-5 text-sm font-medium text-center  rounded-lg bg-gray-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
