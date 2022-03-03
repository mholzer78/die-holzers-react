import ContentWrapper from '../wrapper';

import styles from './contact.module.scss';

const ContentContact = () => {
		return (
			<ContentWrapper name="contact">

                    <h1>.<span className="highlight">contact</span>()</h1>
                    <div>
                        <a href="tel:+436766873625">
                            <i className={styles.iconMobile}></i>
                        </a>
                        <a href="tel:+436766873625">
                            <i className={styles.iconWhatsapp}></i>
                        </a>
                        <a href="mailto:michael@die-holzers.at">
                            <i className={styles.iconMail}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mholzer78/">
                            <i className={styles.iconLinkedin}></i>
                        </a>
                        <a
                            href="https://www.xing.com/profile/Michael_Holzer27/"
                        >
                            <i className={styles.iconXing}></i>
                        </a>
                        <a href="https://github.com/mholzer78">
                            <i className={styles.iconGithub}></i>
                        </a>
                        <a
                            href="https://stackoverflow.com/users/4359914/mholzer78"
                        >
                            <i className={styles.iconStackoverflow}></i>
                        </a>
                    </div>
            </ContentWrapper>
		);
	}

export default ContentContact;
