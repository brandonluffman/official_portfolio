import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    <>
      <Link href="https://venum.vercel.app" target='_blank' rel="noreferrer">

        <div className="index-portfolio-grid-item p-grid-1" >
          <div className="index-portfolio-text">
            <h2>Venum</h2>
            <h6>Equity Research application to help investors build more accurate investment decisions.</h6>
            <div className='portfolio-logos'>
            <img src="/logos/react.png" alt="React" width={40} />
            <img src="/logos/python.png" alt="React" width={40} />
            <img src="/logos/node.png" alt="React" width={40} />
            <img src="/logos/postgreSQL.png" alt="React" width={40} />
            </div>
            {/* <div className="portfolio-icons">
            <div><Link rel="noreferrer" target="_blank" href='https://github.com/brandonluffman/venum'><BsGithub className='portfolio-out' /></Link></div>
            <div><Link rel="noreferrer" target="_blank" href='https://venum.vercel.app'><BiLinkExternal className='portfolio-out' /></Link></div>
            </div> */}
            </div>
        </div>
        </Link>
          <Link href="https://theresumebuilderai.com" target='_blank' rel="noreferrer">
        <div className="index-portfolio-grid-item p-grid-2" id="section2">
        <div className="index-portfolio-text">
            <h2>Resume Builder</h2>
            <h6>Application designed to tailor, build, and test resumes.</h6>
            <div className='portfolio-logos'>
            <img src="/logos/react.png" alt="React" width={40} />
            <img src="/logos/python.png" alt="React" width={40} />
            <img src="/logos/node.png" alt="React" width={40} />
            <img src="/logos/postgreSQL.png" alt="React" width={40} />
            </div>
            {/* <div className="portfolio-icons">
            <div><Link rel="noreferrer" target="_blank" href='https://github.com/brandonluffman/resumebuilder'><BsGithub className='portfolio-out' /></Link></div>
            <div><Link rel="noreferrer" target="_blank" href='https://theresumebuilderai.com'><BiLinkExternal className='portfolio-out' /></Link></div>
            </div> */}
            </div>
        </div>
        </Link>
      <Link href="https://julietchat.vercel.app" target='_blank' rel="noreferrer">

        <div className="index-portfolio-grid-item p-grid-3" id="section3">
        <div className="index-portfolio-text">
            <h2>Juliet</h2>
            <h6>Chatbot aggregating all points of search while providing public threads.</h6>
            <div className='portfolio-logos'>
            <img src="/logos/react.png" alt="React" width={40} />
            <img src="/logos/python.png" alt="React" width={40} />
            <img src="/logos/node.png" alt="React" width={40} />
            <img src="/logos/postgreSQL.png" alt="React" width={40} />
            </div>
            {/* <div className="portfolio-icons">
            <div><Link rel="noreferrer" target="_blank" href='https://github.com/brandonluffman/juliet'><BsGithub className='portfolio-out' /></Link></div>
            <div><Link rel="noreferrer" target="_blank" href='https://julietchat.vercel.app'><BiLinkExternal className='portfolio-out' /></Link></div>
            </div> */}
            </div>
        </div>
        </Link>
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
            {/* <div className="portfolio-icons">
            <div><Link rel="noreferrer" target="_blank" href='https://github.com/brandonluffman/ranki'><BsGithub className='portfolio-out' /></Link></div>
            <div><Link rel="noreferrer" target="_blank" href='https://ranki.ai'><BiLinkExternal className='portfolio-out' /></Link></div>
            </div> */}
            </div>
        </div>
        </Link>
    </>
  )
}

export default Featured