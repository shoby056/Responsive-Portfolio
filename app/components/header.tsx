// Header.jsx
import Link from 'next/link'; // Make sure to use Next.js Link for internal routing
import Image from 'next/image';
import Head from 'next/head';

export default function Header() {
  return (
    <div>
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa-solid fa-list"></i>
      </label>
      
 <div><Link href=".">   <Image
src="/images/shobyy.png" 
alt="My Profile Picture"
width={50}                
height={50}  
className="logoo"             
/>  </Link></div>






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

    

{/* // home page */}
<section id="home">
<div className="Home-container">
<div className="home-left"><h1 className="main-heading">Hey, I'm Muhammad Shoaib</h1>
<p className="bio"> A result-driven web developer with expertise in building and managing websites and web applications,
 focused on delivering successful and impactful digital products</p>
 <div className="btn-container"> <Link href="#projects"><button className="btnn">Projects</button></Link></div>
 <div className="four-coloum">

  
<i className="fa-brands fa-facebook" aria-hidden="true" id="janu"></i>
<Link href="https://www.linkedin.com/in/muhammad-shoaib-41927627a/" target="blank"><i className="fa-brands fa-linkedin" aria-hidden="true" id="janu"></i></Link>
<i className="fa-brands fa-square-twitter" aria-hidden="true" id="janu"></i>
<Link href="https://github.com/shoby056" target="blank"><i className="fa-brands fa-github" aria-hidden="true" id="janu"></i></Link>

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
    <p className="about-me-description">Here you will find more information about me, what I do,
     and my current skills<br/> mostly in terms of programming and technology</p>

<div className="bottom-parent">
<div className="left-side">
<h1 className="bottom-heading">Get to know me</h1>
<p className="botom-left-description">I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.</p>
<div className="button-about"><Link href="#contact"><button className="shani">CONTACT</button></Link></div>
</div>
<div className="right-side">
    <h1 className="right-heading">Skills</h1>
<div className="skill">
    <p>HTML</p>
    <div className="progress-bar">
      <div className="progress" id="p1" ></div>
    </div>
  </div>

<div className="skill">
    <p>CSS</p>
    <div className="progress-bar">
        <div className="progress" id="p2"></div>
    </div>
</div>

<div className="skill">
    <p>C</p>
    <div className="progress-bar">
        <div className="progress" id="p3"></div>
    </div>
</div>

<div className="skill">
    <p>NextJs</p>
    <div className="progress-bar">
        <div className="progress" id="p4"></div>
    </div>
</div>


<div className="skill">
    <p>Github</p>
    <div className="progress-bar">
        <div className="progress" id="p5"></div>
    </div>
</div>


<div className="skill">
    <p>Tailwind</p>
    <div className="progress-bar">
        <div className="progress" id="p6"></div>
    </div>
</div>


<div className="skill">
    <p>Typescript</p>
    <div className="progress-bar">
        <div className="progress" id="p7"></div>
    </div>
</div>


<div className="skill">
    <p>Javascript</p>
    <div className="progress-bar">
        <div className="progress" id="p8"></div>
    </div>
</div>







   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>





{/* about-us div */}
</div>

</section>

{/* project */}
<section id="projects">

<div className="projects">
    <h1 className="projects-heading">PROJECTS</h1>
    <p className="projects-description">Here you will find some of the personal  projects that I created.</p>

<div className="projects-bottom-parent">
<div className="projects-bottom-left-side">
<h1 className="projects-bottom-heading">Age Calculator</h1>
<p className="projects-bottom-left-description">This tool calculates your current age based on your
 date of birth. It shows your age in years, months, and days.</p>
 <div className="button-container">
    <Link href="https://shoby-js-tasks.vercel.app/age%20calculator/index.html" target="_blank"><button className="live-link">Live Link</button></Link>
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
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>

{/* next section */}

<div className="projects-bottom-parent">
<div className="projects-bottom-left-side">
<h1 className="projects-bottom-heading">Password Generator</h1>
<p className="projects-bottom-left-description">This tool creates strong and secure passwords to enhance your online security. It allows you to customize the length and complexity of the password, 
ensuring it's difficult to guess while remaining easy for you to remember.</p>
 <div className="button-container">
    <Link href="https://shoby-js-tasks.vercel.app/Random%20password%20generator/index.html" target="_blank"><button className="live-link">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/images/Password Generator.png" 
        alt="Password Generator"
        width={500}                
        height={500}  
        className="project-image"             
      />
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>

{/* next section */}

<div className="projects-bottom-parent">
<div className="projects-bottom-left-side">
<h1 className="projects-bottom-heading">Counter</h1>
<p className="projects-bottom-left-description"> This project is a simple and interactive web application that allows users to increase or decrease a numeric value and also you can reset.</p>
 <div className="button-container">
    <Link href="https://shoby-js-tasks.vercel.app/Counter/index.html" target="_blank"><button className="live-link">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/images/Counter.png" 
        alt="Counter"
        width={500}                
        height={500}  
        className="project-image"             
      />
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>


{/* next section */}

<div className="projects-bottom-parent">
<div className="projects-bottom-left-side">
<h1 className="projects-bottom-heading">Countdown Timer</h1>
<p className="projects-bottom-left-description">A countdown timer is a time-tracking tool that counts down from a specified time interval to zero. It is often used to create a sense of urgency or
 to mark the time remaining for an event, task, or deadline.</p>
 <div className="button-container">
    <Link href="https://shoby-js-tasks.vercel.app/countdown/index.html" target="_blank"><button className="live-link">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/images/Countdown Timer.png" 
        alt="Countdown Timer"
        width={500}                
        height={500}  
        className="project-image"             
      />
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>









{/* next section */}

<div className="projects-bottom-parent">
<div className="projects-bottom-left-side">
<h1 className="projects-bottom-heading">Stopwatch</h1>
<p className="projects-bottom-left-description"> A stopwatch is a device used to measure the amount of time that has elapsed from
 a particular time when activated to when it is deactivated.</p>
 <div className="button-container">
    <Link href="https://shoby-js-tasks.vercel.app/stopwatch/index.html" target="_blank"><button className="live-link">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/images/Stopwatch.png" 
        alt="Stopwatch"
        width={500}                
        height={500}  
        className="project-image"             
      />
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>


{/* next section */}

<div className="projects-bottom-parent">
<div className="projects-bottom-left-side">
<h1 className="projects-bottom-heading">Calculator</h1>
<p className="projects-bottom-left-description">This tool allows users to quickly and efficiently carry out basic arithmetic calculations 
such as addition, subtraction, multiplication, and division..</p>
 <div className="button-container">
    <Link href="https://shoby-js-tasks.vercel.app/Calculator/index.html" target="_blank"><button className="live-link">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/images/Calculator.png" 
        alt="Calculator"
        width={450}                
        height={400}  
        className="project-image"             
      />
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>




{/* about-us div */}
</div>
</section>

{/* contact us */}
<section id="contact">
<div className="contact-us">
 <h1 className="contact-us-heading">Contact</h1>
 <p className="contact-us-description">Feel free to Contact me by submitting the form below and 
 I will get back to you as soon as <br/>possible</p>


<div className="form-contact">
  <form >
<label htmlFor="name" className="labell">Name</label> <br/>
<input type="name" id="name" name="name" placeholder="Enter Your Name" /><br/>

<label htmlFor="email" className="labell">Email</label><br/>
<input type="email" id="email" name="email" placeholder="Enter your email" /><br/>
<label htmlFor="message" className="labell">Message</label><br/>
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
  )
}
;