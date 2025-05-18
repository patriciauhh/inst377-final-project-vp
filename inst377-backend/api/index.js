// api/playlist.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const serverless = require('serverless-http');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.post('/save-playlist', async (req, res) => {
  const { genre, playlist } = req.body;
  if (!genre || !Array.isArray(playlist)) {
    return res.status(400).json({ error: 'Missing genre or playlist' });
  }

  const { error } = await supabase
    .from('saved_playlists')
    .insert([{ genre, playlist, created_at: new Date() }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({ message: 'Playlist saved successfully' });
});

app.get('/playlists', async (req, res) => {
  const { data, error } = await supabase
    .from('saved_playlists')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
