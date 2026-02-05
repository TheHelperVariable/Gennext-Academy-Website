"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './MissionPage.module.css';
import Image from 'next/image';

export default function MissionPage() {
    return (
        <div className={styles.container}>
            <section className={styles.heroSection}>
                <motion.h1
                    className={styles.bigTitle}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Learning <br /> Reimagined.
                </motion.h1>
                <motion.p
                    className={styles.introText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    We are breaking down the walls of the traditional classroom.
                    No more "one size fits all." Just you, a mentor, and a goal.
                </motion.p>
            </section>

            <section className={styles.contentGrid}>
                <motion.div
                    className={styles.storyBlock}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>The Origin Story</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        It started with a simple question: <strong>Why is finding a good tutor so hard?</strong>
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Students were frustrated with generic curricula. Teachers were burnt out from administrative overhead.
                        GenNext Academy was born to solve both. We built a platform that handles the boring stuff so humans can do what they do best: connect.
                    </p>
                </motion.div>
                <motion.div
                    className={styles.imageBlock}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/hero_banner_students_1770236638385.png"
                        alt="Our Story"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>

                <motion.div
                    className={styles.placeholderPanel}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Additional Content Added Later
                </motion.div>
                <motion.div
                    className={styles.placeholderPanel}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Additional Content Added Later
                </motion.div>
            </section>

            <section className={styles.valuesSection}>
                <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 800 }}>Our Core Values</h2>
                <div className={styles.valuesGrid}>
                    <motion.div
                        className={styles.valueCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <h3>01. Curiosity</h3>
                        <p>We celebrate the "why." Every question is a valid starting point for discovery.</p>
                    </motion.div>
                    <motion.div
                        className={styles.valueCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3>02. Connection</h3>
                        <p>Learning is a social act. We foster deep relationships between mentors and students.</p>
                    </motion.div>
                    <motion.div
                        className={styles.valueCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <h3>03. Excellence</h3>
                        <p>We don't settle for "good enough." We aim for mastery in every subject we touch.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
