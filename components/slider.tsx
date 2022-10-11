import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/styles.module.css";

export default function AppSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplayspeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const sliderArray = [
    {
      image: "/responsive.svg",
      text: "Get clean, modern responsive site optimized for performance, search engines.",
      title: "RESPONSIVE WEBSITE DEVELOPMENT",
    },
    {
      image: "/e-commerce.svg",
      text: "Integrate e-commerce platforms, payment gateways, custom product templates and more.",
      title: "E-COMMERCE",
    },
    {
      image: "/analytics.svg",
      text: "Get insights into who is browsing your site, to enhance smarter business decisions.",
      title: "ANALYTICS",
    },
    {
      image: "/audit.svg",
      text: "Want to improve your page performance, SEO, or user experience? Request an audit",
      title: "WEBSITE AUDITS",
    },
    {
      image: "/cms.svg",
      text: "Integrate Headless CMS or Custom Wordpress theme. Get content update at your finger tip",
      title: "CONTENT MANAGEMENT",
    },
  ];

  return (
    <Slider className={styles.slider} {...settings}>
      {sliderArray.map((content, index) => (
        <div key={index} className={styles.sliderContent}>
          <Image
            src={content.image}
            alt={content.title}
            className={styles.sliderImage}
            height={50}
            width={50}
          />
          <h3>{content.title}</h3>
          <p>{content.text}</p>
        </div>
      ))}
    </Slider>
  );
}
