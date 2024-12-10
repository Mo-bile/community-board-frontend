import { useState, useEffect, createContext, useContext } from 'react';
import { login as mockLogin } from '../api/mockApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // 실제 구현에서는 토큰 유효성을 확인해야 합니다.
      setUser({ id: localStorage.getItem('userId'), username: 'Mock User' });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const { token, userId } = await mockLogin(username, password);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      setUser({ id: userId, username });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

