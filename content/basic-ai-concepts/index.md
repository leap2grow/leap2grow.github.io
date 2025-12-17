<!DOCTYPE html>
<html lang="en" data-color-scheme="system" class="scroll-smooth">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Basic concepts in artificial intelligence</title>

    <meta name="HandheldFriendly" content="True" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <meta name="theme-color" content="#008cff">

      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<style> 
  body { 
    --font-headings: var(--gh-font-heading, var(--font-system));
    --font-body: var(--gh-font-heading, var(--font-system));
  }
</style>

      <link rel="preload stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300..800&display=swap" 
          as="style" onload="this.onload=null;this.rel='stylesheet'" crossorigin>
  <style>body { --font-headings: var(--gh-font-heading, 'DM Sans'), sans-serif; }</style>
















        <link rel="preload stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@300..800&display=swap" 
            as="style" onload="this.onload=null;this.rel='stylesheet'" crossorigin>
  <style>body { --font-body: var(--gh-font-body, 'Lexend'), sans-serif; }</style>







    <script type="module" src="https://leap2grow.github.io/assets/built/app.js?v=0e088e74f9"></script>

    <link rel="stylesheet" type="text/css" href="https://leap2grow.github.io/assets/built/app.css?v=0e088e74f9" />

    <script>
  let preferredTheme = localStorage.getItem('PREFERRED_COLOR_SCHEME') || `system`;
  document.documentElement.setAttribute('data-color-scheme', preferredTheme);
  
  // Global values needed
  const themeGlobal = {
    siteUrl: 'https://leap2grow.github.io',
    currentPage: parseInt(''),
    nextPage: parseInt(''),
    nextPageLink: '',
    maxPages: parseInt(''), 
    lastPage: `` === `` ? true : false,
    postsPerPage: parseInt('12'),
    total: parseInt(''),
    searchJobsFeaturedFirst: false
  }

  function hexToRgb(hexColor) {
    if (hexColor.slice(0, 1) === '#') { hexColor = hexColor.slice(1); }
    if (hexColor.length === 3) { hexColor = hexColor.split('').map(function (hex) { return hex + hex;}).join(''); }
    const r = parseInt(hexColor.substr(0,2),16);
    const g = parseInt(hexColor.substr(2,2),16);
    const b = parseInt(hexColor.substr(4,2),16);

    return [r,g,b]
  }

  // Get contrast color;
  function getColorContrast(hexColor) {
    const rgb = hexToRgb(hexColor);
    let yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
    const colorContrast = (yiq >= 128) ? 'hsl(0 0% 0%)' : 'hsl(0 0% 100%)';

    // return
    return colorContrast
  };

  function hexToHsl(hexColor) {
    const rgb = hexToRgb(hexColor);

    // Make r, g, and b fractions of 1
    const r = rgb[0]/255;
    const g = rgb[1]/255;
    const b = rgb[2]/255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min)  /  2;  
    if ( max == min ) { h = s = 0; } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [Math.round(h * 360),Math.round(s * 100),Math.round(l * 100)]
  }

  function setBrandHSL(hex) {
    const colorHsl = hexToHsl(hex)
    document.documentElement.style.setProperty('--color-brand-hsl', `${colorHsl[0]} ${colorHsl[1]}% ${colorHsl[2]}%`);
    document.documentElement.style.setProperty('--color-brand-contrast', getColorContrast(hex));
  }

  setBrandHSL("#008cff");
</script>
    

    <meta name="description" content="The future is here &amp; AI is having sweeping impacts on our world. But most people don&#x27;t understand it. Here are the basic AI concepts you need to know today.">
    <link rel="icon" href="https://leap2grow.github.io/content/images/size/w256h256/2024/02/social_media.png" type="image/png">
    <link rel="canonical" href="https://leap2grow.github.io/basic-ai-concepts/">
    <meta name="referrer" content="no-referrer-when-downgrade">
    
    <meta property="og:site_name" content="Nick Saraev">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Basic concepts in artificial intelligence">
    <meta property="og:description" content="The future is here &amp; AI is having sweeping impacts on our world. But most people don&#x27;t understand it. Here are the 5 basic AI concepts you need to know today.">
    <meta property="og:url" content="https://leap2grow.github.io/basic-ai-concepts/">
    <meta property="og:image" content="https://leap2grow.github.io/content/images/size/w1200/2022/03/out--20--2.png">
    <meta property="article:published_time" content="2022-03-15T03:02:16.000Z">
    <meta property="article:modified_time" content="2022-04-20T03:17:12.000Z">
    <meta property="article:tag" content="artificial intelligence">
    <meta property="article:tag" content="Futurology">
    
    <meta property="article:publisher" content="https://www.facebook.com/nick.john.wells">
    <meta property="article:author" content="https://www.facebook.com/nick.john.wells/">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Basic concepts in artificial intelligence">
    <meta name="twitter:description" content="The future is here &amp; AI is having sweeping impacts on our world. But most people don&#x27;t understand it. Here are the 5 basic AI concepts you need to know today.">
    <meta name="twitter:url" content="https://leap2grow.github.io/basic-ai-concepts/">
    <meta name="twitter:image" content="https://leap2grow.github.io/content/images/size/w1200/2022/03/out--20--2.png">
    <meta name="twitter:label1" content="Written by">
    <meta name="twitter:data1" content="Nick Saraev">
    <meta name="twitter:label2" content="Filed under">
    <meta name="twitter:data2" content="artificial intelligence, Futurology">
    <meta name="twitter:site" content="@nicksaraev">
    <meta name="twitter:creator" content="@nicksaraev">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="750">
    
    <script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "publisher": {
        "@type": "Organization",
        "name": "Nick Saraev",
        "url": "https://leap2grow.github.io/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://leap2grow.github.io/content/images/2025/01/Untitled-design--12-.png"
        }
    },
    "author": {
        "@type": "Person",
        "name": "Nick Saraev",
        "image": {
            "@type": "ImageObject",
            "url": "https://leap2grow.github.io/content/images/size/w1200/2024/02/social_media-3.png",
            "width": 1200,
            "height": 1200
        },
        "url": "https://leap2grow.github.io/author/nickolas/",
        "sameAs": [
            "https://www.facebook.com/nick.john.wells/",
            "https://x.com/nicksaraev"
        ]
    },
    "headline": "Basic concepts in artificial intelligence",
    "url": "https://leap2grow.github.io/basic-ai-concepts/",
    "datePublished": "2022-03-15T03:02:16.000Z",
    "dateModified": "2022-04-20T03:17:12.000Z",
    "image": {
        "@type": "ImageObject",
        "url": "https://leap2grow.github.io/content/images/size/w1200/2022/03/out--20--2.png",
        "width": 1200,
        "height": 750
    },
    "keywords": "artificial intelligence, Futurology",
    "description": "The future is here &amp; AI is having sweeping impacts on our world. But most people don&#x27;t understand it. Here are the 5 basic AI concepts you need to know today.",
    "mainEntityOfPage": "https://leap2grow.github.io/basic-ai-concepts/"
}
    </script>

    <meta name="generator" content="Ghost 6.10">
    <link rel="alternate" type="application/rss+xml" title="Nick Saraev" href="https://leap2grow.github.io/rss/">
    <script defer src="https://cdn.jsdelivr.net/ghost/portal@~2.56/umd/portal.min.js" data-i18n="true" data-ghost="https://leap2grow.github.io/" data-key="43d80add79d4ef1f20e5afa9dc" data-api="https://nick-saraev.ghost.io/ghost/api/content/" data-locale="en" crossorigin="anonymous"></script><style id="gh-members-styles">.gh-post-upgrade-cta-content,
.gh-post-upgrade-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    width: 100%;
    color: #ffffff;
    font-size: 16px;
}

.gh-post-upgrade-cta-content {
    border-radius: 8px;
    padding: 40px 4vw;
}

.gh-post-upgrade-cta h2 {
    color: #ffffff;
    font-size: 28px;
    letter-spacing: -0.2px;
    margin: 0;
    padding: 0;
}

.gh-post-upgrade-cta p {
    margin: 20px 0 0;
    padding: 0;
}

.gh-post-upgrade-cta small {
    font-size: 16px;
    letter-spacing: -0.2px;
}

.gh-post-upgrade-cta a {
    color: #ffffff;
    cursor: pointer;
    font-weight: 500;
    box-shadow: none;
    text-decoration: underline;
}

.gh-post-upgrade-cta a:hover {
    color: #ffffff;
    opacity: 0.8;
    box-shadow: none;
    text-decoration: underline;
}

.gh-post-upgrade-cta a.gh-btn {
    display: block;
    background: #ffffff;
    text-decoration: none;
    margin: 28px 0 0;
    padding: 8px 18px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
}

