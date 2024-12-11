import Layout from "@/components/layout"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Books from "@/components/books"
import Interests from "@/components/interests"

export default function Home() {
  return (
    <Layout>
      <div className="space-y-16">
        {/* Welcome Section */}
        <section className="pt-12 pb-12">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 left-0 w-20 h-20 bg-orange-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-40" />
            
            {/* Main Content */}
            <div className="relative space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-medium text-orange-800">Hey there! 👋</p>
                <h1 className="text-4xl sm:text-5xl font-medium text-orange-950 space-y-4">
                  <div>Empowering workflows,</div>
                  <div>
                    <span className="relative inline-block px-5 py-1.5 mx-2 group hover:-rotate-1 transition-transform duration-200">
                      <span className="relative z-10">building great products,</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 
                        rounded-lg group-hover:-rotate-1 transition-transform duration-200
                        shadow-[2px_2px_0px_0px_rgba(251,146,60,0.3)]" 
                      />
                    </span>
                  </div>
                  <div>and scaling solutions.</div>
                </h1>
              </div>

              <div className="max-w-2xl">
                <p className="text-lg text-orange-800/90 leading-relaxed">
                  I&apos;m a product manager who believes in leveraging AI tools to enhance workflows, scale distribution, and solve real-world problems. 
                  Currently focused on revolutionizing traffic management through AI and computer vision at 
                  <a 
                    href="https://etalyc.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-orange-900 hover:text-orange-800 mx-1.5"
                  >
                    Etalyc
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  — where we&apos;re making cities smarter, safer, and more efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Projects />
        <Books />
        <Interests />
      </div>
    </Layout>
  )
}
