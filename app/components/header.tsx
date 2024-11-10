// Header.jsx
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

      {/* home page */}
      <section id="home">
        <div className="Home-container">
          <div className="home-left">
            <h1 className="main-heading">Hey, I&apos;m Muhammad Shoaib</h1>
            <p className="bio">
              A result-driven web developer with expertise in building and managing websites and web applications,
              focused on delivering successful and impactful digital products
            </p>
            <div className="btn-container">
              <Link href="#projects">
                <button className="btnn">Projects</button>
              </Link>
            </div>
            <div className="four-coloum">
              <i className="fa-brands fa-facebook" aria-hidden="true" id="janu"></i>
              <Link href="https://www.linkedin.com/in/muhammad-shoaib-41927627a/" target="blank">
                <i className="fa-brands fa-linkedin" aria-hidden="true" id="janu"></i>
              </Link>
              <i className="fa-brands fa-square-twitter" aria-hidden="true" id="janu"></i>
              <Link href="https://github.com/shoby056" target="blank">
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

      {/* about us */}
      <section id="about">
        <div className="about-us">
          <h1 className="about-us-heading">About Me</h1>
          <p className="about-me-description">
            Here you will find more information about me, what I do, and my current skills<br /> mostly in terms of
            programming and technology
          </p>

          <div className="bottom-parent">
            <div className="left-side">
              <h1 className="bottom-heading">Get to know me</h1>
              <p className="botom-left-description">
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
              {/* Skills List */}
              {['HTML', 'CSS', 'C', 'NextJs', 'Github', 'Tailwind', 'Typescript', 'Javascript'].map((skill, index) => (
                <div className="skill" key={index}>
                  <p>{skill}</p>
                  <div className="progress-bar">
                    <div className="progress" id={`p${index + 1}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects">
        <div className="projects">
          <h1 className="projects-heading">PROJECTS</h1>
          <p className="projects-description">Here you will find some of the personal projects that I created.</p>

          {/* Projects List */}
          {[
            { name: 'Age Calculator', description: 'This tool calculates your current age based on your date of birth.', link: 'https://shoby-js-tasks.vercel.app/age%20calculator/index.html', image: '/images/Age Calculator.png' },
            { name: 'Password Generator', description: 'This tool creates strong and secure passwords to enhance your online security.', link: 'https://shoby-js-tasks.vercel.app/Random%20password%20generator/index.html', image: '/images/Password Generator.png' },
            { name: 'Counter', description: 'This project allows users to increase or decrease a numeric value and reset it.', link: 'https://shoby-js-tasks.vercel.app/Counter/index.html', image: '/images/Counter.png' },
            { name: 'Countdown Timer', description: 'A countdown timer marks the time remaining for an event, task, or deadline.', link: 'https://shoby-js-tasks.vercel.app/countdown/index.html', image: '/images/Countdown Timer.png' },
            { name: 'Stopwatch', description: 'A stopwatch measures the elapsed time from start to stop.', link: 'https://shoby-js-tasks.vercel.app/stopwatch/index.html', image: '/images/Stopwatch.png' },
            { name: 'Calculator', description: 'This tool allows users to perform basic arithmetic calculations.', link: 'https://shoby-js-tasks.vercel.app/Calculator/index.html', image: '/images/Calculator.png' }
          ].map((project, index) => (
            <div className="projects-bottom-parent" key={index}>
              <div className="projects-bottom-left-side">
                <h1 className="projects-bottom-heading">{project.name}</h1>
                <p className="projects-bottom-left-description">{project.description}</p>
                <div className="button-container">
                  <Link href={project.link} target="_blank">
                    <button className="live-link">Live Link</button>
                  </Link>
                </div>
              </div>
              <div className="projects-right-side">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={500}
                  className="project-image"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact us */}
      <section id="contact">
        <div className="contact-us">
          <h1 className="contact-us-heading">Contact</h1>
          <p className="contact-us-description">
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible
          </p>

          <div className="form-contact">
            <form>
              <label htmlFor="name" className="labell">Name</label><br />
              <input type="name" id="name" name="name" placeholder="Enter Your Name" /><br />

              <label htmlFor="email" className="labell">Email</label><br />
              <input type="email" id="email" name="email" placeholder="Enter your email" /><br />

              <label htmlFor="message" className="labell">Message</label><br />
              <textarea name="Message" id="message" cols={30} rows={7} placeholder="Enter your message"></textarea>

              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* footer */}
     <footer>


  <div className="parent-footer">
    <div className="one-coloumn">
  <h1 className="footer-heading">Muhammad Shoaib</h1>

  <p className="footer-description">A Frontend focused Web Developer building the Frontend of
     Websites <br/> and Web Applications that leads to the success of the overall product</p>
      </div>






  
  


<div className="four-coloumn">
<h1 className="social">Social Media</h1>
  
<i className="fa-brands fa-facebook" aria-hidden="true"></i>
<Link href="https://www.linkedin.com/in/muhammad-shoaib-41927627a/" target="blank"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></Link>
<i className="fa-brands fa-square-twitter" aria-hidden="true"></i>
<Link href="https://github.com/shoby056" target="blank"><i className="fa-brands fa-github" aria-hidden="true"></i></Link>

</div>










</div>
<hr />
<p className="after-hr">© Copyright {new Date().getFullYear()}.Made by Muhammad Shoaib</p>
</footer>

    </div>
  );
}
