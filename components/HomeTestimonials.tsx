"use client";

import { useState } from "react";

const testimonials = [
  ["Dr. B. Ramakrishna Rao", "Bharatiya City Developers", "McD BERL has been a trusted partner from the start, dedicating time, talent, and resources to our projects. They excel in re-engineering and value engineering, optimizing power consumption in our commercial buildings. Their work has led to significant reductions in both CAPEX and OPEX."],
  ["Guruprakash Shastry", "Regional Head-Infrastructure, Infosys", "McD BERL’s dynamic team of young professionals constantly strives to reduce the environmental impact of buildings and campuses. Their skills in data analysis and energy simulations are impressive. It has been a rewarding experience collaborating with them on energy-saving ideas."],
  ["Sanjay Prakash", "Shift Design", "McD BERL is a highly innovative MEP firm based in Bangalore, leading the way in integrating new technologies in building projects. Their expertise in renewable energy, solar generation, and high-performance HVAC is recognized globally."],
  ["Akshay", "The Purple Ink Studio", "Our collaboration with McD BERL has been invaluable as they consistently understand our vision and push the limits of sustainability. They are detail-oriented and use advanced technology to ensure high-performance outcomes."],
  ["Iype Chacko", "Flying Elephant Architects", "Working with McD BERL has been a true collaboration driven by a shared commitment to sustainable design and practices. Their contributions have enriched our projects from start to finish."],
  ["Anupam Bansal", "ABRD Architects", "McD BERL’s system-based, holistic approach to engineering and sustainability sets them apart from conventional firms. Their unwavering commitment to sustainable design is evident in every project."],
  ["Venkat Chalsani", "Samskruti Developers", "Over the last 12 years, McD BERL has consistently risen to the challenges we’ve presented, delivering innovative, feasible solutions—from smart water meters to demand-side smart grids."]
] as const;

export default function HomeTestimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <section className="testimonials section-shell"><div className="section-intro"><div><p className="eyebrow">Client voices</p><h2>Hear it straight<br />from our customers.</h2></div><div className="carousel-controls"><button aria-label="Previous testimonial" onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}>←</button><span>{String(testimonialIndex + 1).padStart(2, "0")} / 07</span><button aria-label="Next testimonial" onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}>→</button></div></div><blockquote>“{currentTestimonial[2]}”</blockquote><div className="quote-author"><strong>{currentTestimonial[0]}</strong><span>{currentTestimonial[1]}</span></div></section>
  );
}
