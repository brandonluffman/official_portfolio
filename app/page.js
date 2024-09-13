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



export default function Home() {
  const [ shine, NoShine ] = useState(false);
  const [show, setShow] = useState(false)
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef(null);
  const stickyThreshold = 200; // Adjust this value as needed

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return;
      
      const sidebarTop = sidebarRef.current.getBoundingClientRect().top + window.pageYOffset;
      const scrollY = window.scrollY;

      // Determine if the sidebar should be sticky
      if (scrollY > sidebarTop + stickyThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const sections = document.querySelectorAll('.index-portfolio-grid-item');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set the initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleShine = () => {
    NoShine(prevShine => !prevShine);
  };


  const showFeatured = () => {
    setShow(prevShow => !prevShow)
  }

  return (
    <div className={shine ? 'parallax-container' : 'parallax-black'}>
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
            <Link target='_blank' rel='noreferrer' href=''><div></div></Link>

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
                  {/* <div className="index-main-experience">
                    <h2 className="position">Penn State University</h2>
                    <div className="position-flexer">
                        <div>Graduated</div>
                        <div>2022</div>
                    </div>
                  </div> */}
                  {/* <ul className='experience-stack'>
                    <li><b>Technologies</b>: JavaScript, Python, React, MySQL, AWS</li>
                  </ul> */}
              </div>
        </div>
        <div className="index-main-item index-stack">
          <div className="grid-item">
            <h2>My Tech Stack</h2>
            <h2 className='stack-subheader'>Full Stack</h2>
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src="/logos/python.png" height="50" width="50" alt="" />
                </div>
                <div class="slide">
                  <img src="/logos/javascript.png" alt="JavaScript" />
                </div>
                <div class="slide">
                  <img src="/logos/react.png" alt="React" />
                </div>
                <div class="slide">
                  <img src="/logos/nextjs.webp" alt="NextJS" />
                </div>
                <div class="slide">
                  <img src="/logos/typescript.png" alt="TypeScript" />
                </div>
                <div class="slide">
                  <img src="/logos/node.png" alt="Node.js" />
                </div>
                <div class="slide">
                  <img src="/logos/html.png" alt="HTML" />
                </div>
                <div class="slide">
                  <img src="/logos/css.png" alt="CSS" />
                </div>
        
                <div class="slide">
                  <img src="/logos/aws.png" alt="AWS" />
                </div>
            
                <div class="slide">
                  <img src="/logos/mysql.png" alt="MySQL" />
                </div>
             
                <div class="slide">
                  <img src="/logos/postgresql.png" alt="PostgreSQL" />
                </div>
                </div>
                </div>
                <h2 className='stack-subheader'>Machine Learning</h2>
                <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src="/logos/python.png" height="50" width="50" alt="" />
                </div>
                <div class="slide">
                  <img src="/logos/pytorch.png" alt="PyTorch" />
                </div>
                <div class="slide">
                  <img src="/logos/scikit.png" alt="Scikit-Learn" />
                </div>
                <div class="slide">
                  <img src="/logos/pandas.png" alt="Pandas" />
                </div>
                <div class="slide">
                  <img src="/logos/numpy.png" alt="NumPy" />
                </div>
                <div class="slide">
                  <img src="/logos/fastapi.png" alt="FastAPI" />
                </div>
                <div class="slide">
                  <img src="/logos/spacy.png" alt="spaCy" />
                </div>
                <div class="slide">
                  <img src="/logos/aws.png" alt="AWS" />
                </div>
                <div class="slide">
                  <img src="/logos/mysql.png" alt="MySQL" />
                </div>
                <div class="slide">
                  <img src="/logos/postgresql.png" alt="PostgreSQL" />
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    {/* <FadeInSection>
  <h2>Section Title</h2>
  <p>Some content that fades in as you scroll.</p>
</FadeInSection> */}

    {/* <nav 
        ref={sidebarRef}
        style={{
          position: isSticky ? 'fixed' : 'relative',
          top: isSticky ? '0' : 'auto',
          left: '0',
          height: '100vh',
          width: '200px',
          background: '#000',
          transition: 'position 0.3s ease'
        }}
      >        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '20px 0' }}>
            <a href="#section1" style={{ textDecoration: activeSection === 'section1' ? 'underline' : 'none' }}>Venum</a>
          </li>
          <li style={{ margin: '20px 0' }}>
            <a href="#section2" style={{ textDecoration: activeSection === 'section2' ? 'underline' : 'none' }}>Resume Builder</a>
          </li>
          <li style={{ margin: '20px 0' }}>
            <a href="#section3" style={{ textDecoration: activeSection === 'section3' ? 'underline' : 'none' }}>Juliet</a>
          </li>
          <li style={{ margin: '20px 0' }}>
            <a href="#section4" style={{ textDecoration: activeSection === 'section4' ? 'underline' : 'none' }}>Ranki</a>
          </li>
        </ul>
      </nav> */}

    <div className="index-portfolio-grid" id="portfolio">

      <FadeInSection className='fade-section'>
      <Link href="https://venum.vercel.app" target='_blank' rel="noreferrer">

        <div className="index-portfolio-grid-item p-grid-1" >
          <div className="index-portfolio-text">
            <h2>Venum</h2>
            <h6>Equity Research application to help investors build more accurate investment decisions.</h6>
            <div className='portfolio-logos'>
            <img src="/logos/react.png" alt="React" width={40} />
            <img src="/logos/python.png" alt="React" width={40} />
            <img src="/logos/node.png" alt="React" width={40} />
            <img src="/logos/postgresql.png" alt="React" width={40} />
            </div>
            <div className="portfolio-icons">
            <div><Link rel="noreferrer" target="_blank" href='https://github.com/brandonluffman/venum'><BsGithub className='portfolio-out' /></Link></div>
            <div><Link rel="noreferrer" target="_blank" href='https://venum.vercel.app'><BiLinkExternal className='portfolio-out' /></Link></div>
            </div>
            </div>
        </div>
        </Link>
        </FadeInSection>
        <FadeInSection className='fade-section'>
          <Link href="https://theresumebuilderai.com" target='_blank' rel="noreferrer">
        <div className="index-portfolio-grid-item p-grid-2" id="section2">
        <div className="index-portfolio-text">
            <h2>Resume Builder</h2>
            <h6>Application designed to tailor, build, and test resumes.</h6>
            <div className='portfolio-logos'>
            <img src="/logos/react.png" alt="React" width={40} />
            <img src="/logos/python.png" alt="React" width={40} />
            <img src="/logos/node.png" alt="React" width={40} />
            <img src="/logos/postgresql.png" alt="React" width={40} />
            </div>
            <div className="portfolio-icons">
            <div><Link rel="noreferrer" target="_blank" href='https://github.com/brandonluffman/resumebuilder'><BsGithub className='portfolio-out' /></Link></div>
            <div><Link rel="noreferrer" target="_blank" href='https://theresumebuilderai.com'><BiLinkExternal className='portfolio-out' /></Link></div>
            </div>
            </div>
        </div>
        </Link>
      </FadeInSection>
      <FadeInSection className='fade-section'>
      <Link href="https://julietchat.vercel.app" target='_blank' rel="noreferrer">

        <div className="index-portfolio-grid-item p-grid-3" id="section3">
        <div className="index-portfolio-text">
            <h2>Juliet</h2>
            <h6>Chatbot aggregating all points of search while providing public threads.</h6>
            <div className='portfolio-logos'>
            <img src="/logos/react.png" alt="React" width={40} />
            <img src="/logos/python.png" alt="React" width={40} />
            <img src="/logos/node.png" alt="React" width={40} />
            <img src="/logos/postgresql.png" alt="React" width={40} />
            </div>
            <div className="portfolio-icons">
            <div><Link rel="noreferrer" target="_blank" href='https://github.com/brandonluffman/juliet'><BsGithub className='portfolio-out' /></Link></div>
            <div><Link rel="noreferrer" target="_blank" href='https://julietchat.vercel.app'><BiLinkExternal className='portfolio-out' /></Link></div>
            </div>
            </div>
        </div>
        </Link>
        </FadeInSection>
        <FadeInSection className='fade-section'>
        <Link href="https://ranki.ai" target='_blank' rel="noreferrer">

        <div className="index-portfolio-grid-item p-grid-4" id="section4">
        <div className="index-portfolio-text">
            <h2>Ranki</h2>
            <h6>SEO tool to automate SEO and optimize website for rankings.</h6>
            <div className='portfolio-logos'>
            <img src="/logos/react.png" alt="React" width={40} />
            <img src="/logos/python.png" alt="React" width={40} />
            <img src="/logos/node.png" alt="React" width={40} />
            <img src="/logos/postgreSQL.png" alt="React" width={40} />

            </div>
            <div className="portfolio-icons">
            <div><Link rel="noreferrer" target="_blank" href='https://github.com/brandonluffman/ranki'><BsGithub className='portfolio-out' /></Link></div>
            <div><Link rel="noreferrer" target="_blank" href='https://ranki.ai'><BiLinkExternal className='portfolio-out' /></Link></div>
            </div>
            </div>
        </div>
        </Link>
        </FadeInSection>
        {/* <button onClick={showFeatured}>Show All</button> */}
        {show ? (
          <div className='portfolio-featured'>
            <button onClick={showFeatured} className='index-spotlight-btn'>Show Less</button>
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
        ):(
          <div className='portfolio-featured'>
              <button className='index-spotlight-btn' onClick={showFeatured}>Show All Projects</button>
              <div></div>

              <div className='portfolio-featured-container-sm'>
              <h2>Full Stack</h2>
              <div className='portfolio-featured-grid'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              </div>
              <h2>Frontend</h2>
              <div className='portfolio-featured-grid'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h2>Machine Learning & Python</h2>
              <div className='portfolio-featured-grid'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        )}
        {/* <CommitHeatmap /> */}
    </div>
    <Footer />
    </div>
    </div>
  );
}
