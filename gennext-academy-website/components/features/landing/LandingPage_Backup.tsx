"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import styles from './LandingPage.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
    return (
        <div className={styles.container}>
            {/* Hero Panel */}
            <section className={styles.heroPanel}>
                <Image
                    src="/images/hero_banner_students_1770236638385.png"
                    alt="Students collaborating"
                    className={styles.heroImage}
                    fill
                    priority
                />
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Empowering<br />Future Leaders
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Connect with world-class tutors and unlock your full potential.
                    </motion.p>
                    <motion.div
                        className={styles.buttonGroup}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <Link href="/login">
                            <button className={styles.primaryButton}>
                                Get Started <ArrowRight size={20} />
                            </button>
                        </Link>
                        <button className={styles.secondaryButton}>
                            Our Mission
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={styles.section}>
                <motion.div
                    className={styles.missionContent}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.missionText}>
                        <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Our Mission</h2>
                        <p>
                            At GenNext Academy, we believe that education is the key to unlocking human potential.
                            Our platform bridges the gap between passionate educators and eager learners, fostering
                            an environment of mutual growth and respect.
                        </p>
                        <p>
                            Whether you are looking to master a new subject or share your expertise with the world,
                            we provide the tools and community you need to succeed.
                        </p>
                        <button className={styles.primaryButton} style={{ marginTop: '2rem' }}>
                            <Users size={20} /> Join the Community
                        </button>
                    </div>
                    <div className={styles.missionImageContainer}>
                        <Image
                            src="/images/mission_illustration_1770236652927.png"
                            alt="Our Mission Illustration"
                            width={600}
                            height={600}
                            className={styles.missionImage}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Events Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Upcoming Events</h2>
                <div className={styles.eventsGrid}>
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className={styles.eventCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Image
                                src="/images/event_workshop_1770236666453.png"
                                alt="Workshop Event"
                                width={400}
                                height={250}
                                className={styles.eventImage}
                            />
                            <div className={styles.eventDetails}>
                                <span className={styles.eventDate}>March {10 + i}, 2026 • 2:00 PM EST</span>
                                <h3 className={styles.eventTitle}>Creative Writing Workshop #{i}</h3>
                                <p className={styles.eventDescription}>
                                    Join us for an immersive session on storytelling techniques led by industry experts.
                                </p>
                                <button style={{ marginTop: '1rem', color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Register Now <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
