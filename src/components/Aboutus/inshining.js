import "../../styles/inshining.css";
const Inshining=()=>{
    return(
        <section className="about-container">
        <div className="about-text">
          <h1>
            Explore millions of offerings tailored to your business needs
          </h1>
        </div>
  
        <div className="stats-container">
          <StatCard number="200M+" label="products" />
          <StatCard number="200K+" label="suppliers" />
          <StatCard number="5,900" label="product categories" />
          <StatCard number="200+" label="countries and regions" />
        </div>
      </section>
    );
  }
  
  function StatCard({ number, label }) {
    return (
      <div className="stat-card">
        <div className="stat-line"></div>
        <div>
          <h3 className="stat-number">{number}</h3>
          <p className="stat-label">{label}</p>
        </div>
      </div>
    )
}
export default Inshining;