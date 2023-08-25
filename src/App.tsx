import { ComponentBlock, TitleComponent } from './components/';
import { data } from './data/data';
import { isDefined } from './utils/is-defined';
import './style.css';

export default function App() {
  if (!isDefined(data)) {
    return;
  }

  const { titleComponent } = data;

  return (
    <main>
      <div className="hero">
        <div className="hero-inner">
          {isDefined(titleComponent) && <TitleComponent {...titleComponent} />}
        </div>
      </div>
      <div className="contents">
        {isDefined(data) && <ComponentBlock components={data} />}
      </div>
    </main>
  );
}
