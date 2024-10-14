// pages/contact.jsx
export default function Contact() {
    return (
      <div>
      
        <section className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form className="flex flex-col items-center space-y-4">
              <input type="text" placeholder="Your Name" className="border border-gray-300 p-2 rounded w-1/2" required />
              <input type="email" placeholder="Your Email" className="border border-gray-300 p-2 rounded w-1/2" required />
              <textarea placeholder="Your Message" className="border border-gray-300 p-2 rounded w-1/2 h-32" required />
              <button type="submit" className="px-6 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold hover:bg-pink-600">
                Send Message
              </button>
            </form>
            <p className="mt-4">Or reach out via social media:</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://linkedin.com" className="text-pink-500 hover:underline">LinkedIn</a>
              <a href="https://github.com" className="text-pink-500 hover:underline">GitHub</a>
              <a href="https://twitter.com" className="text-pink-500 hover:underline">Twitter</a>
            </div>
          </div>
        </section>
      
      </div>
    );
  }
  