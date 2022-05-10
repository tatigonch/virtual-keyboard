const keys = {};
const keyPart = document.createDocumentFragment();
const keyLayout = [
    [{
        code: 'Backquote',
        func: false,
        lang: { en: '`', ru: 'ё' },
        width: 'regular',
      },
      {
        code: 'Digit1',
        func: false,
        lang: { en: '1', ru: '1' },
        width: 'regular',
      },
      {
        code: 'Digit2',
        func: false,
        lang: { en: '2', ru: '2' },
        width: 'regular',
      },
      {
        code: 'Digit3',
        func: false,
        lang: { en: '3', ru: '3' },
        width: 'regular',
      },
      {
        code: 'Digit4',
        func: false,
        lang: { en: '4', ru: '4' },
        width: 'regular',
      },
      {
        code: 'Digit5',
        func: false,
        lang: { en: '5', ru: '5' },
        width: 'regular',
      },
      {
        code: 'Digit6',
        func: false,
        lang: { en: '6', ru: '6' },
        width: 'regular',
      },
      {
        code: 'Digit7',
        func: false,
        lang: { en: '7', ru: '7' },
        width: 'regular',
      },
      {
        code: 'Digit8',
        func: false,
        lang: { en: '8', ru: '8' },
        width: 'regular',
      },
      {
        code: 'Digit9',
        func: false,
        lang: { en: '9', ru: '9' },
        width: 'regular',
      },
      {
        code: 'Digit0',
        func: false,
        lang: { en: '0', ru: '0' },
        width: 'regular',
      },
      {
        code: 'Minus',
        func: false,
        lang: { en: '-', ru: '-' },
        width: 'regular',
      },
      {
        code: 'Equal',
        func: false,
        lang: { en: '=', ru: '=' },
        width: 'regular',
      },
      {
        code: 'Backspace',
        func: true,
        lang: { en: '⌫ Back', ru: '⌫ Back' },
        width: 'Bigger',
      },
    ],
    [
      {
        code: 'Tab',
        func: true,
        lang: { en: '↹ Tab', ru: '↹ Tab' },
        width: 'Big',
      },
      {
        code: 'KeyQ',
        func: false,
        lang: { en: 'q', ru: 'й' },
        width: 'regular',
      },
      {
        code: 'KeyW',
        func: false,
        lang: { en: 'w', ru: 'ц' },
        width: 'regular',
      },
      {
        code: 'KeyE',
        func: false,
        lang: { en: 'e', ru: 'у' },
        width: 'regular',
      },
      {
        code: 'KeyR',
        func: false,
        lang: { en: 'r', ru: 'к' },
        width: 'regular',
      },
      {
        code: 'KeyT',
        func: false,
        lang: { en: 't', ru: 'е' },
        width: 'regular',
      },
      {
        code: 'KeyY',
        func: false,
        lang: { en: 'y', ru: 'н' },
        width: 'regular',
      },
      {
        code: 'KeyU',
        func: false,
        lang: { en: 'u', ru: 'г' },
        width: 'regular',
      },
      {
        code: 'KeyI',
        func: false,
        lang: { en: 'i', ru: 'ш' },
        width: 'regular',
      },
      {
        code: 'KeyO',
        func: false,
        lang: { en: 'o', ru: 'щ' },
        width: 'regular',
      },
      {
        code: 'KeyP',
        func: false,
        lang: { en: 'p', ru: 'з' },
        width: 'regular',
      },
      {
        code: 'BracketLeft',
        func: false,
        lang: { en: '[', ru: 'х' },
        width: 'regular',
      },
      {
        code: 'BracketRight',
        func: false,
        lang: { en: ']', ru: 'ъ' },
        width: 'regular',
      },
      {
        code: 'Backslash',
        func: false,
        lang: { en: '\\', ru: '\\' },
        width: 'regular',
      },
      {
        code: 'Delete',
        func: true,
        lang: { en: 'Del', ru: 'Del' },
        width: 'regular',
      },
    ],
    [
      {
        code: 'CapsLock',
        func: true,
        lang: { en: 'Caps Lock', ru: 'Caps Lock' },
        width: 'Bigger',
      },
      {
        code: 'KeyA',
        func: false,
        lang: { en: 'a', ru: 'ф' },
        width: 'regular',
      },
      {
        code: 'KeyS',
        func: false,
        lang: { en: 's', ru: 'ы' },
        width: 'regular',
      },
      {
        code: 'KeyD',
        func: false,
        lang: { en: 'd', ru: 'в' },
        width: 'regular',
      },
      {
        code: 'KeyF',
        func: false,
        lang: { en: 'f', ru: 'а' },
        width: 'regular',
      },
      {
        code: 'KeyG',
        func: false,
        lang: { en: 'g', ru: 'п' },
        width: 'regular',
      },
      {
        code: 'KeyH',
        func: false,
        lang: { en: 'h', ru: 'р' },
        width: 'regular',
      },
      {
        code: 'KeyJ',
        func: false,
        lang: { en: 'j', ru: 'о' },
        width: 'regular',
      },
      {
        code: 'KeyK',
        func: false,
        lang: { en: 'k', ru: 'л' },
        width: 'regular',
      },
      {
        code: 'KeyL',
        func: false,
        lang: { en: 'l', ru: 'д' },
        width: 'regular',
      },
      {
        code: 'Semicolon',
        func: false,
        lang: { en: ';', ru: 'ж' },
        width: 'regular',
      },
      {
        code: 'Quote',
        func: false,
        lang: { en: "'", ru: 'э' },
        width: 'regular',
      },
      {
        code: 'Enter',
        func: true,
        lang: { en: '↩ Enter', ru: '↩ Enter' },
        width: 'Bigger',
      },
    ],
    [
      {
        code: 'ShiftLeft',
        func: true,
        lang: { en: '⇧ Shift', ru: '⇧ Shift' },
        width: 'Bigger',
      },
      {
        code: 'IntlBackslash',
        func: false,
        lang: { en: '\\', ru: '\\' },
        width: 'regular',
      },
      {
        code: 'KeyZ',
        func: false,
        lang: { en: 'z', ru: 'я' },
        width: 'regular',
      },
      {
        code: 'KeyX',
        func: false,
        lang: { en: 'x', ru: 'ч' },
        width: 'regular',
      },
      {
        code: 'KeyC',
        func: false,
        lang: { en: 'c', ru: 'с' },
        width: 'regular',
      },
      {
        code: 'KeyV',
        func: false,
        lang: { en: 'v', ru: 'м' },
        width: 'regular',
      },
      {
        code: 'KeyB',
        func: false,
        lang: { en: 'b', ru: 'и' },
        width: 'regular',
      },
      {
        code: 'KeyN',
        func: false,
        lang: { en: 'n', ru: 'т' },
        width: 'regular',
      },
      {
        code: 'KeyM',
        func: false,
        lang: { en: 'm', ru: 'ь' },
        width: 'regular',
      },
      {
        code: 'Comma',
        func: false,
        lang: { en: ',', ru: 'б' },
        width: 'regular',
      },
      {
        code: 'Period',
        func: false,
        lang: { en: '.', ru: 'ю' },
        width: 'regular',
      },
      {
        code: 'Slash',
        func: false,
        lang: { en: '/', ru: '.' },
        width: 'regular',
      },
      {
        code: 'ArrowUp',
        func: true,
        lang: { en: '⯅', ru: '⯅' },
        width: 'regular',
      },
      {
        code: 'ShiftRight',
        func: true,
        lang: { en: '⇧ Shift', ru: '⇧ Shift' },
        width: 'Bigger',
      },
    ],
    [
      {
        code: 'ControlLeft',
        func: true,
        lang: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'Big',
      },
      {
        code: 'MetaLeft',
        func: true,
        lang: { en: 'Win', ru: 'Win' },
        width: 'regular',
      },
      {
        code: 'AltLeft',
        func: true,
        lang: { en: 'Alt', ru: 'Alt' },
        width: 'regular',
      },
      {
        code: 'Space',
        func: false,
        lang: { en: ' ', ru: ' ' },
        width: 'Space',
      },
      {
        code: 'AltRight',
        func: true,
        lang: { en: 'Alt', ru: 'Alt' },
        width: 'regular',
      },
      {
        code: 'ControlRight',
        func: true,
        lang: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'Big',
      },
      {
        code: 'ArrowLeft',
        func: true,
        lang: { en: '⯇', ru: '⯇' },
        width: 'regular',
      },
      {
        code: 'ArrowDown',
        func: true,
        lang: { en: '⯆', ru: '⯆' },
        width: 'regular',
      },
      {
        code: 'ArrowRight',
        func: true,
        lang: { en: '⯈', ru: '⯈' },
        width: 'regular',
      },
    ],
  ];

keyLayout.forEach( ( item ) => {
  const row = document.createElement('div');
  row.classList.add('row');
  item.forEach( ( key ) => {
    keys[key.code] = key.lang;
    keys[key.code].func = key.func;
    const currentKey = document.createElement('button');
    currentKey.setAttribute('type', 'button');
    currentKey.setAttribute('id', key.code);
    currentKey.textContent = key.lang.en;
    currentKey.classList.add('key');
    currentKey.classList.add(`key${key.width}`);
    row.appendChild(currentKey);
   } 
  );
  keyPart.appendChild(row);
 }
);

export { keyPart, keys };