.gh-post-upgrade-cta a.gh-btn:hover {
    opacity: 0.92;
}</style><script async src="https://js.stripe.com/v3/"></script>
    <script defer src="https://cdn.jsdelivr.net/ghost/sodo-search@~1.8/umd/sodo-search.min.js" data-key="43d80add79d4ef1f20e5afa9dc" data-styles="https://cdn.jsdelivr.net/ghost/sodo-search@~1.8/umd/main.css" data-sodo-search="https://nick-saraev.ghost.io/" data-locale="en" crossorigin="anonymous"></script>
    
    <link href="https://leap2grow.github.io/webmentions/receive/" rel="webmention">
    <script defer src="/public/cards.min.js?v=0e088e74f9"></script>
    <link rel="stylesheet" type="text/css" href="/public/cards.min.css?v=0e088e74f9">
    <script defer src="/public/member-attribution.min.js?v=0e088e74f9"></script>
    <script defer src="/public/ghost-stats.min.js?v=0e088e74f9" data-stringify-payload="false" data-datasource="analytics_events" data-storage="localStorage" data-host="https://leap2grow.github.io/.ghost/analytics/api/v1/page_hit"  tb_site_uuid="1ae3de90-cafc-423f-b6a1-36af422be674" tb_post_uuid="a3d27990-8bf1-4eda-bb5a-e717f54e9cd8" tb_post_type="post" tb_member_uuid="undefined" tb_member_status="undefined"></script><style>:root {--ghost-accent-color: #008cff;}</style>
    <script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "Person",
  "name": "Nick Saraev",
  "alternateName": "Nickolas Saraev",
  "familyName": "Saraev",
  "email": "njsaraev@gmail.com",
  "birthDate": "1996-02-01",
  "brand": "1SecondCopy",
  "jobTitle": "CEO",
  "knowsAbout": "AI, content writing, digital media, programming.",
  "nationality": "Canada",
  "worksFor": "1SecondCopy",
  "sameAs": [
    "https://www.facebook.com/nick.john.wells/",
    "https://www.techopedia.com/contributors/nicksaraev",
    "https://www.linkedin.com/in/nickolas-saraev/",
    "https://nicksaraev.medium.com/",
    "https://www.skillshare.com/en/user/nickandsoma",
    "https://twitter.com/nicksaraev",
    "https://strixus.com/contributors",
    "https://www.business2community.com/author/nick-saraev",
    "https://hostadvice.com/author/nick-saraev/",
    "https://www.f6s.com/nick-saraev1",
    "https://sortter.com/authors/nick-saraev/",
    "https://www.sherpadesk.com/blog/author/nick-saraev",
    "https://www.popularmechanics.com/science/a36712084/can-science-cure-death-longevity/"
  ]
}
</script>
<meta name="google-site-verification" content="NXLwmbcNpvn74EWyMlytC3_zTg8Ns--0qQl1epXqPGE" />
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JK5YHTZ6X3"></script>

<style>
  span[data-footer-ghost] {
    display: none;
}
    span[data-footer-theme] {
    display: none;
}
  
</style>
  </head>
  <body class="post-template tag-artificial-intelligence tag-ftr subpixel-antialiased relative overflow-x-hidden bg-bgr text-typ"
    x-data="{ menuOpen: false }" :class="menuOpen ? 'overflow-hidden' : 'overflow-y-auto'"
    data-user="visitor"
    @keydown.escape="menuOpen = false" @keydown.cmk.k="document.querySelector('[data-ghost-search]').click()"
    x-init="navigator.platform.includes('Win') && document.body.classList.add('is-win')"
  >
      <progress value="0" max="100" data-progress-bar 
    class="appearance-none fixed top-0 w-full h-[5px] bg-transparent z-[1100]"
    x-init="$nextTick(() => { document.querySelector('[data-progress-bar]').setAttribute('value',getScrollPercent()) })" 
    @scroll.window="document.querySelector('[data-progress-bar]').setAttribute('value',getScrollPercent())" 
  >
  </progress>
    
    <header class="px-4 sm:px-6 text-typ whitespace-nowrap sticky top-0 z-[1000] bg-bgr lg:bg-transparent"  data-header x-init="renderSubmenus();window.pageYOffset > 50 ? isScrolledOnload = true : null"
  x-data="{ isScrolled: false, isScrolledOnload: false }" @scroll.window="isScrolled = (window.pageYOffset < 50) ? false : true;window.pageYOffset <= 50 ? isScrolledOnload = false : null" :class="[isScrolled ? 'is-scrolled' : '',isScrolledOnload ? 'is-scrolled-onload' : '']">
  <div class="max-w-container mx-auto py-4 md:py-6 flex items-center justify-center gap-4 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-fading">

    <div class="flex-1 flex justify-start lg:transition-move duration-300" data-header-brand>
      <a class="" href="https://leap2grow.github.io" data-brand>
          <picture  data-logo='dark'>
  <source 
    srcset="/content/images/size/w100/format/webp/2025/01/Untitled-design--12--1.png 100w, /content/images/size/w320/format/webp/2025/01/Untitled-design--12--1.png 320w, /content/images/size/w640/format/webp/2025/01/Untitled-design--12--1.png 600w"
    sizes="(max-width: 800px) 200px, 320px"
    type="image/webp"
  >
  <img class="h-[var(--logo-h-mobile)] w-[var(--logo-w-mobile)] md:h-[var(--logo-h-desktop)] md:w-[var(--logo-w-desktop)]"
    
    loading="eager"
    srcset="/content/images/size/w100/format/webp/2025/01/Untitled-design--12--1.png 100w, /content/images/size/w320/format/webp/2025/01/Untitled-design--12--1.png 320w, /content/images/size/w640/format/webp/2025/01/Untitled-design--12--1.png 600w"
    sizes="(max-width: 800px) 200px, 320px"
    src="/content/images/size/w30/2025/01/Untitled-design--12--1.png"
    alt="Nick Saraev"
    
  />
</picture>
  <picture  data-logo='default'>
  <source 
    srcset="/content/images/size/w100/format/webp/2025/01/Untitled-design--12-.png 100w, /content/images/size/w320/format/webp/2025/01/Untitled-design--12-.png 320w, /content/images/size/w640/format/webp/2025/01/Untitled-design--12-.png 600w"
    sizes="(max-width: 800px) 200px, 320px"
    type="image/webp"
  >
  <img class="h-[var(--logo-h-mobile)] w-[var(--logo-w-mobile)] md:h-[var(--logo-h-desktop)] md:w-[var(--logo-w-desktop)]"
    
    loading="eager"
    srcset="/content/images/size/w100/format/webp/2025/01/Untitled-design--12-.png 100w, /content/images/size/w320/format/webp/2025/01/Untitled-design--12-.png 320w, /content/images/size/w640/format/webp/2025/01/Untitled-design--12-.png 600w"
    sizes="(max-width: 800px) 200px, 320px"
    src="/content/images/size/w30/2025/01/Untitled-design--12-.png"
    alt="Nick Saraev"
    
  />
</picture>
      </a>
    </div>

    <nav class="relative hidden transition-[width,filter] duration-300 text-sm lg:flex justify-center p-1 border border-brd rounded-theme-lg  bg-bgr-opac backdrop-blur" data-nav="desktop"  :class="isScrolled ? 'drop-shadow-xl' : ''">
      <ul class="flex gap-0.5">
    <li class="nav-about flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-toggle nav-toggle" 
      data-label="About" data-slug="about" data-length="5">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>About</span>
      </a>
    </li>
    <li class="nav-who-is-nick-saraev flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- Who is Nick Saraev?" data-slug="who-is-nick-saraev" data-length="21">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://leap2grow.github.io/about/" 
        >
        <span>- Who is Nick Saraev?</span>
      </a>
    </li>
    <li class="nav-biography flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- Biography" data-slug="biography" data-length="11">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://leap2grow.github.io/biography/" 
        >
        <span>- Biography</span>
      </a>
    </li>
    <li class="nav-products flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-toggle nav-toggle" 
      data-label="Products" data-slug="products" data-length="8">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Products</span>
      </a>
    </li>
    <li class="nav-maker-school flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- Maker School" data-slug="maker-school" data-length="14">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://www.skool.com/makerschool/about" 
        >
        <span>- Maker School</span>
      </a>
    </li>
    <li class="nav-mmwm flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- MMWM" data-slug="mmwm" data-length="6">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://www.skool.com/makemoneywithmake/about" 
        >
        <span>- MMWM</span>
      </a>
    </li>
    <li class="nav-free-courses flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-toggle nav-toggle" 
      data-label="Free Courses" data-slug="free-courses" data-length="12">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Free Courses</span>
      </a>
    </li>
    <li class="nav-n8n-full-course-6hrs flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- N8N Full Course (6hrs)" data-slug="n8n-full-course-6hrs" data-length="24">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://leap2grow.github.io/" 
        >
        <span>- N8N Full Course (6hrs)</span>
      </a>
    </li>
    <li class="nav-make-com-for-making-money-57hrs flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- Make.com for Making Money (57hrs)" data-slug="make-com-for-making-money-57hrs" data-length="35">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://www.youtube.com/watch?v=PjKHs-L6Sn4&list=PLSbQllRagIuSuiPQzqcNNbst3IWs58vDF" 
        >
        <span>- Make.com for Making Money (57hrs)</span>
      </a>
    </li>
    <li class="nav-build-scale-an-automation-agency-16hrs flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- Build &amp; Scale an Automation Agency (16hrs)" data-slug="build-scale-an-automation-agency-16hrs" data-length="44">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://www.youtube.com/watch?v=T7qAiuWDwLw&list=PLSbQllRagIuSxGY2QGlfghPHDfTbnOG5S" 
        >
        <span>- Build &amp; Scale an Automation Agency (16hrs)</span>
      </a>
    </li>
    <li class="nav-resources flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-toggle nav-toggle" 
      data-label="Resources" data-slug="resources" data-length="9">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Resources</span>
      </a>
    </li>
    <li class="nav-journal-entries flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- Journal Entries" data-slug="journal-entries" data-length="17">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://leap2grow.github.io/tag/lfimpr/" 
        >
        <span>- Journal Entries</span>
      </a>
    </li>
    <li class="nav-youtube-channel flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- YouTube Channel" data-slug="youtube-channel" data-length="17">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://youtube.com/@nicksaraev" 
        >
        <span>- YouTube Channel</span>
      </a>
    </li>
    <li class="nav-twitter-x flex relative border border-transparent hover:bg-bgr-tone rounded-theme is-subitem" 
      data-label="- Twitter/X" data-slug="twitter-x" data-length="11">
      <a class="w-full flex px-4 py-1.5 rounded-theme" href="https://x.com/nicksaraev" 
        >
        <span>- Twitter/X</span>
      </a>
    </li>
