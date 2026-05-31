// Email templates — colours and fonts match kara3d.de design tokens exactly.
// Sora (display) + Inter (sans) loaded via Google Fonts link; graceful fallback
// to system sans-serif in Outlook desktop which strips external stylesheets.

// ─── Design tokens (mirrors globals.css) ─────────────────────────────────────

const c = {
  bg:         "#f2f2f2",  // neutral-lightest
  card:       "#ffffff",
  text:       "#020807",  // neutral-darkest
  muted:      "#808383",  // neutral
  subtle:     "#b3b4b4",  // neutral-light
  border:     "#d9d9d9",  // neutral-lighter
  accent:     "#08a735",  // malachite-dark  (primary CTA bg)
  accentHover:"#0ad143",  // malachite
  accentLight:"#e6faec",  // malachite-lightest
  footer:     "#033e14",  // malachite-darkest
  footerText: "#cef5d9",  // malachite-lighter
};

const fontDisplay = "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif";
const fontSans    = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif";

// ─── Base shell ───────────────────────────────────────────────────────────────

const base = (content: string) => `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Kara 3D</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background:${c.bg};font-family:${fontSans}">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${c.bg};padding:40px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Wordmark -->
        <tr>
          <td style="padding:0 0 20px 4px">
            <span style="font-family:${fontDisplay};font-size:20px;font-weight:700;color:${c.text};letter-spacing:-0.5px">
              Kara 3D
            </span>
          </td>
        </tr>

        <!-- Card -->
        <tr>
          <td style="background:${c.card};border-radius:24px;overflow:hidden;border:1px solid ${c.border}">
            ${content}
          </td>
        </tr>

      </table>

      <!-- Credits -->
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;margin-top:12px">
        <tr>
          <td style="padding:16px 4px;text-align:center">
            <span style="font-family:${fontSans};font-size:12px;color:${c.muted};line-height:1.6">
              Kara 3D · Hamburg, Deutschland ·
              <a href="mailto:hello@kara3d.de" style="color:${c.muted};text-decoration:underline">hello@kara3d.de</a>
            </span>
          </td>
        </tr>
      </table>

    </td></tr>
  </table>
</body>
</html>`.trim();

// ─── Field row helper ─────────────────────────────────────────────────────────

const field = (label: string, value: string) => `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid ${c.border};vertical-align:top;
               font-family:${fontSans};font-size:11px;font-weight:600;color:${c.muted};
               text-transform:uppercase;letter-spacing:0.5px;width:130px;white-space:nowrap">
      ${label}
    </td>
    <td style="padding:10px 0 10px 16px;border-bottom:1px solid ${c.border};vertical-align:top;
               font-family:${fontSans};font-size:14px;color:${c.text};line-height:1.6">
      ${value}
    </td>
  </tr>`;

// ─── 1. Owner notification ─────────────────────────────────────────────────────

interface OwnerParams {
  name:        string;
  email:       string;
  stueckzahl:  string;
  message:     string | null;
  fileName:    string | null;
  filePath:    string | null;
  submittedAt: string;
}

