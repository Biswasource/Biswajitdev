import { Link } from "react-router-dom";
import BackgroundGrid from "../Background/GridBackGround";

export default function Blog() {
  const posts = [
    {
      title:
        "Building UIVault – A Modern React UI Component Library & CLI Tool",
      date: "08.10.2025",
      image: "./image.png",
      link: "/blog/uivault",
      badge: "New",
    },
    {
      title: "Tips for Creating Beautiful Image Borders",
      date: "13.09.2025",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1638959594003/IyBSd-xoK.jpeg",
      link: "/blog/favstack",
    },
  ];

  return (
    <BackgroundGrid>
      <div className="flex justify-center px-4 py-10 relative cl">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="text-gray-600 mb-8 text-md">
            A collection of articles on development, design, and ideas.
          </p>

          <div className="grid md:grid-cols-2 gap-3 p-1">
            {posts.map((post) => (
              <Link
                to={post.link}
                key={post.title}
                className="group block rounded-md overflow-hidden  border border-gray-200 transition-all"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-320 h-50 object-cover object-center p-1.5 rounded-md"
                  />

                  {post.badge && (
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {post.badge}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <h2 className="text-md group-hover:underline-offset-2 hover:underline transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BackgroundGrid>
  );
}
