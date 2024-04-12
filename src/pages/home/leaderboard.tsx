import { useState } from "react";

import { LeaderItem } from "../../types";

export const Leaderboard = () => {
  const [stats, setStats] = useState<Array<LeaderItem>>([]);

  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-brown flex justify-between items-center"
        >
          <div className="text-nowrap overflow-hidden truncate">
            <span>{stat.position}: </span>
            <span className="text-black">{stat.id}↗️</span>
          </div>
          <span className="text-right">{stat.wools} $wool</span>
        </div>
      ))}
    </div>
  );
};
