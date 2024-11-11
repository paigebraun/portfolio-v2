import Contact from "../components/Contact";
import Footer from "../components/Footer";

function About() {
    return (
        <div className="max-w-3xl flex-1 text-xs">
            <p className="mb-2">
                I'm a <span className="font-bold">front end developer</span>{" "}
                with a background in design and a passion for creative problem
                solving.
            </p>
            <p className="mb-2">
                I've always been fascinated by how things work. This curiosity
                led me to study film and computer science at the University of
                Texas at Austin.
            </p>
            <p className="mb-2">
                I currently work at Visa on their design system team. I love
                using technology to recognize patterns and improve efficiency.
            </p>
            <h3 className="font-bold mb-4 mt-6">Skills</h3>
            <div className="grid grid-cols-2 grid-rows-7 max-w-56">
                <p>TypeScript</p>
                <p>React</p>
                <p>JavaScript</p>
                <p>Python</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>Node.js</p>
                <p>PostgreSQL</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Tailwind</p>
                <p>Vite</p>
                <p>Webpack</p>
                <p>Premiere</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
                <p>After Effects</p>
                <p>Figma</p>
            </div>
            <h3 className="font-bold mb-4 mt-6">Education</h3>
            <p className="mb-2">University of Texas at Austin</p>
            <p>Bachelor of Science in Radio-Television-Film</p>
            <p>Elements of Computing Certificate</p>
            <Contact />
            <Footer />
        </div>
    );
}

export default About;
