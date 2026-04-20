"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero">
            <motion.div
                className="kicker-row"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <span className="kicker">
                    <Sparkles size={14} /> cinematic portfolio concept
                </span>
            </motion.div>

            <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                Astra Vault
            </motion.h1>

            <motion.p
                className="hero-copy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                A motion-heavy, high-end showcase for your best work - built to feel more like an experience than a webpage.
            </motion.p>

            <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <a className="btn primary" href="#projects">
                    Enter the vault <ArrowRight size={18} />
                </a>
                <a className="btn secondary" href="#impact">
                    See the structure
                </a>
            </motion.div>
        </section>
    );
}