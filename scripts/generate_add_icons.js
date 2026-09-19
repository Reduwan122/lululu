const fs = require('fs');
const opentype = require('opentype.js');

const font = opentype.parse(fs.readFileSync('./android/app/src/main/assets/fonts/Ionicons.ttf').buffer);
const ionicons = JSON.parse(fs.readFileSync('./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json'));

const addList = [
  { exportName: 'IconCopy', glyph: 'copy-outline', defaultSize: 18, defaultColor: '#8E9590' },
  { exportName: 'IconPerson', glyph: 'person-outline', defaultSize: 22, defaultColor: '#8E9590' },
  { exportName: 'IconMoon', glyph: 'moon-outline', defaultSize: 22, defaultColor: '#8E9590' },
  { exportName: 'IconClose', glyph: 'close', defaultSize: 24, defaultColor: '#101412' },
  { exportName: 'IconArrowBack', glyph: 'arrow-back', defaultSize: 24, defaultColor: '#FFFFFF' },
  { exportName: 'IconChevronForward', glyph: 'chevron-forward', defaultSize: 18, defaultColor: '#8E9590' },
  { exportName: 'IconChevronDown', glyph: 'chevron-down', defaultSize: 18, defaultColor: '#8E9590' },
  { exportName: 'IconChevronUp', glyph: 'chevron-up', defaultSize: 18, defaultColor: '#8E9590' }
];

let res = '';
addList.forEach(m => {
  const code = ionicons[m.glyph];
  const glyph = font.charToGlyph(String.fromCharCode(code));
  const path = glyph.getPath(0, 512, 512);
  const d = path.toPathData(2);
  res += `// ${m.exportName}: 100% Authentic Ionicons (${m.glyph})\n`;
  res += `export const ${m.exportName} = ({ size = ${m.defaultSize}, color = '${m.defaultColor}', ...props }: ExtractedIconProps) => (\n`;
  res += `  <Svg width={size} height={size} viewBox="0 0 512 512" fill={color} {...props}>\n`;
  res += `    <Path d="${d}" />\n`;
  res += `  </Svg>\n`;
  res += `);\n\n`;
});

// Kaaba SVG
res += `// IconKaaba: Authentic Outline Kaaba\n`;
res += `export const IconKaaba = ({ size = 22, color = '#8E9590', ...props }: ExtractedIconProps) => (\n`;
res += `  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>\n`;
res += `    <Rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth={1.8} />\n`;
res += `    <Path d="M3 8h18M3 10h18M10 21v-7h4v7" stroke={color} strokeWidth={1.5} />\n`;
res += `  </Svg>\n`;
res += `);\n\n`;

fs.writeFileSync('./scripts/add_snippet.txt', res, 'utf8');
console.log('scripts/add_snippet.txt successfully written!');

