import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bookmark } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useFavorites } from '../../hooks/useFavorites';
import { profileFromUser, updateDisplayName, type Profile } from '../../utils/supabase/profile';
import { werdPath } from '../WerdVault/werdSlug';
import '../Auth/Auth.css';
import '../../components/FavoriteControl.css';
import './ProfilePage.css';

export default function ProfilePage() {
  const { user } = useAuth();
  return user ? <Collection key={user.id} profile={profileFromUser(user)} /> : null;
}

function Collection({ profile }: { profile: Profile }) {
  const collection = useFavorites(profile.id);
  const [name, setName] = useState(profile.displayName);
  const [savingName, setSavingName] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [nameMessage, setNameMessage] = useState('');
  const saving = useRef(false);

  async function saveName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving.current) return;
    saving.current = true;
    setSavingName(true);
    setNameError(null);
    setNameMessage('');
    try {
      await updateDisplayName(name);
      setName(name.trim());
      setNameMessage('Display name saved.');
    } catch {
      setNameError(name.trim() ? 'Your display name could not be saved. Please try again.' : 'Enter a display name.');
    } finally {
      saving.current = false;
      setSavingName(false);
    }
  }

  return <main className="account-page collection-page">
    <div className="collection-shell">
      <header className="collection-heading">
        <p className="account-eyebrow">WerdNerd / private archive</p>
        <h1>My collection<span aria-hidden="true">.</span></h1>
        <p>The ones worth keeping. A little cabinet of your own.</p>
      </header>
      <div className="collection-layout">
        <aside className="collection-identity" aria-labelledby="collector-heading">
          <Bookmark size={26} aria-hidden="true" />
          <h2 id="collector-heading">{profile.displayName || 'Hello, collector.'}</h2>
          <p className="collection-email">{profile.email}</p>
          <p className="account-hint">Your name and saved Werds stay in your private collection.</p>
          <form className="account-form" onSubmit={saveName} aria-busy={savingName}>
            <label htmlFor="display-name">Display name
              <input id="display-name" name="displayName" autoComplete="nickname" required maxLength={60} value={name} disabled={savingName} onChange={event => setName(event.target.value)} />
            </label>
            <button className="account-button" disabled={savingName} type="submit">{savingName ? 'Saving name…' : 'Save name'}</button>
            {nameError && <p className="account-error" role="alert">{nameError}</p>}
            <p className="account-hint" role="status">{nameMessage}</p>
          </form>
          <Link className="collection-settings" to="/settings">Settings <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </aside>
        <section className="collection-saved" aria-labelledby="saved-heading">
          <div className="collection-saved__heading"><h2 id="saved-heading">Saved Werds</h2><button type="button" disabled={collection.loading || collection.pendingIds.size > 0} onClick={() => void collection.reload()}>Refresh</button></div>
          {collection.loading ? <p role="status">Opening your collection…</p>
            : collection.loadError ? <p className="account-error" role="alert">{collection.loadError}</p>
            : collection.favorites.length === 0 ? <div className="collection-empty"><Bookmark size={32} aria-hidden="true" /><h3>A shelf with possibilities.</h3><p>Find a Werd that sticks with you, then save it from its specimen page.</p><Link className="account-button" to="/vault">Explore the Vault <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
            : <ul className="collection-list">{collection.favorites.map(favorite => {
              const werd = favorite.werd;
              return <li key={favorite.werd_id}>
                {werd?.werd ? <Link className="collection-werd" to={werdPath(werd.werd)}><span>{werd.part_of_speech || 'Specimen'}</span><h3>{werd.werd}</h3><p>{werd.definition || 'Definition pending.'}</p></Link>
                  : <div className="collection-werd"><h3>Unavailable Werd</h3><p>This specimen is no longer available in the public Vault.</p></div>}
                <button className="collection-remove" type="button" disabled={collection.pendingIds.has(favorite.werd_id)} aria-label={`Remove ${werd?.werd || 'unavailable Werd'} from collection`} onClick={() => void collection.toggle(werd || { werd_id: favorite.werd_id, werd: null, definition: null, part_of_speech: null })}>Remove</button>
              </li>;
            })}</ul>}
          {collection.error && <p className="account-error" role="alert">{collection.error}</p>}
          <p className="favorite-feedback" role="status">{collection.message}</p>
        </section>
      </div>
    </div>
  </main>;
}
