
// config.js
const SUPABASE_URL = 'https://lvbcwilldsfxkweqfpyz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2YmN3aWxsZHNmeGt3ZXFmcHl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MzE2NjgsImV4cCI6MjA2NzMwNzY2OH0.-O_ddTcVKkS3xJDi5wQRoHIlpE5d3uAraXGXaZ62v98';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