export function ownerNotificationEmail(p: OwnerParams) {
  const rows = [
    field("Name",      p.name),
    field("E-Mail",    `<a href="mailto:${p.email}" style="color:${c.accent};text-decoration:none">${p.email}</a>`),
    field("Stückzahl", p.stueckzahl),
    p.message  ? field("Nachricht", p.message.replace(/\n/g, "<br>")) : "",
    p.fileName ? field("Datei",     p.fileName) : "",
    field("Eingegangen", p.submittedAt),
  ].join("");

  const body = `
    <!-- Header stripe -->
    <div style="background:${c.accentLight};padding:32px 40px 28px;border-bottom:1px solid ${c.border}">
      <p style="margin:0 0 6px;font-family:${fontSans};font-size:11px;font-weight:600;
                color:${c.accent};text-transform:uppercase;letter-spacing:0.8px">
        Neue Anfrage
      </p>
      <h1 style="margin:0;font-family:${fontDisplay};font-size:26px;font-weight:700;
                 color:${c.text};letter-spacing:-0.5px;line-height:1.2">
        ${p.name}
      </h1>
      <p style="margin:6px 0 0;font-family:${fontSans};font-size:14px;color:${c.muted}">
        ${p.stueckzahl} Stück · ${p.submittedAt}
      </p>
    </div>

    <!-- Fields -->
    <div style="padding:32px 40px">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${rows}
      </table>

      <!-- CTA -->
      <div style="margin-top:32px">
        <a href="mailto:${p.email}?subject=Re%3A%20Ihre%20Anfrage%20bei%20Kara%203D"
           style="display:inline-block;background:${c.accent};color:#fff;text-decoration:none;
                  padding:12px 28px;border-radius:100px;font-family:${fontSans};
                  font-size:14px;font-weight:600;letter-spacing:0.1px">
          Jetzt antworten →
        </a>
      </div>
    </div>`;

  return {
    subject: `Neue Anfrage: ${p.name} — ${p.stueckzahl} Stück`,
    html: base(body),
  };
}

// ─── 2. Client confirmation ────────────────────────────────────────────────────

interface ClientParams {
  name:       string;
  stueckzahl: string;
  message:    string | null;
  fileName:   string | null;
}

export function clientConfirmationEmail(p: ClientParams) {
  const firstName = p.name.split(" ")[0];

  const summaryRows = [
    field("Stückzahl",    p.stueckzahl),
    p.message  ? field("Ihre Nachricht", p.message.replace(/\n/g, "<br>")) : "",
    p.fileName ? field("Anhang",         p.fileName) : "",
  ].join("");

  const body = `
    <!-- Header stripe -->
    <div style="background:${c.footer};padding:40px 40px 36px">
      <p style="margin:0 0 6px;font-family:${fontSans};font-size:11px;font-weight:600;
                color:${c.footerText};text-transform:uppercase;letter-spacing:0.8px;opacity:0.7">
        Kara 3D
      </p>
      <h1 style="margin:0;font-family:${fontDisplay};font-size:26px;font-weight:700;
                 color:#ffffff;letter-spacing:-0.5px;line-height:1.25">
        Ihre Anfrage wurde erhalten
      </h1>
    </div>

    <!-- Body -->
    <div style="padding:36px 40px">

      <p style="margin:0 0 20px;font-family:${fontSans};font-size:16px;color:${c.text};line-height:1.7">
        Guten Tag ${firstName},
      </p>
      <p style="margin:0 0 28px;font-family:${fontSans};font-size:15px;color:${c.text};line-height:1.7">
        vielen Dank für Ihre Anfrage. Wir haben alle Angaben erhalten und werden uns
        <strong>innerhalb von 6 Stunden per E-Mail</strong> bei Ihnen melden.
      </p>

      <!-- Summary box -->
      <div style="background:${c.bg};border-radius:16px;padding:24px 28px;margin-bottom:28px;
                  border:1px solid ${c.border}">
        <p style="margin:0 0 16px;font-family:${fontSans};font-size:11px;font-weight:600;
                  color:${c.muted};text-transform:uppercase;letter-spacing:0.5px">
          Zusammenfassung Ihrer Anfrage
        </p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${summaryRows}
        </table>
      </div>

      <p style="margin:0 0 6px;font-family:${fontSans};font-size:14px;color:${c.muted};line-height:1.7">
        Bei Rückfragen erreichen Sie uns unter
        <a href="mailto:hello@kara3d.de" style="color:${c.accent};text-decoration:none;font-weight:500">
          hello@kara3d.de
        </a>
      </p>
      <p style="margin:28px 0 0;font-family:${fontSans};font-size:15px;color:${c.text};line-height:1.7">
        Mit freundlichen Grüßen,<br>
        <span style="font-weight:600">Das Kara 3D Team</span>
      </p>

    </div>`;

  return {
    subject: "Ihre Anfrage wurde erhalten — Kara 3D",
    html: base(body),
  };
}
