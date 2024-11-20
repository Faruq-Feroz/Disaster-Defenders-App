const Resources = () => {
  return (
    <div className="resources-section">
      <h2>Video Resources</h2>
      <div className="video-container">
        {/* Video 1 */}
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/rV1iqRD9EKY"
            title="How to Survive a Flood"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/8BtrOcP_iy4"
            title="Safe, secure, resilient infrastructure: lessons from Kenya landslide"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        </div>

        {/* Video 3 */}
        <div className="video-container">
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/cV0mMjQiiKQ"
            title="10 Easy Fire Safety Tips For Your Home"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 4 */}
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/1pg1GGgfvvM"
            title="How natural disasters increase women's vulnerability and unpaid care responsibilities"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        </div>

        <div className="video-container">
        {/* Video 5 */}
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/oEZHydcY5GM"
            title="TUPADO/Oxfam's helping hand to the drought-ravaged community in Turkana"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 6 */}
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/A_j6_7bmY20"
            title="How to stay safe in an earthquake"
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

export default Resources;
