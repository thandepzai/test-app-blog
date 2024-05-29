declare module "@editorjs/header" {
  import { BlockToolConstructable } from "@editorjs/editorjs";
  const Header: BlockToolConstructable & {
    sanitize?: {
      level?: boolean;
      text?: {
        b?: boolean;
        a?: {
          href: boolean;
          target: boolean;
        };
        [key: string]: boolean | object;
      };
    };
  };
  export default Header;
}

declare module "@editorjs/list" {
  import { BlockToolConstructable } from "@editorjs/editorjs";
  const List: BlockToolConstructable;
  export default List;
}

declare module "@editorjs/paragraph" {
  import { BlockToolConstructable } from "@editorjs/editorjs";
  const Paragraph: BlockToolConstructable;
  export default Paragraph;
}
declare module "editorjs-paragraph-with-alignment" {
  import { BlockToolConstructable } from "@editorjs/editorjs";
  const Paragraph: BlockToolConstructable;
  export default Paragraph;
}
declare module "editorjs-toggle-block" {
  import { BlockToolConstructable } from "@editorjs/editorjs";
  const ToggleBlock: BlockToolConstructable;
  export default ToggleBlock;
}

declare module '@editorjs/link' {
    import { BlockToolConstructable } from '@editorjs/editorjs';
    const LinkTool: BlockToolConstructable;
    export default LinkTool;
  }
