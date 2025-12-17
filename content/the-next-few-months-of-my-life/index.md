<!DOCTYPE html>
<html lang="en" data-color-scheme="system" class="scroll-smooth">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>The next few months of my life</title>

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







    <script type="module" src="https://leap2grow.github.io/assets/built/app.js?v=7380097362"></script>

    <link rel="stylesheet" type="text/css" href="https://leap2grow.github.io/assets/built/app.css?v=7380097362" />

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
    

    <link rel="icon" href="https://leap2grow.github.io/content/images/size/w256h256/2024/02/social_media.png" type="image/png">
    <link rel="canonical" href="https://leap2grow.github.io/the-next-few-months-of-my-life/">
    <meta name="referrer" content="no-referrer-when-downgrade">
    
    <meta property="og:site_name" content="Nick Saraev">
    <meta property="og:type" content="article">
    <meta property="og:title" content="The next few months of my life">
    <meta property="og:description" content="It&#x27;s that time again. Today I’m going to write a long, meandering journal entry that covers, in-depth, what I am going to do with the next few months of my life.

It’ll include thoughts on the trajectory of my career, ROI calculations, a breakdown of how I’m">
    <meta property="og:url" content="https://leap2grow.github.io/the-next-few-months-of-my-life/">
    <meta property="og:image" content="https://leap2grow.github.io/content/images/size/w1200/2025/07/maxresdefault--2-.jpg">
    <meta property="article:published_time" content="2025-07-29T19:51:36.000Z">
    <meta property="article:modified_time" content="2025-10-29T01:41:37.000Z">
    <meta property="article:tag" content="Life Improvement">
    
    <meta property="article:publisher" content="https://www.facebook.com/nick.john.wells">
    <meta property="article:author" content="https://www.facebook.com/nick.john.wells/">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="The next few months of my life">
    <meta name="twitter:description" content="It&#x27;s that time again. Today I’m going to write a long, meandering journal entry that covers, in-depth, what I am going to do with the next few months of my life.