</ul>

          <a href="https://leftclicker.gumroad.com/l/110-steps" data-nav-cta
            class="flex items-center justify-center opacity-0 w-0 p-0 translate-x-full shadow-btn border border-b-0 border-opac bg-brand text-sm font-medium text-brand-contrast py-1.5 rounded-theme transition-all duration-200 hover:brightness-105 hover:shadow-btn-hover">
            <span>Free Roadmap to $25K</span>
          </a>
    </nav>

    <div class="flex flex-0 sm:flex-1 gap-2 items-center justify-end transition-move duration-300" data-header-actions>

      <button class="flex items-center justify-center rounded-theme size-8 md:size-9 hover:text-brand" data-ghost-search title="Search" aria-label="Search">
        <i class="icon icon-search w-5 h-5 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>



</i>      </button>

          <a href="https://leftclicker.gumroad.com/l/110-steps" 
            class="shadow-btn border border-b-0 border-opac bg-brand text-sm font-medium text-brand-contrast px-4 py-1.5 rounded-theme md:px-5 md:py-2 transition duration-300 hover:brightness-105 hover:shadow-btn-hover">
            <span>Free Roadmap to $25K</span>
          </a>




      <button class="flex flex-col gap-1.5 size-8 md:size-9 items-center justify-center rounded-theme group hover:text-brand lg:hidden" 
        data-menu-toggle aria-label="Menu toggle" aria-expanded="false" aria-haspopup="true" aria-controls="menu"
        @click="menuOpen = !menuOpen; event.currentTarget.setAttribute('aria-expanded', menuOpen);"
      >
        <span class="relative pointer-events-none w-5 h-0.5 rounded-sm bg-typ-tone group-hover:bg-brand transition-all"
          :class="menuOpen ? 'rotate-45 top-1' : 'rotate-0 top-0'"></span>
        <span class="relative pointer-events-none w-5 h-0.5 rounded-sm bg-typ-tone group-hover:bg-brand transition-all"
          :class="menuOpen ? '-rotate-45 -top-1' : ''"></span>
      </button>
    </div>

  </div>
</header>
    <div class="hidden fixed shadow-xl z-[100] top-[64px] md:top-[84px] w-full bg-bgr text-typ-tone pt-4 border-t border-brd lg:hidden fixed" 
  :class="menuOpen ? '!block' : 'hidden'" data-menu id="menu"
> 
  <div class="px-4 sm:px-6">
    <nav class="" data-nav="mobile">
      <ul class="flex flex-col gap-1">
    <li class="nav-about flex relative is-toggle nav-toggle" 
      data-label="About" data-slug="about" data-length="5">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>About</span>
      </a>
    </li>
    <li class="nav-who-is-nick-saraev flex relative is-subitem" 
      data-label="- Who is Nick Saraev?" data-slug="who-is-nick-saraev" data-length="21">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://leap2grow.github.io/about/" 
        >
        <span>- Who is Nick Saraev?</span>
      </a>
    </li>
    <li class="nav-biography flex relative is-subitem" 
      data-label="- Biography" data-slug="biography" data-length="11">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://leap2grow.github.io/biography/" 
        >
        <span>- Biography</span>
      </a>
    </li>
    <li class="nav-products flex relative is-toggle nav-toggle" 
      data-label="Products" data-slug="products" data-length="8">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Products</span>
      </a>
    </li>
    <li class="nav-maker-school flex relative is-subitem" 
      data-label="- Maker School" data-slug="maker-school" data-length="14">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://www.skool.com/makerschool/about" 
        >
        <span>- Maker School</span>
      </a>
    </li>
    <li class="nav-mmwm flex relative is-subitem" 
      data-label="- MMWM" data-slug="mmwm" data-length="6">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://www.skool.com/makemoneywithmake/about" 
        >
        <span>- MMWM</span>
      </a>
    </li>
    <li class="nav-free-courses flex relative is-toggle nav-toggle" 
      data-label="Free Courses" data-slug="free-courses" data-length="12">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Free Courses</span>
      </a>
    </li>
    <li class="nav-n8n-full-course-6hrs flex relative is-subitem" 
      data-label="- N8N Full Course (6hrs)" data-slug="n8n-full-course-6hrs" data-length="24">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://leap2grow.github.io/" 
        >
        <span>- N8N Full Course (6hrs)</span>
      </a>
    </li>
    <li class="nav-make-com-for-making-money-57hrs flex relative is-subitem" 
      data-label="- Make.com for Making Money (57hrs)" data-slug="make-com-for-making-money-57hrs" data-length="35">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://www.youtube.com/watch?v=PjKHs-L6Sn4&list=PLSbQllRagIuSuiPQzqcNNbst3IWs58vDF" 
        >
        <span>- Make.com for Making Money (57hrs)</span>
      </a>
    </li>
    <li class="nav-build-scale-an-automation-agency-16hrs flex relative is-subitem" 
      data-label="- Build &amp; Scale an Automation Agency (16hrs)" data-slug="build-scale-an-automation-agency-16hrs" data-length="44">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://www.youtube.com/watch?v=T7qAiuWDwLw&list=PLSbQllRagIuSxGY2QGlfghPHDfTbnOG5S" 
        >
        <span>- Build &amp; Scale an Automation Agency (16hrs)</span>
      </a>
    </li>
    <li class="nav-resources flex relative is-toggle nav-toggle" 
      data-label="Resources" data-slug="resources" data-length="9">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Resources</span>
      </a>
    </li>
    <li class="nav-journal-entries flex relative is-subitem" 
      data-label="- Journal Entries" data-slug="journal-entries" data-length="17">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://leap2grow.github.io/tag/lfimpr/" 
        >
        <span>- Journal Entries</span>
      </a>
    </li>
    <li class="nav-youtube-channel flex relative is-subitem" 
      data-label="- YouTube Channel" data-slug="youtube-channel" data-length="17">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://youtube.com/@nicksaraev" 
        >
        <span>- YouTube Channel</span>
      </a>
    </li>
    <li class="nav-twitter-x flex relative is-subitem" 
      data-label="- Twitter/X" data-slug="twitter-x" data-length="11">
      <a class="flex py-0.5 rounded-theme hover:text-brand" href="https://x.com/nicksaraev" 
        >
        <span>- Twitter/X</span>
      </a>
    </li>
</ul>
    </nav>
  </div>
  
  <div class="p-4 mt-4 flex gap-2 border-y border-brd">

    <button class="flex gap-0.5 p-[3px] border border-brd text-typ-tone rounded-theme hover:bg-bgr-tone" aria-label="Toggle color scheme"
  data-color-scheme-toggle @click="toggleColorScheme(event)">
  <span data-theme="light" class="px-[5px] py-0.5 border border-transparent opacity-50 rounded-theme">
    <i class="icon icon-sun size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
  <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
  <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
  <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
  <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
  <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
  <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
  <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
  <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
</svg>
</i>  </span>
  <span data-theme="dark" class="px-[5px] py-0.5 border border-transparent opacity-50 rounded-theme">
    <i class="icon icon-moon size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" stroke-width="0" fill="currentColor" />
</svg>
</i>  </span>
</button>  </div>
</div>    
    <main class="main">
      
    <section class="px-4 sm:px-6" data-post-hero="">
  <div class="max-w-wide mx-auto py-12 flex items-center flex-col gap-8">

    <div class="text-typ-tone w-full flex-1 flex flex-col gap-4 mx-auto max-w-content" data-post-hero-content>
        <div class="text-typ-tone flex gap-2">
            <a href="/tag/artificial-intelligence/" class="hover:text-brand">artificial intelligence</a>
            <span>·</span>
          <time class="" datetime="2022-03-14">Mar 14, 2022</time> 
            <span>·</span>
            <span class="">
              8 min read
            </span>
        </div>

      <h1 class="text-typ font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl">
        Basic concepts in artificial intelligence
      </h1>

        <p class="text-lg md:text-xl font-light">The future is here &amp; AI is having sweeping impacts on our world. But most people don&#x27;t understand it. Here are the 5 basic AI concepts you need to know today.</p>

        <ul class="flex gap-3" data-post-hero-authors>
            <li>
              <a href="/author/nickolas/" class="flex gap-1.5 items-center hover:text-brand">
                  <picture  >
  <source 
    srcset="/content/images/size/w30/format/webp/2024/02/social_media-3.png 30w, /content/images/size/w100/format/webp/2024/02/social_media-3.png 100w"
    sizes="32px"
    type="image/webp"
  >
  <img class="size-8 object-cover rounded-full will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w30/format/webp/2024/02/social_media-3.png 30w, /content/images/size/w100/format/webp/2024/02/social_media-3.png 100w"
    sizes="32px"
    src="/content/images/size/w30/2024/02/social_media-3.png"
    alt=""
    
  />
