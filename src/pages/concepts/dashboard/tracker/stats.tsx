function Stats() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <div className="stats">
          <div className="stat">
            <div className="stat-figure text-primary">
              <i className="fa-duotone fa-bolt text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Interactions</div>
            <div className="stat-value text-primary">235</div>
            <div className="stat-desc mt-1">
              <strong className="text-success">+23</strong> the last 7 days
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-coins text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Volume</div>
            <div className="stat-value">$12,342</div>
            <div className="stat-desc mt-1">
              <strong className="text-success">+$120</strong> the last 7 days
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-gas-pump text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Fee spent</div>
            <div className="stat-value">$12</div>
            <div className="stat-desc mt-1">
              <strong className="text-error">+0</strong> the last 7 days
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