It’ll include thoughts on the trajectory of my career, ROI calculations, a breakdown of how I’m">
    <meta name="twitter:url" content="https://leap2grow.github.io/the-next-few-months-of-my-life/">
    <meta name="twitter:image" content="https://leap2grow.github.io/content/images/size/w1200/2025/07/maxresdefault--2-.jpg">
    <meta name="twitter:label1" content="Written by">
    <meta name="twitter:data1" content="Nick Saraev">
    <meta name="twitter:label2" content="Filed under">
    <meta name="twitter:data2" content="Life Improvement">
    <meta name="twitter:site" content="@nicksaraev">
    <meta name="twitter:creator" content="@nicksaraev">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="675">
    
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
    "headline": "The next few months of my life",
    "url": "https://leap2grow.github.io/the-next-few-months-of-my-life/",
    "datePublished": "2025-07-29T19:51:36.000Z",
    "dateModified": "2025-10-29T01:41:37.000Z",
    "image": {
        "@type": "ImageObject",
        "url": "https://leap2grow.github.io/content/images/size/w1200/2025/07/maxresdefault--2-.jpg",
        "width": 1200,
        "height": 675
    },
    "keywords": "Life Improvement",
    "description": "It&#x27;s that time again. Today I’m going to write a long, meandering journal entry that covers, in-depth, what I am going to do with the next few months of my life.\n\nIt’ll include thoughts on the trajectory of my career, ROI calculations, a breakdown of how I’m currently spending my time, actionables for my agency/coaching business, and more.\n\nI’ll attempt to map all of these out as fully as possible, and at the end of this document, write a list of actionables that I can use to continue propelling",
    "mainEntityOfPage": "https://leap2grow.github.io/the-next-few-months-of-my-life/"
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
    <script defer src="/public/cards.min.js?v=7380097362"></script>
    <link rel="stylesheet" type="text/css" href="/public/cards.min.css?v=7380097362">
    <script defer src="/public/member-attribution.min.js?v=7380097362"></script>
    <script defer src="/public/ghost-stats.min.js?v=7380097362" data-stringify-payload="false" data-datasource="analytics_events" data-storage="localStorage" data-host="https://leap2grow.github.io/.ghost/analytics/api/v1/page_hit"  tb_site_uuid="1ae3de90-cafc-423f-b6a1-36af422be674" tb_post_uuid="a5cef33b-35f7-4cdd-ba72-ec7e4d3dd34e" tb_post_type="post" tb_member_uuid="undefined" tb_member_status="undefined"></script><style>:root {--ghost-accent-color: #008cff;}</style>
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
  <body class="post-template tag-lfimpr subpixel-antialiased relative overflow-x-hidden bg-bgr text-typ"
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
            <a href="/tag/lfimpr/" class="hover:text-brand">Life Improvement</a>
            <span>·</span>
          <time class="" datetime="2025-07-29">Jul 29, 2025</time> 
            <span>·</span>
            <span class="">
              34 min read
            </span>
        </div>

      <h1 class="text-typ font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl">
        The next few months of my life
      </h1>


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
    srcset="/content/images/size/w320/format/webp/2025/07/maxresdefault--2-.jpg 320w, /content/images/size/w640/format/webp/2025/07/maxresdefault--2-.jpg 600w, /content/images/size/w960/format/webp/2025/07/maxresdefault--2-.jpg 960w, /content/images/size/w1280/format/webp/2025/07/maxresdefault--2-.jpg 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    type="image/webp"
  >
  <img class="w-full object-cover rounded-theme-xs aspect-[16/9] border border-brd bg-bgr-tone"
    
    loading="eager"
    srcset="/content/images/size/w320/format/webp/2025/07/maxresdefault--2-.jpg 320w, /content/images/size/w640/format/webp/2025/07/maxresdefault--2-.jpg 600w, /content/images/size/w960/format/webp/2025/07/maxresdefault--2-.jpg 960w, /content/images/size/w1280/format/webp/2025/07/maxresdefault--2-.jpg 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    src="/content/images/size/w30/2025/07/maxresdefault--2-.jpg"
    alt="The next few months of my life"
    
  />
</picture>
        
      </figure>

  </div>
</section>
    <article class="ghost-content prose md:prose-lg prose-theme">
      <p>It's that time again. Today I’m going to write a long, meandering journal entry that covers, in-depth, what I am going to do with the next few months of my life.</p><p>It’ll include thoughts on the trajectory of my career, ROI calculations, a breakdown of how I’m currently spending my time, actionables for my agency/coaching business, and more. </p><p>I’ll attempt to map all of these out as fully as possible, and at the end of this document, write a list of actionables that I can use to continue propelling my life towards greater and greater achievement. </p><p>I hope you find these thoughts insightful! They are my own. I wrote these in a private journal, and have not altered them at all, except for copying them over to Ghost and then adding links where relevant for context.</p><h2 id="taking-stock">Taking stock.</h2><p>First, where am I? Since the <a href="https://leap2grow.github.io/the-next-few-months-of-my-career/">last time</a>, I have grown leaps and bounds.</p><ul><li>Almost $400,000 profit in the month of June 2025. That's ~400% when compared to September 2024, a compounding monthly growth rate of ~15%.</li><li>I have spoken on stage next to industry titans like Alex Hormozi and Sam Ovens; I have been invited to podcasts and calls with culture-defining names like Tai Lopez and Dan Martell (even a royal prince). </li><li>My friend group is composed primarily of people with incomes exceeding hundreds of thousands of dollars per month.</li><li>I myself have millions of dollars, and near-guaranteed future income. Pragmatically, I can retire whenever I want. The gambit I took in my youth—<a href="https://medium.com/swlh/why-your-dream-job-doesnt-exist-3949b1181788?ref=nicksaraev.com">that I could make the equivalent of a lifetimes salary in months if I chose entrepreneurship over employment</a>—has paid off.</li></ul><p>Basically: I have achieved all of the goals I had the last time I wrote one of these.</p><p>It continuously boggles my mind to see the degree to which I can think, act, and then <em>achieve</em> what I want, so long as I'm consistent about it. I understood this at some level my whole life, but only recently have I really internalized it.</p><h3 id="retrospective">Retrospective</h3><p>As usual, I owe all of these achievements directly to my previous period of deep contemplation.</p><p>During that time, I was living in an AirBNB in the Calgary Beltline. I was going for long walks down the Elbow river, trying whatever eclectic mix of new foods I could find in the downtown core, and building a wonderful relationship with my girlfriend (who I now live with).</p><p>My career back then was composed primarily of two income streams: my agency, LeftClick, and my Skool community, Make Money With Make. I had a second agency, 1SecondCopy, that was still producing on the order of ~$30,000/m, but I had passed the management of this agency off entirely to a team member, and I rarely checked in more than once a week.</p><p>I was growing used to making money. And I had a roadmap in front of me that I had already begun executing on that I hoped would make me more. This included a laundry list of new products, some cool strategies about content creation, and a handful of then-novel strategies I was keen to employ. </p><p>It was a very exciting time in my life.</p><h3 id="where-do-i-want-to-go">Where do I want to go?</h3><p><a href="https://leap2grow.github.io/the-next-few-months-of-my-career/">Last journal entry</a>, I mentioned that I was not satisfied with my income or my net worth. At the time, I was at ~$100,000/m and still had something to prove.</p><p>Today, I can confidently say that is no longer the case. In short: I am satisfied with my income. I no longer want to optimize for money; it is not my greatest desire, and I have enough of it that I think I can turn my attention to other things.</p><p>To me, money is just a means to an end. It is something that buys you first your needs, and then your wants. And it turns out that very few of my wants are things I need large amounts of money to buy.</p><p>To be clear, here is what I want:</p><ul><li>Strong, rewarding relationships.</li><li>Health, both in my body and my mind.</li><li>The ability—not obligation—to exercise my curiosity to its fullest.</li><li>The opportunity to use my unique set of skills to positively benefit the world.</li></ul><p>Money helps these things, of course. For instance, it's difficult to be earnest or present in a relationship when you can't pay your bills. It's hard to be healthy without good food. And it's not reasonable to follow your curiosity wherever it goes if you don't have the funds to pay for your or your family's sustenance needs.</p><p>But all of that applies only to a point. Eventually you have enough. And if you continue optimizing for money after this, you will:</p><ul><li>Negatively impact your relationships.</li><li>Hurt—not help—your health.</li><li>Curtail explorations of your curiosity in favor of profitability.</li><li>Make a much smaller impact on the world than you could.</li></ul><p>In all likelihood, regardless of whether I change what I am optimizing for, I will probably continue making absurd amounts of money. It is difficult not to in a position like mine.</p><p>I just don't want to focus the <em>totality of my being</em> towards that end anymore. Because I have earned enough to buy the majority of safety, security, and flexibility that I think matters for me and the people close to me. Everything from here on out yields diminishing returns, and may even contribute negatively towards my relationships, health, curiosity, and impact.</p><h4 id="goals">Goals</h4><p>I've spoken briefly on what I want. They seen pretty high-level and illustrious. Can I quantify those goals further?</p><h5 id="impact-on-the-world">Impact on the world</h5><p>Let's start with impact.</p><p>I have probably already had a sizeable impact on the world. You can call it hubris, or perhaps delusion, but I think my logic is sound:</p><ul><li>My channel has inspired hundreds of thousands of people to learn automation, start building things, and later work with businesses.</li><li>Businesses are inherently leveraged. SMBs deliver products or services to tens of thousands of people over an average lifespan; enterprises deliver their products or services to millions (in some cases billions).</li><li>If we presume some % of my audience sells to some # of businesses, and on average each business itself sells to some # of people, and each customer interaction is economized by some % due to the automations that business is using, the impact on the economy is significant.</li><li>Example: 1% of my audience (~2,000 people) sells to 10 businesses each (so 20,000 businesses total). Each business directly or indirectly interacts with 10,000 people over its lifespan (200,000,000 people total). </li><li>If each interaction is economized by even 0.1%, say in terms of time, cost, or customer experience, that means I will have made 200,000,000 peoples' interactions with the economy 0.1% better.</li><li>I don't know what this is in terms of GDP. But the average per-capita spend across the world is ~$15,000/yr. Assuming that, over the rest of the lifetime of my content, I impact those 200,000,000 people as discussed. 0.1% of just one years' worth of spend is $15. $15 x 200,000,000 -&gt; $3B. </li><li>I think it's entirely fair to say I've already had $3B worth of impact. I talk to a football stadiums' worth of business owners every couple of days—frankly, I wouldn't be surprised if my estimates are vastly underrepresenting reality here. Also, while $3B sounds big, it is small fry compared to a world economy of &gt;$100T (expressed as a portion, $3B is 1/33,333 of $100T).</li><li>I should note that my channel has also directly led to the creation of perhaps three channels of equivalent (or larger) size, so these effects compound far more than above. Total YouTube viewership diverted as a direct result of my work is probably several million subscribers worth, and given the inherent leverage of automation those several million subscribers are very high impact indeed.</li></ul><p>I am happy with this, to be clear. But I feel that I possess the ability to have a much greater impact than 1/33,333rd of the economy. It may be mere delusion; if I believe I can multiply that number by (at least) a few hundred, though, I should.</p><p>I don't know how, or with what vehicle. I just know I am capable of doing it. It could be directly related to my channel; a scaled-up version of what I am doing now. Or something orthogonal to it that still has to do with AI but is not "building AI systems for businesses".</p><p>In any case, I currently lack the time to commit myself fully to this endeavour, because I am still optimizing for personal wealth. To have an outsized impact, I should optimize for global GDP instead. To do that, I will require a fair amount of time, and I must determine what vehicle will take me there. More on that later.</p><p></p><h5 id="health">Health</h5><p>I read a quote once long ago from Socrates that resonated with me:</p><blockquote><strong>What a disgrace it is for a man to grow old without ever seeing the beauty and strength of which his body is capable.</strong></blockquote><p>Health in body and mind is difficult to quantify, but I know for sure that, at minimum, I want to embody that Socratic ideal, insofar that I would very much like to see the beauty and strength of which my body is capable. I figure it's about time! If I don't do it now, when will I?</p><p>Last year I went through <a href="https://www.google.com/search?q=parsonage+turner+syndrome&sca_esv=de412451579efa94&rlz=1C5MACD_enCA1052CA1052&sxsrf=AE3TifO_Uzpebznwpd7mrL9xDJsD13eqdQ%3A1753664728351&ei=2MyGaKKfFYCr0PEPyrLI0AM&oq=parsonage+turner+syndrome&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXBhcnNvbmFnZSB0dXJuZXIgc3luZHJvbWUqAggAMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiQKVAAWJYScAB4AZABAJgBf6ABuRGqAQQyMC41uAEByAEA-AEBmAIZoAKKEsICBBAjGCfCAgoQIxiABBgnGIoFwgILEC4YgAQY0QMYxwHCAgQQABgDwgIOEC4YgAQYsQMY0QMYxwHCAg0QABiABBixAxhDGIoFwgILEC4YgAQYxwEYrwHCAgoQLhiABBhDGIoFwgIREC4YgAQYsQMYgwEYxwEYrwHCAhMQLhiABBixAxjRAxhDGMcBGIoFmAMAkgcEMjAuNaAHnMQBsgcEMjAuNbgHihLCBwYwLjE2LjnIB0M&sclient=gws-wiz-serp&ref=nicksaraev.com">brachial neuritis</a>, a rare condition that effectively paralyzed my right shoulder. I'm only just now regaining the ability to move my arm past ~90° for the first time in ~11 months. It has been a debilitating and extremely inconvenient process.</p><p>My weight has also dropped precipitously, ~15-20 lbs, and I am averaging less than ~2,000 steps/day (down from an all-time-high of ~12,000). For the most part, I have not kept up with exercise.</p><p>While I am not about to die, I am certainly unhealthy. I'd prefer not to be. So my goal over the next period is to push my health to its logical conclusion and see what life at the "high" end of the spectrum feels like.</p><p>Think <a href="https://www.instagram.com/bryanjohnson_/?hl=en&ref=nicksaraev.com">Bryan Johnson</a>, except instead of optimizing specifically for longevity, I would like to optimize for performance (longevity would obviously be a major side effect, though). My hope is to get the privilege to experience life at peak levels of physical and cognitive fitness. I think this would not only be enjoyable, but help me achieve the next level of impact, as discussed above.</p><p>Unfortunately, this requires time and some reprioritization.</p><p></p><h5 id="curiosity">Curiosity</h5><p>I am a naturally curious person. When I was younger, I used to exercise that curiosity to the utmost, which led to what I would consider to be a very intellectually fulfilling life.</p><p>In recent years, that penchant to follow my curiosity has died. "What is interesting" is often not "what is profitable", and at every step I've forced myself to pick profit over knowledge.</p><p>Hopefully, you understand why. I was raised in an environment where money was scarce, and where the shadows of my family's early financial challenges crept into every corner of our lives. So when I was given the ability to earn a bunch of money for (relatively) little time in exchange, I jumped on it, neglecting everything else. Like an addict, I wireheaded and discarded most of the rest of my interests and hobbies in pursuit of the almighty dollar.</p><p>Suffice to say, I don't want to do that anymore. There are so many interesting things in the world, and they all deserve to be learned. I would like to get back to exploring curiosities, engaging in hobbies, and—above all else—asking questions genuinely motivated by the pursuit of knowledge, not profit.</p><p>I used to play guitar! I used to design wonderful 3D worlds. I also used to build neural networks for fun (this is how I got into AI in the first place). I haven't done any of this stuff in years and my quality of life has suffered for it. </p><p>Above all: I want to read again. I used to get absorbed in books for many hours at a time. I am simply unable to justify the time these days, and that needs to change.</p><p></p><h5 id="relationships">Relationships</h5><p>How does one define strong, rewarding relationships? After thinking about it for a time, I believe this is simple: a strong relationship is where you love and are loved in return.</p><p>I have this now with my girlfriend and it is incredible. She adds a vast amount of texture to my life; a flavor that is, frankly, irreproducible. Because of her, colors are brighter, music is louder, and life is definitively better.</p><p>I want more of this. They don't have to be romantic—strong platonic ones apply too (I have a dearth of these at the moment). To make a long story short, I want people I can share everything with, who understand me and I them, who I love and love me in return.</p><p>I'm not sure how to quantify that. Perhaps I leave it at <strong>I would like to become closer to more people, </strong>family included. </p><p>However I do this, relationships require time, so I'll need to find some more.</p><h2 id="bottlenecks">Bottlenecks</h2><p>Now that I have tabulated what it is that I want, what is currently impacting my ability to drive these outcomes? </p><p>Like in the previous journal entry, I will go through everything and tabulate the bottlenecks below.</p><p>I should note that, back when my broad goal was just "money", this was much easier. I was able to determine my bottleneck was monetization within ~30min, and immediately transitioned to strategizing how to fix it.</p><p>Goals like "being impactful" and "having strong relationships", on the other hand, are much more subjective, so I don't expect the same will happen here. Still, I believe I can go much further in quantifying bottlenecks and acting on them than you might think. Let's try.</p><h3 id="time">Time</h3><p>Probably the best place to start is my time. This was the core tie-in between all of my above goals—I did not feel like I had enough time to achieve them. Makes sense. Career is a behemoth right now.</p><p>So to fix, let's take a look at what I am currently spending my time on that does not fall into the goals I care about. From there, I should have a reasonable understanding of where I might cut back to be able to better prioritize.</p><p>This will (probably) be mostly career related tasks, but I'll be unbiased and include anything that doesn't directly contribute to the above goals.</p><p>Also, I'll try and average things out from a daily perspective, since that has always been best for me. I will use sources like my historical time logs, as I've been tracking data on daily actionable times for the better part of the last two months.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://leap2grow.github.io/content/images/2025/07/image-1.png" class="kg-image" alt="" loading="lazy" width="2000" height="311" srcset="https://leap2grow.github.io/content/images/size/w600/2025/07/image-1.png 600w, https://leap2grow.github.io/content/images/size/w1000/2025/07/image-1.png 1000w, https://leap2grow.github.io/content/images/size/w1600/2025/07/image-1.png 1600w, https://leap2grow.github.io/content/images/size/w2400/2025/07/image-1.png 2400w" sizes="(min-width: 720px) 720px"><figcaption><span style="white-space: pre-wrap;">Example of my daily tracker.</span></figcaption></figure><h3 id="where-im-spending-my-time">Where I'm spending my time</h3><p>Next, I'll write a line-by-line breakdown based on the above time logs, Rize logs, and activity estimates. After, I will tabulate the total, and start figuring out a rough distribution of where I'm spending time and how I can cut back to reallocate time towards things that are more important to me. </p><ul><li><strong>Maker School management (60min):</strong> direct replies to comments, along with Loom video roasts that I record.</li><li><strong>Maker School calls (20min): </strong>video calls and 1:1 conversations as a result of hitting Month 6.</li><li><strong>Maker School improvements (20min): </strong>adding new content, rerecording old content, creating new high-level text posts, etc.</li><li><strong>Make Money With Make management (20min): </strong>direct replies to comments, along with Loom videos that I record.</li><li><strong>Make Money With Make calls (20min): </strong>two video calls per week.</li><li><strong>Make Money With Make improvements (10min): </strong>adding new content, rerecording old content, creating new high-level text posts, etc.</li><li><strong>LeftClick management (60min): </strong>onboarding meetings, client strategy, systems development.</li><li><strong>Daily Updates channel content creation (50min):</strong> recording video, creating thumbnails + packaging, posting.</li><li><strong>Main channel content creation (60min): </strong>recording videos. Includes podcasts, system builds, case study calls, etc.</li><li><strong>Email and inquiry management (45min): </strong>managing people who reach out to me over Instagram, email, X, and other sources.</li><li><strong>Instagram content creation (5min): </strong>recording videos.</li><li><strong>Sponsorships (15min): </strong>discussing sponsorship deals, managing logistics.</li><li><strong>NSM team management (15min):</strong> managing my content team—editor and strategist.</li><li><strong>Instagram (15min): </strong>mindless scrolling on Instagram as per Screen Time.</li><li><strong>YouTube (10min): </strong>mindless scrolling on YouTube as per Screen Time.</li><li><strong>YT Studio (15min): </strong>interestingly, the daily time I spend looking at YouTube Studio as per Screen Time. I was unaware of this prior to now, but it seems I spend a fair bit of time staring blankly at my statistics.</li><li><strong>Watching shows/television/Netflix equivalents: (25min):</strong> the daily time I spend watching shows, Netflix—basically 'rotting'—as per Screen Time.</li><li><strong>Cleaning (15min):</strong> estimated time I spend cleaning.</li><li><strong>Food (60min):</strong> estimated time I spend acquiring, preparing, or eating. Tends to coincide with my above entertainment time, so I can't really write this off. I include this just because I think there are creative ways to combine daily necessities like eating with the things that are valuable to me (curiosity, relationships, health).</li><li><strong>Travel (45min):</strong> in the last 30 days, I spent 8 of them not in my home city. A lot of this was for, or related to, my career. Travel is inherently fatiguing and how I am doing it now takes away from what I want. This is a time estimate based on 8/30 days spent abroad multiplied by a flat "25% travel time cost", amortized over the month, which is an approximation, but one I feel is OK.</li></ul><p>There is more, to be sure. That said, this seems sufficient for now. Any further digging will probably only reveal a few minutes here or there.</p><p>Using the above numbers, I currently spend 60+20+20+20+20+10+60+50+60+45+5+15+15+15+10+15+25+15+60+45 = 585 mins per day, or ~10 hours, on the above tasks.</p><p>For simplicity's sake, and to make it easier to interpret for myself, let's create a visual breakdown of the distribution with ChatGPT. I'll do a pie chart, where the full pie is equivalent to 10 hours.</p><figure class="kg-card kg-image-card"><img src="https://leap2grow.github.io/content/images/2025/07/Daily-Time-Distribution.png" class="kg-image" alt="" loading="lazy" width="2000" height="1957" srcset="https://leap2grow.github.io/content/images/size/w600/2025/07/Daily-Time-Distribution.png 600w, https://leap2grow.github.io/content/images/size/w1000/2025/07/Daily-Time-Distribution.png 1000w, https://leap2grow.github.io/content/images/size/w1600/2025/07/Daily-Time-Distribution.png 1600w, https://leap2grow.github.io/content/images/2025/07/Daily-Time-Distribution.png 2022w" sizes="(min-width: 720px) 720px"></figure><p>This is a bit granular, but I can bin these into related tasks to pull broader categories. Using the above, you can break down my day as follows:</p><ul><li>Approximately ~20% is "activities of daily living"—i.e things I do daily as a matter of course, like eating, cleaning, various travel logistics, etc.</li><li>Approximately ~35% is "management"—i.e, maintaining my paid products and services, like Maker School, MMWM, and LeftClick.</li><li>Approximately ~25% of my day is spent on content creation.</li><li>Approximately ~10% of my day is spent on entertainment.</li><li>The last ~10% of my day is spent on administration.</li></ul><p>How do I feel about that, now that it's out in the open? Off the top of my head:</p><ul><li>That is a lot of stuff. I wasn't aware I was doing so many things in parallel. </li><li>Subdividing my time into such tiny bins is not strategic. From what I know about context switching, I would prefer to have 3 or 4 big things that I work on every day, and eliminate the rest. This will simplify my life, and have the empirical side effect of making me work faster and better.</li><li>Anyway—the biggest time sinks, by far, are Maker School management, MMWM management, and content creation.</li><li>I would count these three things as being the most important things I do to drive revenue. They take up a large part of my day, to be clear, but they are also extremely impactful. Maker School alone makes me ~$7K/hr.</li><li>There are probably still ways I can decrease my daily time investments with minimal impacts on revenue, though.</li><li>First, I believe I can streamline my activities of daily living. Eliminating travel (at least business-related travel) is a surefire way to win back ~8% of my day, so I should do this, and perhaps restrict anything that doesn't qualify as a $500,000 opportunity or something.</li><li>Email and inquiry management takes me up a fair bit of time. I don't believe I need to be doing this anymore, and can probably get an assistant. That's a good 7% of my day.</li><li>I can probably cut a percentage of my management time without much legwork. For instance, if I find a way to spend 2/3 as much time on 'management' related tasks, I will have bought back another ~12% of my day. Combine that with eliminating travel (8%), delegating inquiries (7%), and eliminating one or two minor administrative tasks (3%), and I will have recuperated 30% in total. This would be massive and significantly improve QOL.</li><li>My Daily Updates channel is a major chunk of my day. It's on par with Maker School management. I could change the structure and fix it to, say, a 25min total time investment for an additional ~4.5% of my day back. If I then economize a small portion of my LeftClick management, I will have officially bought back approximately 40% of my day.</li></ul><p>Sanity check—if I were to do this, would I lose 40% of my revenue? </p><ul><li><strong>Eliminating career travel</strong>: no. Travel is not directly tied to my revenue.</li><li><strong>Email and inquiry management</strong>: no. These are mostly mundane refund requests, one-off questions about my program, etc.</li><li><strong>Maker School/MMWM management</strong>: not 40%, though reduced time investment would impact the quality of perceived presence. That said, right now I try and involve myself in 100% of posts. If I scaled that back to something like 50% of posts, I can directly save half of that time at a cost of maybe 10% of my perceived presence. My gut feeling—I would save half the time and make much more than half of the money.</li><li><strong>Shortening Daily Updates</strong>: average view duration according to YouTube is ~7min. Simplification, but if half of people watch twice that length (14mins) that's 75% of my audience unaffected. If another half watch to 3x (21mins) that's 87.5% of my audience unaffected. Daily Updates is a small portion of my revenue; it is certainly a portion, to be clear, but with 87.5% of viewers unaffected, and the remaining 12.5% liking me so much anyway that it probably doesn't matter, I think this would have a <em>very</em> minor impact on rev, if at all.</li></ul><p>It is decided, then. I can significantly reduce my time involvement by batching tasks, portioning out a percentage of posts (rather than all), and delegating work. </p><p>I expect I will trade ~20% of my income for ~40% of my time back. I will track this religiously over the next few months and see how my predictions pan out.</p><p>In reality, I may actually make <em>more</em> money, given that the added time will naturally lead to more opportunities for in-depth strategy like this, and time for in-depth strategy has always directly correlated with earnings.</p><h3 id="beliefs">Beliefs</h3><p>Are my beliefs a bottleneck? <a href="https://leap2grow.github.io/the-next-few-months-of-my-career/">Last time</a> they weren't. How about now?</p><p>Well.. do I believe that the kind of life that I want—rewarding relationships, great health, impactful work, and open-ended curiosity—is, at some level, impossible? </p><p>No. I have now seen many people achieve their version of this. So I know that it is not only possible, but, assuming I think about it enough, I feel it is probably inevitable.</p><p>I mean, pretty much every time I have had a limiting belief I later destroyed it. At one point in my life, this would certainly have qualified as one, but I am now confident I can achieve the sort of life I want with enough time and effort. </p><p>Moving on.</p><h3 id="monetization">Monetization</h3><p>Last journal entry, monetization was definitively my bottleneck. </p><p>I lacked product differentiation, and so was leaving a ton of money on the table. Also had a big waitlist that I wasn't taking advantage of; basically, an overhang where I had generated much more interest than I was able to capitalize on due to my standout YouTube performance. Naturally, fixing that was priority #1.</p><p>Well, that has since been solved. Maker School became the #1 community by revenue on Skool, possibly the #1 community on Earth, and this led to me winning the Skool Games and gaining a fair bit of notoriety (see picture with Alex Hormozi and Sam Ovens at the top of this post). </p><p>I also did this at a subscriber count that was a fraction of other channels who I am competing with. Right now, my monetization is still somewhere in the neighborhood of ~$2.5/mo/subscriber. And while there people with much higher numbers, given that money is no longer the prime directive, I'm happy with this. I would actually be fine dialling it back a bit, depending on the degree to which it buys me some time to focus on impactful things like I described at the beginning of this entry.</p><h2 id="miscellaneous-thoughts">Miscellaneous thoughts</h2><p>Okay, I think it's clear: time is my bottleneck. Monetization and beliefs, once big hurdles I had in the past, have been taken care of. I can't think of any other major bottlenecks right now, and I spent a healthy thirty minutes racking my brain, so let's move on.</p><p>That means, if I want to build the sort of life that I want—one where I am healthy, curious, passionate, and surrounded by people who love me (and I them)—I need to acquire more time ASAP.</p><p>Logically, I should be willing to do this at the expense of money. A fair amount of it. I don't need to be making $400,000/m anymore; I would probably be satisfied with a fraction of that (maybe $200,000, or even $100,000), assuming that the proportional increase in my time was significantly greater.</p><p><em>Sanity check: if my income dropped from $400,000 -&gt; $200,000 and I gained back an additional ~8 unburdened hours in my day, would I be fine with this? Thinking out loud, I feel like this is pretty precipitous an income drop. </em></p><p><em>That seems stupid, though. It would not materially impact my life in the slightest. The friction here is, at some level, probably a result of my desire for social validation. I like being the best, and I am worried that this will negatively impact the perception that I am the best. But I can be the best in other things, and the majority of people out there can not meaningfully distinguish between high incomes anyway, so many of them would still perceive me to be so. I would still have most of the social proof I need to do cool things.</em></p><p>In any case, I do not have to answer that question right now. Instead, I can begin to scale back my time investment to achieve that ~40% reduction I mentioned above. Once I have those four hours of my day back, I can evaluate the impact on my income; if it is significantly more than -40%, I can decide what to do then. </p><p>Perhaps I'll go back to spending more manual time; maybe I'll decide to spend even less.</p><h3 id="actionables">Actionables</h3><p>Now that I have taken stock, worked out my goals, determined my bottlenecks, and fleshed out where the hours in my day are going, it is time to write down actionable next steps.</p><p>This is the most important part of any roadmap—it is the thing that connects "thinking" with "doing". Both are necessary to achieve what you want.</p><p>I will first write a "masterlist" at a high level, brainstorming as many as I can. Then, I will go into detail for each, breaking the list items down into sub-steps to reduce friction, since the higher the initial difficulty, the lower the likelihood I will do the task. After, I'll mash the two together for your reading convenience. If the task recoups my daily time, I'll include a (+X) in the title for ease of tracking.</p><h4 id="remove-month-6-11s-immediately-and-replace-with-something-that-doesnt-scale-with-my-time-10">Remove Month 6 1:1s immediately and replace with something that doesn't scale with my time (+10)</h4><p>As part of Maker School, I offer a 1:1 with me if you make it to your sixth month.</p><p>I spent 1:15hrs last week on them. The week prior, 1hr. On average, it comes out to something like 1hr/week, or ~10 minutes/day.</p><p>A quick way to reclaim that time is to find something else to give away that doesn't scale with time. It's not that big of a deal, but I might as well. One months' worth of 1:1s is ~4 hours, and I wouldn't mind having that back.</p><p>What can I provide?</p><ul><li>Free access to Maker School. This would normally make sense, but there is no automated way to do this that I know of.</li><li>Free access to some other program. I don't have anything I'd want to give away, so I'd have to create a new one. Or just give away "14 Day Agency".</li><li>Free access to some coveted resource, like a template library or some private recordings.</li><li>Free access to a 'mastermind-style' group, perhaps a WhatsApp, for people who make it to the 6-month mark. This could be reasonable, although it'll undoubtedly add time demands on my end. Still, I could leverage it, I suppose.</li></ul><p>I could also continue doing them, but leverage them for some other purpose. Like content on the main channel. </p><p><em>Sanity check: is that feasible? No, I don't think so. Most of the conversations are unstructured—fifteen minutes of recording could make maybe three minutes of content. Certainly not enough to justify the time spend.</em></p><p>Okay, so I'll provide some resource. I don't need to know exactly what that is. But actionables here are:</p><ul><li>Decide on the resource to give away.</li><li>Create or curate the resource.</li><li>Adjust Month 6 to include it,</li></ul><h4 id="remove-loom-video-roasts-since-theyre-directly-contingent-on-my-time-instead-do-loom-videos-ad-hoc-so-its-not-an-expectation-but-akin-to-a-variable-reward-30">Remove Loom video roasts, since they're directly contingent on my time. Instead, do Loom videos ad-hoc, so it's not an expectation but akin to a variable reward (+30)</h4><p>I record ~20-30 mins of Loom videos every day for Maker School. They're hyper-leveraged and a big draw. Majority of these are "Upwork roasts", where people post their Upwork profiles and then I record a video discussing how their profile could look better.</p><p>It's good fun; definitely lets me build some quick wins with people, generate the some 1:1 "facetime" (which, at the scale I'm operating, is nuts), and reorient people who are making obvious tactical errors early. I'd consider it one of the standout advantages of Maker School.</p><p>That said, I feel like the vast majority of roasts at this point are not providing any new value; they are rehashed versions of older ones. Realistically, I could probably organize the information better, and force people to watch a certain number of old roasts before proceeding instead.</p><p>I would lose the perception of 1:1 facetime, but I believe this would actually make the instances in which I <em>do</em> record a Loom video more powerful, since my time would appear higher value. Whereas right now I routinely do 10-15/day, if I cut that down to 1-2/day, people will pay much closer attention to those 1-2.</p><p>This will save me a significant amount of time. It will also reduce the perceived value of the program, to be clear. But I believe, proportionally, the time I save will &gt;&gt;&gt; this.</p><p>Steps:</p><ul><li>Watch Maker School Upwork module and see when/where I'm providing the expectation that I'll roast members on video.</li><li>If it is clearly written/said, remove it. Then, replace with a section/segment with a list of links to prior roasts I've performed that effectively cover the problem space (i.e people that have made every mistake imaginable).</li><li>Encourage people to watch those, and then transition to text-only roasts, which are much faster.</li><li><strong>Done!</strong></li></ul><h4 id="switch-leftclick-sales-calls-to-discovery-videos-where-i-personally-record-a-short-loom-going-over-the-persons-needs-30">Switch LeftClick sales calls to 'discovery videos', where I personally record a short Loom going over the person's needs (+30)</h4><p>Right now, I have maybe one LeftClick discovery call every couple of days. They take ~30 minutes of my time, and often include some small unit of work before/after the call to prepare (let's say 45).</p><p>Recently, with the growth of LeftClick and working more closely with Noah, it has become unclear how and when I should join a call.</p><p>Logically, having me on calls improves close %, since most of these leads are generated directly through my longform content and so want to see and talk to me.</p><p>But at the same time, going on every call is not very time-leveraged, and the more time I spend on operations, the less time I am spending generating leads (which, right now, is my main strength).</p><p>Additionally, if we set the expectation that I am to be present on the first call, it can lead to expectations further down the line that I am to be present on subsequent engagements too. So it's a catch-22.</p><p>I have dealt with this for a long time in many contexts, not just LeftClick. Prior to this, when I was handing off referrals, I would send them directly to a partner. The most common question on that call was some variant of "where's Nick?"—naturally, the switch-up led to poor close rates and lower AOV.</p><p>Anyway, I believe I can solve this once and for all with a nifty hack. I am a big fan of standardization, and I read about a very cool approach three years ago when I was looking into Digital Nomad consulting services that I thought was brilliant.</p><p>To make a long story short, a clever man, whose name I unfortunately forget, had been offering tax consulting services for entrepreneurs looking to minimize their end-of-year owings. He was very good at his work, and so naturally became quite in-demand, with services costing thousands of dollars per hour.</p><p>Eventually, there was not enough time in the day for him. But he was making good money, and wanted to continue.</p><p>To get around this, he did not pivot services, or change the business model. He continued providing the same personalized consultation. With one exception.</p><p>His clever hack: he turned his 1:1 consulting calls into <strong>WhatsApp voice messages</strong>, where you'd leave a message with your situation, and he would record a 5, 10, or 15 minute voice message describing how he would approach solving it.</p><p>He was able to charge several hundred dollars for what amounted to a few minutes of his time. Less than a direct call, but because it was async, he was able to become available to a <em>much</em> wider stretch of timezones than before, and his business grew by leaps and bounds. </p><p>If you, as a customer, outlined your problem in enough detail, and anticipated the follow-up questions you may have:</p><ul><li>You received exactly the same value for less money.</li><li>You got a bonus asset that you could play back later.</li><li>He became able to fulfill more people in the same time.</li><li>His top of funnel widened, since he was no longer sync.</li></ul><p>It was one of the cleverest forms of productization I had seen, and directly inspired more than a few of the decisions I've made with Maker School and MMWM.</p><p>Anyway: I believe I can take this approach to sales calls. <strong>Instead of doing discovery calls directly, I could record 2-5 minute Loom videos that go over their needs and requirements, and then hypothesize a few solutions</strong>. </p><p>I would do this with a standardized pitch, along with some ideation, and do it for every lead that comes through the pipeline. Then, Noah or our future salesperson would take the call, and we'd get the following benefits:</p><ul><li>Lead would feel that I'm involved in the process; that I understood their request and feel it's feasible to fulfill. This acknowledgement would go far.</li><li>Noah/future salesperson would get autonomy to sell the way they know best. They would also get edified in a standardized way, since I would be able to create, basically, a "script" where I talk about how great XYZ person is.</li><li>I would get a significant portion of my day back, while increasing the % CVR and AOV significantly.</li><li>Then, I could join our onboarding calls. These happen less frequently than discovery calls since they're only on closed deals (~1/5 as often). It's thus less of a big deal, time-wise, for me to make an appearance. Also increases upsell value later on and lets me set expectations surrounding project fulfillment.</li></ul><p>I would tack these videos on to the end of my community management every day. I could feasibly do several, and because it's async I'd be able to "take calls" with anyone. So regardless of how big my top-of-funnel gets I would be able to manage this, and it would be the 80/20: first touch is me -&gt; maximizes LeftClick's $/hr -&gt; edifies person who's taking the call -&gt; maximizes probability of a conversion -&gt; I swing by onboarding -&gt; minimize buyers remorse -&gt; operational team crushes. </p><p>Actual time cost on my end per day is maybe 5 (down from 30).</p><p>Steps:</p><ul><li>Set up a Slack channel that logs new inquiries.</li><li>For each inquiry, draft an email response with space for a video that I can easily paste a Loom video into.</li><li>In the Slack message, include a link like this: <a href="https://leap2grow.github.io/thoughts-goalon-2025/" rel="noreferrer">https://mail.google.com/mail/u/0/#search/{emailAddress}</a>.</li><li>When I get an inquiry, I click on this link, click on the message, and then record the video. I then paste the link in the draft, and they'll get an email from my personal containing a video. It will seem highly personalized and take me ~5min.</li></ul><h4 id="cut-back-daily-updates-to-25min-time-investment-total-25">Cut back Daily Updates to 25min time investment total (+25)</h4><p>The average <a href="https://www.youtube.com/@nicksaraevdaily?ref=nicksaraev.com">Daily Update</a> recording and packaging time is starting to get out of control. Looking at the last three weeks, we're somewhere around 47 minutes of recorded footage, with 5-10 minutes of packaging time.</p><p>As much as I love Daily Updates, I will cut this down significantly. Today's video was a good test-run: 23 mins total instead of mid-50s.</p><p>Question—can I change the structure to make this more valuable? Q&amp;A is most valuable, of course, but some people like watching my "build in public", and that's what is suffering for the most part. Also, people don't really care about brand stats as much (it's more for me), so how about:</p><ul><li>12-15 min Q&amp;A.</li><li>3-5 min quick to-do/business talk,</li><li>Brand stats.</li></ul><p>That seems okay for now. </p><p>Packaging is not worth optimizing. I use templates and am probably about as streamlined as I could be here. No other changes needed.</p><p>Steps:</p><ul><li>Change Daily Updates format on LucidChart.</li><li>Speak faster so I can get through more. Last couple of weeks I've slowed down intentionally, but people can watch me at 0.75x if they need to.</li><li><strong>Done!</strong></li></ul><h4 id="delegate-email-and-inbox-management-completely-40">Delegate email and inbox management completely (+40)</h4><p>I get way too many messages. It's leading to feelings of overwhelm, which is leading to <em>actual</em> overwhelm. It also, quite frankly, takes forever to get through. I have also let a lot fall through the cracks over the last few months—genuine refund requests, problems with billing, etc—that is hurting my credibility.</p><p>I'm not going to deal with that anymore. To that end, I'll hire a competent native-English speaker to be my EA and manage everything for me.</p><p>In particular, I want them to:</p><ul><li>Handle refund requests and any payment issues. This will snowball into a real problem if I'm not careful, so I need to take care of this now.</li><li>Handle one-off q's about Maker School, MMWM, and any other paid products. Right now I lose a ton of juice here—probably a client every day or two.</li><li>Manage sponsorship requests for the Instagram (i.e pass these off to my agent) and the rest of the Instagram flywheel. I want a list of scripts that I edit once per week and that's it.</li><li>Deal with LeftClick inquiries. Right now these get buried often, and I want to ensure everything is responded to in a reasonable amount of time.</li><li>Deal with podcast invites/famous associations/major personal branding opportunities. I get lost in these and this has led to a few embarrassing situations (like me not responding to extremely wealthy and powerful people).</li></ul><p>I also want to see what all the rage is about a competent EA in general. A lot of people have told me that it's imperative I get one over the last few months, and I should try it out before dismissing it.</p><p>We'll see how this pans out. But I think this will save me ~5hrs/wk.</p><p>Steps:</p><ul><li>Create a "trial run" test using 5 real emails (hiding any PII) to see how a potential EA would fare and what their responses would look like.</li><li>Create a post in Maker School and/or my YouTube via a community post.</li><li>Pick the best option, and then use Missive to give them carte-blanche over all my inboxes for one month. Also give them ability to refund people on Maker School/MMWM/etc.</li><li>If that works, scale up from there and start offloading other things. Travel is annoying, for instance.</li></ul><h4 id="deletearchive-personal-instagram-profile">Delete/archive personal Instagram profile. </h4><p>Instagram is taking me too long again. I also use it for frivolous things—silly brainrot memes and the like. The gateway into this is always my business channel, algorithms end up "capturing" my attention and it ends up taking ~10-15mins/day.</p><p>No reason to be doing this. So am deactivating my personal Instagram and then removing it from my phone.</p><p>Steps:</p><ul><li>Deactivate personal Instagram.</li><li>Remove Instagram from phone.</li><li><strong>Done!</strong></li></ul><h4 id="delete-yt-studio-on-my-phone%E2%80%94i-never-really-use-it-anyway-15">Delete YT Studio on my phone—I never really use it anyway (+15)</h4><p>Speaking of which, I'll delete YouTube Studio on my phone too. There is no reason to have this, really. I only ever do productive work with YouTube from my desktop; anything that is not from my desktop is usually unproductive (checking stats, etc).</p><p>This is an easy win. Steps:</p><ul><li>Delete YT Studio.</li><li><strong>Done!</strong></li></ul><h4 id="eliminate-work-related-travel-50">Eliminate work-related travel (+50)</h4><p>There are <em>so</em> many distractions as you scale. It is unbelievable. If I took even a tenth of those "amazing opportunities" at face value, I'd have gotten absolutely nowhere.</p><p>One of these opportunities is travel. I get invited to travel all the time now. Various conferences, events, retreats, offsites, summits, masterminds, etc. Whatever you want to call them—the vast majority represent an ineffective usage of my time.</p><p>So I'm going to cut all that out completely starting today. No more work-related travel unless it's something that I feel will <em>save</em> me time, not <em>cost</em> me time.</p><p>Steps:</p><ul><li>Say no to everything.</li><li>Done!</li></ul><h4 id="purchase-weight-scale-and-begin-weighing-myself-every-morning">Purchase weight scale and begin weighing myself every morning.</h4><p>I always improve whatever I track. As part of my health goals, I want to improve my weight—therefore I should track it.</p><p>To fill you in: my weight has dropped ~15-20lbs over the last few years as a result of work taking precedence over everything. I forget to eat pretty often, unintentionally opting to fast instead, and the ups-and-downs make it difficult to consistently do things like build muscle and remain healthy. </p><p>I am currently ~171.4lbs at 6'2. I would like to be ~187lbs, and so part of my health goals will include eating more. To that end, I will grab a weight scale and build a habit to weigh myself every morning.</p><p>Steps:</p><ul><li>Purchase automatic Withings weight scale.</li><li><strong>Done!</strong></li></ul><h4 id="download-macrofactor-and-track-diet-for-14-days-to-determine-tdee">Download Macrofactor and track diet for 14 days to determine TDEE.</h4><p>In the same vein, I often over or under eat. So to be more precise, I need to know what my Total Daily Energy Expenditure (TDEE) is. </p><p>There are formulas that estimate this for you, but I'd like to know, without a shadow of a doubt, what mine currently looks like. From my readings, the best way to do this is to track your food for a period of ~14 days while weighing yourself every morning. Slight fluctuations due to water and sodium intake will average out, leading to a clear picture of how much you're eating -&gt; how much of that is being stored.</p><p><a href="https://jeffnippard.com/?ref=nicksaraev.com">Jeff Nippard</a>, who I respect deeply, has an app built just for that purpose. It's called <strong>Macrofactor</strong>, so I'm going to download it and start tracking my food intake.</p><p>To that end, I will also buy a few utensils to make that tracking easier, like food scales, volumetric measures, etc.</p><p>Steps:</p><ul><li>Purchase food scale.</li><li>Purchase additional cup measure (to use for snacks).</li><li>Purchase Macrofactor.</li><li>Track food for 14 days.</li><li><strong>Done!</strong></li></ul><h4 id="identify-optimal-supplement-stack-build-into-habits-a-la-james-clear">Identify optimal supplement stack &amp; build into habits, a la James Clear.</h4><p>I have a liver deficiency called Gilbert's Syndrome, which is often associated with fatigue, the inability to process certain foods and nutrients, and jaundiced skin (if you've ever watched one of my videos and wondered why my skin looks particularly yellow some days, this is the reason).</p><p>It impacts my lifestyle to some degree. So I would like to optimize my supplement stack to mitigate the negative impact, as well as "level up" the rest of my health to boot. These include some low-hanging fruit like daily vitamin D supplementation, certain vitamin deficiencies that I have, so on and so forth.</p><p>Steps:</p><ul><li>Research 80/20 supplement stack based on current best practices (Bryan Johnson's Blueprint, the Huberman podcasts, etc).</li><li>Purchase.</li><li>Put supplements in easily accessible, visible place so that I take them around the same time every morning.</li><li><strong>Done!</strong></li></ul><h4 id="create-8020-health-tracking-system%E2%80%94lifts-cardio-stats-cognitive-stats-etc">Create 80/20 health tracking system—lifts, cardio stats, cognitive stats, etc.</h4><p>Right now, I use Google Sheets to track all of my outputs. I do this in a Sheet called <strong>Life Tracker</strong>, where every day, as I complete my actionables, I log what i did and the amount of time it took to do it.</p><p>For instance, I know that I responded to 60 Maker School posts today. I also know that it took me 59 minutes to do so, and that my "posts per minute" was 1.02. My Daily Updates video took 35 minutes to create, I recorded 8 Loom video roasts, I responded to 19 threads in MMWM, etc.</p><p>This level of tracking can be a bit laborious the first few times you do it, but now I look forward to turning my timer on and going through the motions. In many ways, a timer forces me to "sprint" through each task, and it also keeps me accountable (since I don't like breaking the chain).</p><p>Anyway, I can apply the same logic directly to my health tracking. I measure my sleep every day—there are also websites out there that track things like my average reaction time, cognitive health, etc. </p><p>If I combine all of these, I should be able to get a clear picture of my health at any given moment and then optimize from there. It would be fun to do this, too—I am a big fan of self-experiments like that, and think that given the differences between bodies, they are necessary to determine the truly optimal lifestyle. </p><p>I could then perform mini RCTs on myself to determine whether new diet additions or lifestyle changes are beneficial to my health. Would be awesome. I could also publicize those for others.</p><p>Steps:</p><ul><li>Build new spreadsheet with columns for various health metrics I care about.</li><li>Off the top of my head: weight, cardiovascular health, lifts, cognitive health.</li><li>Create a morning SOP to track all of these. Should take me ~3 minutes or so.</li><li><strong>Done!</strong></li></ul><h4 id="build-systems-to-spend-time-with-people-i-care-about">Build systems to spend time with people I care about.</h4><p>I would like to build some sort of system to more regularly see the people I care about.</p><p>My family is a great example. I love spending time with them, and they're close enough (geographically) that I can. But if we don't schedule it in ahead of time, it rarely happens. Something comes up—usually career related—and I put it off.</p><p>This is clearly a priority issue. I am prioritizing my work over the people I care for. Very silly, given that <a href="https://bronnieware.com/blog/regrets-of-the-dying/?ref=nicksaraev.com">one of the main regrets of people on their deathbeds is that they wish they spent more time with the people they loved</a>. </p><p>So I will prioritize it. I will set aside scheduled blocks ahead of time, and then construct the rest of my schedule around that. My only 'sacred time', for productivity purposes, is my morning. So as long as I keep those to myself I'm OK.</p><p>Steps:</p><ul><li>Schedule one afternoon/evening per week with the family; one afternoon/evening per week with the girlfriend; one afternoon/evening per week with friends.</li><li>Stick to it! Treat these like scheduled events. Book and do fun things (not just "hang out", but novel, interesting ways to spend time)</li></ul><h4 id="read-four-books">Read four books.</h4><p>I used to read ~2 books per week. It was a big part of my life. Fiction, nonfiction, history—the genre was less important than the time I would spend lost between pages.</p><p>I don't think I've read a book cover to cover in months. And if I have read a book in the last year, it was probably something strictly business or management related. Basically, "for-profit reading".</p><p>I would like to get back to unstructured, "curiosity-driven" reading instead, so I'll make this a goal.</p><p>Steps:</p><ul><li>Pick four books.</li><li>Nevermind, I just did. <strong>Principles</strong>, <strong>Disquiet Gods</strong>, <strong>Revelation Space, There Is No Antimemetics Division</strong>.</li><li>Read them. I can already think of a few good times to do this—afternoons after I do my productivity stack, and 30-45 mins in the evenings before I go to bed. </li><li>Excited!</li></ul><h4 id="ideate-higher-impact-avenues">Ideate higher-impact avenues.</h4><p>I don't imagine I'll be able to decide on what I want my higher impact avenue to be right now.</p><p>But that's okay! I'm just getting the ball rolling. With the additional time I'm freeing up, and a bit of space between me and the day-to-day, I'll soon have plenty of room to determine the optimal path forward.</p><p>The cool thing about this: I am now exceedingly confident that I can have, and <em>do</em>, whatever I want. It just takes time and effort. There is no bar too high, or path too treacherous. In the long run, I am capable of it all. </p><figure class="kg-card kg-image-card"><img src="https://leap2grow.github.io/content/images/2025/07/image-3.png" class="kg-image" alt="" loading="lazy" width="1575" height="1050" srcset="https://leap2grow.github.io/content/images/size/w600/2025/07/image-3.png 600w, https://leap2grow.github.io/content/images/size/w1000/2025/07/image-3.png 1000w, https://leap2grow.github.io/content/images/2025/07/image-3.png 1575w" sizes="(min-width: 720px) 720px"></figure><p>I have not always believed this. </p><p>In my youth I deluded myself into thinking I'd be a world-renowned billionaire by 30 (uninformed optimism). Then, reality hit, I accrued a few business failures, and I quickly found myself doubting whether I'd be able to pay my rent, let alone food and other expenses! (informed pessimism)</p><p>But I applied myself consistently over the course of around a decade, and eventually climbed out the other side (crisis of meaning). </p><p>Now, looking back, it is clear to me that my problems are just ones of applied effort and enough time. Given that I have plenty of time—I am not even thirty, after all—I just need to find the thing I want to apply my effort to, and then do it.</p><p>I will figure this out in a directed way, and leave it for the end of this list so that, when I attack it, I am not hurried or busied by the various goings-on of my day.</p><p>Steps:</p><ul><li>Perform expected value (EV) calculations of possible paths. Employ similar logic to above, where I determined my own impact through content (1/33,333).</li><li>Narrow down to a shortlist and choose. I don't have to pick just one thing—in reality, optimal impact will probably consist of 2-3 things and a lot of shots at the net (see Sam Altman, Elon Musk, Peter Thiel, Marc Andreessen, Palmer Lucky, Naval Ravikant, Jaan Talinn).</li></ul><h3 id="closing-thoughts">Closing thoughts</h3><p>Not much to do now but... act! </p><p>I'll leave us with my closing thoughts from <a href="https://leap2grow.github.io/the-next-few-months-of-my-career/">last September's journal entry</a>.</p><blockquote>I would, of course, like to positively impact the world to a much greater degree than just producing content. But any grandiose plan at this point would be little more than fantasy.&nbsp;<br><br><a href="https://en.wikipedia.org/wiki/Jensen_Huang?ref=nicksaraev.com">Jensen Huang at NVIDIA</a>&nbsp;talks often about how “planning is just dressed-up guessing”. I firmly believe this. So I’ll keep my guesses as constrained as possible—to the next few months at maximum—and focus my energy on tackling the small, realistic actionables that I’ve listed above.<br><br>I’ll start by adding each step to my to-do-list and proceeding logically based on priority. Until next time.</blockquote><p>I love reading the thoughts of a younger me, because it confirms that my faith in the above concepts was correct. I have since achieved most of the goals I wanted back then, and am in a much better position to determine how best to positively impact the world. </p><p>No longer is any of this just "fantasy", but something I will turn into "reality". And the next time I write, I will undoubtedly have made even more headway making that so.</p><p>Time to get to work.</p>
    </article>

    <div class="px-4 sm:px-6 mb-12">
    <div class="pt-8 text-typ text-sm font-medium max-w-content mx-auto flex gap-3 md:gap-4 justify-center flex-wrap items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-fading" 
      data-share >
      <span class="text-base flex-1 basis-full sm:basis-auto text-center sm:text-left">Share</span>

      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://twitter.com/share?text=The%20next%20few%20months%20of%20my%20life&amp;url=https://leap2grow.github.io/the-next-few-months-of-my-life/"
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
          href="https://bsky.app/intent/compose?text=The%20next%20few%20months%20of%20my%20life%20https://leap2grow.github.io/the-next-few-months-of-my-life/"
          title="Share on Bluesky" aria-label="Share">
        <i class="icon icon-brand-bluesky size-4 stroke-2">
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.facebook.com/sharer.php?u=https://leap2grow.github.io/the-next-few-months-of-my-life/"
          title="Share on Facebook" aria-label="Share">
        <i class="icon icon-facebook size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>



</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://leap2grow.github.io/the-next-few-months-of-my-life/&title=The%20next%20few%20months%20of%20my%20life&summary=The%20next%20few%20months%20of%20my%20life"
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
          href="mailto:?subject=The%20next%20few%20months%20of%20my%20life&body=https://leap2grow.github.io/the-next-few-months-of-my-life/&nbsp;The%20next%20few%20months%20of%20my%20life"
          title="Share by email" aria-label="Email">
        <i class="icon icon-mail size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
</i>        <span class="">Email</span>
      </a>
      <button class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" data-share-copy data-url="https://leap2grow.github.io/the-next-few-months-of-my-life/"
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
              <article class="post tag-lfimpr featured  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/next-few-months/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2025/11/A4FDC373-CBFA-4439-AA84-2506F9B80D1A_1_105_c-1.jpeg 320w, /content/images/size/w640/format/webp/2025/11/A4FDC373-CBFA-4439-AA84-2506F9B80D1A_1_105_c-1.jpeg 600w, /content/images/size/w960/format/webp/2025/11/A4FDC373-CBFA-4439-AA84-2506F9B80D1A_1_105_c-1.jpeg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2025/11/A4FDC373-CBFA-4439-AA84-2506F9B80D1A_1_105_c-1.jpeg 320w, /content/images/size/w640/format/webp/2025/11/A4FDC373-CBFA-4439-AA84-2506F9B80D1A_1_105_c-1.jpeg 600w, /content/images/size/w960/format/webp/2025/11/A4FDC373-CBFA-4439-AA84-2506F9B80D1A_1_105_c-1.jpeg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2025/11/A4FDC373-CBFA-4439-AA84-2506F9B80D1A_1_105_c-1.jpeg"
    alt="Next few months"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/lfimpr/" class="hover:text-brand">Life Improvement</a>
      
        <span class="">·</span>

      <time class="" datetime="2025-11-19">Nov 19, 2025</time> 

      <span class="flex-1"></span>

        <span data-post-card-featured class="flex gap-1 text-xs font-medium group relative rounded-full">
          <span class="sr-only">Featured</span>
          <i class="icon icon-star size-4 text-yellow-400 fill-yellow-400 [&amp;&gt;svg]:fill-inherit stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg>



</i>        </span>

    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/next-few-months/" class="">Next few months</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        Often, I write these journal entries to brainstorm how I’m going to make more money, or optimize my schedule,
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
</article>              <article class="post tag-lfimpr  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/lifestyle-audit/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 320w, /content/images/size/w640/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 600w, /content/images/size/w960/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 320w, /content/images/size/w640/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 600w, /content/images/size/w960/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg"
    alt="A comprehensive audit of my lifestyle"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/lfimpr/" class="hover:text-brand">Life Improvement</a>
      
        <span class="">·</span>

      <time class="" datetime="2024-11-04">Nov 4, 2024</time> 

      <span class="flex-1"></span>


    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/lifestyle-audit/" class="">A comprehensive audit of my lifestyle</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        Over the last few months, I’ve felt more distracted, less productive, and substantially more irritable. This morning, I wondered
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
</article>              <article class="post tag-lfimpr  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/doing-in-public-minimizing-friction/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2024/09/image-2-1.png 320w, /content/images/size/w640/format/webp/2024/09/image-2-1.png 600w, /content/images/size/w960/format/webp/2024/09/image-2-1.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2024/09/image-2-1.png 320w, /content/images/size/w640/format/webp/2024/09/image-2-1.png 600w, /content/images/size/w960/format/webp/2024/09/image-2-1.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2024/09/image-2-1.png"
    alt="Focus on minimizing friction"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/lfimpr/" class="hover:text-brand">Life Improvement</a>
      
        <span class="">·</span>

      <time class="" datetime="2024-02-29">Feb 29, 2024</time> 

      <span class="flex-1"></span>


    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/doing-in-public-minimizing-friction/" class="">Focus on minimizing friction</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        I journal every day. It&#39;s a straightforward way to clear my thoughts and apply intentionality to my life.
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
                      <a href="/tag/lfimpr/" class="flex hover:text-brand">Life Improvement</a>
                    </li>
                    <li class="flex flex-col relative">
                      <a href="/tag/ftr/" class="flex hover:text-brand">Futurology</a>
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
  
</script>
  </body>
</html>
