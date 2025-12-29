
import React from 'react';
import { PropertyData } from '../types.ts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  property: PropertyData;
  setProperty: (p: PropertyData) => void;
}

const data = [
  { name: 'Ene', ingresos: 12000, costos: 4000 },
  { name: 'Feb', ingresos: 19000, costos: 4500 },
  { name: 'Mar', ingresos: 15000, costos: 4200 },
  { name: 'Abr', ingresos: 8000, costos: 3800 },
  { name: 'May', ingresos: 6000, costos: 3800 },
  { name: 'Jun', ingresos: 9000, costos: 4000 },
];

const DashboardScreen: React.FC<Props> = ({ property, setProperty }) => {
  const handleChange = (field: keyof PropertyData, value: string) => {
    setProperty({ ...property, [field]: Number(value) });
  };

  const salesRequired = (property.targetIncome + property.maintenance) * 1.54; // Mock formula
  const nightsOccupied = 18;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate font-display">
            Análisis de Rentabilidad: {property.name}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Calculadora financiera avanzada para optimización de precios y retornos.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4 gap-3">
          <button className="btn-secondary px-4 py-2 flex items-center gap-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-sm font-medium">
            <span className="material-icons-round text-sm">save</span> Guardar
          </button>
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md shadow-sm text-sm font-medium flex items-center gap-2">
            <span className="material-icons-round text-sm">download</span> Reporte
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Inputs */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
            <h3 className="text-lg font-medium leading-6 mb-4 flex items-center gap-2">
              <span className="material-icons-round text-primary">account_balance_wallet</span>
              Inversión y Costos
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">Valor Propiedad</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-slate-500">$</span>
                  </div>
                  <input
                    type="number"
                    value={property.value}
                    onChange={(e) => handleChange('value', e.target.value)}
                    className="focus:ring-primary focus:border-primary block w-full pl-7 pr-12 sm:text-sm border-slate-300 dark:border-slate-700 rounded-md bg-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 sm:text-sm">USD</div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">Pie (Down Payment 20%)</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="text-slate-500">$</span></div>
                  <input
                    type="number"
                    value={property.downPayment}
                    onChange={(e) => handleChange('downPayment', e.target.value)}
                    className="focus:ring-primary focus:border-primary block w-full pl-7 sm:text-sm border-slate-300 dark:border-slate-700 rounded-md bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">Mantenimiento Mensual</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="text-slate-500">$</span></div>
                  <input
                    type="number"
                    value={property.maintenance}
                    onChange={(e) => handleChange('maintenance', e.target.value)}
                    className="focus:ring-primary focus:border-primary block w-full pl-7 sm:text-sm border-slate-300 dark:border-slate-700 rounded-md bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
            <h3 className="text-lg font-medium leading-6 mb-4 flex items-center gap-2">
              <span className="material-icons-round text-emerald-500">monetization_on</span>
              Meta de Ingresos
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">Ingreso Mensual Deseado</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="text-slate-500">$</span></div>
                <input
                  type="number"
                  value={property.targetIncome}
                  onChange={(e) => handleChange('targetIncome', e.target.value)}
                  className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-7 sm:text-sm border-slate-300 dark:border-slate-700 rounded-md bg-transparent"
                />
              </div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 space-y-3 border border-emerald-100 dark:border-emerald-900/40">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-emerald-300">Ventas Requeridas:</span>
                <span className="font-bold">${salesRequired.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-emerald-300">Noches ocupadas:</span>
                <span className="font-bold">{nightsOccupied} / 30</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-emerald-300">Budget Marketing:</span>
                <span className="font-bold">$450</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content Area */}
        <div className="lg:col-span-8 space-y-8">
          {/* Dynamic Pricing Formula Info */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary opacity-10 rounded-full blur-xl group-hover:scale-110 transition-transform"></div>
            <h3 className="text-lg font-medium leading-6 mb-2 font-display">Motor de Precios Dinámicos</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">El precio óptimo se calcula en tiempo real basado en la función:</p>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-100 dark:border-slate-800 mb-6 text-center">
              <div className="text-3xl font-serif italic text-primary">P(t, d, o)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30 flex items-start gap-3">
                <span className="math-font text-primary font-bold text-xl">t</span>
                <div>
                  <div className="font-semibold text-sm">Booking Window</div>
                  <div className="text-xs text-slate-500">Anticipación</div>
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg border border-purple-100 dark:border-purple-900/30 flex items-start gap-3">
                <span className="math-font text-purple-600 font-bold text-xl">d</span>
                <div>
                  <div className="font-semibold text-sm">Demanda Histórica</div>
                  <div className="text-xs text-slate-500">Feriados vs Normal</div>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
                <span className="math-font text-amber-600 font-bold text-xl">o</span>
                <div>
                  <div className="font-semibold text-sm">Ocupación Sector</div>
                  <div className="text-xs text-slate-500">Saturación zona</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 h-[320px]">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Rentabilidad Proyectada</h4>
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Legend iconType="circle" />
                    <Line type="monotone" dataKey="ingresos" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, fill: '#3B82F6' }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="costos" stroke="#94A3B8" strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Ocupación vs Breakeven</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Ocupación Actual</span>
                    <span className="text-sm font-bold text-primary">65%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)]" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="pt-6 border-t dark:border-slate-800">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Punto de Equilibrio (Breakeven)</span>
                    <span className="text-sm font-bold text-red-500">42%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 relative">
                    <div className="absolute left-[42%] top-0 bottom-0 w-1 bg-red-500 h-5 -mt-1 z-10 rounded-full shadow-md"></div>
                    <div className="bg-slate-400 dark:bg-slate-600 h-3 rounded-full opacity-30" style={{ width: '42%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4 italic">
                    Necesitas al menos 13 días reservados para cubrir costos fijos este mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
