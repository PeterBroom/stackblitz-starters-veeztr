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
      {isDefined(titleComponent) && <TitleComponent {...titleComponent} />}
      {isDefined(data) && <ComponentBlock components={data} />}
    </main>
  );
}
