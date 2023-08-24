import * as React from 'react';
import { ComponentBlocks, ComponentBlock, TitleComponent } from './components/';
import { data } from './data/data';
import './style.css';

export default function App() {
  if (typeof data === 'undefined') return;

  const { titleComponent } = data || {};

  return (
    <main>
      {typeof titleComponent !== 'undefined' && (
        <TitleComponent {...titleComponent} />
      )}
      {typeof data !== 'undefined' && <ComponentBlock components={data} />}
    </main>
  );
}
