import React from "react";

export default function Experience() {
  const exp = [
    {
      role: "Operations Team Leader & International Relations Head",
      company: "AIESEC in Bengaluru",
      period: "Aug 2024 - Jul 2025",
    },
    {
      role: "Product Manager (Part-Time)",
      company: "AIESEC in Singapore",
      period: "Sep 2024 - Feb 2025",
    },
    {
      role: "Junior Manager - Business Development",
      company: "AIESEC in Bengaluru",
      period: "Feb 2024 - Jul 2024",
    },
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {exp.map((e, i) => (
        <div key={i} className="exp-item">
          <h3>{e.role}</h3>
          <p>
            {e.company} | {e.period}
          </p>
        </div>
      ))}
    </section>
  );
}
