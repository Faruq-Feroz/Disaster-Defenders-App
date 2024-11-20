

const Map = () => {
  return (
    <div className="map-view1" style={{width:1000}}>
    <h2 style={{textAlign:"center",paddingBottom:10}}>Map of Kenya</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6396466.235687121!2d33.835480742106675!3d-1.286389723720841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840139fc5f3f7e3%3A0xe4f79f9d9db3d6da!2sKenya!5e0!3m2!1sen!2ske!4v1696369902995!5m2!1sen!2ske"
      width="100%"
      height="400"
      style={{ border: "none", borderRadius: "10px" }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
  )
}

export default Map