</picture>
                <span>Nick Saraev</span>
              </a>
            </li>
        </ul>
    </div>


      <figure class="max-w-content w-full h-full relative">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2022/03/out--20--2.png 320w, /content/images/size/w640/format/webp/2022/03/out--20--2.png 600w, /content/images/size/w960/format/webp/2022/03/out--20--2.png 960w, /content/images/size/w1280/format/webp/2022/03/out--20--2.png 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    type="image/webp"
  >
  <img class="w-full object-cover rounded-theme-xs aspect-[16/9] border border-brd bg-bgr-tone"
    
    loading="eager"
    srcset="/content/images/size/w320/format/webp/2022/03/out--20--2.png 320w, /content/images/size/w640/format/webp/2022/03/out--20--2.png 600w, /content/images/size/w960/format/webp/2022/03/out--20--2.png 960w, /content/images/size/w1280/format/webp/2022/03/out--20--2.png 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    src="/content/images/size/w30/2022/03/out--20--2.png"
    alt="Basic concepts in artificial intelligence"
    
  />
</picture>
        <figcaption class="mt-2 opacity-80 text-center text-sm [&>a]:text-brand [&>a]:underline [&>a]:decoration-2 [&>a:hover]:text-brand">Artwork generated entirely with artificial intelligence from <a href="https://1secondpainting.com/">1SecondPainting</a>.</figcaption>
      </figure>

  </div>
