"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from '../auth/Auth.module.css'; // Reusing auth styles
import Link from 'next/link';

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate register delay
        setTimeout(() => {
            router.push('/dashboard');
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className={styles.title}>Join GenNext</h1>
                <form onSubmit={handleRegister}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className={styles.input}
                            placeholder="Alex Johnson"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder="student@example.com"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.input}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={styles.input}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <p style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    Already have an account? <Link href="/login" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Log In</Link>
                </p>
            </motion.div>
        </div>
    );
}
