// src/pages/Alerts.jsx
import React from 'react';
import styles from './Alerts.module.css'; // Import the CSS module

const Alerts = () => {
    // Function to handle Panic Button click
    const handlePanicClick = () => {
        alert('Panic alert triggered! Help is on the way.');
    };

    // Function to handle Helpline Button click
    const handleHelplineClick = () => {
        alert('Calling emergency helpline...');
    };

    return (
        <div className={styles.alertsContainer}>
            <header className={styles.header}>
                <img
                    src="https://img.lovepik.com/free-png/20210927/lovepik-camera-icon-png-image_401572796_wh1200.png"
                    alt="Camera Icon"
                    className={styles.cameraIcon}
                />
                <h1>Surveillance Alert System</h1>
            </header>

            <main className={styles.alertsMain}>
                <div className={styles.cameraFeed}>
                    <video id="liveFeed" controls autoPlay muted>
                        <source src="your-camera-feed-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <aside className={styles.alertPanel}>
                    <div className={styles.alertHeader}>
                        <h2>Alerts <i className="fas fa-exclamation-triangle" style={{ color: '#f44336' }}></i></h2>
                    </div>
                    <div id="alertMessages">
                        <div className={styles.alert} id="alert1">
                            <strong>Suspicious movement detected!</strong>
                            <p>Time: <span id="alertTime">3:45 PM</span></p>
                            <strong>Stay Alert</strong>
                        </div>
                    </div>

                    <button id="panicButton" className={styles.panicButton} onClick={handlePanicClick}>🚨 Panic</button>
                    <button id="helplineButton" className={styles.helplineButton} onClick={handleHelplineClick}>📞 Call Emergency Helpline</button>

                    <div id="safetyTips" className={styles.safetyTips}>
                        <h3>Safety Tips</h3>
                        <ul>
                            <li><i className="fas fa-lightbulb"></i> Avoid dark areas after 8 PM.</li>
                            <li><i className="fas fa-eye"></i> Stay alert near the parking lot.</li>
                            <li><i className="fas fa-user-friends"></i> Always let someone know your location.</li>
                        </ul>
                    </div>
                </aside>
            </main>

            <footer className={styles.footer}>
                <p>© 2024 Surveillance System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Alerts;
