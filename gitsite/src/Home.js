import ResearchProjects from './pages/ResearchProjects.js'
import KaggleProjects from './pages/KaggleProjects'
import AboutMe from './pages/AboutMe'

function Home() {
    return (
      <div className="App">
        <body>
        <h1>Hi, I'm Martin Søgaard Nielsen</h1>
        <hr></hr>
        <p>The purpose of this site is to share some of the projects i have previously worked on.</p>
        <AboutMe></AboutMe>
        <hr></hr>
        <ResearchProjects></ResearchProjects>
        <hr></hr>
        <KaggleProjects></KaggleProjects>
        </body> 
      
      </div>
    );
  }
  
  export default Home;
  