</section>
    <article class="ghost-content prose md:prose-lg prose-theme">
      <p><strong>It's no exaggeration</strong> to say that artificial intelligence is having sweeping impacts on our world. From the way consumers interact with technology, to the increasingly AI-driven basis in which most businesses are operating today, artificial intelligence is everywhere. </p><p>It's <em>also </em>only going to become more pervasive in the coming years, as large companies like Amazon and Google continue their <a href="https://link.springer.com/article/10.1007/s00146-022-01423-0?ref=nicksaraev.com">veritable space race</a> to dominate the AI market.</p><p>Because of its massive social and cultural relevance, it's worth learning a little bit about it. That's what we're going to do in this article - tread through a few basic AI concepts to make your next discussion (or business project) more likely to succeed.</p><h2 id="artificial-intelligence-what-is-it">Artificial intelligence: what is it?</h2><p>To begin our discussion on basic AI concepts, let's first define artificial intelligence.</p><div class="kg-card kg-callout-card kg-callout-card-accent"><div class="kg-callout-emoji">💡</div><div class="kg-callout-text"><strong>Artificial intelligence</strong>: the theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages. (Oxford Dictionary)</div></div><p>Put simply, AI over the last sixty years has meant <strong>making our computers think more like humans</strong>. People are dynamic, flexible, and creative; computers, on the other hand, are incapable of doing more than following a set of very specific instructions. We want our systems to be more of the former and less of the latter.</p><p>With modern statistical techniques, this is possible. Today's <a href="https://en.wikipedia.org/wiki/Neural_network?ref=nicksaraev.com">neural network</a> based AI is inspired by, and in some respects already replicates, certain functions of the human brain. <a href="https://leap2grow.github.io/stylegan2-gpt3-duplex-replika-theres-no-going-back/">Though still limited in their capacity</a>, such nascent AI is definitive proof that we're moving towards flexible, autonomous systems.</p><figure class="kg-card kg-image-card"><img src="https://leap2grow.github.io/content/images/2022/03/jetsons.jpg" class="kg-image" alt loading="lazy" width="1400" height="1050" srcset="https://leap2grow.github.io/content/images/size/w600/2022/03/jetsons.jpg 600w, https://leap2grow.github.io/content/images/size/w1000/2022/03/jetsons.jpg 1000w, https://leap2grow.github.io/content/images/2022/03/jetsons.jpg 1400w" sizes="(min-width: 720px) 720px"></figure><h2 id="types-of-artificial-intelligence">Types of artificial intelligence</h2><p>The age-old adage of a walking, talking, feeling robot à la 'The Jetsons' is, unfortunately, still a ways away. Instead, artificial intelligence engineers, until now, have spent the bulk of their time focusing on building AI models that can perform <em>very </em>well within a hyper-defined, small field or niche. </p><p>Such artificial intelligences are termed <strong>narrow AI</strong>, because they are good at doing only a few specific things. Understanding basic AI concepts like narrow AI is crucial if you want to be able to make sense out of the next decade, so we're going to talk a little bit about it.</p><h3 id="narrow-artificial-intelligence">Narrow artificial intelligence</h3><p>The artificial intelligences of today do certain things <em>very</em> well and other things not at all; i.e, their utility is <strong>narrow</strong>. But don't be fooled into thinking that <strong>narrow</strong> means <strong>not impressive </strong>- today's narrow AI is responsible for the vast majority of human dealings on the Internet, by syndicating, curating, and monitoring content on social media platforms, and some could say it's already driving our culture.</p><p>Other narrow artificial intelligences already in use include computer vision models, which already outperform human beings at a variety of recognition and identification tasks using digital images or videos. We've also created <a href="https://openai.com/five/?ref=nicksaraev.com">narrow game models</a>, narrow language processing models, <a href="https://github.com/NVlabs/stylegan?ref=nicksaraev.com">narrow generative models</a>, and more. </p><p>Though these narrow artificial intelligences can certainly best a human in the activity they were specifically designed to do, they often struggle when faced with tasks that are even slightly different to the ones they were originally trained for. So despite their incredible performance on object recognition tasks, for example, a computer vision model can't (yet) write, talk, speak, or develop software, because this was not explicitly trained for.</p><h3 id="general-artificial-intelligence">General artificial intelligence</h3><p>Narrow artificial intelligence stands in contrast with its significantly more formidable cousin: <strong>general artificial intelligence</strong> (AGI). AGI is the stuff of science fiction, and is characterized by intelligence that is not narrowly focused on a specific task, but can instead handle a wide range of cognitive functions similar to (or better than) humans. This is one of the most important basic AI concepts to understand because of its catastrophic potential impact. </p><p>In theory, general AI would be capable of outperforming humans in just about every intellectual endeavor - including activities that are currently seen as the exclusive domain of human beings, such as creativity, strategic thinking, and social skills.</p><p>This is for several reasons. The biggest may be that human neural impulses are limited to travelling at <a href="https://nba.uth.tmc.edu/neuroscience/m/s1/chapter03.html?ref=nicksaraev.com#:~:text=A%20great%20variability%20is%20found,(0.22%20miles%20per%20hour).">~100 meters per second</a>, whereas the speed of conduction in an artificial mind is closer to <a href="https://www.google.com/search?q=speed+of+light&rlz=1C1GEWG_enCA957CA957&sxsrf=APq-WBuGFxUuJh2ecpeynT-X_I8eHAcCjg%3A1647306284512&ei=LOYvYvvmHoT49AO1-orYBQ&ved=0ahUKEwj7rLKP9sb2AhUEPH0KHTW9AlsQ4dUDCA4&uact=5&oq=speed+of+light&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEJECMgUIABCRAjIECAAQQzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIIxCxAhAnOgQIABAKSgQIQRgASgQIRhgAUKIBWKgGYOQGaAJwAXgAgAFciAG1ApIBATSYAQCgAQHIAQjAAQE&sclient=gws-wiz&ref=nicksaraev.com">300,000,000 meters per second</a> (the speed of light). </p><p>That's a <strong>3,000,000x</strong> speedup alone; meaning that if an AGI was theoretically <em>just</em> as smart as a human (and its mind was built in a similar way to ours), it would <em>still</em> be capable of accomplishing tasks close to three million times faster. A thousand or two human-level artificial intelligences could replace the economic value of our entire planet.</p><p>Another is that biological evolution may have left a fair amount on the table, optimization-wise. <a href="https://www.lesswrong.com/posts/xwBuoE9p8GE7RAuhd/brain-efficiency-much-more-than-you-wanted-to-know?ref=nicksaraev.com">There are good arguments to the contrary</a>, but many believe that <a href="https://en.wikipedia.org/wiki/Gradient_descent?ref=nicksaraev.com">gradient descent</a>, the main optimization algorithm employed by most statistical machine learning models today, probably optimizes neuron weights more efficiently than the way human brains do.</p><p>Which naturally leads to...</p><h3 id="the-singularity">The Singularity</h3><p><a href="https://www.nickbostrom.com/superintelligence.html?ref=nicksaraev.com">Many prominent scientists</a> believe such an AGI will be developed in the next few decades, and that it will have a devastating (or liberating) effect on humankind, going as far as to dub it the <a href="https://en.wikipedia.org/wiki/Technological_singularity?ref=nicksaraev.com"><strong>Singularity</strong></a>.</p><p>Perhaps the most apocryphal of basic AI concepts, the Singularity is the notion that once artificial intelligence surpasses human intelligence, it will rapidly evolve and improve at an accelerating rate, eventually leading to a point where humans will no longer be able to understand or control it.</p><p>Some proponents of the singularity believe this event will mark the end of humanity as we know it, while others see it as an opportunity for us to achieve a state of unimaginable prosperity and technological achievement.</p><p>If you assume a sufficiently rapid rate of technological improvement, it's not hard to see how a singularity could come about. In fact, some people believe it's already happening - with exponential increases in computing power and data storage, artificial intelligence is rapidly getting better at learning and problem solving. </p><p>AI is already <a href="https://openai.com/blog/openai-codex/?ref=nicksaraev.com">writing code</a>, <a href="https://www.bostondynamics.com/?ref=nicksaraev.com">learning to run</a>, and more - the gap between human and artificial intelligence is rapidly shrinking, and will continue to do so over the coming decades.</p><h3 id="where-ai-progress-is-today-foundation-models">Where AI progress is today: foundation models</h3><p>As we grow further into the digital age, models are growing less and less narrow. This has necessitated the invention of a new basic AI concept: the <strong><a href="https://arxiv.org/abs/2108.07258?ref=nicksaraev.com">foundation model</a></strong>.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://leap2grow.github.io/content/images/2022/03/image-1.png" class="kg-image" alt loading="lazy" width="1157" height="233" srcset="https://leap2grow.github.io/content/images/size/w600/2022/03/image-1.png 600w, https://leap2grow.github.io/content/images/size/w1000/2022/03/image-1.png 1000w, https://leap2grow.github.io/content/images/2022/03/image-1.png 1157w" sizes="(min-width: 720px) 720px"><figcaption>From "<a href="https://arxiv.org/pdf/2108.07258.pdf?ref=nicksaraev.com">On the Opportunities and Risks of Foundation Models</a>"</figcaption></figure><p>Foundation models are chiefly distinguished by their adaptability; whereas narrow AI is restricted to one or a small set of very specific tasks, foundation models are beginning to achieve multimodality: the ability to understand a diverse medium of data (like text, images, <em>and </em>video simultaneously) rather than just the one it was explicitly encoded for.</p><p>The most recent (and perhaps impactful) development of the sort is in <strong>natural language processing</strong>, a subfield of AI that deals with teaching computers how to understand human language. </p><p><a href="https://openai.com/blog/openai-api/?ref=nicksaraev.com">GPT-3</a>, a model released by <a href="https://openai.com/?ref=nicksaraev.com">OpenAI</a> in late 2019, was initially trained for a single task - understanding and generating text. However, after being released to the Internet, users quickly found that it far exceeded its initial training set; <a href="https://www.nytimes.com/2020/11/24/science/artificial-intelligence-ai-gpt3.html?ref=nicksaraev.com">GPT-3 can do math, understand logic, and, with some tweaks, even create images</a> with a high degree of fluency. Not to mention its original task - text generation - is oftentimes indistinguishable from human writing.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://leap2grow.github.io/content/images/2022/03/openai-cover.png" class="kg-image" alt loading="lazy" width="2000" height="1125" srcset="https://leap2grow.github.io/content/images/size/w600/2022/03/openai-cover.png 600w, https://leap2grow.github.io/content/images/size/w1000/2022/03/openai-cover.png 1000w, https://leap2grow.github.io/content/images/size/w1600/2022/03/openai-cover.png 1600w, https://leap2grow.github.io/content/images/2022/03/openai-cover.png 2400w" sizes="(min-width: 720px) 720px"><figcaption><a href="https://openai.com/?ref=nicksaraev.com">OpenAI</a>, the developers of GPT-3.</figcaption></figure><p>To illustrate this, I wrote this article, in part, using GPT-3. It excels at explaining straightforward topics in an easy-to-understand way, and though there are (at times) factual inaccuracies, it significantly improves the speed at which one can create. </p><p>You can liken the usage of such a tool to the <a href="https://en.wikipedia.org/wiki/Power_loom?ref=nicksaraev.com">power loom</a> during the industrial revolution - the efficiency of a single weaver (or writer) is instantly multiplied by a dozen or more times. Instead of having to do the grunt work, you're involved more in <em>steering the result where you want it to go</em>. Over the next ten to twenty years, it's suspected that many large industries (driving, advertising, and marketing, to name a few) will follow suit, and this will have significant impacts on the labor market.</p><h2 id="the-mathematics-of-artificial-intelligence">The mathematics of artificial intelligence</h2><p>Far from a basic AI concept, the mathematics that underpin artificial intelligence are diverse and complex. Though beyond the scope of this article, it's important to understand that AI math really consists of a wide range of concepts and tools, from linear algebra, to probability and statistics, to game theory, and more. We'll cover the first two - linear algebra and statistics - in brief below.</p><h3 id="linear-algebra">Linear algebra</h3><p>Linear algebra is important for AI because it provides a way to model relationships between data points. In particular, linear algebra allows agents to represent data in terms of <a href="https://en.wikipedia.org/wiki/Matrix_(mathematics)?ref=nicksaraev.com">vectors and matrices</a>, and extend this notion to higher dimensions. </p><p>Matrices are at the crux of how agents identify patterns and relationships in data. Almost all machine learning can reasonably be described as matrix operations - <a href="https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)?ref=nicksaraev.com">the Transformer architecture underlying GPT-3</a>, for example, is nothing but large matrices multiplied together several times to produce another matrix that describes a sentence.</p><p>That said, linear algebra can do very little without statistics &amp; probability. Because the way your algorithm is <em>trained, </em>i.e, statistically optimized, is at the root of how models learn.</p><h3 id="probability-and-statistics">Probability and statistics</h3><p>Probability and statistics are essential artificial intelligence basis to understand. Any AI system that needs to make decisions based on data, and <em>then update based on those decisions, heavily </em>relies on both concepts.</p><p>Probability provides a way to quantify uncertainty, while statistics allows agents to analyze data and draw conclusions from it - even data that may not traditionally seem 'analyzable', like words, images, or sounds.</p><p>In particular, two concepts in statistics are important to understand: optimization and Bayes' theorem. Optimization refers to the notion of iteratively improving an estimate through the use of approximation methods like <a href="https://towardsdatascience.com/gradient-descent-algorithm-a-deep-dive-cf04e8115f21?ref=nicksaraev.com#:~:text=Gradient%20descent%20(GD)%20is%20an,e.g.%20in%20a%20linear%20regression).">gradient descent</a>.</p><p><a href="https://en.wikipedia.org/wiki/Bayes%27_theorem?ref=nicksaraev.com">Bayes' theorem</a> is a way of applying probability to conditional statements. This is important for AI because it allows agents to update their beliefs about the world as they receive new information. </p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://leap2grow.github.io/content/images/2022/03/s25RsOr---Imgur.gif" class="kg-image" alt loading="lazy" width="513" height="512"><figcaption>A series of animations from Alec Radford showing how optimization updates towards the end result.</figcaption></figure><p>Optimization and Bayes' theorem both work together to provide systems with a way of <em>moving in the right direction</em>, so to speak. You get 'closer' to the desired result by moving in a direction, calculating your distance to the end result, and then moving again in a way that makes that distance smaller.</p><h3 id="basic-ai-concepts-where-do-i-go-from-here">Basic AI concepts: where do I go from here?</h3><p>At this point, you should have a reasonable understanding of some of the core basic AI concepts, including narrow AI, AGI, the Singularity, and the mathematics required to do AI. If you're interested in learning more, I'd recommend checking out some of the following resources:</p><ul><li><strong><a href="http://themlbook.com/?ref=nicksaraev.com">The 100 Page Machine Learning Book by Andriy Burkov</a>: </strong>This online resource provides concise explanations of a wide range of artificial intelligence basics, and is pivotal if you wish to develop an understanding of the statistical side of AI; i.e machine learning.</li><li><strong><a href="https://www.coursera.org/learn/ai-for-everyone?ref=nicksaraev.com">AI for Everyone</a></strong>: Though non-technical in nature, free online course from Andrew Ng provides a more comprehensive introduction to many of the basic AI concepts we've discussed here.</li><li><strong><a href="https://leap2grow.github.io/">This blog</a></strong>: Over the coming weeks and months, I'm going to be creating in-depth resources on how to get up and running with AI (moreso than the basic AI concepts covered here). We'll learn how to create AI artwork, how AI text generation works, why AI deepfakes aren't that big of a deal, and more, and I'm going to keep it palatable to a wide audience while also offering the opportunity for people to go deeper if interested.</li></ul>
    </article>

    <div class="px-4 sm:px-6 mb-12">
    <div class="pt-8 text-typ text-sm font-medium max-w-content mx-auto flex gap-3 md:gap-4 justify-center flex-wrap items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-fading" 
      data-share >
      <span class="text-base flex-1 basis-full sm:basis-auto text-center sm:text-left">Share</span>

      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://twitter.com/share?text=Basic%20concepts%20in%20artificial%20intelligence&amp;url=https://leap2grow.github.io/basic-ai-concepts/"
          title="Share on X" aria-label="Share">
        <i class="icon icon-twitter-x size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
