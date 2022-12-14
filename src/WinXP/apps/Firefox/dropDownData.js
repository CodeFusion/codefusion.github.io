export const File = [
  {
    type: 'item',
    text: 'New Window',
    hotkey: 'Ctrl+N',
  },
  {
    type: 'item',
    text: 'Open Location',
    hotkey: 'Ctrl+L',
  },
  {
    type: 'item',
    text: 'Open File...',
    hotkey: 'Ctrl+T',
    disable: true,
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    disable: true,
    text: 'Save Page As...',
    hotkey: 'Ctrl+S',
  },
  {
    type: 'item',
    text: 'Send Link...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Page Setup...',
  },
  {
    type: 'item',
    text: 'Print Preview...',
  },
  {
    type: 'item',
    text: 'Print...',
    hotkey: 'Ctrl+P',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Import...',
    disable: true,
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Work Offline',
  },
  {
    type: 'item',
    text: 'Exit',
  },
];

const Edit = [
  {
    type: 'item',
    text: 'Undo',
    disable: true,
    hotkey: 'Ctrl+Z',
  },
  {
    type: 'item',
    text: 'Redo',
    disable: true,
    hotkey: 'Ctrl+Y',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    disable: true,
    text: 'Cut',
    hotkey: 'Ctrl+X',
  },
  {
    type: 'item',
    disable: true,
    text: 'Copy',
    hotkey: 'Ctrl+C',
  },
  {
    type: 'item',
    disable: true,
    text: 'Paste',
    hotkey: 'Ctrl+V',
  },
  {
    type: 'item',
    text: 'Delete',
    disable: true,
    hotkey: 'Del',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Select All',
    hotkey: 'Ctrl+A',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Find',
    hotkey: 'Ctrl+F',
  },
  {
    type: 'item',
    text: 'Find Again',
    hotkey: 'Ctrl+G',
  },
];

const View = [
  {
    type: 'menu',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    text: 'Toolbars',
    items: [
      {
        type: 'item',
        symbol: 'check',
        text: 'Navigation Toolbar',
      },
      {
        type: 'item',
        symbol: 'check',
        text: 'Bookmarks Toolbar',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Customize',
      },
    ],
  },
  {
    type: 'item',
    symbol: 'check',
    text: 'Status Bar',
  },
  {
    type: 'menu',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    text: 'Sidebar',
    items: [
      {
        type: 'item',
        text: 'Bookmarks',
        hotkey: 'Ctrl+B',
      },
      {
        type: 'item',
        text: 'History',
        hotkey: 'Ctrl+H',
      },
    ],
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Stop',
    hotkey: 'Esc',
  },
  {
    type: 'item',
    text: 'Reload',
    hotkey: 'Ctrl+R',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    text: 'Zoom',
    items: [
      {
        type: 'item',
        text: 'Zoom In',
        hotkey: 'Ctrl+ +',
      },
      {
        type: 'item',
        text: 'Zoom Out',
        hotkey: 'Ctrl+ -',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Reset',
        hotkey: 'Ctrl+0',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Zoom Text Only',
      },
    ],
  },
  {
    type: 'menu',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    text: 'Character Encoding',
    items: [
      {
        type: 'item',
        text: 'Western (ISO-8859-1)',
      },
      {
        type: 'item',
        text: 'Unicode (UTF-8)',
        symbol: 'circle',
      },
    ],
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Page Source',
    hotkey: 'Ctrl+U',
  },
  {
    type: 'item',
    text: 'Full Screen',
    hotkey: 'F11',
  },
];
const History = [
  {
    type: 'item',
    text: 'Back',
    hotkey: 'Alt+Left Arrow',
  },
  {
    type: 'item',
    text: 'Forward',
    hotkey: 'Alt+Right Arrow',
  },
  {
    type: 'item',
    text: 'Home',
    hotkey: 'Alt+Home',
  },
  {
    type: 'item',
    text: 'Show All History...',
    hotkey: 'Ctrl+Shift+H',
  },
];
const Bookmarks = [
  {
    type: 'item',
    text: 'Bookmark This Page',
    hotkey: 'Ctrl+D',
  },
  {
    type: 'item',
    text: 'Subscribe to This Page',
  },
  {
    type: 'item',
    text: 'Oraganize Bookmarks...',
    hotkey: 'Ctrl+D',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Example Bookmark',
    symbol: 'ff-paper',
  },
];
const Tools = [
  {
    type: 'item',
    text: 'Web Search',
    hotkey: 'Ctrl+K',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Downloads',
    hotkey: 'Ctrl+J',
  },
  {
    type: 'item',
    text: 'Add-ons',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Error Console',
    hotkey: 'Ctrl+Shift+J',
  },
  {
    type: 'item',
    text: 'Page Info',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Clear Private Data...',
    hotkey: 'Ctrl+Shift+Del',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Options...',
  },
];
const Help = [
  {
    type: 'item',
    text: 'Help Contents',
    hotkey: 'F1',
  },
  {
    type: 'item',
    text: 'For Internet Explorer Users',
  },
  {
    type: 'item',
    text: 'Release Notes',
  },
  {
    type: 'item',
    text: 'Report Broken Web Site...',
  },
  {
    type: 'item',
    text: 'Report Web Forgery...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Check For Updates...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'About Mozilla Firefox',
  },
];
export default { File, Edit, View, History, Bookmarks, Tools, Help };
