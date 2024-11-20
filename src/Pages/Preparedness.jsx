

const Preparedness = () => {
  return (
    <div className="preparedness-container">
      {/* Introduction */}
      <section className="introduction">
        <h1>Disaster Preparedness</h1>
        <p>
          Being prepared for disasters can save lives and reduce the impact of
          emergencies. Its important to have a plan and be equipped with
          essential items to ensure safety and well-being during unexpected
          events.
        </p>
      </section>

      {/* Preparedness Checklist */}
      <section className="checklist">
  <h2 >Preparedness Checklist</h2>
  <div className="checklist-container">
    <div className="checklist-card">Umbrellas</div>
    <div className="checklist-card">Gumboots</div>
    <div className="checklist-card">Warm Jackets</div>
    <div className="checklist-card">Flashlight with extra batteries</div>
    <div className="checklist-card">First Aid Kit</div>
    <div className="checklist-card">Non-perishable food items and water</div>
  
    <div className="checklist-card">Portable phone charger</div>
    <div className="checklist-card">Emergency Blankets</div>
    <div className="checklist-card">Hand Sanitizer</div>
    <div className="checklist-card">Medications</div>
    <div className="checklist-card">Matches or Lighter</div>
    <div className="checklist-card">Waterproof Bag</div>
    </div>
  
</section>


      {/* Preparedness Tips */}
      <section className="tips">
        <h2>Preparedness Tips</h2>
        <p>
          1. Stay informed about potential risks in your area through local news
          and weather alerts.
        </p>
        <p>
          2. Practice evacuation routes and have a designated meeting point
          for family members in case of separation.
        </p>
        <p>
          3. Keep important documents, such as IDs and insurance papers, in a
          waterproof container.
        </p>
        <p>
          4. Ensure your mobile devices are charged, and have backup power
          options available.
        </p>
      </section>
    </div>
  );
};

export default Preparedness;
