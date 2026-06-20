import danial_image from './assets/danial.jpg';

function AboutMe() {
  return (
      <section id="next-steps" aria-label="About Danial Amirjalali">
        <div>
          <img className="danial-image" src={danial_image} alt="Danial Amirjalali" />
        </div>
        <div>
          <p>I am Danial Amirjalali, an Embedded Software Engineer based in Gothenburg, Sweden. I enjoy solving complex low-level problems, building reliable safety-critical software, and improving the tools and workflows that help engineering teams move faster with confidence.</p>
          <p>I am not a web developer or UX/UI designer, but I built this website for fun.</p>
          <p>Feel free to contact me on LinkedIn.</p>
        </div>
      </section >
  )

}

export default AboutMe;
