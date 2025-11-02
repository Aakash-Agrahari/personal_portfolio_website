import React from "react";

export default function Certifications() {
  const certs = [
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco",
      date: "2024",
    },
    {
      title: "CCNA: Switching, Routing, and Wireless",
      issuer: "Cisco",
      date: "2024",
    },
  ];

  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      <ul>
        {certs.map((c, i) => (
          <li key={i}>
            <strong>{c.title}</strong> — {c.issuer} ({c.date})
          </li>
        ))}
      </ul>
    </section>
  );
}
