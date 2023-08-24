import * as React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { FC } from 'react';
import { CodeComponentBlock } from './types';

export const CodeComponent: FC<CodeComponentBlock> = ({ code, language }) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return typeof code !== 'undefined' ? (
    <pre>
      <code className={`language-${language}`}>{code.join('\n')}</code>
    </pre>
  ) : null;
};
