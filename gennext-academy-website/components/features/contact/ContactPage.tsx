"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './ContactPage.module.css';

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* Info Side */}
                <div className={styles.infoSide}>
                    <div>
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.subtitle}>
                            Have questions about our tutoring programs? Want to join our team? We'd love to hear from you.
                        </p>
                    </div>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <Mail /> hello@gennext.academy
                        </div>
                        <div className={styles.detailItem}>
                            <Phone /> +1 (555) 123-4567
                        </div>
                        <div className={styles.detailItem}>
                            <MapPin /> 123 Education Lane, Tech City
                        </div>
                    </div>

                    <div className={styles.socialLinks}>
                        <div className={styles.socialIcon}><Facebook size={20} /></div>
                        <div className={styles.socialIcon}><Instagram size={20} /></div>
                        <div className={styles.socialIcon}><Twitter size={20} /></div>
                    </div>
                </div>

                {/* Form Side */}
                <div className={styles.formSide}>
                    <form>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="Your Name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input type="email" id="email" className={styles.input} placeholder="you@company.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea id="message" className={styles.textarea} placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Send Message <Send size={16} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
