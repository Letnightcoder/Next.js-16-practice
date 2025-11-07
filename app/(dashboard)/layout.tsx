import React from 'react'

const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div>
      <h2 className="text-2xl">Dashboard Navbar</h2>
      {children}
      <h2 className="text-2xl">Dashboard Footer</h2>
    </div>
  );
}

export default layout