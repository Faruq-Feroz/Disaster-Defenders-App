const Education = () => {
  return (
    <div className="education-page">
      <h2 className="education-title">Education & Learning</h2>

      {/* Videos Section */}
      <div className="education-videos-container">
        {/* Video 1: First Aid */}
        <div className="education-video-item">
          <h3 className="education-video-title">How to Perform First Aid</h3>
          <iframe
            width="400"
            height="330"
            src="https://www.youtube.com/embed/2Wf-ZvA7BXw"
            title="How to CORRECTLY give first aid to a nose bleeding casualty. Judy Gacheri demonstrates"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2: Basic Cooking Skills */}
        <div className="education-video-item">
          <h3 className="education-video-title">How to Perform CPR</h3>
          <iframe
            width="400"
            height="330"
            src="https://www.youtube.com/embed/iq4vReJMplo"
            title="HOW TO PERFORM CPR"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="education-videos-container">
        {/* Video 3: Financial Literacy */}
        <div className="education-video-item">
          <h3 className="education-video-title">Understanding Financial Literacy</h3>
          <iframe
            width="400"
            height="330"
            src="https://www.youtube.com/embed/JmxvfCSZESY"
            title="UNDERSTANDING FINANCIAL LITERACY || BENEFITS OF BEING FINANCIALLY LITERATE."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 4: Mental Health Awareness */}
        <div className="education-video-item">
          <h3 className="education-video-title">Mental Health Awareness</h3>
          <iframe
            width="400"
            height="330"
            src="https://www.youtube.com/embed/0PFKczPmCa0"
            title="Mental health awareness"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Education;
