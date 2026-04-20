"use client";

import { motion } from "framer-motion";
import { features } from "@/data/site";

export default function FeatureCards() {
    return (
        <section className="section">
            <div className="section-head">
                <p className="section-label">Why this works</p>
                <h2>It shows taste, motion, and front-end control.</h2>
            </div>

            <div className="card-grid">
                {features.map((item, index) => (
                    <motion.article
                        key={item.title}
                        className="glass-card"
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <div className="card-index">0{index + 1}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}