
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DashboardScreen from './screens/DashboardScreen';
import PricingEngineScreen from './screens/PricingEngineScreen';
import CompetitorIntelligenceScreen from './screens/CompetitorIntelligenceScreen';
import OccupancyStrategyScreen from './screens/OccupancyStrategyScreen';
import { Screen, PropertyData } from './types';

const INITIAL_PROPERTY: PropertyData = {
  id: '1',
  name: 'Cabañas del Bosque',
  value: 150000,
  downPayment: 30000,
  maintenance: 500,
  targetIncome: 2500,
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [property, setProperty] = useState<PropertyData>(INITIAL_PROPERTY);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        activeScreen={currentScreen} 
        onNavigate={setCurrentScreen} 
        isDarkMode={isDarkMode} 
        onToggleTheme={toggleTheme} 
      />
      
      <main className="flex-grow">
        {currentScreen === 'dashboard' && (
          <DashboardScreen property={property} setProperty={setProperty} />
        )}
        {currentScreen === 'pricing' && (
          <PricingEngineScreen property={property} />
        )}
        {currentScreen === 'competitors' && (
          <CompetitorIntelligenceScreen />
        )}
        {currentScreen === 'strategy' && (
          <OccupancyStrategyScreen property={property} />
        )}
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© 2024 PropCalc Pro Financial Solutions. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
