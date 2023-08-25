import { ComponentBlocks } from '../components/ComponentBlock/types';

export const data: ComponentBlocks = {
  titleComponent: {
    text: 'Maybe Type Patterns & Type Guards',
    classname: 'title',
  },
  blocks: [
    {
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'Typescript + React',
    },
    {
      componentGroup: 'HEADING_COMPONENT',
      classname: 'test-class',
      text: 'When data is unreliable',
      tag: 'h2',
    },
    {
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'The problem with data is that it can sometimes be unreliable for instance if the source is third party. Data can somtimes unexpectedly return a null or undefined value if say something hasnt been inputed correctly. This can be problematic for development without a verbose approach to keeping the code guarded against such scenarios.',
    },
    {
      componentGroup: 'HEADING_COMPONENT',
      text: 'Maybe Pattern',
      tag: 'h3',
    },
    {
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'The Maybe Pattern allows for the option of a null values so we are not going to hit a wall.',
    },
    {
      componentGroup: 'HEADING_COMPONENT',
      text: 'For example',
      tag: 'h4',
    },
    {
      componentGroup: 'CODE_COMPONENT',
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
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'This example allows the "text" and "tag" properties to be either "string" or "null". A null value is useful to then create a Type Guard in the component.',
    },
    {
      componentGroup: 'HEADING_COMPONENT',
      text: 'Type Guard / Type Narrowing Pattern',
      tag: 'h3',
    },
    {
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'Type Narrowing can be used to observe if data is sufficient to render a component. By making use of Javascripts "typeof" operator variables can be checked against their type.',
    },
    {
      componentGroup: 'HEADING_COMPONENT',
      text: 'For example',
      tag: 'h4',
    },
    {
      componentGroup: 'CODE_COMPONENT',
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
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'In this case specified the variables with a value of "undefined" prevent rendering of the component unless it has sufficient data to do so.',
    },
  ],
};
