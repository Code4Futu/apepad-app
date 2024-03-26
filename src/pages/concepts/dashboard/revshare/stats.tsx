function Stats() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
        <div className="relative flex rounded-box items-center gap-6 pl-6 pr-12 py-4 bg-base-100">
          <div className="inline-grid">
            <div className="stat-title">LAST REVSHARE / 15K LOOT</div>
            <div className="stat-value">0.0086 ETH</div>
          </div>
          <div className="inline-grid">
            <div className="stat-title">TOTAL</div>
            <div className="stat-value">2.81 ETH</div>
          </div>
          <div className="absolute right-6 top-6">
            <img alt="" className="h-8 w-8 cursor-pointer" src="/logo.svg" />
          </div>
        </div>
        <div className="relative flex rounded-box items-center gap-6 pl-6 pr-12 py-4 bg-accent/20">
          <div className="inline-grid">
            <div className="stat-title">LAST REVSHARE / xLOOT</div>
            <div className="stat-value">0.0189 ETH</div>
          </div>
          <div className="inline-grid">
            <div className="stat-title">Total</div>
            <div className="stat-value">4.46 ETH</div>
          </div>
          <div className="absolute right-6 top-6">
            <img alt="" className="h-8 w-8 cursor-pointer" src="/$xLOOT.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
