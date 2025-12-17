<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Placeholder Project</title>
  <meta name="description" content="Demo content that uses filler copy and sample imagery.">
  <style>
    :root { --bg: #f6f7fb; --ink: #1f2633; --muted: #4b5568; --accent: #5f7adb; --card: #ffffff; --border: #e3e6ed; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: var(--bg); color: var(--ink); line-height: 1.6; }
    a { color: var(--accent); text-decoration: none; }
    .page { max-width: 1100px; margin: 0 auto; padding: 56px 20px 72px; }
    .eyebrow { letter-spacing: 0.2em; text-transform: uppercase; font-size: 12px; color: var(--accent); margin: 0 0 10px; }
    h1 { margin: 0 0 16px; font-size: clamp(32px, 5vw, 44px); line-height: 1.1; }
    p { margin: 0 0 14px; color: var(--muted); }
    .hero { display: grid; gap: 28px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); align-items: center; margin-bottom: 48px; }
    .hero img { width: 100%; max-width: 520px; display: block; border-radius: 16px; box-shadow: 0 24px 60px rgba(0,0,0,0.08); border: 1px solid var(--border); }
    .taglist { display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0 22px; padding: 0; list-style: none; }
    .tag { padding: 8px 12px; background: #edf0ff; border-radius: 999px; color: var(--accent); font-weight: 600; font-size: 13px; border: 1px solid var(--border); }
    .grid { display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); margin-bottom: 40px; }
    .card { background: var(--card); padding: 18px; border-radius: 14px; border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
    .card h3 { margin: 0 0 8px; font-size: 18px; color: var(--ink); }
    .quote { border-left: 4px solid var(--accent); padding: 12px 16px; background: #ecf1ff; border-radius: 10px; color: var(--muted); margin: 0 0 28px; }
    .cta { display: inline-flex; gap: 10px; align-items: center; padding: 12px 18px; border-radius: 12px; background: var(--accent); color: #fff; font-weight: 700; border: none; box-shadow: 0 10px 40px rgba(95,122,219,0.4); cursor: pointer; }
    footer { margin-top: 48px; padding-top: 20px; border-top: 1px solid var(--border); color: var(--muted); font-size: 14px; }
  </style>
</head>
<body>
  <div class="page">
    <header class="hero">
      <div>
        <p class="eyebrow">Demo Brand</p>
        <h1>Every headline, paragraph, and label on this page is placeholder text.</h1>
        <p>This layout exists purely as scaffolding. Swap in real messaging, features, and media whenever you are ready to launch.</p>
        <ul class="taglist">
          <li class="tag">Sample</li>
          <li class="tag">Filler</li>
          <li class="tag">Layout Only</li>
        </ul>
        <button class="cta" type="button">Primary action</button>
      </div>
      <div>
        <img src="/content/images/placeholder.png" alt="Placeholder visual">
      </div>
    </header>

    <section class="grid">
      <div class="card">
        <h3>Placeholder section one</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum, urna non cursus aliquet, dui nibh convallis nisl.</p>
      </div>
      <div class="card">
        <h3>Placeholder section two</h3>
        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      </div>
      <div class="card">
        <h3>Placeholder section three</h3>
        <p>Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum.</p>
      </div>
    </section>

    <p class="quote">"This is sample body copy intended only to show how text will flow once real stories and case studies are added."</p>

    <section class="grid">
      <div class="card">
        <h3>Generic feature</h3>
        <p>Proin ultricies placerat pharetra. Curabitur blandit tempus porttitor. Donec sed odio dui.</p>
      </div>
      <div class="card">
        <h3>Another generic feature</h3>
        <p>Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus.</p>
      </div>
    </section>

    <footer>
      <p>Dummy footer content. Replace with your contact details, policies, or navigation when ready.</p>
    </footer>
  </div>
</body>
</html>
