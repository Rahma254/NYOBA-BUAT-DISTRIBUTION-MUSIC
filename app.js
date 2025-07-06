import { supabase } from './config.js';

// Tambah komentar
async function postComment(songId, message) {
  const { error } = await supabase
    .from('comments')
    .insert({ song_id: songId, content: message });
  if (error) console.error('Gagal kirim komentar:', error);
}

// Ambil komentar
async function loadComments(songId) {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('song_id', songId)
    .order('created_at', { ascending: false });
  return data || [];
}

// Tambah Like
async function addLike(songId) {
  const { error } = await supabase
    .from('likes')
    .insert({ song_id: songId });
  if (error) console.error('Gagal like:', error);
}

// Hitung Like
async function countLikes(songId) {
  const { count } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('song_id', songId);
  return count || 0;
}
