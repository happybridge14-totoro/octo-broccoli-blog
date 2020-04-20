import React, { memo } from 'react';

const Footer = memo(()=>{
    return (<footer>
        <ul className="footer-personal-info">
            <li>© 2020 Yiji Huang</li>
            <li className="footer-divider"></li>
            <li>
                <span>E-mail: </span>
                <a href="mailto:huang.yiji@northeastern.edu">huang.yiji@northeastern.edu</a>
            </li>
            <li className="footer-divider"></li>
            <li>
                <span>Icons by </span>
                <a href="https://icons8.com">Icons8</a>
            </li>
        </ul>
    </footer>);
});

export default Footer;

