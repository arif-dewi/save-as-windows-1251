import iconv from 'pika-iconv-lite';
import saveAs from 'save-as';

const byteArrayWin1251 = iconv.encode(
  `<?xml version="1.0" encoding="windows-1251"?>
  <note>
    <to>Михаил</to>
    <from>Андрей</from>
    <heading>Reminder</heading>
    <body>Вот такая вот xml! И сохранюсь я как win-1251</body>
  </note>`,
  'win1251'
);
const blob = new Blob([byteArrayWin1251], { type: 'application/xml;charset=windows-1251' })
saveAs(blob, 'myxml.xml');