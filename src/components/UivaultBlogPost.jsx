import { Link } from "react-router-dom";
import cover1 from "../../public/uivaultcover1.png";
import cover2 from "../../public/uivaultcover2.png";
import cover3 from "../../public/uivaultcover3.png";
export default function UIvaultBlogPost() {
  return (
    <div className="flex justify-center px-4 py-12">
      <article className="max-w-3xl w-full">
        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
          >
            <span className="mr-1">←</span> Blog
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Building UIVault – A Modern React UI Component Library & CLI Tool
        </h1>

        {/* Body */}
        <div className="prose prose-neutral max-w-none title text-black text-sm space-y-6">
          <p>
            I’m incredibly proud to share that UIvault  — our
            open-source UI component library — has officially crossed{" "}
          11,000 active users worldwide! What began as a
            weekend experiment has evolved into a powerful developer tool,
            helping thousands of creators design modern, elegant, and accessible
            interfaces with ease.
          </p>

          <p>
            Built with React and Tailwind CSS,
            UIvault combines speed, flexibility, and aesthetics into one unified
            system. Every component is engineered to perfection — responsive by
            default, beautifully animated, and easy to customize. Whether it’s
            glowing cards, motion-driven accordions, or sleek pricing grids,
            UIvault empowers developers to bring ideas to life in seconds.
          </p>

          {/* First Image */}
          <img
            src={cover1}
            alt="UIvault Components Preview"
            className="rounded-2xl my-6 w-full shadow-md"
          />

          <p>
            Building UIvault has been one of the most rewarding journeys of my
            development career. I owe a huge part of this success to my friend{" "}
            <strong>Biswabhusan</strong>, whose creative insights, UI sense, and
            constant support have shaped UIvault into what it is today. Every
            feature and component is a reflection of teamwork, passion, and
            shared curiosity for great design.
          </p>

          <p>
            The beauty of UIvault lies in its simplicity. Developers can start
            using it instantly with a single command:
          </p>

          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg cl">
            npx ui-vault@latest add card
          </pre>

          <p>
            From there, choose your preferred format (JSX or TSX), select a
            theme like <em>NeonPulse</em>, <em>Obsidian</em>, or{" "}
            <em>AuroraGlow</em>, and instantly import your component. UIvault
            automatically handles installation, dependencies, and styling —
            saving valuable development time while maintaining consistency and
            beauty across your project.
          </p>

          {/* Second Image */}
          <img
            src={cover2}
            alt="UIvault Dashboard Preview"
            className="rounded-2xl my-6 w-full shadow-md"
          />

          <p>
            Reaching 11K users isn’t just a milestone — it’s proof that the
            developer community values accessible design systems that respect
            both performance and creativity. Seeing UIvault components power
            real-world projects — from portfolios and startups to production
            dashboards — is an achievement we’ll always be proud of.
          </p>

          <p>
            And we’re just getting started. Our upcoming updates include{" "}
            <strong>AI-powered component recommendations</strong>,{" "}
            <strong>real-time theme previews</strong>,{" "}
            <strong>Next.js + Vite native support</strong>, and even a{" "}
            <strong>live playground</strong> for instant visual testing. We want
            UIvault to be the most seamless, developer-centric UI toolkit on the
            web — where creativity meets simplicity.
          </p>

          {/* Third Image */}
          <img
            src={cover3}
            alt="UIvault Showcase Components"
            className="rounded-2xl my-6 w-full shadow-md"
          />

          <p>
            If you haven’t tried UIvault yet, visit{" "}
            <a
              href="https://uivault.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline font-semibold underline underline-offset-2"
            >
              uivault.in
            </a>{" "}
            to explore the collection. Each component is open-source, themeable,
            and designed to adapt to your workflow — whether you’re building a
            startup app, a dashboard, or your personal portfolio.
          </p>

          <p>
            I want to extend my heartfelt thanks to everyone who has starred,
            shared, and supported UIvault’s journey — and especially to{" "}
            <strong>Biswabhusan</strong> for being an incredible collaborator,
            motivator, and friend throughout this adventure.
          </p>

          <p>
            Here’s to the next milestone —{" "}
            <strong>100,000 developers using UIvault</strong> to build faster,
            smarter, and more beautiful web experiences. 🚀
          </p>
        </div>
      </article>
    </div>
  );
}