</svg>
</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://bsky.app/intent/compose?text=Basic%20concepts%20in%20artificial%20intelligence%20https://leap2grow.github.io/basic-ai-concepts/"
          title="Share on Bluesky" aria-label="Share">
        <i class="icon icon-brand-bluesky size-4 stroke-2">
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.facebook.com/sharer.php?u=https://leap2grow.github.io/basic-ai-concepts/"
          title="Share on Facebook" aria-label="Share">
        <i class="icon icon-facebook size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>



</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://leap2grow.github.io/basic-ai-concepts/&title=Basic%20concepts%20in%20artificial%20intelligence&summary=Basic%20concepts%20in%20artificial%20intelligence"
          title="Share on Linkedin" aria-label="Share">
        <i class="icon icon-linkedin size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
  <rect x="2" y="9" width="4" height="12"></rect>
  <circle cx="4" cy="4" r="2"></circle>
</svg>
</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" data-share-mail
          href="mailto:?subject=Basic%20concepts%20in%20artificial%20intelligence&body=https://leap2grow.github.io/basic-ai-concepts/&nbsp;Basic%20concepts%20in%20artificial%20intelligence"
          title="Share by email" aria-label="Email">
        <i class="icon icon-mail size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
</i>        <span class="">Email</span>
      </a>
      <button class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" data-share-copy data-url="https://leap2grow.github.io/basic-ai-concepts/"
          title="Copy URL" data-label="Copy" data-success="Copied!" aria-label="Copy" data-class="text-success !border-success"
          @click="copyURL(event.currentTarget, event.currentTarget.getAttribute('data-url'))">
        <i class="icon icon-link size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M9 15l6 -6"></path>
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
</svg>
</i>        <span class="">Copy</span>
      </button>
    </div>
  </div>

  
      <section class="px-4 sm:px-6 mb-12" data-related="posts">
        <div class="max-w-container mx-auto">
          <h2 class="text-xl md:text-2xl font-semibold mb-4">Read next</h2>

          <div class="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              <article class="post tag-ftr  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/what-movies-about-artificial-intelligence-routinely-get-wrong/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2022/07/DALL-E-2022-07-28-11.07.32---a-human-and-a-robot-looking-sadly-at-eachother-across-a-field--digital-art.png 320w, /content/images/size/w640/format/webp/2022/07/DALL-E-2022-07-28-11.07.32---a-human-and-a-robot-looking-sadly-at-eachother-across-a-field--digital-art.png 600w, /content/images/size/w960/format/webp/2022/07/DALL-E-2022-07-28-11.07.32---a-human-and-a-robot-looking-sadly-at-eachother-across-a-field--digital-art.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2022/07/DALL-E-2022-07-28-11.07.32---a-human-and-a-robot-looking-sadly-at-eachother-across-a-field--digital-art.png 320w, /content/images/size/w640/format/webp/2022/07/DALL-E-2022-07-28-11.07.32---a-human-and-a-robot-looking-sadly-at-eachother-across-a-field--digital-art.png 600w, /content/images/size/w960/format/webp/2022/07/DALL-E-2022-07-28-11.07.32---a-human-and-a-robot-looking-sadly-at-eachother-across-a-field--digital-art.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2022/07/DALL-E-2022-07-28-11.07.32---a-human-and-a-robot-looking-sadly-at-eachother-across-a-field--digital-art.png"
    alt="What movies about artificial intelligence routinely get wrong"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/ftr/" class="hover:text-brand">Futurology</a>
      
        <span class="">·</span>

      <time class="" datetime="2022-07-28">Jul 28, 2022</time> 

      <span class="flex-1"></span>


    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/what-movies-about-artificial-intelligence-routinely-get-wrong/" class="">What movies about artificial intelligence routinely get wrong</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        The misleading (and sometimes dangerous) tropes you need to watch out for.
      </p>

    <ul class="flex gap-3 text-sm font-medium mt-2" data-post-card-authors>
        <li>
          <a href="/author/nickolas/" class="flex gap-1.5 items-center hover:text-brand">
              <picture  >
  <source 
    srcset="/content/images/size/w30/format/webp/2024/02/social_media-3.png 30w, /content/images/size/w100/format/webp/2024/02/social_media-3.png 100w"
    sizes="24px"
    type="image/webp"
  >
  <img class="size-6 object-cover rounded-full will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w30/format/webp/2024/02/social_media-3.png 30w, /content/images/size/w100/format/webp/2024/02/social_media-3.png 100w"
    sizes="24px"
    src="/content/images/size/w30/2024/02/social_media-3.png"
    alt=""
    
  />
</picture>
            <span>Nick Saraev</span>
          </a>
        </li>
    </ul>
  </div>
</article>              <article class="post tag-ftr  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/the-ai-paradox/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2022/06/5f5f90a8-4844-4dee-9398-68704490d479.png 320w, /content/images/size/w640/format/webp/2022/06/5f5f90a8-4844-4dee-9398-68704490d479.png 600w, /content/images/size/w960/format/webp/2022/06/5f5f90a8-4844-4dee-9398-68704490d479.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2022/06/5f5f90a8-4844-4dee-9398-68704490d479.png 320w, /content/images/size/w640/format/webp/2022/06/5f5f90a8-4844-4dee-9398-68704490d479.png 600w, /content/images/size/w960/format/webp/2022/06/5f5f90a8-4844-4dee-9398-68704490d479.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2022/06/5f5f90a8-4844-4dee-9398-68704490d479.png"
    alt="Why is AI advancing so rapidly in language &amp; art?"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/ftr/" class="hover:text-brand">Futurology</a>
      
        <span class="">·</span>

      <time class="" datetime="2022-06-19">Jun 19, 2022</time> 

      <span class="flex-1"></span>


    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/the-ai-paradox/" class="">Why is AI advancing so rapidly in language &amp; art?</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        The paradox at the heart of why machines are growing exponentially more intelligent.
      </p>

    <ul class="flex gap-3 text-sm font-medium mt-2" data-post-card-authors>
        <li>
          <a href="/author/nickolas/" class="flex gap-1.5 items-center hover:text-brand">
              <picture  >
  <source 
    srcset="/content/images/size/w30/format/webp/2024/02/social_media-3.png 30w, /content/images/size/w100/format/webp/2024/02/social_media-3.png 100w"
    sizes="24px"
    type="image/webp"
  >
  <img class="size-6 object-cover rounded-full will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w30/format/webp/2024/02/social_media-3.png 30w, /content/images/size/w100/format/webp/2024/02/social_media-3.png 100w"
    sizes="24px"
    src="/content/images/size/w30/2024/02/social_media-3.png"
    alt=""
    
  />
</picture>
            <span>Nick Saraev</span>
          </a>
        </li>
    </ul>
  </div>
</article>              <article class="post tag-ftr  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/we-really-dont-know-so-lets-stop-pretending-that-we-do/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2022/06/photo-1507146153580-69a1fe6d8aa1.jpg 320w, /content/images/size/w640/format/webp/2022/06/photo-1507146153580-69a1fe6d8aa1.jpg 600w, /content/images/size/w960/format/webp/2022/06/photo-1507146153580-69a1fe6d8aa1.jpg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2022/06/photo-1507146153580-69a1fe6d8aa1.jpg 320w, /content/images/size/w640/format/webp/2022/06/photo-1507146153580-69a1fe6d8aa1.jpg 600w, /content/images/size/w960/format/webp/2022/06/photo-1507146153580-69a1fe6d8aa1.jpg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2022/06/photo-1507146153580-69a1fe6d8aa1.jpg"
    alt="We really don&#x27;t know what makes things sentient—so let&#x27;s stop acting like we do"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/ftr/" class="hover:text-brand">Futurology</a>
      
        <span class="">·</span>

      <time class="" datetime="2022-06-12">Jun 12, 2022</time> 

      <span class="flex-1"></span>


    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/we-really-dont-know-so-lets-stop-pretending-that-we-do/" class="">We really don&#x27;t know what makes things sentient—so let&#x27;s stop acting like we do</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        Sentience is a neuroscience question, not a machine learning one.
      </p>

    <ul class="flex gap-3 text-sm font-medium mt-2" data-post-card-authors>
        <li>
          <a href="/author/nickolas/" class="flex gap-1.5 items-center hover:text-brand">
              <picture  >
  <source 
    srcset="/content/images/size/w30/format/webp/2024/02/social_media-3.png 30w, /content/images/size/w100/format/webp/2024/02/social_media-3.png 100w"
    sizes="24px"
    type="image/webp"
  >
  <img class="size-6 object-cover rounded-full will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w30/format/webp/2024/02/social_media-3.png 30w, /content/images/size/w100/format/webp/2024/02/social_media-3.png 100w"
    sizes="24px"
    src="/content/images/size/w30/2024/02/social_media-3.png"
    alt=""
    
  />
</picture>
            <span>Nick Saraev</span>
          </a>
        </li>
    </ul>
  </div>
