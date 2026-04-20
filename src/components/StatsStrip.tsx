"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";

export default function StatsStrip() {
    return (
        <section className="section" id="impact">
            <div className="stats-strip">
                {stats.map((item, index) => (
                    <motion.div
                        key={item.label}
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -6 }}
                    >
                        <div className="stat-value">{item.value}</div>
                        <div className="stat-label">{item.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}