const fs = require('fs');
const opentype = require('opentype.js');

const font = opentype.parse(fs.readFileSync('./android/app/src/main/assets/fonts/Ionicons.ttf').buffer);
const ionicons = JSON.parse(fs.readFileSync('./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json'));

const mapping = [
  { exportName: 'HeaderSearchIcon', glyph: 'search-outline', defaultSize: 22, defaultColor: '#1E6B4E' },
  { exportName: 'HeaderSettingsIcon', glyph: 'settings-outline', defaultSize: 22, defaultColor: '#1E6B4E' },
  { exportName: 'HeaderNotificationsIcon', glyph: 'notifications-outline', defaultSize: 22, defaultColor: '#1E6B4E' },
  { exportName: 'QuickVehiclesIcon', glyph: 'car-sport-outline', defaultSize: 26, defaultColor: '#1E6B4E' },
  { exportName: 'QuickFingerprintIcon', glyph: 'finger-print-outline', defaultSize: 26, defaultColor: '#1E6B4E' },
  { exportName: 'QuickTravelIcon', glyph: 'map-outline', defaultSize: 26, defaultColor: '#1E6B4E' },
  { exportName: 'QuickAccidentCarIcon', glyph: 'car-sport-outline', defaultSize: 26, defaultColor: '#1E6B4E' },
  { exportName: 'QuickUserCircleIcon', glyph: 'person-circle-outline', defaultSize: 26, defaultColor: '#1E6B4E' },
  { exportName: 'ChatDotsIcon', glyph: 'chatbubble-ellipses', defaultSize: 24, defaultColor: '#FFFFFF' },
  { exportName: 'IconUniversalAccess', glyph: 'accessibility-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconCreditCard', glyph: 'card-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconGlobe', glyph: 'globe-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconClock', glyph: 'time-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconCube', glyph: 'cube-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconSquareCheck', glyph: 'checkbox-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconHeart', glyph: 'heart-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconFileLines', glyph: 'document-text-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconMobileScreen', glyph: 'phone-portrait-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconCheckDouble', glyph: 'checkmark-done-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconBuilding', glyph: 'business-outline', defaultSize: 26, defaultColor: '#23A365' },
  { exportName: 'IconLayerGroup', glyph: 'layers-outline', defaultSize: 18, defaultColor: '#8E9590' },
  { exportName: 'IconPencil', glyph: 'pencil-outline', defaultSize: 16, defaultColor: '#23A365' },
  { exportName: 'IconEmptyPeople', glyph: 'people-outline', defaultSize: 68, defaultColor: '#8E9590' }
];

let output = '';

mapping.forEach(m => {
  const code = ionicons[m.glyph];
  const glyph = font.charToGlyph(String.fromCharCode(code));
  const path = glyph.getPath(0, 512, 512);
  const d = path.toPathData(2);
  output += `// ${m.exportName}: 100% Authentic Ionicons (${m.glyph})\n`;
  output += `export const ${m.exportName} = ({ size = ${m.defaultSize}, color = '${m.defaultColor}', ...props }: ExtractedIconProps) => (\n`;
  output += `  <Svg width={size} height={size} viewBox="0 0 512 512" fill={color} {...props}>\n`;
  output += `    <Path d="${d}" />\n`;
  output += `  </Svg>\n`;
  output += `);\n\n`;
});

fs.writeFileSync('./scripts/generated_icons_snippet.txt', output, 'utf8');
console.log('Successfully generated snippet with', mapping.length, 'icons!');
