
import React from 'react';
import { PropertyData } from '../types';

interface Props {
  property: PropertyData;
}

const OccupancyStrategyScreen: React.FC<Props> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
          Estrategia de Ocupación
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          Su propiedad "{property.name}" ha estado vacante por más de 14 días. Utilice nuestro modelo dinámico para ajustar su estrategia y maximizar la ocupación.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-icons-round text-primary text-3xl">functions</span>
                <h2 className="text-2xl font-bold">La Lógica del Precio</h2>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 mb-8 border dark:border-slate-800">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-center md:text-left text-slate-600 dark:text-slate-300">
                  El precio no es un número fijo <span className="math-font text-primary font-bold">(F)</span>, es una función dinámica:
                </p>
                <div className="my-10 text-center">
                  <span className="text-4xl md:text-6xl font-serif italic font-bold text-primary">P(t, d, o)</span>
                </div>
                <div className="space-y-6 text-base md:text-lg">
                  <div className="flex items-start gap-4">
                    <span className="font-serif italic text-primary font-bold text-2xl w-8 shrink-0">t</span>
                    <p><span className="font-bold">Tiempo de anticipación:</span> Cuánto antes reservan, el precio se adapta a la ventana de oportunidad.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif italic text-primary font-bold text-2xl w-8 shrink-0">d</span>
                    <p><span className="font-bold">Demanda histórica:</span> Análisis de tendencias en fechas similares (Feriados vs Martes).</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif italic text-primary font-bold text-2xl w-8 shrink-0">o</span>
                    <p><span className="font-bold">Ocupación del sector:</span> Competitividad en tiempo real basada en la oferta circundante.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary p-6 rounded-r-2xl">
                <h4 className="font-bold text-primary text-lg mb-2">Diagnóstico Inteligente</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Actualmente, su variable <span className="font-serif italic">t</span> es baja (reservas de último minuto) y la variable <span className="font-serif italic">o</span> en su zona es alta. Su precio actual está un 25% por encima de la curva de conversión óptima.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-md p-8 border hover:shadow-lg transition cursor-pointer group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-3xl">trending_down</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Flash Sale (48h)</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Reducir precio un 15% para las próximas 48 horas para forzar la reserva inmediata.</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Recomendado</span>
                <button className="text-primary font-bold text-sm">Aplicar →</button>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-md p-8 border hover:shadow-lg transition cursor-pointer group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-3xl">campaign</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Boost de Visibilidad</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Invertir en posicionamiento destacado en plataformas OTA para aumentar el alcance.</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Marketing</span>
                <button className="text-primary font-bold text-sm">Ver Opciones →</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl p-8 border border-border-light">
             <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Métricas en Tiempo Real</h3>
             <div className="space-y-8">
               <div>
                 <div className="flex justify-between items-end mb-2">
                   <span className="text-sm font-bold">Ocupación Sector (o)</span>
                   <span className="font-black text-rose-500">35%</span>
                 </div>
                 <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                   <div className="bg-rose-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                 </div>
                 <p className="text-[10px] text-slate-400 mt-2 font-medium">Baja demanda en la zona esta semana.</p>
               </div>
               <div>
                 <div className="flex justify-between items-end mb-2">
                   <span className="text-sm font-bold">Anticipación Promedio (t)</span>
                   <span className="font-black text-primary">3 días</span>
                 </div>
                 <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                   <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                 </div>
               </div>
             </div>
             
             <div className="mt-10 pt-8 border-t dark:border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-500">Precio Sugerido P</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-emerald-500">$85</span>
                    <span className="text-xs text-slate-400 ml-1">/noche</span>
                  </div>
                </div>
                <div className="flex justify-between items-center opacity-50">
                  <span className="text-xs font-bold text-slate-400 uppercase">Tu precio fijo (F)</span>
                  <span className="text-sm font-bold text-rose-500 line-through">$120</span>
                </div>
             </div>

             <button className="w-full mt-10 bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-primary/30 transition transform active:scale-95 uppercase tracking-widest">
               Actualizar Precio a $85
             </button>
          </div>

          <div className="bg-slate-900 rounded-3xl shadow-xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-3 italic">¿Necesitas ayuda experta?</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Agenda una llamada con un analista de precios para revisar tu estrategia personalizada.</p>
              <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition shadow-lg">
                Agendar Consultoría
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyStrategyScreen;
