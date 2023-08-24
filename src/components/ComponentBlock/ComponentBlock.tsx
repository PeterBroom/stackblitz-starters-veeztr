import * as React from 'react';
import { FC } from 'react';
import { ComponentBlocks } from './types';
import { CodeComponent, HeadingComponent, MessageComponent } from '../';

interface ComponentBlockProps {
  components: ComponentBlocks;
}

const ComponentBlocks = (components) => {
  const { blocks } = components || {};

  return (
    blocks &&
    blocks.map((block, index) => {
      const key = `key_${block.componentGroup.toLowerCase()}_${index}`;
      switch (block.componentGroup) {
        case 'HEADING_COMPONENT':
          return <HeadingComponent {...block} key={key} />;
        case 'MESSAGE_COMPONENT':
          return <MessageComponent {...block} key={key} />;
        case 'CODE_COMPONENT':
          return <CodeComponent {...block} key={key} />;
        default:
          return null;
      }
    })
  );
};

export const ComponentBlock: FC<ComponentBlockProps> = ({ components }) => {
  return <ComponentBlocks {...components} />;
};
