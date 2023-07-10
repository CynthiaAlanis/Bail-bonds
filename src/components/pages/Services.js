// import React from 'react';
// import '../../App.css';


// export default function Services() {
//   return(
//     <div> 
       
//   <video src='/videos/trees.mp4' autoPlay loop muted />
//    <h1 className='services'>SERVICES</h1>
//    </div>
//   )
// }
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import AboutSection from '../AboutSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <AboutSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;