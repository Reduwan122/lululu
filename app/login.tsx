import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { Ionicons } from '../components/AppIcon';
import { AppIcon } from '../components/AppIcon';
import { useEmployee } from '../context/EmployeeContext';

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const { login } = useEmployee();
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    if (!idNumber.trim() || !password.trim()) {
      setError('Please enter Username or ID Number and Password');
      return;
    }

    setLoading(true);
    try {
      const res = await login(idNumber.trim(), password.trim());
      if (!res.success) {
        setError(res.error || 'Invalid Username or ID Number or Password');
      } else {
        router.replace('/(tabs)');
      }
    } catch (e: any) {
      setError(e.message || 'Login error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    Linking.openURL(
      'https://www.absher.sa/wps/portal/individuals/static/resetpassword/!ut/p/z1/04_iUlDgAgL9CCADyEQmiOToR-UllmWmJ5Zk5ucl5uhH6EdGmcWbOgc4e1r4Ghu6B4SaGxi5mZt4OZt5u4eZGOt76UfhVxCcmqdfkB2oCABWxdmh/'
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={[styles.topBar, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => router.replace('/welcome')}>
          <AppIcon name="arrow-back" size={24} color={colors.accent} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoRow}>
            <AppIcon
              name="business-outline"
              pngKey="logo-1"
              size={126}
              color={colors.accent}
              style={{ width: 47, height: 126 }}
            />
            <AppIcon
              name="apps-outline"
              pngKey="logo-2"
              size={78}
              color={colors.accent}
              style={{ marginLeft: 16 }}
            />
          </View>

          <Text style={styles.title}>Log In to Absher</Text>

          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Username or ID Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Username or ID Number"
              placeholderTextColor={colors.greyText}
              value={idNumber}
              onChangeText={setIdNumber}
              autoCapitalize="none"
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor={colors.greyText}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
            </View>
            <Text style={styles.checkboxLabel}>Keep me logged in</Text>
          </TouchableOpacity>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bottomWrap}>
        <TouchableOpacity
          style={[styles.loginBtn, loading && { opacity: 0.7 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.loginBtnText}>Log In</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const colors = {
  bg: '#F4F6F5',
  card: '#FFFFFF',
  textDark: '#14200D',
  greyText: '#5C6B62',
  accent: '#1E6B4E',
  loginBtn: '#1E6B4E',
  danger: '#C0392B',
  border: '#DDE3DF',
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  topBar: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  content: {
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: colors.textDark,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 28,
  },
  inputBox: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputLabel: {
    color: colors.greyText,
    fontSize: 12,
    marginBottom: 6,
  },
  input: {
    color: colors.textDark,
    fontSize: 16,
    padding: 0,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    marginTop: 4,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  checkboxLabel: {
    color: colors.textDark,
    fontSize: 14,
  },
  errorText: {
    color: colors.danger,
    fontSize: 13,
    marginTop: 16,
    textAlign: 'center',
    lineHeight: 18,
  },
  bottomWrap: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  loginBtn: {
    backgroundColor: colors.loginBtn,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  forgotText: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
