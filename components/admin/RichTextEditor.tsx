'use client';

import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { TableKit } from '@tiptap/extension-table';
import { TextStyleKit } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import {
  Bold, Italic, Underline, Strikethrough, Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code, Link2, ImagePlus, Undo, Redo,
  Table2, Palette, Highlighter, Trash2,
  ArrowRightToLine, ArrowDownToLine, Columns3, Rows3,
} from 'lucide-react';

const TEXT_COLORS = ['#f59e0b', '#ef4444', '#22c55e', '#38bdf8', '#a855f7', '#e2e8f0'];
const HIGHLIGHT_COLORS = ['#fde68a', '#fecaca', '#bbf7d0', '#bae6fd', '#e9d5ff'];

function ToolbarButton({
  onClick,
  active,
  disabled,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`p-2 rounded-sm transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
        active ? 'bg-[#f59e0b] text-slate-950' : 'text-slate-300 hover:bg-slate-800'
      }`}
    >
      {children}
    </button>
  );
}

function ColorSwatchPicker({
  icon,
  title,
  colors,
  active,
  onPick,
  onClear,
}: {
  icon: React.ReactNode;
  title: string;
  colors: string[];
  active: boolean;
  onPick: (color: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="relative group">
      <ToolbarButton title={title} active={active} onClick={() => {}}>
        {icon}
      </ToolbarButton>
      <div className="hidden group-focus-within:flex group-hover:flex absolute z-20 top-full left-0 mt-1 items-center gap-1 p-1.5 rounded-sm bg-[#0b1329] border border-slate-800 shadow-xl">
        {colors.map((c) => (
          <button
            key={c}
            type="button"
            title={c}
            onClick={() => onPick(c)}
            className="w-5 h-5 rounded-full border border-white/20 cursor-pointer"
            style={{ backgroundColor: c }}
          />
        ))}
        <button
          type="button"
          title="Clear"
          onClick={onClear}
          className="w-5 h-5 rounded-full border border-slate-600 bg-transparent text-slate-400 text-[9px] flex items-center justify-center cursor-pointer"
        >
          ×
        </button>
      </div>
    </div>
  );
}

function TableToolbar({ editor }: { editor: Editor }) {
  if (!editor.isActive('table')) return null;

  return (
    <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-slate-800 bg-[#0b1329]">
      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase px-1.5">Table</span>
      <ToolbarButton title="Add column after" onClick={() => editor.chain().focus().addColumnAfter().run()}>
        <Columns3 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Add row after" onClick={() => editor.chain().focus().addRowAfter().run()}>
        <Rows3 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Delete column" onClick={() => editor.chain().focus().deleteColumn().run()}>
        <ArrowRightToLine className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Delete row" onClick={() => editor.chain().focus().deleteRow().run()}>
        <ArrowDownToLine className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Delete table" onClick={() => editor.chain().focus().deleteTable().run()}>
        <Trash2 className="w-4 h-4" />
      </ToolbarButton>
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Link URL', previousUrl ?? 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt('Image URL');
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  };

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  return (
    <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-slate-800 bg-[#070d1e]">
      <ToolbarButton title="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Italic className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <Underline className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}>
        <Strikethrough className="w-4 h-4" />
      </ToolbarButton>

      <div className="w-px h-5 bg-slate-800 mx-1" />

      <ColorSwatchPicker
        icon={<Palette className="w-4 h-4" />}
        title="Text color"
        colors={TEXT_COLORS}
        active={editor.isActive('textStyle')}
        onPick={(c) => editor.chain().focus().setColor(c).run()}
        onClear={() => editor.chain().focus().unsetColor().run()}
      />
      <ColorSwatchPicker
        icon={<Highlighter className="w-4 h-4" />}
        title="Highlight"
        colors={HIGHLIGHT_COLORS}
        active={editor.isActive('highlight')}
        onPick={(c) => editor.chain().focus().setHighlight({ color: c }).run()}
        onClear={() => editor.chain().focus().unsetHighlight().run()}
      />

      <div className="w-px h-5 bg-slate-800 mx-1" />

      <ToolbarButton title="Heading 1" active={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
        <Heading1 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        <Heading2 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        <Heading3 className="w-4 h-4" />
      </ToolbarButton>

      <div className="w-px h-5 bg-slate-800 mx-1" />

      <ToolbarButton title="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <List className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <ListOrdered className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Blockquote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        <Quote className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Code block" active={editor.isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        <Code className="w-4 h-4" />
      </ToolbarButton>

      <div className="w-px h-5 bg-slate-800 mx-1" />

      <ToolbarButton title="Insert link" active={editor.isActive('link')} onClick={addLink}>
        <Link2 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Insert image" onClick={addImage}>
        <ImagePlus className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Insert table" onClick={insertTable}>
        <Table2 className="w-4 h-4" />
      </ToolbarButton>

      <div className="w-px h-5 bg-slate-800 mx-1" />

      <ToolbarButton title="Undo" disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>
        <Undo className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Redo" disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>
        <Redo className="w-4 h-4" />
      </ToolbarButton>
    </div>
  );
}

export function RichTextEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false, autolink: true, defaultProtocol: 'https' },
      }),
      Image,
      Placeholder.configure({ placeholder: 'Start writing your post...' }),
      TableKit.configure({ table: { resizable: false } }),
      TextStyleKit.configure({ backgroundColor: false, fontFamily: false, fontSize: false, lineHeight: false }),
      Highlight.configure({ multicolor: true }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          'prose prose-invert prose-sm sm:prose-base max-w-none focus:outline-none min-h-[400px] px-4 py-4 [&_a]:text-[#f59e0b] [&_table]:border-collapse [&_td]:border [&_td]:border-slate-700 [&_td]:p-2 [&_th]:border [&_th]:border-slate-700 [&_th]:p-2 [&_th]:bg-slate-800',
      },
    },
  });

  if (!editor) {
    return <div className="min-h-[440px] bg-[#0b1329] border border-slate-800 rounded-sm animate-pulse" />;
  }

  return (
    <div className="bg-[#0b1329] border border-slate-800 rounded-sm overflow-hidden">
      <Toolbar editor={editor} />
      <TableToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
