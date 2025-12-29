
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', user: 135, market: 130 },
  { name: 'Feb', user: 140, market: 132 },
  { name: 'Mar', user: 145, market: 138 },
  { name: 'Apr', user: 160, market: 145 },
  { name: 'May', user: 155, market: 150 },
  { name: 'Jun', user: 170, market: 155 },
  { name: 'Jul', user: 185, market: 160 },
];

const competitors = [
  {
    name: 'Pine Tree Cabin - 2BR',
    distance: '0.5 miles away',
    tags: 'Superhost',
    price: 155,
    occupancy: 92,
    img: 'https://picsum.photos/seed/cabin/100/100'
  },
  {
    name: 'Downtown Loft Studio',
    distance: '1.2 miles away',
    tags: 'New Listing',
    price: 130,
    occupancy: 65,
    img: 'https://picsum.photos/seed/loft/100/100'
  },
  {
    name: 'The Rustic Retreat',
    distance: '0.8 miles away',
    tags: 'Highly Rated',
    price: 180,
    occupancy: 45,
    img: 'https://picsum.photos/seed/rustic/100/100'
  }
];

const CompetitorIntelligenceScreen: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold font-display">Competitor Intelligence</h2>
          <p className="mt-1 text-sm text-slate-500">Benchmark your property against top-performing listings in your area.</p>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="bg-white dark:bg-slate-800 border border-slate-300 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <span className="material-icons-round text-lg">settings</span> Configuration
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <span className="material-icons-round text-lg">sync</span> Sync Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border p-6 flex items-center gap-5">
          <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-xl">
             <span className="material-icons-round text-rose-500 text-4xl">travel_explore</span>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Airbnb Integration</div>
            <div className="text-lg font-bold">Connected</div>
            <button className="text-primary text-xs font-bold mt-1">View 3 listings</button>
          </div>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border p-6 flex items-center gap-5 opacity-60">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl">
             <span className="material-icons-round text-indigo-500 text-4xl">hotel</span>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Booking.com</div>
            <div className="text-lg font-bold">Pending</div>
            <button className="text-primary text-xs font-bold mt-1">Connect Account →</button>
          </div>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border p-6 flex items-center gap-5">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl">
             <span className="material-icons-round text-emerald-500 text-4xl">trending_up</span>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Market Demand</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">8.4/10</span>
              <span className="text-emerald-500 text-xs font-bold flex items-center">
                <span className="material-icons-round text-sm">arrow_upward</span> 12%
              </span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Updated 2 hours ago</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4">Dynamic Pricing Logic</h3>
            <div className="bg-slate-900 rounded-lg p-5 mb-6">
              <p className="font-mono text-sm leading-relaxed text-blue-400">
                P<span className="text-white">(t, d, o) where:</span>
              </p>
              <ul className="mt-4 space-y-2 text-xs font-mono text-slate-300">
                <li>• <span className="text-amber-400">t</span> = Booking Window</li>
                <li>• <span className="text-emerald-400">d</span> = Historical Demand</li>
                <li>• <span className="text-purple-400">o</span> = Current Occupancy</li>
              </ul>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Your pricing is not static. It adapts based on market signals from three vectors.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Booking Window Weight', val: 35, color: 'bg-blue-500' },
                { label: 'Demand Factor', val: 45, color: 'bg-emerald-500' },
                { label: 'Occupancy Impact', val: 20, color: 'bg-purple-500' }
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-slate-500">{item.label}</span>
                    <span>{item.val}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                    <div className={`${item.color} h-1.5 rounded-full`} style={{ width: `${item.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border p-6">
            <h3 className="font-bold text-lg mb-4">Neighborhood Average</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b dark:border-slate-800">
                <span className="text-sm text-slate-500">Avg. Nightly Rate</span>
                <span className="text-xl font-black">$142</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b dark:border-slate-800">
                <span className="text-sm text-slate-500">Avg. Occupancy</span>
                <span className="text-xl font-black">76%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Active Listings</span>
                <span className="text-xl font-black">45</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Price vs. Occupancy Trends</h3>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold">You</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold">Market Avg</span>
              </div>
            </div>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorUser" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                  <Tooltip cursor={{ stroke: '#3b82f6', strokeWidth: 1 }} />
                  <Area type="monotone" dataKey="user" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorUser)" />
                  <Area type="monotone" dataKey="market" stroke="#94A3B8" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold">Direct Competitors</h3>
              <button className="text-primary text-xs font-bold hover:underline">View Map</button>
            </div>
            <div className="divide-y dark:divide-slate-800">
              {competitors.map((comp) => (
                <div key={comp.name} className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition cursor-pointer group">
                  <img src={comp.img} className="w-14 h-14 rounded-lg object-cover shadow-sm" alt={comp.name} />
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-bold truncate">{comp.name}</p>
                    <p className="text-xs text-slate-400 truncate">{comp.distance} • {comp.tags}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-black">${comp.price}/night</p>
                    <p className={`text-[10px] font-bold ${comp.occupancy > 80 ? 'text-emerald-500' : comp.occupancy > 50 ? 'text-amber-500' : 'text-rose-500'}`}>
                      {comp.occupancy}% Occupancy
                    </p>
                  </div>
                  <span className="material-icons-round text-slate-300 group-hover:text-primary transition">chevron_right</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-3 border-t dark:border-slate-800">
              <button className="text-primary text-xs font-black uppercase tracking-widest">View all 12 competitors</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorIntelligenceScreen;
