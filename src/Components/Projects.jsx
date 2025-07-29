import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard"; 
const projects = [
  {
    title: "Cinemagic",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80",
    description: "A movie discovery app that helps you explore trending and indie films using the TMDb API.",
    tags: ["React", "TMDb API", "Tailwind"],
    link: "https://cinemagic-demo.vercel.app",
    repo: "https://github.com/username/cinemagic",
  },
  {
    title: "Neon Notes",
    image: "https://images.unsplash.com/photo-1535909339361-9f3c1425b84e?auto=format&fit=crop&w=800&q=80",
    description: "A minimalist PWA for markdown-based notes with offline-first functionality.",
    tags: ["PWA", "React", "Markdown"],
    link: "https://neonnotes.dev",
    repo: "https://github.com/username/neon-notes",
  },
  {
    title: "VerseVoyager",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description: "Generate AI-powered poetry with custom moods and styles, then share or save them.",
    tags: ["Next.js", "OpenAI API", "Tailwind"],
    link: "https://versevoyager.ai",
    repo: "https://github.com/username/verse-voyager",
  },
  {
    title: "Pixelcrate Studio",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e0970b0f8?auto=format&fit=crop&w=800&q=80",
    description: "An art showcase platform for illustrators to sell digital assets and portfolio pieces.",
    tags: ["Svelte", "Stripe", "Cloudinary"],
    link: "https://pixelcrate.art",
    repo: "https://github.com/username/pixelcrate",
  },
  {
    title: "AuraTasks",
    image: "https://images.unsplash.com/photo-1579370318443-89ecb1b04f54?auto=format&fit=crop&w=800&q=80",
    description: "Task manager with Pomodoro focus mode, team sharing, and dark/light themes.",
    tags: ["Vue", "Firebase", "Tailwind"],
    link: "https://auratasks.com",
    repo: "https://github.com/username/auratasks",
  },
  {
    title: "ByteBento",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=800&q=80",
    description: "AI meal planning app that generates weekly grocery lists and recipes from diet plans.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    link: "https://bytebento.ai",
    repo: "https://github.com/username/bytebento",
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold tracking-tight relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Featured Projects
          <span className="block h-1 mt-3 bg-gradient-to-r from-blue-500 to-pink-500 w-1/3 mx-auto rounded-full"></span>
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-14 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
