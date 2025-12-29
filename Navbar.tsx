
import React from 'react';
import { Screen } from '../types';

interface NavbarProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeScreen, onNavigate, isDarkMode, onToggleTheme }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'pricing', label: 'Pricing Engine' },
    { id: 'competitors', label: 'Competitor Analysis' },
    { id: 'strategy', label: 'Estrategia' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-border-light dark:border-border-dark shadow-sm backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('dashboard')}>
              <span className="material-icons-round text-primary text-3xl">analytics</span>
              <span className="font-display font-bold text-xl tracking-tight hidden sm:block">PropCalc<span className="text-primary">.pro</span></span>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as Screen)}
                  className={`${
                    activeScreen === item.id
                      ? 'border-primary text-slate-900 dark:text-white'
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-icons-round">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium hidden md:block">Juan Pérez</span>
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                JP
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="sm:hidden flex justify-around border-t dark:border-slate-800 overflow-x-auto py-2 px-4 bg-white dark:bg-surface-dark">
         {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as Screen)}
              className={`${
                activeScreen === item.id ? 'text-primary' : 'text-slate-400'
              } flex flex-col items-center gap-1 text-[10px] font-medium min-w-[64px]`}
            >
              <span className="material-icons-round text-lg">
                {item.id === 'dashboard' ? 'dashboard' : item.id === 'pricing' ? 'trending_up' : item.id === 'competitors' ? 'groups' : 'auto_fix_high'}
              </span>
              {item.label}
            </button>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
