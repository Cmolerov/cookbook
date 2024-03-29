import React from "react";

export default function Footer() {
    return (
        <div className="footer-div">
            <a
                href="https://github.com/Cmolerov/cookbook"
                className="fab fa-github footer-icon fa-2x footer-link"
                target="_blank"
                rel="noopener noreferrer"
            />
            <a
                href="https://www.linkedin.com/in/carlos-molero/"
                className="fab fa-linkedin footer-icon fa-2x footer-link"
                target="_blank"
                rel="noopener noreferrer"
            />
            <a
                href="https://www.cmolero.com"
                className="fas fa-portrait footer-icon fa-2x footer-link"
                target="_blank"
                rel="noopener noreferrer"
            />
        </div>
    );
}
