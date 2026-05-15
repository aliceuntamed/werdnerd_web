-- Enable RLS on tables (if not already enabled)
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE werd_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Tags: Allow everyone to read tags (for filtering words)
CREATE POLICY "Tags are viewable by everyone" ON tags
FOR SELECT USING (true);

-- Werd_tags: Allow everyone to read word-tag relationships
CREATE POLICY "Word-tag relationships are viewable by everyone" ON werd_tags
FOR SELECT USING (true);

-- Favorites: Users can only see/modify their own favorites
CREATE POLICY "Users can view their own favorites" ON favorites
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites" ON favorites
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own favorites" ON favorites
FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites" ON favorites
FOR DELETE USING (auth.uid() = user_id);

-- Games: Users can only see/modify their own games
CREATE POLICY "Users can view their own games" ON games
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own games" ON games
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own games" ON games
FOR UPDATE USING (auth.uid() = user_id);

-- Leaderboard: Allow everyone to read leaderboard (public scores)
CREATE POLICY "Leaderboard is viewable by everyone" ON leaderboard
FOR SELECT USING (true);

-- Users: Users can only see/modify their own profile
CREATE POLICY "Users can view their own profile" ON users
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON users
FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" ON users
FOR INSERT WITH CHECK (auth.uid() = user_id);