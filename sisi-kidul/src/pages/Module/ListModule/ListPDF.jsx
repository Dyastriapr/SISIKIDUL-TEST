import React from 'react';

const ListModule = ({ onModuleClick, activeModuleId }) => {
  const modules = [
    { id: 1, title: 'Modul 1' },
    { id: 2, title: 'Modul 2' },
    { id: 3, title: 'Modul 3' },
    { id: 4, title: 'Modul 4' },
    { id: 5, title: 'Modul 5' },
    { id: 6, title: 'Quiz' },
  ];

  return (
    <div className='flex flex-col top-0 left-0 w-full z-10 mt-20 border-2 p-5 rounded-lg'>
      <div className='flex justify-center space-x-2'>
        <p className="text-base mb-5 text-custom-Primary font-bold">Modul Belajar</p>
      </div>
      <div>
        <ul>
          {modules.map(module => (
            <button 
              key={module.id} 
              className={`text-base mb-2 flex flex-col border-b-2 p-2 w-full ${module.id === activeModuleId ? 'bg-custom-Primary text-white' : ''}`} 
              onClick={() => onModuleClick(module.id, module.title)}
            >
              {module.title}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListModule;
