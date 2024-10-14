// pages/projects.jsx
export default function Projects() {
    return (
      <div>
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example project card */}
              <div className="bg-white p-5 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Personal Portfolio Website</h3>
                <p className="text-gray-600 mb-4">A responsive portfolio website showcasing my projects and skills as a web developer. Built with Next.js and Tailwind CSS for a modern and dynamic user experience. 
                This project highlights my proficiency in frontend development and my passion for creating user-friendly interfaces.</p>
                <a href="https://github.com/username/repository-name" className="text-pink-500 hover:underline">View Project</a>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </div>
        </section>
      </div>
    );
  }
