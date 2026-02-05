"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Dashboard.module.css';

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <motion.h1
                    className={styles.welcomeTitle}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    You are doing great, Alex!
                </motion.h1>
                <motion.p
                    className={styles.positiveMessage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    "Success is the sum of small efforts, repeated day in and day out."
                </motion.p>
            </header>

            <main>
                <h2 className={styles.sectionTitle}>Recent Activity</h2>
                <div className={styles.assignmentsGrid}>
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            className={styles.assignmentCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (item * 0.1) }}
                        >
                            <h3>Homework #{item}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Submitted on Feb {item + 10}, 2026</p>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
