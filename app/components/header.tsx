import Link from 'next/link'; // Make sure to use Next.js Link for internal routing
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa-solid fa-list"></i>
        </label>

        <div>
          <Link href=".">
            <Image
              src="/images/shobyy.png"
              alt="My Profile Picture"
              width={50}
              height={50}
              className="logoo"
            />
          </Link>
        </div>

        <label className="logo">Muhammad Shoaib</label>
        <ul>
          <li className="active">
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Home Page */}
      <section id="home">
        <div className="Home-container">
          <div className="home-left">
            <h1 className="main-heading">Hey, I&apos;m Muhammad Shoaib</h1>
            <p className="bio">
              A result-driven web developer with expertise in building and managing websites and web applications,
              focused on delivering successful and impactful digital products.
            </p>
            <div className="btn-container">
              <Link href="#projects">
                <button className="btnn">Projects</button>
              </Link>
            </div>
            <div className="four-column">
              <i className="fa-brands fa-facebook" aria-hidden="true" id="janu"></i>
              <Link href="https://www.linkedin.com/in/muhammad-shoaib-41927627a/" target="_blank">
                <i className="fa-brands fa-linkedin" aria-hidden="true" id="janu"></i>
              </Link>
              <i className="fa-brands fa-square-twitter" aria-hidden="true" id="janu"></i>
              <Link href="https://github.com/shoby056" target="_blank">
                <i className="fa-brands fa-github" aria-hidden="true" id="janu"></i>
              </Link>
            </div>
          </div>
          <div className="home-right">
            <Image
              src="/images/shobyy.png"
              alt="My Profile Picture"
              width={300}
              height={300}
              className="profile"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about">
        <div className="about-us">
          <h1 className="about-us-heading">About Me</h1>
          <p className="about-me-description">
            Here you will find more information about me, what I do, and my current skills
            <br /> mostly in terms of programming and technology.
          </p>

          <div className="bottom-parent">
            <div className="left-side">
              <h1 className="bottom-heading">Get to know me</h1>
              <p className="bottom-left-description">
                I&apos;m a Frontend Focused Web Developer building and managing the Front-end of Websites and Web
                Applications that leads to the success of the overall product. Check out some of my work in the Projects
                section. I also like sharing content related to the stuff that I have learned over the years in Web
                Development so it can help other people of the Dev Community.
              </p>
              <div className="button-about">
                <Link href="#contact">
                  <button className="shani">CONTACT</button>
                </Link>
              </div>
            </div>
            <div className="right-side">
              <h1 className="right-heading">Skills</h1>
              {/* Skill bars */}
              <div className="skill">
                <p>HTML</p>
                <div className="progress-bar">
                  <div className="progress" id="p1"></div>
                </div>
              </div>
              {/* Add similar blocks for CSS, C, Next.js, Github, Tailwind, Typescript, and Javascript */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="projects">
          <h1 className="projects-heading">PROJECTS</h1>
          <p className="projects-description">Here you will find some of the personal projects that I created.</p>
          {/* Project items */}
          <div className="projects-bottom-parent">
            <div className="projects-bottom-left-side">
              <h1 className="projects-bottom-heading">Age Calculator</h1>
              <p className="projects-bottom-left-description">
                This tool calculates your current age based on your date of birth. It shows your age in years, months,
                and days.
              </p>
              <div className="button-container">
                <Link href="https://shoby-js-tasks.vercel.app/age%20calculator/index.html" target="_blank">
                  <button className="live-link">Live Link</button>
                </Link>
              </div>
            </div>
            <div className="projects-right-side">
              <Image
                src="/images/Age Calculator.png"
                alt="Age Calculator"
                width={500}
                height={500}
                className="project-image"
              />
            </div>
          </div>
          {/* Add similar blocks for Password Generator, Counter, Countdown Timer, Stopwatch, and Calculator */}
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact">
        <div className="contact-us">
          <h1 className="contact-us-heading">Contact</h1>
          <p className="contact-us-description">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </p>
          <div className="form-contact">
            <form>
              <label htmlFor="name" className="labell">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter Your Name" />
              <label htmlFor="email" className="labell">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
              <label htmlFor="message" className="labell">Message</label>
              <textarea id="message" cols={30} rows={7} placeholder="Enter your message"></textarea>
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="parent-footer">
          <div className="one-column">
            <h1 className="footer-heading">Muhammad Shoaib</h1>
            <p className="footer-description">
              A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the
              success of the overall product
            </p>
          </div>
          <div className="four-column">
            <h1 className="social">Social Media</h1>
            <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            <Link href="https://www.linkedin.com/in/muhammad-shoaib-41927627a/" target="_blank">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </Link>
            <i className="fa-brands fa-square-twitter" aria-hidden="true"></i>
            <Link href="https://github.com/shoby056" target="_blank">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <hr />
        <p className="after-hr">© Copyright {new Date().getFullYear()}. Made by Muhammad Shoaib</p>
      </footer>
    </div>
  );
}
