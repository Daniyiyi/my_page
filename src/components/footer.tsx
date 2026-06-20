function Footer() {
    return (
        <footer className="app-footer">
            <div className="app-footer__inner">
                <span className="app-footer__copy">
                    © {new Date().getFullYear()} Danial Amir Jalali
                </span>

                <div className="app-footer__links">
                    <a
                        className="app-footer__link"
                        href="https://www.linkedin.com/in/danial-amirjalali-919a41172/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="app-footer__link"
                        href="https://github.com/Daniyiyi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
