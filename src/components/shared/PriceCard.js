import React from 'react';
import { TrendingUp } from 'lucide-react';

const PriceCard = ({ prices }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <TrendingUp className="mr-2 text-blue-600" size={20} />
        Market Prices (Karnataka)
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {prices.map((item, index) => (
          <div key={index} className="border rounded-lg p-3">
            <div className="font-medium">{item.item}</div>
            <div className="text-xl font-bold text-green-600">{item.price}</div>
            <div className={`text-sm ${item.trend.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
              {item.trend}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;