import { StandardHeading } from "../utils/headings";

export default function Academics() {
    return (
        <>
            <div className="flex justify-center mt-5 sm:text-md md:text-lg lg-text-xl text-sm">
                <div className="bg-secondary-light p-4 rounded-lg text-white">
                    <h1 className="font-extrabold flex justify-center text-primary-light mb-2 md:text-3xl text-2xl">
                        Education
                    </h1>
                    <p className="text-white">
                        <b>Long Beach City College:</b> Associate in Science
                    </p>
                    <p>
                        <b>Colorado State University Global:</b> B.S. Computer Science (In Progress)
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-5 sm:text-md md:text-lg lg-text-xl text-sm">
                <div className="bg-secondary-light p-4 rounded-lg text-white">
                    <h1 className="font-extrabold flex justify-center text-primary-light mb-2 md:text-3xl text-2xl">
                        Skills
                    </h1>
                    <ul className="columns-4 list-disc pl-5 pr-5 font-bold">
                        <li>Unity</li>
                        <li>Unreal</li>
                        <li>Next.js</li>
                        <li>VR</li>

                        <li>C#</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>TypeScript</li>

                        <li>XML</li>
                        <li>REST</li>
                        <li>Agile</li>
                        <li>ECS</li>

                        <li>QA</li>
                        <li>Networking</li>
                        <li>Video Editing</li>
                        <li>UI/UX</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center mt-5 sm:text-md md:text-lg lg-text-xl text-sm">
                <div className="bg-secondary-light p-4 rounded-lg text-white">
                    <h1 className="font-extrabold flex justify-center text-primary-light mb-2 md:text-3xl text-2xl">
                        Contact
                    </h1>
                    <p className="font-bold">
                        Jeffrey Lamb
                        <br />
                        <a href="mailto:jefflamb9@gmail.com">jefflamb9@gmail.com </a>
                        | 209-283-6630 | Orange County, California
                    </p>
                </div>
            </div>
            <section className="flex justify-center mt-10 text-white">
                <button className=" bg-primary-light rounded-md p-2 pl-5 pr-5 font-bold hover:scale-110 active:scale-90 text-lg">
                    <a href="/JeffLambCV2024.pdf" download="JeffLambCV">
                        Download My Resume
                    </a>
                </button>
            </section>
        </>
    );
};