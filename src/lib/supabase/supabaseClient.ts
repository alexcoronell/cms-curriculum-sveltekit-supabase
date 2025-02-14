import { createBrowserClient } from '@supabase/ssr';
import { config } from '../config/index';

export const createClient = () => createBrowserClient(config.supabaseUrl, config.supabaseAnonKey);
