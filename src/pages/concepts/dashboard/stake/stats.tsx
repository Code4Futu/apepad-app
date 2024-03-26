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
            <div className="stat-title">Total Staked</div>
            <div className="stat-value">25.6K $LOOT</div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-people text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Wallets Participating</div>
            <div className="stat-value">30,012</div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <i className="fa-duotone fa-hand-holding-dollar text-2xl icon-primary"></i>
            </div>
            <div className="stat-title">Total Stake Rewards</div>
            <div className="stat-value">232 ETH</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
