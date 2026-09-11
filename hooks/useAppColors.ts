import { useColorScheme } from 'react-native';
import { AppTheme, ThemeColors } from '../constants/Theme';

export function useAppColors(): ThemeColors & { scheme: 'light' | 'dark' } {
  const scheme = useColorScheme() ?? 'dark';
  return {
    scheme: scheme as 'light' | 'dark',
    ...AppTheme[scheme === 'light' ? 'light' : 'dark'],
  };
}
