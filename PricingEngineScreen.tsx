
import React, { useState } from 'react';
import { PropertyData } from '../types';

interface Props {
  property: PropertyData;
}

const PricingEngineScreen: React.FC<Props> = ({ property }) => {
  const [sensitivity, setSensitivity] = useState(40);
  const [demandFactor, setDemandFactor] = useState(2.5);
  const [impact, setImpact] = useState('medium');

  const suggestedPrice = Math.round(120 * (1 + (sensitivity / 200) + (demandFactor / 10)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold font-serif leading-7 sm:text-3xl">Configuración de Precios Óptimos</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Define tus costos base y ajusta las variables de la función P(t, d, o) para maximizar ingresos.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4 gap-3">
          <button className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-4 py-2 rounded-md text-sm font-medium">Exportar Análisis</button>
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md text-sm font-medium">Guardar Cambios</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-surface-dark shadow-xl rounded-2xl p-8 border-l-4 border-primary relative overflow-hidden group">
            <h3 className="text-lg font-medium leading-6 mb-6 flex items-center gap-2">
              <span className="material-icons-round text-primary">functions</span>
              Fórmula de Precios Dinámicos
            </h3>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-10 text-center mb-8">
              <p className="text-2xl font-serif italic text-slate-700 dark:text-slate-200">
                El precio no es un número fijo (F), es una función <span className="text-primary font-bold">P(t, d, o)</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition rounded-xl">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg font-mono shrink-0">t</div>
                <div>
                  <p className="font-bold">Tiempo (Booking Window)</p>
                  <p className="text-xs text-slate-500">Días de anticipación a la reserva.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition rounded-xl">
                <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg font-mono shrink-0">d</div>
                <div>
                  <p className="font-bold">Demanda Histórica</p>
                  <p className="text-xs text-slate-500">Feriados vs Normal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition rounded-xl">
                <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg font-mono shrink-0">o</div>
                <div>
                  <p className="font-bold">Ocupación Sector</p>
                  <p className="text-xs text-slate-500">% saturación en la zona.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark shadow-sm rounded-2xl p-8 border border-border-light dark:border-border-dark">
            <h3 className="text-lg font-medium leading-6 mb-8">Parámetros del Modelo</h3>
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-500 mb-2">Precio Base Fijo (F)</label>
              <div className="mt-1 relative rounded-md shadow-sm max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">$</div>
                <input type="number" defaultValue="120" className="pl-7 w-full border-slate-300 dark:border-slate-700 rounded-md bg-transparent" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 text-sm">USD</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t pt-8 dark:border-slate-800">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Sensibilidad al Tiempo (t)</label>
                  <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Moderada</span>
                </div>
                <input type="range" min="0" max="100" value={sensitivity} onChange={(e) => setSensitivity(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-[10px] text-slate-400 mt-2 uppercase font-bold tracking-tight">
                  <span>Last Minute</span>
                  <span>Early Bird</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Multiplicador Demanda (d)</label>
                  <span className="bg-purple-100 text-purple-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Agresivo</span>
                </div>
                <input type="range" min="1" max="5" step="0.1" value={demandFactor} onChange={(e) => setDemandFactor(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                <div className="flex justify-between text-[10px] text-slate-400 mt-2 uppercase font-bold tracking-tight">
                  <span>Estable</span>
                  <span>Variable</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-4">Impacto de Ocupación del Sector (o)</label>
                <div className="flex gap-6">
                  {['low', 'medium', 'high'].map((val) => (
                    <label key={val} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="impact" 
                        checked={impact === val} 
                        onChange={() => setImpact(val)}
                        className="form-radio text-primary focus:ring-primary border-slate-300 dark:border-slate-700 bg-transparent"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors capitalize">
                        {val === 'low' ? 'Conservador' : val === 'medium' ? 'Balanceado' : 'Competitivo'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-surface-dark shadow-2xl rounded-2xl p-8 border border-border-light dark:border-border-dark overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">Precio Sugerido (Hoy)</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-black text-primary font-display">${suggestedPrice}</span>
              <span className="text-xl text-slate-500 font-medium italic">/ noche</span>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-bold mb-8">
              <span className="material-icons-round text-lg">trending_up</span>
              +15% sobre precio base
            </div>
            <div className="space-y-4 pt-6 border-t dark:border-slate-800">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Base (F)</span>
                <span className="font-bold">$120</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Ajuste Tiempo (t)</span>
                <span className="font-bold text-red-500">-$10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Ajuste Demanda (d)</span>
                <span className="font-bold text-emerald-500">+$60</span>
              </div>
              <div className="flex justify-between font-black text-2xl pt-4 border-t-2 border-slate-50 dark:border-slate-800">
                <span>Total</span>
                <span>${suggestedPrice}</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark shadow-sm rounded-2xl p-6 border border-border-light dark:border-border-dark">
            <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">Proyección Mensual</h3>
            <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold text-slate-400 mb-3">
              <div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div><div>D</div>
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer hover:scale-105 ${
                    i < 4 ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700' :
                    i < 8 ? 'bg-emerald-300 dark:bg-emerald-500 text-white shadow-sm' :
                    'bg-amber-300 dark:bg-amber-600 text-white shadow-sm'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-emerald-50 rounded border dark:border-slate-700"></div> Bajo</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-emerald-300 rounded"></div> Medio</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-amber-300 rounded"></div> Alto</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingEngineScreen;
