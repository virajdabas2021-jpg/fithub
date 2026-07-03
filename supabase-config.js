
const SUPABASE_URL = 'https://ilyznjawmxvcbefjkxuq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_rZdrbwowfvMUGBPXlsr8iw_zEqHlHgb';

window.sb = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);