</article>          </div>
        </div>
      </section>

    </main>

    

    <footer class="px-4 sm:px-6 bg-bgr mt-16" data-footer>
  <div class="max-w-container mx-auto relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-fading">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-8 md:gap-8 md:py-12">
      <div class="flex flex-col items-start gap-3 col-span-2 md:col-span-1 lg:col-span-2" data-footer-brand>
        <a href="https://leap2grow.github.io" data-brand>
            <picture  data-logo='dark'>
  <source 
    srcset="/content/images/size/w100/format/webp/2025/01/Untitled-design--12--1.png 100w, /content/images/size/w320/format/webp/2025/01/Untitled-design--12--1.png 320w, /content/images/size/w640/format/webp/2025/01/Untitled-design--12--1.png 600w"
    sizes="(max-width: 800px) 200px, 320px"
    type="image/webp"
  >
  <img class="h-[var(--logo-h-mobile)] w-[var(--logo-w-mobile)] md:h-[var(--logo-h-desktop)] md:w-[var(--logo-w-desktop)] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w100/format/webp/2025/01/Untitled-design--12--1.png 100w, /content/images/size/w320/format/webp/2025/01/Untitled-design--12--1.png 320w, /content/images/size/w640/format/webp/2025/01/Untitled-design--12--1.png 600w"
    sizes="(max-width: 800px) 200px, 320px"
    src="/content/images/size/w30/2025/01/Untitled-design--12--1.png"
    alt="Nick Saraev"
    
  />
</picture>
  <picture  data-logo='default'>
  <source 
    srcset="/content/images/size/w100/format/webp/2025/01/Untitled-design--12-.png 100w, /content/images/size/w320/format/webp/2025/01/Untitled-design--12-.png 320w, /content/images/size/w640/format/webp/2025/01/Untitled-design--12-.png 600w"
    sizes="(max-width: 800px) 200px, 320px"
    type="image/webp"
  >
  <img class="h-[var(--logo-h-mobile)] w-[var(--logo-w-mobile)] md:h-[var(--logo-h-desktop)] md:w-[var(--logo-w-desktop)] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w100/format/webp/2025/01/Untitled-design--12-.png 100w, /content/images/size/w320/format/webp/2025/01/Untitled-design--12-.png 320w, /content/images/size/w640/format/webp/2025/01/Untitled-design--12-.png 600w"
    sizes="(max-width: 800px) 200px, 320px"
    src="/content/images/size/w30/2025/01/Untitled-design--12-.png"
    alt="Nick Saraev"
    
  />
</picture>
        </a>

        <p class="text-typ-tone">Nick Saraev&#x27;s AI &amp; automation blog, where he documents his thoughts and shows people his journey to $2M/yr in annual profit.</p>

        
<nav class="flex items-center gap-2 text-typ-tone text-base" data-socials="footer" x-data="socials">

    <a href="https://www.facebook.com/nick.john.wells" class="p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Facebook"><i class="icon icon-facebook w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>



</i><span class="sr-only">Facebook</span></a>

    <a href="https://x.com/nicksaraev" class="p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Twitter"><i class="icon icon-twitter-x w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
</svg>
</i><span class="sr-only">Twitter</span></a>

  <a :href="rss" :class="rss && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="RSS"><i class="icon icon-rss w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rss" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="19" r="1" />
  <path d="M4 4a16 16 0 0 1 16 16" />
  <path d="M4 11a9 9 0 0 1 9 9" />
</svg>



</i><span class="sr-only">RSS</span></a>
  
  <a :href="bluesky" :class="bluesky && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Bluesky"><i class="icon icon-brand-bluesky w-4 h-4 stroke-2 stroke-2">
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
</i><span class="sr-only">Bluesky</span></a>

  <a :href="threads" :class="threads && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Threads"><i class="icon icon-threads w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-threads">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1" />
</svg>
</i><span class="sr-only">Threads</span></a>

  <a :href="linkedin" :class="linkedin && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Linkedin"><i class="icon icon-linkedin w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
  <rect x="2" y="9" width="4" height="12"></rect>
  <circle cx="4" cy="4" r="2"></circle>
</svg>
</i><span class="sr-only">Linkedin</span></a>

  <a :href="discord" :class="discord && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Discord"><i class="icon icon-discord w-4 h-4 stroke-2 stroke-2">
  
</i><span class="sr-only">Discord</span></a>

  <a :href="github" :class="github && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Github"><i class="icon icon-github w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/brand-github</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
</svg>



</i><span class="sr-only">Github</span></a>

  <a :href="instagram" :class="instagram && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Instagram"><i class="icon icon-instagram w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/brand-instagram</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="4" />
  <circle cx="12" cy="12" r="3" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
</svg>



</i><span class="sr-only">Instagram</span></a>

  <a :href="pinterest" :class="pinterest && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Pinterest"><i class="icon icon-pinterest w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-pinterest" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="20" x2="12" y2="11" />
  <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
  <circle cx="12" cy="12" r="9" />
</svg>



</i><span class="sr-only">Pinterest</span></a>

  <a :href="reddit" :class="reddit && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Reddit"><i class="icon icon-reddit w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-reddit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
  <path d="M12 8l1 -5l6 1" />
  <circle cx="19" cy="4" r="1" />
  <circle cx="9" cy="13" r=".5" fill="currentColor" />
  <circle cx="15" cy="13" r=".5" fill="currentColor" />
  <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
</svg>



</i><span class="sr-only">Reddit</span></a>

  <a :href="telegram" :class="telegram && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Telegram"><i class="icon icon-telegram w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/brand-telegram</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
</svg>



</i><span class="sr-only">Telegram</span></a>

  <a :href="tiktok" :class="tiktok && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Tiktok"><i class="icon icon-tiktok w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/brand-tiktok</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
</svg>



</i><span class="sr-only">Tiktok</span></a>

  <a :href="whatsapp" :class="whatsapp && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Whatsapp"><i class="icon icon-whatsapp w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/brand-whatsapp</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
  <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
</svg>



</i><span class="sr-only">Whatsapp</span></a>

  <a :href="youtube" :class="youtube && '!block'" class="hidden p-2 border border-brd bg-bgr rounded-theme hover:bg-bgr-tone hover:text-brand hover:border-brand" aria-label="Youtube"><i class="icon icon-youtube w-4 h-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/brand-youtube</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="4" />
  <path d="M10 9l5 3l-5 3z" />
</svg>



</i><span class="sr-only">Youtube</span></a>

</nav>

      </div>

      <span class="hidden lg:block"></span>

      <div class="flex flex-col gap-2 mt-2" data-footer-nav="primary">
        <span class="font-semibold">Nick Saraev</span>
        <nav class="">
          <ul class="flex flex-col items-start gap-2 text-typ-tone text-sm">
    <li class="nav-about flex flex-col relative is-toggle nav-toggle" 
      data-label="About" data-slug="about" data-length="5">
      <a class="flex hover:text-brand" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>About</span>
      </a>
    </li>
    <li class="nav-who-is-nick-saraev flex flex-col relative is-subitem" 
      data-label="- Who is Nick Saraev?" data-slug="who-is-nick-saraev" data-length="21">
      <a class="flex hover:text-brand" href="https://leap2grow.github.io/about/" 
        >
        <span>- Who is Nick Saraev?</span>
      </a>
    </li>
    <li class="nav-biography flex flex-col relative is-subitem" 
      data-label="- Biography" data-slug="biography" data-length="11">
      <a class="flex hover:text-brand" href="https://leap2grow.github.io/biography/" 
        >
        <span>- Biography</span>
      </a>
    </li>
    <li class="nav-products flex flex-col relative is-toggle nav-toggle" 
      data-label="Products" data-slug="products" data-length="8">
      <a class="flex hover:text-brand" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Products</span>
      </a>
    </li>
    <li class="nav-maker-school flex flex-col relative is-subitem" 
      data-label="- Maker School" data-slug="maker-school" data-length="14">
      <a class="flex hover:text-brand" href="https://www.skool.com/makerschool/about" 
        >
        <span>- Maker School</span>
      </a>
    </li>
    <li class="nav-mmwm flex flex-col relative is-subitem" 
      data-label="- MMWM" data-slug="mmwm" data-length="6">
      <a class="flex hover:text-brand" href="https://www.skool.com/makemoneywithmake/about" 
        >
        <span>- MMWM</span>
      </a>
    </li>
    <li class="nav-free-courses flex flex-col relative is-toggle nav-toggle" 
      data-label="Free Courses" data-slug="free-courses" data-length="12">
      <a class="flex hover:text-brand" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Free Courses</span>
      </a>
    </li>
    <li class="nav-n8n-full-course-6hrs flex flex-col relative is-subitem" 
      data-label="- N8N Full Course (6hrs)" data-slug="n8n-full-course-6hrs" data-length="24">
      <a class="flex hover:text-brand" href="https://leap2grow.github.io/" 
        >
        <span>- N8N Full Course (6hrs)</span>
      </a>
    </li>
    <li class="nav-make-com-for-making-money-57hrs flex flex-col relative is-subitem" 
      data-label="- Make.com for Making Money (57hrs)" data-slug="make-com-for-making-money-57hrs" data-length="35">
      <a class="flex hover:text-brand" href="https://www.youtube.com/watch?v=PjKHs-L6Sn4&list=PLSbQllRagIuSuiPQzqcNNbst3IWs58vDF" 
        >
        <span>- Make.com for Making Money (57hrs)</span>
      </a>
    </li>
    <li class="nav-build-scale-an-automation-agency-16hrs flex flex-col relative is-subitem" 
      data-label="- Build &amp; Scale an Automation Agency (16hrs)" data-slug="build-scale-an-automation-agency-16hrs" data-length="44">
      <a class="flex hover:text-brand" href="https://www.youtube.com/watch?v=T7qAiuWDwLw&list=PLSbQllRagIuSxGY2QGlfghPHDfTbnOG5S" 
        >
        <span>- Build &amp; Scale an Automation Agency (16hrs)</span>
      </a>
    </li>
    <li class="nav-resources flex flex-col relative is-toggle nav-toggle" 
      data-label="Resources" data-slug="resources" data-length="9">
      <a class="flex hover:text-brand" href="#" 
        @click="toggleSubmenu(event);return false;">
        <span>Resources</span>
      </a>
    </li>
    <li class="nav-journal-entries flex flex-col relative is-subitem" 
      data-label="- Journal Entries" data-slug="journal-entries" data-length="17">
      <a class="flex hover:text-brand" href="https://leap2grow.github.io/tag/lfimpr/" 
        >
        <span>- Journal Entries</span>
      </a>
    </li>
    <li class="nav-youtube-channel flex flex-col relative is-subitem" 
      data-label="- YouTube Channel" data-slug="youtube-channel" data-length="17">
      <a class="flex hover:text-brand" href="https://youtube.com/@nicksaraev" 
        >
        <span>- YouTube Channel</span>
      </a>
    </li>
    <li class="nav-twitter-x flex flex-col relative is-subitem" 
      data-label="- Twitter/X" data-slug="twitter-x" data-length="11">
      <a class="flex hover:text-brand" href="https://x.com/nicksaraev" 
        >
        <span>- Twitter/X</span>
      </a>
    </li>
