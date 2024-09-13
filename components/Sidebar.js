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

        // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!sidebarRef.current) return;
      
  //     const sidebarTop = sidebarRef.current.getBoundingClientRect().top + window.pageYOffset;
  //     const scrollY = window.scrollY;

  //     // Determine if the sidebar should be sticky
  //     if (scrollY > sidebarTop + stickyThreshold) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }

  //     const sections = document.querySelectorAll('.index-portfolio-grid-item');
  //     let currentSection = '';

  //     sections.forEach(section => {
  //       const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
  //       const sectionHeight = section.clientHeight;

  //       if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
  //         currentSection = section.getAttribute('id');
  //       }
  //     });

  //     setActiveSection(currentSection);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Run on mount to set the initial active section

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);