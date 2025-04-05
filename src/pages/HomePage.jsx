import React from 'react';
import ConceptToCreation from '../components/ConceptToCreation';
import AscendBotInterface from '../components/AscendBotInterface';
import BusinessHeader from '../components/BusinessHeader';
import DataInsights from '../components/DataInsights';
import BusinessModels from '../components/BusinessModels';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <ConceptToCreation />
      <AscendBotInterface />
      <BusinessHeader />
      <div className="content-container">
        {/* <DataInsights /> */}
        <div className="models-container">
          <BusinessModels 
            icon="model-icon"
            title="Data driven insights about market or businesses"
            description="Data-driven insights involve collecting and analyzing data from customers, markets,
                  and operations to reveal trends and inform decisions. 
               This approach helps businesses optimize products, streamline processes, 
               and anticipate market shifts, giving them a competitive edge and driving growth."
          />
          <BusinessModels 
            icon="model-icon"
            title="Model which tells about end to end about business idea"
            description="Business consultants can assist clients in developing long-term strategic plans to achieve their goals."
          />
          <BusinessModels 
            icon="team-icon"
            title="Co-Founder and team suggestion according to requirement of founder"
            description="Conduct thorough market research to provide insights into market trends, customer behaviors, and others."
          />
        </div>
        <WhyChooseUs />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
