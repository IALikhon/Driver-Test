import "./AppBanner.css";

const AppBanner = () => {
    return (
      <div className="info-banner">
        <span role="img" aria-label="uk-flag" className="icon flag">
          🇬🇧
        </span>
        <p className="info-text">Driving Theory Test Practice!</p>
        <span role="img" aria-label="car" className="icon">
        🚗
        </span>
      </div>
    );
}

export default AppBanner;