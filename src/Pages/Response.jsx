import { useState } from 'react';

const Response = () => {
  // State for toggling FAQ answers
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null); // Close if the same FAQ is clicked
    } else {
      setOpenFaq(index); // Open the clicked FAQ
    }
  };

  return (
    <div>
      {/* Page Title */}
      <header className="response-header">
        <h1>Response and Recovery</h1>
        <p>Your guide to navigating emergencies and rebuilding stronger communities.</p>
      </header>

      {/* Sections in Grid */}
      <section className="response-grid">
        {/* Response Guidelines for various disasters */}
        <div className="response-card critical">
          <h3>Floods</h3>
          <p><span>Move:</span> to higher ground immediately.</p>
          <p><span>Avoid:</span> walking or driving through floodwaters.</p>
          <p><span>Turn off:</span> electrical appliances before evacuation.</p>
        </div>
        <div className="response-card moderate">
          <h3>Earthquakes</h3>
          <p><span>Drop:</span> Cover, and Hold.</p>
          <p><span>Stay:</span> indoors until shaking stops.</p>
          <p><span>Keep away:</span> from windows or loose objects.</p>
        </div>
        <div className="response-card high">
          <h3>Hurricanes</h3>
          <p><span>Evacuate:</span> immediately if instructed by authorities.</p>
          <p><span>Stay inside:</span> away from windows and doors.</p>
          <p><span>Secure:</span> your home by reinforcing windows and doors.</p>
        </div>
        <div className="response-card moderate">
          <h3>Wildfires</h3>
          <p><span>Evacuate:</span> immediately if you are in danger.</p>
          <p><span>Avoid:</span> using phones unless absolutely necessary.</p>
          <p><span>Stay:</span> indoors with windows closed if smoke is visible.</p>
        </div>
        <div className="response-card moderate">
          <h3>Wildfires</h3>
          <p><span>Evacuate:</span> immediately if you are in danger.</p>
          <p><span>Avoid:</span> using phones unless absolutely necessary.</p>
          <p><span>Stay:</span> indoors with windows closed if smoke is visible.</p>
        </div>
        <div className="response-card moderate">
          <h3>Wildfires</h3>
          <p><span>Evacuate:</span> immediately if you are in danger.</p>
          <p><span>Avoid:</span> using phones unless absolutely necessary.</p>
          <p><span>Stay:</span> indoors with windows closed if smoke is visible.</p>
        </div>
      </section>

      {/* Recovery Steps */}
      <section className="involvement-container2">
        <div className="response-card recovery" style={{width:450}}>
          <h3>Recovery Steps</h3>
          <ul>
            <li><strong>Assess:</strong> Document damages for insurance or local authorities.</li>
            <li><strong>Seek Help:</strong> Government or NGO support for recovery.</li>
            <li><strong>Rebuild:</strong> Use disaster-proof construction techniques.</li>
          </ul>
        </div>
     

      {/* FAQ Section */}
      
        <div className="response-card faq" style={{width:450}}>
          <h3>FAQs</h3>
          <button className="faq-toggle" onClick={() => toggleFaq(0)}>
            How do I prepare for a flood?
          </button>
          <div className={`faq-content ${openFaq === 0 ? 'open' : ''}`}>
            <p>Ensure all drainage is clear, and store important items in higher places. Always have an emergency kit ready.</p>
          </div>

          <button className="faq-toggle" onClick={() => toggleFaq(1)}>
            What should I do after an earthquake?
          </button>
          <div className={`faq-content ${openFaq === 1 ? 'open' : ''}`}>
            <p>Check for gas leaks and structural damage. Move carefully to avoid further injuries and seek medical help if needed.</p>
          </div>

          <button className="faq-toggle" onClick={() => toggleFaq(2)}>
            How can I get help after a disaster?
          </button>
          <div className={`faq-content ${openFaq === 2 ? 'open' : ''}`}>
            <p>Contact local authorities, relief organizations, or government agencies for assistance and resources.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Response;
