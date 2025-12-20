function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                opacity: 0.6
            }}>
                <span>{currentYear} Martin Tomek</span>
                <span>FAMU / CAS</span>
            </div>
        </footer>
    );
}

export default Footer;
