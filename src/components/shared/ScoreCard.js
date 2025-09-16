import React from 'react';
import { Star } from 'lucide-react';

const ScoreCard = ({ score, cluster, ranking }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Farm Performance</h3>
        <Star className="text-yellow-500" size={24} />
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-green-700">{score}</span>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Cluster Ranking: {ranking}</p>
          <p className="text-gray-600">Region: {cluster}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;