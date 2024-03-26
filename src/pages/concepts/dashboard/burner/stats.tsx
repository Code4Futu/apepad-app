function Stats() {
  return (
    <>
      <div className="grid">
        <div className="stats stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-figure">
              <img
                alt=""
                className="h-8 cursor-pointer"
                src="/currency-icons/$LOOT.svg"
              />
            </div>
            <div className="stat-title">Total Burned</div>
            <div className="stat-value">25.6K $LOOT</div>
            <div className="stat-desc mt-1">
              <strong className="text-success">20%</strong> total supply burned
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <img
                alt=""
                className="h-8 cursor-pointer"
                src="/currency-icons/$xLOOT.svg"
              />
            </div>
            <div className="stat-title">Total $xLOOT Issused</div>
            <div className="stat-value">2.56 $xLOOT</div>
            <div className="stat-desc mt-1">
              <strong className="text-success">30%</strong> $LOOT Holder
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-hand-holding-dollar text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Est. Revenue Share</div>
            <div className="stat-value">$128,23K</div>
            <div className="stat-desc mt-1">
              <strong className="text-success">120%</strong> total revenue
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
