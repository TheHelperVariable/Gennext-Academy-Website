"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './EventsPage.module.css';

const events = [
    {
        id: 1,
        title: "Calculus Marathon",
        date: "MAR 15",
        description: "A 4-hour intensive review session for upcoming AP exams. Bring your questions!",
        image: "/images/event_workshop_1770236666453.png"
    },
    {
        id: 2,
        title: "Creative Writing Workshop",
        date: "MAR 22",
        description: "Unlock your imagination and learn the structures of compelling storytelling.",
        image: "/images/event_workshop_1770236666453.png"
    },
    {
        id: 3,
        title: "Physics Lab: Real World",
        date: "APR 05",
        description: "Hands-on experiments demonstrating newton's laws in action via simulation.",
        image: "/images/hero_banner_students_1770236638385.png"
    },
    {
        id: 4,
        title: "Coding Bootcamp Intro",
        date: "APR 12",
        description: "Build your first website in HTML & CSS. No prior experience needed.",
        image: "/images/mission_illustration_1770236652927.png"
    }
];

export default function EventsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <motion.h1
                    className={styles.title}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    Upcoming Events
                </motion.h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Join us for workshops, seminars, and community gatherings.</p>
            </header>

            <div className={styles.grid}>
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className={styles.imageContainer}>
                            <Image src={event.image} alt={event.title} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.dateBadge}>{event.date}</span>
                            <h3 className={styles.cardTitle}>{event.title}</h3>
                            <p className={styles.description}>{event.description}</p>
                            <button className={styles.button}>Register Now</button>
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    className={styles.placeholderCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Additional Content Added Later
                </motion.div>
                <motion.div
                    className={styles.placeholderCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    Additional Content Added Later
                </motion.div>
            </div>
        </div >
    );
}
