import { ComponentBlocks } from '../components/ComponentBlock/types';

export const data: ComponentBlocks = {
  titleComponent: {
    text: 'Maybe Type Patterns & Type Guards',
    classname: 'title',
  },
  blocks: [
    {
      componentType: 'MESSAGE_COMPONENT',
      text: 'Typescript + React',
    },
    {
      componentType: 'MESSAGE_COMPONENT',
      text: 'This article explores the code used to craft its content, illustrating how "maybe patterns" and "type guards" can mitigate errors in the absence of data.'
    },
    {
      componentType: 'MESSAGE_COMPONENT',
      text: 'Want to see the code used? - https://stackblitz.com/edit/maybe-type-patterns-typescript-react'
    },
    {
      componentType: 'HEADING_COMPONENT',
      classname: 'test-class',
      text: 'Problem statement - "When data is unreliable"',
      tag: 'h2',
    },
    {
      componentType: 'MESSAGE_COMPONENT',
      text: 'The challenge with data lies in its potential unreliability, especially when derived from third-party sources. Data might occasionally yield "null" or "undefined" values, particularly when there are input errors or data has been omitted. This situation could pose  challenges during development unless a thorough approach is taken to fortify the code against such scenarios.',
    },
    {
      componentType: 'HEADING_COMPONENT',
      text: 'Maybe Pattern',
      tag: 'h3',
    },
    {
      componentType: 'MESSAGE_COMPONENT',
      text: 'The "maybe" pattern in TypeScript uses union types with "null" or "undefined" to handle potentially absent values. '
    },{
      componentType: 'MESSAGE_COMPONENT',
      text:'A "maybe" pattern enhances robustness by explicitly handling and indicating the potential absence of values, reducing unexpected errors.',
    },
    {
      componentType: 'HEADING_COMPONENT',
      text: 'For example',
      tag: 'h4',
    },
    {
      componentType: 'CODE_COMPONENT',
      code: [
        '// types/types.ts',
        '',
        'type Maybe<T> = T | null;',
        '',
        'type Scalars = {',
        '  ID: string;',
        '  String: string;',
        '  Boolean: boolean;',
        '  Int: number;',
        '  Float: number;',
        '};',
        '',
        'enum HeadingTags {',
        '  "h1",',
        '  "h2",',
        '  "h3",',
        '  "h4",',
        '}',
        '',
        'type HeadingTag = keyof typeof HeadingTags;',
        '',
        'type HeadingComponentBlock = {',
        '  tag: Maybe<HeadingTag>;',
        '  text: Maybe<Scalars["String"]>;',
        '  classname?: Maybe<Scalars["String"]>;',
        '};',
      ],
      language: 'javascript',
    },
    {
      componentType: 'MESSAGE_COMPONENT',
      text: 'This example allows the "text" and "tag" properties to be either "string" or "null". A null value is useful to then create a "Type Guard" in the component.',
    },
    {
      componentType: 'HEADING_COMPONENT',
      text: 'Type Guard / Type Narrowing Pattern',
      tag: 'h3',
    },
    {
      componentType: 'MESSAGE_COMPONENT',
      text: 'Type narrowing in TypeScript refers to the process of refining the type of a variable within a conditional block, based on runtime checks, leading to more precise type information for that variable.'
    },{
      componentType: 'MESSAGE_COMPONENT',
      text: 'For instance, in front-end development, type narrowing can be employed to determine if the available data is adequate for UI rendering, utilising JavaScripts "typeof" operator within the conditional statement.',
    },
    {
      componentType: 'HEADING_COMPONENT',
      text: 'For example',
      tag: 'h4',
    },
    {
      componentType: 'CODE_COMPONENT',
      code: [
        '// utils/is-defined.ts',
        'export const isDefined = (value: unknown) => {',
        '  return typeof value !== "undefined";',
        '};',
        '',
        '...',
        '',
        '// components/component.tsx',
        '',
        'export const HeadingComponent: FC<HeadingComponentBlock> = ({',
        '  text,',
        '  classname,',
        '  tag,',
        '}) => {',
        '  const tagName = tag ? tag : "h2";',
        '  const attributes = { className: classname };',
        '  return isDefined(text) ? createElement(tagName, attributes, text) : null;',
        '};,',
      ],
      language: 'javascript',
    },
    {
      componentType: 'MESSAGE_COMPONENT',
      text: 'In this case if the data specified is absent (in other words "undefined") the component will be prevented from rendering unless sufficient data is provided.',
    },
  ],
};
