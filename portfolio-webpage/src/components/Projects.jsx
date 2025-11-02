import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Food Delivery Application",
      desc: "Full-stack project built with Spring Boot and React. Features user authentication using JWT, product management, Razorpay integration for payments, and AWS S3 for image storage.",
      github: "https://github.com/Aakash-Agrahari/food_delivery_web_application",
    },
    {
      name: "Online Voting Application",
      desc: "Spring Boot application focusing on secure voting with JWT authentication, role-based access control, and result tallying functionality.",
      github: "https://github.com/Aakash-Agrahari/Voting_Application",
    },
    {
      name: "Real-time Chat Application with WebSockets and SOCK JS",
      desc: "Spring Boot project that demonstrates the usage of websockets and sock js for the real time chatting.",
      github: "https://github.com/Aakash-Agrahari/websockets_sockjs_real-time_chat",
    },
    {
      name: "AI Notes Generator and Retriever",
      desc: "AI-powered project using MCP Server and LLM-based agent for note generation, semantic retrieval, and summarization.",
      /*github: "https://github.com/yourhandle/ai-notes-manager",*/
    },
    {
      name: "MP3 Music Player",
      desc: "JavaFX-based desktop project demonstrating media playback, playlist management, and an interactive UI.",
      github: "https://github.com/Aakash-Agrahari/JavaFX_MP3Player",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="cards">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                🔗 View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
