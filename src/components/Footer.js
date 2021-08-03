import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/footer.css';
import logo from '../img/logo.png';
import telegram from '../img/telegram.svg';
import facebook from '../img/free-icon-facebook-1312139.svg';
import instagram from '../img/free-icon-instagram-2111463.svg';

const Footer = () => (
    <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container>
            <div className="main-footer">
                <a href="#">
                    <img src={logo} class="d-block w-100" alt="..." />
                </a>
                <div>Created by Xusniddin</div>
                <div className="socials">
                    <a href="#">
                        <svg className="telegram" viewBox="0 0 24 24" width="25" xmlns={telegram}><circle cx="12" cy="12" fill="#039be5" r="12" /><path d="M5.491 11.74l11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff" /></svg>
                    </a>
                    <a href="#">
                        <svg className="facebook" viewBox="0 0 512 512" width="25" xmlns={facebook}><path d="M512 256c0 141.387-114.613 256-256 256S0 397.387 0 256 114.613 0 256 0s256 114.613 256 256zm0 0" fill="#4a7aff" /><path d="M267.234 511.738C403.406 505.86 512 393.618 512 256c0-.996-.027-1.988-.04-2.984L334.263 75.312l-190 198.594 105.566 105.567-48.676 66.183zm0 0" fill="#0053bf" /><path d="M334.262 75.313v57.968s-66.555-9.66-66.555 33.278v42.937h60.113l-7.511 65.48h-52.602v170.68h-66.555v-170.68l-56.894-1.074v-64.406h55.82v-49.379s-3.683-73.457 68.703-86.949c30.059-5.605 65.48 2.145 65.48 2.145zm0 0" fill="#fff" /><path d="M334.262 133.281V75.312s-35.422-7.75-65.48-2.144a101.494 101.494 0 00-13.137 3.348v369.14h12.062v-170.68h52.598l7.515-65.48h-60.113V166.56c0-42.937 66.555-33.278 66.555-33.278zm0 0" fill="#dce1eb" /></svg>
                    </a>

                    <a href="#">
                        <svg className="instagram" viewBox="0 0 24 24" width="25" xmlns={instagram}><linearGradient id="a" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stop-color="#fd5" /><stop offset=".5" stop-color="#ff543e" /><stop offset="1" stop-color="#c837ab" /></linearGradient><path d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z" fill="url(#a)" /><path d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 100 2.126 1.063 1.063 0 000-2.126zm-4.73 1.243a4.55 4.55 0 10.001 9.101 4.55 4.55 0 00-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff" /></svg>
                    </a>
                </div>
            </div>
        </Container>
    </Container>
)

export default Footer;