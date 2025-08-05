import { useState, useEffect } from 'react';

interface User {
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    loading: true,
  });

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem('auth_token');
    const userString = localStorage.getItem('auth_user');
    
    if (token && userString) {
      try {
        const user = JSON.parse(userString);
        setAuthState({ user, token, loading: false });
      } catch {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        setAuthState({ user: null, token: null, loading: false });
      }
    } else {
      setAuthState({ user: null, token: null, loading: false });
    }
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        return { success: false, error: error.message || 'Login failed' };
      }

      const data = await response.json();
      
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('auth_user', JSON.stringify(data.user));
      
      setAuthState({
        user: data.user,
        token: data.token,
        loading: false,
      });

      return { success: true };
    } catch (_error) { // eslint-disable-line @typescript-eslint/no-unused-vars
      return { success: false, error: 'Network error' };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setAuthState({ user: null, token: null, loading: false });
  };

  const isAuthenticated = !!authState.token && !!authState.user;

  return {
    ...authState,
    login,
    logout,
    isAuthenticated,
  };
}