</ul>
        </nav>
      </div>


            <div class="flex flex-col gap-2 mt-2" data-footer-nav="categories">
              <span class="font-semibold">Categories</span>
              <nav class="">
                <ul class="flex flex-col items-start gap-2 text-typ-tone text-sm">
                    <li class="flex flex-col relative">
                      <a href="/tag/agencystrategy/" class="flex hover:text-brand">Agency Strategy</a>
                    </li>
                    <li class="flex flex-col relative">
                      <a href="/tag/cusp/" class="flex hover:text-brand">The Cusp Newsletter</a>
                    </li>
                    <li class="flex flex-col relative">
                      <a href="/tag/ftr/" class="flex hover:text-brand">Futurology</a>
                    </li>
                    <li class="flex flex-col relative">
                      <a href="/tag/lfimpr/" class="flex hover:text-brand">Life Improvement</a>
                    </li>
                    <li class="flex flex-col relative">
                      <a href="/tag/msc/" class="flex hover:text-brand">Miscellaneous</a>
                    </li>
                    <li class="flex flex-col relative">
                      <a href="/tag/building-in-public/" class="flex hover:text-brand">Building in Public</a>
                    </li>
                </ul>
              </nav>
            </div>
    </div>


    <div class="py-4 md:py-6 flex flex-wrap items-center gap-2 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-fading">
      <div class="text-sm text-typ-tone">
        <span data-footer-date>&copy;2025&nbsp;<a class="hover:underline" href="https://leap2grow.github.io">Nick Saraev</a>.</span>
        <span data-footer-ghost>Published with&nbsp;<a class="hover:underline" href="https://ghost.org">Ghost</a></span>
        <span data-footer-theme>&&nbsp;<a class="hover:underline" href="https://brightthemes.com/themes/flair">Flair</a>.</span>
      </div>

      <button class="flex gap-0.5 p-[3px] border border-brd text-typ-tone rounded-theme hover:bg-bgr-tone" aria-label="Toggle color scheme"
  data-color-scheme-toggle @click="toggleColorScheme(event)">
  <span data-theme="light" class="px-[5px] py-0.5 border border-transparent opacity-50 rounded-theme">
    <i class="icon icon-sun size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
  <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
  <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
  <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
  <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
  <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
  <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
  <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
  <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
</svg>
</i>  </span>
  <span data-theme="dark" class="px-[5px] py-0.5 border border-transparent opacity-50 rounded-theme">
    <i class="icon icon-moon size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" stroke-width="0" fill="currentColor" />
</svg>
</i>  </span>
</button>    </div>
  </div>
</footer>
      <template data-toggle-template>
    <button class="ml-0.5" data-class="rotate-180" title="Menu toggle" aria-label="Menu toggle"
      aria-controls="" aria-expanded="false" @click="toggleSubmenu(event)"
    >
      <i class="icon icon-chevron-down size-4 stroke-2 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <polyline points="6 9 12 15 18 9"></polyline>
</svg>
</i>    </button>
  </template>
  <script>
    function renderSubmenus() {
      const navItems = document.querySelectorAll('[data-nav] li')
      const subItems = document.querySelectorAll('.is-subitem')
      const mobileClass = "hidden pl-4 flex flex-col gap-0.5 py-1 px-1.5 basis-full"
      const desktopClass = "z-[50] min-w-[calc(100%_+_24px)] absolute flex flex-col gap-1 shadow-2xl border border-brd rounded-theme-xxs bg-bgr py-2 px-1.5 -ml-2 mt-11 opacity-0 invisible translate-y-1 transition-all"

      // Remove '-' signs
      subItems.forEach(item => {
        const itemName = item.querySelector('a span')
        itemName.innerText = itemName.innerText.slice(1)
      });

      // Add subitems in place
      let subMenu, hasItems
      navItems.forEach((item, index) => {
        if (item.classList.contains('is-subitem') && !navItems[index - 1].classList.contains('is-subitem')) {
          navItems[index - 1].classList.add('is-mainitem'); 
          navItems[index - 1].setAttribute('x-on:click.outside', 'closeSubmenus(event)')
        }
        subMenu = item.classList.contains('is-subitem') ? subMenu : document.createElement('ul');
        if (item.classList.contains('is-subitem')) { 
          subMenu.appendChild(item)
          subMenu.setAttribute('data-submenu', '')
          subMenu.getAttribute('id') === null ? subMenu.setAttribute('id', navItems[index - 1].getAttribute('data-slug')) : ''
          const menuType = subMenu.closest('nav').getAttribute('data-nav')
          subMenu.classList = menuType === 'desktop' ? desktopClass : mobileClass
        } else { 
          item.appendChild(subMenu)
        }
      });

      const dropdownMenus = document.querySelectorAll('[data-nav] .is-mainitem')
      const toggle = document.querySelector('[data-toggle-template]');

      dropdownMenus.forEach(menu => { 
        const toggleBtn = toggle.content.firstElementChild.cloneNode(true);
        toggleBtn.setAttribute('aria-controls', menu.getAttribute('data-slug'))
        menu.insertBefore(toggleBtn, menu.children[1]);
      });
    }
  </script>

  <script>
    window.socials = {
      rss: '/rss',
      threads: '',
      linkedin: '',
      discord: '',
      github: '',
      instagram: '',
      pinterest: '',
      reddit: '',
      telegram: '',
      tiktok: '',
      whatsapp: '',
      youtube: ''
    }

    document.addEventListener('alpine:init', () => {
      Alpine.data('socials', () => (window.socials))
    })
  </script>


    <!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "5f1d000a3dcb4a08a43311eddd56b003"}'></script>
<!-- End Cloudflare Web Analytics -->

<script src="https://widget.senja.io/widget/d249f63b-7740-4580-9553-65c87bb7bc34/platform.js" type="text/javascript" async></script>
<script src="https://widget.senja.io/widget/1d479adc-a691-464b-8265-d104d8135af5/platform.js" type="text/javascript" async></script>

<script>
  
  // Code injection for Ghost.org theme

  // First, replace "page" links with Skool links 
  const ms = document.querySelector('a[href="/maker-school-2/"]')
  const mmwm = document.querySelector('a[href="/make-money-with-make/"]')
  ms.href = 'https://www.skool.com/makerschool/about';
  mmwm.href = 'https://www.skool.com/makemoneywithmake/about';

  /* Then add hero image
  document.querySelector("div[data-hero-content]")?.insertAdjacentHTML("beforebegin", `
    <div style="margin: -10px"><img src="https://i.imgur.com/GOWoqRf.png"></img></div>
  `);
  */

  // Then, add Senja embeds for social proof
  document.querySelector("form[data-members-form]")?.insertAdjacentHTML("afterend", `
    <div class="senja-embed" data-id="d249f63b-7740-4580-9553-65c87bb7bc34" data-mode="shadow" data-lazyload="false" style="display: block; margin-top: 10px"></div>
  `);

  // Lastly, hide miscellaneous elements I don't want
  document.querySelector("button[data-ghost-search]").style.display = "none";  
  
</script> <!-- If you want to use AI in your business, but don't have a formal math/software background, I'm writing a series of guides on how to get up and running. Here's vol #1. -->

In this series of volumes, I cover ways to use AI in your business.
  </body>
</html>
