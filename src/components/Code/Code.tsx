import * as React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { FC } from 'react';
import { CodeComponentBlock } from './types';
import { isDefined } from '../../utils/is-defined';

export const CodeComponent: FC<CodeComponentBlock> = ({ code, language }) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return isDefined(code) ? (
    <div className="code-block">
      <pre>
        <code className={`language-${language}`}>
          {code ? code.join('\n') : ''}
        </code>
      </pre>
    </div>
  ) : null;
};
