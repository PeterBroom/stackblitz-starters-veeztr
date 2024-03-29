import { FC } from 'react';
import { ComponentBlocks } from './types';
import { CodeComponent, HeadingComponent, MessageComponent } from '../';
import { isDefined } from '../../utils/is-defined';

const Blocks = (blocks: any) => {
  const { blocks: items } = blocks;
  return (
    items &&
    items.map((block: any, index: number) => {
      const id = `key_${block.componentType.toLowerCase()}_${index}`;
      switch (block.componentType) {
        case 'HEADING_COMPONENT':
          return <HeadingComponent {...block} key={id} />;
        case 'MESSAGE_COMPONENT':
          return <MessageComponent {...block} key={id} />;
        case 'CODE_COMPONENT':
          return <CodeComponent {...block} key={id} />;
        default:
          return undefined;
      }
    })
  );
};

export const ComponentBlock: FC<ComponentBlocks> = (blocks) => {
  return isDefined(blocks) ? <Blocks {...blocks} /> : null;
};
