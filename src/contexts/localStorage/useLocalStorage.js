import { useContext } from 'react';
import { LocalStorageContext } from './LocalStorageContext';

export const useLocalStorage = () => useContext(LocalStorageContext);