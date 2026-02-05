"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Star, Trophy } from 'lucide-react';
import styles from './LandingPage.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.mosaicGrid}>

                {/* Tile 1: Hero Section (Full Width) */}
                <motion.div
                    className={`${styles.tile} ${styles.heroTile}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/hero_banner_students_1770236638385.png"
                        alt="Students collaborating"
                        className={styles.heroImage}
                        fill
                        priority
                    />
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Unlock Your Potential</h1>
                        <p className={styles.heroSubtitle}>Join a community driven by curiosity and knowledge.</p>
                        <Link href="/login">
                            <button className={`${styles.button} ${styles.buttonPrimary}`}>
                                Get Started Today <ArrowRight size={18} />
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Tile 2: Mission Statement (Large Block) */}
                <motion.div
                    className={`${styles.tile} ${styles.missionTile}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <div className={styles.text}>
                        <p>
                            We believe every student deserves a personalized path to success.
                            GenNext Academy isn't just a tutoring platform; it's a launchpad for your dreams.
                        </p>
                        <p>
                            By connecting you with expert mentors and a supportive community,
                            we turn "I can't" into "I did."
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button className={`${styles.button} ${styles.buttonOutline}`}>
                            Read Our Story
                        </button>
                        <button className={`${styles.button} ${styles.buttonOutline}`}>
                            Meet the Team
                        </button>
                    </div>
                </motion.div>

                {/* Tile 3: Stats / Community Image */}
                <motion.div
                    className={`${styles.tile} ${styles.imageTile}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Image
                        src="/images/mission_illustration_1770236652927.png"
                        alt="Growth Illustration"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                        <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>500+</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Active Students</p>
                    </div>
                </motion.div>

                {/* Tile 4: Main Call to Action */}
                <motion.div
                    className={`${styles.tile} ${styles.ctaTile}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Trophy size={48} style={{ marginBottom: '1rem', opacity: 0.9 }} />
                    <h2 className={styles.sectionTitle} style={{ fontSize: '1.75rem' }}>Top Rated</h2>
                    <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>Voted #1 Tutoring Platform by our community.</p>
                    <button className={`${styles.button}`} style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                        See Reviews
                    </button>
                </motion.div>


                {/* Tile 5-7: Events (Grid Row) */}
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className={`${styles.tile} ${styles.eventTile}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                        <span className={styles.eventDate}>March {10 + i}, 2026</span>
                        <h3 className={styles.eventTitle}>Workshop: Advanced Math Strategies</h3>
                        <p className={styles.text} style={{ fontSize: '0.9rem' }}>
                            Master calculus concepts with ease in this interactive session.
                        </p>
                        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                            <Link href="#" style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                Register <ArrowRight size={14} />
                            </Link>
                        </div>
                    </motion.div>
                ))}

                {/* New Panel: Mission Home Template */}
                <motion.div
                    className={`${styles.tile} ${styles.missionHomeTile}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.sectionTitle} style={{ color: 'var(--color-primary)' }}>Additional Content Added Later</h2>
                </motion.div>

                {/* New Panel: Events Template */}
                <motion.div
                    className={`${styles.tile} ${styles.eventsPlaceholderTile}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.sectionTitle} style={{ color: 'var(--color-primary)' }}>Additional Content Added Later</h2>
                </motion.div>

            </div>
        </div>
    );
}
