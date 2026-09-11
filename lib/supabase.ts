import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const supabaseUrl = 'https://iflcprfxckeyjcwafkzl.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmbGNwcmZ4Y2tleWpjd2Fma3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2ODM1MDgsImV4cCI6MjEwMTI1OTUwOH0.NCkomMQWORHW7iWMJdrXafDtedUtIWPo9ysnlyfCSvw';

const isServer = Platform.OS === 'web' && typeof window === 'undefined';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: isServer ? undefined : AsyncStorage,
    autoRefreshToken: !isServer,
    persistSession: !isServer,
    detectSessionInUrl: false,
  },
});

export const EMPLOYEE_EMAIL_DOMAIN = '@jobaid.app';
