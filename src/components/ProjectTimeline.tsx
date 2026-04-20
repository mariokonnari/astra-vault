"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/site";

export default function ProjectTimeline() {
    return (
        <section className="section" id="projects">
            <div className="section-head">
                <p className="section-label">Project flow</p>
                <h2>Built like a story, not a list.</h2>
            </div>

            <div className="timeline">
                {timeline.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className="timeline-item"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="timeline-badge">{item.year}</div>
                        <div className="timeline-panel">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}