import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import "../WerdVault/WerdVault.css";
import "../WerdVault/WerdDetailPage.css";

export default function NotFoundPage() {
  return (
    <main className="vault-detail">
      <section className="vault-detail__missing">
        <p>404 / Uncataloged territory</p>
        <h1>This page escaped the archive.</h1>
        <Link to={ROUTES.HOME}>
          <ArrowLeft aria-hidden="true" /> Return home
        </Link>
      </section>
    </main>
  );
}
