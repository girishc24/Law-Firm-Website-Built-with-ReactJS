import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { customer1, customer2, client01, client02, client03 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Attorney" },
    { href: "#contact-us", label: "Contact Us" },
];



export const statistics = [
    { value: '6+', label: 'Advocates' },
    { value: '10+', label: 'Experience' },
    { value: '16+', label: 'Courts' },
];

export const products = [
    {
        imgURL: client01,
        name: "Anil kumar",
        price: "BBM, LLB",
    },
    {
        imgURL: client02,
        name: "Ramya",
        price: "BBM, LLB",
    },
    {
        imgURL: client03,
        name: "Archana",
        price: "BSC, LLB",
    },
    {
        imgURL: client01,
        name: "Bhavani",
        price: "BBM, LLB",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Criminal Law",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Family Law",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Corporate and Commercial Law",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: support,
        label: "Dispute Resolution and Arbitration",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: support,
        label: "Employment and Labor- Law",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQ's", link: "/" },
            { name: "Blog", link: "/" },
            { name: "Contact Us", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Career", link: "/" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Criminal Law", link: "/" },
            { name: "Family Law", link: "/" },
            { name: "Civil Law", link: "/" },
            { name: "Employment and Labor- Law", link: "/" },
            { name: "Intellectual Property Law", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "info@gmail.com", link: "mailto:into@gmail.com" },
            { name: "+916360409263", link: "tel:+916360409263" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];