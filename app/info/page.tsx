const page = () => {
  return (
    <main className="flex flex-wrap min-h-screen p-6 bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0 md:w-1/2">
        {/*  Header: Name & Title  */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold">John Doe</h1>
          <p className="text-xl text-muted-foreground">Full Stack Developer</p>
        </div>

        {/*  Basic Info  */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-semibold">Basic Information</h2>
          <p>Email: johndoe@example.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Location: New York, USA</p>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
          <p>GitHub: github.com/johndoe</p>
        </div>

        {/*  Education  */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-semibold">Education</h2>

          <div className="mb-4">
            <h3 className="text-xl font-bold">MSc in Computer Science</h3>
            <p className="text-muted-foreground">
              Harvard University, 2015-2017
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">BSc in Software Engineering</h3>
            <p className="text-muted-foreground">MIT, 2010-2014</p>
          </div>
        </div>

        {/*  Skills  */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-semibold">Skills</h2>

          <ul className="space-y-2">
            <li>JavaScript (React, Vue, Node.js)</li>
            <li>Python (Django, Flask)</li>
            <li>Java (Spring Boot)</li>
            <li>Databases (SQL, MongoDB)</li>
            <li>DevOps (Docker, Jenkins, AWS)</li>
          </ul>
        </div>

        {/*  Work Experience  */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-semibold">Work Experience</h2>

          <div className="mb-4">
            <h3 className="text-xl font-bold">Senior Software Engineer</h3>
            <p className="text-muted-foreground">Google, 2020-Present</p>
            <ul className="pl-5 list-disc">
              <li>Developed XYZ feature that improved performance by 20%</li>
              <li>Led a team of 5 developers to build ABC application</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">Mid-Level Developer</h3>
            <p className="text-muted-foreground">Amazon, 2017-2020</p>
            <ul className="pl-5 list-disc">
              <li>
                Worked on the DEF project which reached 10k users in a month
              </li>
              <li>Improved the GHI process, resulting in a 15% time-saving</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-28">
        <img
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          alt="person"
          className="w-full h-fit"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
          pariatur sed cum dolore magni iure alias rem ullam ipsam perspiciatis
          facilis! Eligendi dolore nisi ut, earum doloremque placeat illum
          porro.
        </p>
      </div>
    </main>
  )
}

export default page
