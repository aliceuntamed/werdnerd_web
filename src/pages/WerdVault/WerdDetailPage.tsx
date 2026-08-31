import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import LoadingScreen from "../../components/ui/LoadingScreen";
import { useWerds } from "../../hooks/useWerds";
import { toWerdSlug } from "./werdSlug";
import "./WerdVault.css";
import "./WerdDetailPage.css";

export default function WerdDetailPage() {
  const { slug = "" } = useParams();
  const { werds, loading, error } = useWerds();
  const werd = werds.find((item) => toWerdSlug(item.werd) === slug);

  if (loading) return <main className="vault-detail"><LoadingScreen fullScreen={false} message="Retrieving the file…" /></main>;

  if (error) return (
    <main className="vault-detail"><section className="vault-detail__missing" role="alert"><p>Vault connection lost</p><h1>This file could not be retrieved.</h1><button type="button" onClick={() => window.location.reload()}>Try again</button><Link to="/vault"><ArrowLeft /> Return to the Vault</Link></section></main>
  );

  if (!werd) return (
    <main className="vault-detail"><section className="vault-detail__missing"><p>404 / Missing specimen</p><h1>This werd has left the building.</h1><Link to="/vault"><ArrowLeft /> Return to the Vault</Link></section></main>
  );

  return (
    <main className="vault-detail">
      <Link className="vault-detail__back" to="/vault"><ArrowLeft /> Back to the index</Link>
      <article className="vault-detail__file">
        <header><p>WerdVault / specimen file</p><span>{werd.werd_id.slice(0, 8)}</span></header>
        <div className="vault-detail__body">
          <div>
            <p className="vault-detail__type">{werd.part_of_speech || "unclassified"}</p>
            <h1>{werd.werd}</h1>
            {werd.pronunciation ? <p className="vault-detail__pronunciation">/{werd.pronunciation}/</p> : null}
          </div>
          <dl>
            <div><dt>Definition</dt><dd>{werd.definition || "Definition pending."}</dd></div>
            <div><dt>Language</dt><dd>{werd.language || "Unknown"}</dd></div>
            {werd.source_1 ? <div><dt>Source</dt><dd>{werd.source_1}</dd></div> : null}
          </dl>
        </div>
        <footer><div>{werd.tags.map((tag) => <Link key={tag} to={`/vault?tag=${encodeURIComponent(tag)}`}>#{tag}</Link>)}</div><Link to="/submit">Submit another oddity <ArrowUpRight /></Link></footer>
      </article>
    </main>
  );
}
