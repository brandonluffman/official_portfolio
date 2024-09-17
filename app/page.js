"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import Head from 'next/head';
import { BiDownload, BiLinkExternal } from "react-icons/bi";
import { BsEyeFill, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoLinkExternal } from 'react-icons/go';
import Link from 'next/link';

import FadeIn from "../components/FadeIn";
import FadeInSection from '@/components/FadeInSection';
import CommitHeatmap from '@/components/CommitHeatmap';
import StackSlider from '@/components/StackSlider';
import Featured from '@/components/Featured';



export default function Home() {
  const [ shine, NoShine ] = useState(false);
  const [show, setShow] = useState(false)
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef(null);
  const stickyThreshold = 200; // Adjust this value as needed




  const toggleShine = () => {
    NoShine(prevShine => !prevShine);
  };


  return (
    <div className={!shine ? 'parallax-container' : 'parallax-black'}>
      <div className='main'>
      <Navbar />
    <div className="index-main-container">

        <div className="index-main-item">
          <div className='moving-border'>
          <div className="grid-item grid-1">
            {/* <div className="index-main-emoji">👋</div> */}
            <h2 id="about" className="index-main-header center">Brandon Luffman</h2>
            <p>Full-Stack Engineer with a strong focus in Machine Learning & Data Science.</p>
            </div>
            </div>
        </div>
        <div className="index-main-item grid grid-2">
            <div className="grid-item resume-grid-item">
                <div className="resume-grid">
                <span id="resume">2024 CV</span>
                <h2>Resume</h2>
                </div>
                <div className="item-grid-icons">
                <a href="Luffman_Resume.pdf" download class="download-link">
                <BiDownload/>
                </a>
                <Link href="/Luffman_Resume.pdf" target='_blank' rel='noreferrer' class="download-link">
                <BsEyeFill  />
                </Link>
                </div>
            </div>
            <div className="grid-item">
                  <div>
                    <div onClick={toggleShine} className={shine ? 'shine' : 'noshine'}>
                    <LuSun />
                    </div>
                    <div onClick={toggleShine} className={!shine ? 'shine' : 'noshine'}>
                    <FaMoon />
                    </div>
                  </div>
            </div>
        </div>
        <div className="index-main-item grid grid-4">
            <Link target='_blank' rel='noreferrer' href='https://github.com/brandonluffman'><div><img src='/github.png' width={50}></img></div></Link>
            <Link target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/brandon-luffman10/'><div><img src='/linkedin.webp' width={50}></img></div></Link>
            <a href="mailto:brandonluff10@gmail.com"><div><IoMdMail className="mail-icon" /></div></a>
            {/* <Link target='_blank' rel='noreferrer' href=''><div></div></Link> */}

            {/* <div><img src='/linkedin.webp' width={50}></img></div> */}
        </div>
        <div className="index-main-item grid index-experience">
              <div className="grid-item">
                  <span><b>2</b> Years of</span>
                  <h2>Experience</h2>
                  <div className="index-main-experience">
                    <h2 className="position">Software Engineer</h2>
                    <div className="position-flexer">
                        <div>Geiger</div>
                        <div>2022 - Present</div>
                    </div>
                  </div>
              </div>
        </div>
        <div className="index-main-item index-stack">
          <div className="grid-item">
            {/* <StackSlider /> */}
        </div>
        </div>
    </div>




    <div className="index-portfolio-grid" id="portfolio">

                    <Featured />

        <div className='portfolio-featured'>
            {/* <button onClick={showFeatured} className='index-spotlight-btn'>Show Less</button> */}
            <div></div>
            <div className='portfolio-featured-container'>
              <h2>Full Stack</h2>
              <div className='portfolio-featured-grid'>
              <Link target="_blank" rel="noreferrer" href='https://theresumebuilderai.com' className="github-link">
                  <div></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://venum.vercel.app' className="github-link">
                  <div></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://ranki.ai' className="github-link">
                  <div></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://julietchat.vercel.app' className="github-link">
                  <div></div>
                </Link>
              </div>
              <h2>Frontend</h2>
              <div className='portfolio-featured-grid'>
                <Link target="_blank" rel="noreferrer" href='https://h' className="github-link">
                  <div></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://phantomdm.com' className="github-link">
                  <div></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://cleoexteriors.com' className="github-link">
                  <div></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://crypto-price-tracker-xi.vercel.app/' className="github-link">
                  <div></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://react-landing-page-jade.vercel.app/' className="github-link">
                  <div></div>
                </Link>
              </div>
              <h2>Machine Learning & Python</h2>
              <div className='portfolio-featured-grid'>
                <Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/resumeparserofficial.git' className="github-link">
                    <div><h2>Resume Parser</h2></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/BlackWidowAPI' className="github-link">
                    <div><h2>BlackWidow</h2></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/gmb_scraper' className="github-link">
                    <div><h2>GMB Scraper</h2></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/summarize' className="github-link">
                    <div><h2>Similarity Algorithm</h2></div>
                </Link>
                {/* <Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/quant/blob/main/abstractive.py' className="github-link">
                    <div><h2>Text Summarization</h2></div>
                </Link> */}
                <Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/quant/blob/main/sentiment.py' className="github-link">
                    <div><h2>Earnings Sentiment Analysis</h2></div>
                </Link>
                <Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/ner_fastapi' className="github-link">
                    <div><h2>Named Entity Recognition Model</h2></div>
                </Link>
              </div>
            </div>
            </div>
 
        {/* <button onClick={showFeatured}>Show All</button> */}
        {/* {show ? (

        ):(
        )} */}
        {/* <CommitHeatmap /> */}
    </div>
    <Footer />
    </div>
    </div>
  );
}
