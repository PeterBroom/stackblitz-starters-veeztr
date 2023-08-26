import { FC } from 'react';
import { ComponentBlocks } from './types';
import {
  CodeComponent,
  DemoComponent,
  HeadingComponent,
  MessageComponent,
} from '../';
import { isDefined } from '../../utils/is-defined';

interface ComponentBlockProps {
  components: ComponentBlocks;
}

const Blocks = (components: any) => {
  const { blocks } = components;

  return (
    blocks &&
    blocks.map((block: any, index: number) => {
      const id = `key_${block.componentType.toLowerCase()}_${index}`;
      switch (block.componentType) {
        case 'HEADING_COMPONENT':
          return <HeadingComponent {...block} key={id} />;
        case 'MESSAGE_COMPONENT':
          return <MessageComponent {...block} key={id} />;
        case 'CODE_COMPONENT':
          return <CodeComponent {...block} key={id} />;
        case 'Demo_COMPONENT':
          return <DemoComponent {...block} key={id} />;
        default:
          return null;
      }
    })
  );
};

export const ComponentBlock: FC<ComponentBlockProps> = ({ components }) => {
  return isDefined(components) ? <Blocks {...components} /> : null;
};
