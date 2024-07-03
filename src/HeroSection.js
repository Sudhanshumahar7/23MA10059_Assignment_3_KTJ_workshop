import firstquality from './Assets/images.jpeg'
import secondquality from './Assets/download.png'
import thirdquality from './Assets/download (1).png'
const HeroSection = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return ( 
        <>
        <div className="HeroSectiondiv">
            <div className="textside">
                <h2 className='AppName'>Simplest Way To Track And Manage Your Expenses</h2>
                <p className="subtitle">SpendTrend helps you better manage your expenses and plan budgets wisely to save more money easily.</p>
                <button className="getStarted" onClick={() => scrollToSection('add-expense')}> Get Started</button>
            </div>
        </div>
        <div className="qualitiesOfApp">
            <div className="Qualitydiv">
                <img src={firstquality} alt='Track your Expenses' />
                <p className="quality">Track Your Expense</p>
            </div>
            <div className="Qualitydiv">
                <img src={secondquality} alt='Control your Expenses' />
                <p className="quality">Control Your Expense</p>
            </div>
            <div className="Qualitydiv">
                <img src={thirdquality} alt='Use Our Smart Budgets' />
                <p className="quality">Use Our Smart Budgets</p>
            </div>
        </div>
        </>
     );
};
 
export default HeroSection;