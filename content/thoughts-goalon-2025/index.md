<!DOCTYPE html>
<html lang="en" data-color-scheme="system" class="scroll-smooth">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Thoughts, goals, and actionables for 2025</title>

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
    <link rel="canonical" href="https://leap2grow.github.io/thoughts-goalon-2025/">
    <meta name="referrer" content="no-referrer-when-downgrade">
    
    <meta property="og:site_name" content="Nick Saraev">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Thoughts, goals, and actionables for 2025">
    <meta property="og:description" content="Today I will write a meandering, journal-style article where I evaluate my progress over 2024, set goals for 2025, and then create actionable tasks to get me closer to those goals.

I&#x27;m doing this because, over the course of the last few chapters of my life, I can directly correlate">
    <meta property="og:url" content="https://leap2grow.github.io/thoughts-goalon-2025/">
    <meta property="og:image" content="https://leap2grow.github.io/content/images/size/w1200/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg">
    <meta property="article:published_time" content="2024-12-27T02:40:38.000Z">
    <meta property="article:modified_time" content="2025-07-26T01:04:46.000Z">
    <meta property="article:tag" content="Building in Public">
    
    <meta property="article:publisher" content="https://www.facebook.com/nick.john.wells">
    <meta property="article:author" content="https://www.facebook.com/nick.john.wells/">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Thoughts, goals, and actionables for 2025">
    <meta name="twitter:description" content="Today I will write a meandering, journal-style article where I evaluate my progress over 2024, set goals for 2025, and then create actionable tasks to get me closer to those goals.

I&#x27;m doing this because, over the course of the last few chapters of my life, I can directly correlate">
    <meta name="twitter:url" content="https://leap2grow.github.io/thoughts-goalon-2025/">
    <meta name="twitter:image" content="https://leap2grow.github.io/content/images/size/w1200/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg">
    <meta name="twitter:label1" content="Written by">
    <meta name="twitter:data1" content="Nick Saraev">
    <meta name="twitter:label2" content="Filed under">
    <meta name="twitter:data2" content="Building in Public">
    <meta name="twitter:site" content="@nicksaraev">
    <meta name="twitter:creator" content="@nicksaraev">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="843">
    
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
    "headline": "Thoughts, goals, and actionables for 2025",
    "url": "https://leap2grow.github.io/thoughts-goalon-2025/",
    "datePublished": "2024-12-27T02:40:38.000Z",
    "dateModified": "2025-07-26T01:04:46.000Z",
    "image": {
        "@type": "ImageObject",
        "url": "https://leap2grow.github.io/content/images/size/w1200/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg",
        "width": 1200,
        "height": 843
    },
    "keywords": "Building in Public",
    "description": "Today I will write a meandering, journal-style article where I evaluate my progress over 2024, set goals for 2025, and then create actionable tasks to get me closer to those goals.\n\nI&#x27;m doing this because, over the course of the last few chapters of my life, I can directly correlate journal entries like these with significant improvements in my station.\n\n\nWhat exactly will I be writing about?\n\nThe pattern I&#x27;ve settled on seems to be:\n\n 1. I spend ~24 hours thinking deeply about what I&#x27;ve done, w",
    "mainEntityOfPage": "https://leap2grow.github.io/thoughts-goalon-2025/"
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
    <script defer src="/public/ghost-stats.min.js?v=7380097362" data-stringify-payload="false" data-datasource="analytics_events" data-storage="localStorage" data-host="https://leap2grow.github.io/.ghost/analytics/api/v1/page_hit"  tb_site_uuid="1ae3de90-cafc-423f-b6a1-36af422be674" tb_post_uuid="823af910-3fe7-4ebc-87e0-a8b88645b490" tb_post_type="post" tb_member_uuid="undefined" tb_member_status="undefined"></script><style>:root {--ghost-accent-color: #008cff;}</style>
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
  <body class="post-template tag-building-in-public subpixel-antialiased relative overflow-x-hidden bg-bgr text-typ"
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
            <a href="/tag/building-in-public/" class="hover:text-brand">Building in Public</a>
            <span>·</span>
          <time class="" datetime="2024-12-26">Dec 26, 2024</time> 
            <span>·</span>
            <span class="">
              44 min read
            </span>
        </div>

      <h1 class="text-typ font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl">
        Thoughts, goals, and actionables for 2025
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
    srcset="/content/images/size/w320/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 320w, /content/images/size/w640/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 600w, /content/images/size/w960/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 960w, /content/images/size/w1280/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    type="image/webp"
  >
  <img class="w-full object-cover rounded-theme-xs aspect-[16/9] border border-brd bg-bgr-tone"
    
    loading="eager"
    srcset="/content/images/size/w320/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 320w, /content/images/size/w640/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 600w, /content/images/size/w960/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 960w, /content/images/size/w1280/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    src="/content/images/size/w30/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg"
    alt="Thoughts, goals, and actionables for 2025"
    
  />
</picture>
        
      </figure>

  </div>
</section>
    <article class="ghost-content prose md:prose-lg prose-theme">
      <p>Today I will write a meandering, journal-style article where I evaluate my progress over 2024, set goals for 2025, and then create actionable tasks to get me closer to those goals.</p><p>I'm doing this because, over the course of the last few chapters of my life, I can directly correlate journal entries like these with significant improvements in my station.</p><h3 id="what-exactly-will-i-be-writing-about">What exactly will I be writing about?</h3><p>The pattern I've settled on seems to be:</p><ol><li>I spend ~24 hours thinking deeply about what I've done, where I am, and where I want to go. This is '<a href="https://thedecisionlab.com/reference-guide/philosophy/system-1-and-system-2-thinking?ref=nicksaraev.com">type 2</a>' thinking and very laborious in nature, so I tend to put it off. But it's always extremely rewarding, and I end up with a great list of goals to anchor my next few months.</li><li>After this period of contemplation, I then create a large list of actionable tasks to move me closer to those goals. My actionables take different forms and shapes—some help me minimize the inconveniences in my life, others directly increase revenue, and others still are meant to improve my emotional states &amp; self talk.</li><li>I proceed down this task list and use it as my 'store' of work until I'm finished (or ready to repeat this exercise again).</li></ol><h3 id="how-will-i-structure-my-thoughts">How will I structure my thoughts?</h3><p>I'll begin by critically evaluating where I was at the beginning of 2024, and the displacement between that point and today. It's technically Christmas (Dec 25th), so we still have a few days to go before the end of the year, but I'll pretend it's Dec 31st 2024 for the sake of simplicity.</p><p>Then, I'll discuss whether I'm satisfied with that progress. I'll talk about wins, losses, things that held me back (negative behaviors I want to minimize), things that moved me forward (positive behaviors I want to maximize), and try to 'zoom out' to see the bigger picture with regards to the decisions that I made. I'll do this across a number of axes—my career, my finances, my health, and my relationships.</p><p>From here, I'll be able to set robust goals for 2025. I will attempt to set goals in each of the domains I listed above, as difficult as they may be. These initial goals will be 'outcome goals', but afterwards I'll translate these into 'actionables', which I find more manageable and directly controllable.</p><p>This will be similar in nature to my <a href="https://leap2grow.github.io/lifestyle-audit/">lifestyle audits</a>, and help mitigate the 'okay, I know what to do.. but now what?' pattern that is so common in my students and community members.</p><p>I'll probably take some detours along the way. No good path is truly linear, after all. I want to touch on my self-talk, as my friend <a href="https://www.youtube.com/@mattlarsen1000x?ref=nicksaraev.com">Matt</a> repeatedly brings up good points (that your thoughts are responsible for your behaviors, and if those are wrong your behaviors are likely to be too). I'd also like to touch on some market patterns that I see in AI, and will probably devote a few paragraphs to that.</p><p>Anyway... let's get started!</p><h3 id="where-was-i-at-the-beginning-of-2024">Where was I at the beginning of 2024?</h3><p>I have come a <em>long </em>way since the beginning of this year. My finances, career, and general outlook on life have all changed greatly.</p><p>Before I wrote this, I looked back through older journal entries. I found an interesting one I'd like to share before proceeding:</p><p>--</p><p><strong>January 19, 2024</strong></p><p><em>What would happen if I began posting my journal entries on the internet?</em></p><p><em>Looking back, the quality of the content in one of my average entries is significantly higher than the majority of the content available on social media or popular blogs. And most of it is just random musing—I’m not trying particularly hard to make a point or sway people with an argument. Writing is just how I clear my thoughts.</em></p><p><em>If it’s valuable to me, it’d probably be valuable to others, if just for visibility into the way that high earners or high performers think. Very few high earners are as intellectually transparent as I am, so at minimum I’d be interesting (likely to the more academic side of the internet) and at maximum I could develop a following doing nothing more than what I normally do every day!</em></p><p><em>--</em></p><p>That's exactly what this journal is! Interesting to see my latent thoughts slowly play out.</p><p>Since I wrote that on January 19th, 2024 entry, my monthly income has increased by approximately 7x. I've also made over $1,000,000 in cash, while substantially improving my reputation with no noticeable decrease in life satisfaction.</p><p>My health has been impacted somewhat, owing mostly to a particularly frustrating shoulder injury. I'll get into that later. But aside from that, 2024 was very clearly a major W.</p><p>To reflect on the last year, I'd like to tabulate my 'wins' and 'losses'. I'm going to create a list of them below, and use that to establish new metrics by which to compare myself to at the end of 2025.</p><h3 id="what-have-i-won-at%E2%80%94objectively%E2%80%94in-the-last-year">What have I won at—objectively—in the last year?</h3><ol><li><strong>I earned over $1,000,000 in 2024. </strong>I don't have the whole year's statements easily available to me, but to be more precise, I earned over <strong>$836,000</strong> in just the last six months, and <strong>&gt;$300,000</strong> in the six months preceding that. This is a reasonably large sum of money, and one that I was not expecting to make until later on in life.<ul><li>To be clear: I am making more money now (inflation-adjusted) than Jeff Bezos was at my age. Over twice as much, in fact. It's also more money than: Warren Buffet, Larry Ellison, Richard Branson, Reed Hastings, and Michael Bloomberg.</li><li>What this means: I am producing more capital at my age today than nearly all of the major entrepreneurs that I look up to. Many of these entrepreneurs now dominate global affairs! I should not forget this.</li><li>I'm probably one of the richest people in my city by income; perhaps top few hundred. Since Calgary is one of the richest cities in my country, that by extension means I am one of the highest earners in Canada. If you got, say, the top ~3,000 highest earners in Canada together, I would probably be in that group (and I'd statistically be one of the youngest!)</li></ul></li><li><strong>I earned over 38,000 subscribers in 2024. </strong>I rose from pretty much nothing to become one of the biggest influencers in my industry (automation). Additionally, though difficult to quantify, I am likely one of, if not the most respected. People trust me, and my reputation is fantastic. This is worth its weight in gold, I think—I can count on one hand the number of coaches/consultants with positive reputations, and I believe my authenticity is a strong positive signal in a market crowded with bullshit.<ul><li>I have always wanted to start a brand. My entire life, I've felt that I was destined to do so. I thought about it constantly growing up, and always found one reason or another to put it off. This year I finally executed on it and won.</li><li>My brand has understandably completely changed my day-to-day. I am no longer chained to cold outreach (which while nice, is much less fulfilling). I am capable of doing things today I could have never dreamed of just a year ago. I am also the most stable I have ever been—I could pivot business models on a dime, and the bulk of my followers would come with me. I have (frankly) insane future growth potential.</li></ul></li><li><strong>I exited my first real estate investment in 2024.</strong> This was another long-time goal of mine, mostly borrowed from my family. But I still did it, and I should consider it a major accomplishment.<ul><li>For context, I purchased a condo in Coach Hill, Calgary at the end of 2023, and sold it around a year later in September 2024.</li><li>I made ~$30,000 on the property, marking my first real estate exit. While the process was rife with a number of issues, it was a valuable one to have.</li></ul></li><li><strong>I purchased my first car in 2024. </strong>Before this year, I never had a car of my own. Though modest, my 2024 Outback is still the highest-end vehicle I've ever had, and the difference between it and my old 2008 Saturn Astra (loaned to me by my family) is very clear.<ul><li>Aside from the process of purchasing a car, which was interesting in its own right, I also now feel much more confident driving than I did previously. It's also significantly more convenient to get from A -&gt; B, and I think it looks OK too (despite all of my friends calling me a lesbian!)</li></ul></li><li><strong>I got my first serious girlfriend</strong>. I have dated a reasonable number of women, mostly owing to my time in the entertainment industry, but a small percentage of those lasted more than a few months.<ul><li>My current relationship, on the other hand, is definitively long-term. I've grown to love it a great deal and have never experienced stronger feelings in my life.</li><li>It has helped me add a texture to my days that I didn't think was possible, while undoing many of my negative perceptions of relationships. Massive win.</li></ul></li><li><strong>I lived, and worked, in Prague for a full month. </strong>One of my longterm aspirations has been to travel the world &amp; live in other countries on a mid to long term basis. I don't just want to 'visit'—I want to experience what it means to absorb the local culture at a much deeper level than most tourists.<ul><li>I finally did this in March 2024 with my month in Prague. My business partner and I rented a few apartments in the downtown core and got to explore what it meant not just to visit, but to really <em>live</em> in the charming Czech city.</li><li>We worked at a beautiful office downtown most of the week, ate like the locals did, travelled to a few nearby towns, and really got to contrast it to life in Canada, Bulgaria, and the Philippines. This made me a significantly more well-rounded person, I think, and gave me insight into living conditions in the country. I firmly believe Prague is one of the best cities in the world, quality-of-life wise.</li></ul></li><li><strong>I became friends with </strong><a href="https://www.youtube.com/@mattlarsen1000x?ref=nicksaraev.com"><strong>Matt Larsen</strong></a>.<strong> </strong>Matt is a fellow entrepreneur I consider very similar to me, and he's quickly become a close friend. We're both ambitious, capable, and intelligent, so it's been refreshing having Matt in my life. He's also helped alleviate a few of my limiting beliefs surrounding money, which I'm grateful for.<ul><li>Matt is substantially further ahead than I am financially. His ability to monetize is impressive—he made ~3x more money than I did at ~1/3 of the subscriber count (~9x the 'monetization'). This has long been a problem for me, so watching him attack product dev with brute force has helped me take the complexity out of my work and focus on what matters most: simple levers that drive revenue.</li><li>Matt takes a similar brute-force approach to other things in life, and he's helped me grow past some sticking points. For instance, I was once deliberating selling my condo—I had some issues surrounding construction on the property and it was interfering with my ability to record. The indecision was costing me a lot of time/money. Matt simply said "stop being stupid and sell it". I found a realtor within an hour. Received an offer within a few minutes of it going live!</li><li>Most people I build these sorts of business relationships with get burned out quickly. They start out strong, but often stop responding after a couple of weeks. I have decided this is simply because I am too intense—when I get interested in something it tends to obsess me and I want to share my learnings with everyone, often to the tune of dozens of messages or calls per day. I've noticed that Matt has very similar intensity levels, and they haven't materially changed since we became friends. This is extremely rare and adds a level of mutual accountability to my life which I like.</li></ul></li><li><strong>I gained ownership of (and operated) a renowned PR company.</strong> As part of my business dealings in Prague, I gained ownership of a renowned public relations company with large associations and a ton of social proof. They had affiliations with the UN, NASA, Fujitsu, and several other nine figure organizations.<ul><li>I learned how organic PR works on a fundamental level, including how to get spots in major magazines (like Forbes, Business Insider, CoinTelegraph, and more).</li><li>I also learned how paid media operates, which gave me a better understanding of what 'social proof' means, and how to be more discerning about it as well.</li><li>But the most important thing I learned was that <strong>just having associations with major brands is not enough</strong>. Despite the history of demonstrated success, there were a few deep operational problems that impacted the growth of the company. I ended up making much more money walking away from the opportunity, which taught me the importance of saying no (even if the thing you're offered is bright and shiny).</li></ul></li></ol><p>In general, I've had quite the laundry list of wins. But I've also had some losses, and it'd be irresponsible not to note them! That's what I'll do next.</p><h3 id="what-have-i-lost-at%E2%80%94objectively%E2%80%94in-the-last-year">What have I lost at—objectively—in the last year?</h3><ol><li><strong>I've become significantly more emotional.</strong> Since starting my recent relationship, my decision making has changed significantly. I am finding that I make decisions much more impulsively than I used to. I also 'feel' things much more than before.<ul><li>This has certainly added that aforementioned texture to my life, but in the grand scheme of things, I consider this a negative outcome. It has impacted my ability to make logical decisions and remain in control of my mind.</li><li>For instance, I've caught myself tearing up at situations I would not have dreamed of a few years ago. Saying goodbye to people I won't see for a long time, or watching films that previously did nothing to me. It's not that I didn't feel sad about these things before—it's just that these feelings are now much stronger, and it feels like I've lost a bit of control of myself, so to speak.</li></ul></li><li><strong>I've wasted several hundred hours to mindless entertainment</strong> <strong>that doesn't add value to my life.</strong> Unlike the years prior, I have spent a substantial amount of time consuming mindless content like Instagram Reels. It is now a legitimate problem.<ul><li>This never used to be an issue for me. I would scoff at people that spent more than a few minutes per day scrolling—I considered them weak-willed and lacking in discipline.</li><li>But in the last year, I spent perhaps 30-60 minutes per day doing this. No hard stats but probably &gt;250 hours. This is a massive transition and substantial change from prior years, which makes me feel like the algorithm is 'winning', in a way.</li><li>To be clear, Instagram Reels and other shortform video content do give me pleasure. They also connect me with a few of my friends, and I consider both of these aspects positive. But in the grand scheme of things, Reels does not constitute 'quality entertainment'. It is, in fact, <em>lowest common denominator </em>entertainment.</li><li>I do not want to consume lowest common denominator content. I want to consume <em>art. </em>I want to experience the peak of what humanity can provide; intricate shows, live theater, riveting works of fiction... not crude dick jokes or grade school humor.</li></ul></li><li><strong>I terribly injured my right shoulder. </strong>Since tearing my glenoid labrum, I have been unable to raise my right arm more than ~90 degrees. This has significantly impacted my quality of life.<ul><li>Aesthetically, I am less muscular. I look less attractive today than I did one year ago, which is frustrating.</li><li>Functionally, I am weaker. I cannot do simple things like grab cups from my cupboard, or lift things above my head. This is crippling and has impacted my self esteem.</li><li>Somewhat related: I've felt like I'm completely at the whims of the Canadian healthcare system. I know that I don't have to be, and that I can do something about it (especially given my financial situation), but it's still been very frustrating to hear "just wait a little bit more and maybe it'll get better". It's been four months with no progress—I clearly need help!</li></ul></li><li><strong>I have become disillusioned with wealth. </strong>There were many things I was looking forward to doing when I finally 'had money'. Now that I do, I don't care much for them. I suppose one could view this as a positive, though I would consider it a negative given my disappointment.<ul><li>For instance, I once wanted to fine dine and eat nice food. I've now done this a handful of times, and the experience is usually mid-tier. I feel a little jaded about that, given how I'd heard my whole life how there was this upper echelon of culinary experiences. The same thing applies to wines, whiskies, cigars—I don't really care about the minor taste or texture differences between them, nor do I want to commit to whatever negative health impact is required to be able to get to the point where I can<em> </em>discern those differences.</li><li>Another thing I wanted to experience was 'white glove service'. But after spending significantly more for it, I feel like this sort of thing is overrated. It kind of feels as if I'm paying someone to like me, which ruins the experience, and I've come to the realization that I much prefer 'raw' service, 'authenticity', etc. Case in point: I recently went with my girlfriend to the west coast of Mexico. We stayed in one of the smallest, cheapest hotels possible, ate street food, and used the public bus. It was one of the best experiences of my life. Probably because it felt real!</li><li>I have long desired to live in a sleek, high quality apartment or townhouse. It was something I dreamed of after growing up staunchly in the low-middle class. But I've now done this, and found that there are very few material differences that matter to me. This is quite disappointing. I will probably still get a reasonable quality home, but since I consider myself mostly immune to the 'keeping up with the Kardashians' phenomenon, it will likely not be the sort that I dreamed of as a child. I don't really want a massive property, or the newest features. Considering I will spend 90% of my time in the same 100 square feet anyway, very little of that matters to me.</li></ul></li><li><strong>I've become an introvert. </strong>Owing mostly to my own poor decision making, I have distanced myself from many friends; made very few new ones in the last year; and completely lost a handful of old ones. I do run large virtual communities and host talks with hundreds of people—however, real life is a different matter, and I'm not particularly close to any of them.<ul><li>I think, at my core, I was always introvert leaning. But it's abundantly clear after this year that I now have significantly fewer friends than the average person. I don't go out often, and when I do, it's often business adjacent—1:1 or 1:2 meetings with entrepreneurs in my network.</li><li>I consider the majority of people in my life to be acquaintances, and have very few friends I can be open and honest with. I feel this is, in part, why I was drawn to my relationship so strongly. In addition to the romance, it fills a social void that I have created for myself over the last year.</li><li>Some of the people I've distanced myself from were extremely close to me—the best of my friends. But due to poor communication or a lack of alignment on goals, we're either not close or our friendships have been explicitly divorced.</li><li>I often feel lonely because of this. I used to have a more vibrant social life, and I'm great at fostering relationships with people that matter. In light of that, I often pictured myself becoming the 'connector' of my city, throwing social events that brought together the best and brightest. But that seems like quite a far cry from where I am at right now.</li></ul></li></ol><h3 id="retrospective">Retrospective</h3><p>Writing things out like that, it seems obvious that I have progressed greatly in the following fields:</p><ul><li>Finances (now a millionaire)</li><li>Romantic relationships (serious girlfriend)</li><li>Career (mid-sized brand and strong reputation in my industry)</li></ul><p>I did this at the cost of my:</p><ul><li>Social life (few events/outings)</li><li>Physical health (fucked up shoulder)</li><li>Entertainment quality (consuming low-brow content)</li></ul><p>It's not black-or-white, of course. I consider my wins to greatly overshadow my losses. I merely list both above to make a point that nothing in life comes for free; that, in order to take the large leaps forward that I did in 2024, I still had to go backwards a few steps in other areas.</p><p>That said, I do believe that I can have <em>most</em> of what I want. Perhaps it is not possible to fire 100% on all cylinders—but I think it's reasonable to believe I can get very close. So I will make it a point, in addition to the plentiful career goals I will discuss next, to fix my social life, physical health, and entertainment quality in 2025.</p><h3 id="goal-setting">Goal setting</h3><p>Prior instances of these journal articles usually involved me just diving into my actionables. This moved me forward a great deal, but I also feel that, at some level, I missed the forest for the trees.</p><p>I.e I can certainly get moving fast, but it matters more what direction I am going in. Therefore I should dedicate my next section to outlining <strong>goals</strong>:<strong> what is it that I really want?</strong></p><p>After some deliberation, I want:</p><ol><li>More money</li><li>More fame</li><li>Better health</li><li>A clearer mind</li><li>More (&amp; better) friends</li></ol><p>Below I will expand on each before writing down strategies on how I will achieve them!</p><h4 id="1-money">1. Money</h4><p>I know for a fact that I want more money. Although I expressed disappointment at the quality of experiences a million dollars might buy me, I still don't feel 'secure' with my net worth or level of income.</p><p>Realistically, if I retired today, I'd be doing so on just ~$40,000/yr of investment earnings (~4% SWR). That would not be sufficient to weather a strong storm, nor live the sort of life I want to live should I choose to stop working entirely (that latter part is unlikely, but I might as well have the option).</p><p>How much money do I need, then? Certainly more... but how much more? Some thoughts:</p><ul><li>I have noticed that, eventually, rich people stop optimizing for money, and start optimizing for geopolitical impact. Consider Elon Musk, Donald Trump, Jeff Bezos, or any of the other current headliners. Whether you agree with them or not, their actions have clearly stopped optimizing for "make the most money", and instead have shifted to "have the biggest impact".</li><li>While these men are indeed billionaires, that doesn't necessarily mean they have a billion dollars in liquid capital. Instead, should they need liquidity, they typically do so through credit facilities or margin loans against their equity holdings. So I don't <em>actually</em> need that much money in practice in order to have similar levels of impact.</li><li>It seems clear to me, then, that I will eventually stop caring about acquiring money. I can certainly aim to be a billionaire—but do I <em>need</em> to be one? Is it really in line with what I want?</li><li>Clearly, I would like to have some sort of major, lasting impact on the world, and while money is a proxy for my ability to do so, there are many recorded instances of people having outsized impacts with relatively little. It is thus probably not necessary for me to have 'a billion dollars' (cue Dr. Evil pose). I will probably be fine with significantly less.</li><li>I don't know what that number is and perhaps I never will. But I can still estimate. Even if my guess is way off-base, it at least gives me a starting point. Thinking out loud: if I *were* to reach this point, it would probably be at a level of wealth where an additional dollar does not make much of a difference to your quality of life; where I, for all intents and purposes, am 'maxed out'.</li><li>This number will probably be lower for me than for others, given my satisfaction with a lower standard of living and general 'idgaf' attitude about money.</li><li>/r/FATFIRE is a good place to go for this. There are many wealthy people on this subreddit, and most of their members aren't concerned about any sort of geopolitical impact, but instead optimize for quality of life and freedom. If I wanted to figure out where the diminishing returns were, it would probably be some average of opinions on that subreddit.</li><li>The consensus seems to be that ~$25,000,000 is "big". There are a few people talking about more, but most are talking about less. I'll use that as my barometer.</li><li>At that point, an additional marginal dollar wouldn't matter—I would probably be able to do everything at $26M that I could do at $25M. There are of course minor differences as you continue ascending the wealth ladder, but it seems fair to believe that this point of diminishing returns is where most multimillionaires decide that they have enough 'money' and choose to start focusing on other things (one of which being 'impact').</li><li>The real number, for me, may be even lower than this. I don't see why I wouldn't be able to leverage my equity to take big risks if needed, say on margin. I could also use my political/relationship capital to motivate investment in a cause I care about.</li><li>Anyway, back to the $25M. On an $80,000/m savings rate (conservative), I can achieve $25M in 12 years (40 years old). On a $140,000/m savings rate (current), I can achieve $25M in a little over 9 years (37 years old). On a $200,000/m savings rate (aspirational), I can achieve $25M in 7 years (35 years old).</li><li>This is still a reasonably meaningless number at the end of the day, so I won't read much into it. However, I think it's important to have <em>a number</em>, so I will make this one mine.</li></ul><p>Given that this is a goal setting document for 2025, what chunk of that remaining $24M is realistic to achieve in the next year?</p><ul><li>In the last three months, I've made $471,000, or an average of $157,000/m.</li><li>If I continue earning a similar amount, I will make ~$1.8M by the end of 2025.</li><li>It seems likely to me that as my brand continues to grow, I will make more money. This makes sense: as I increase my subscriber count, and improve my ability to product differentiate &amp; price, I should make more money.</li><li>I also foresee a boom in "<a href="https://finance.yahoo.com/news/ai-agents-drive-2025-boom-154254525.html?ref=nicksaraev.com">AI Agents</a>" that I believe will help me as well.</li><li>But there are also a number of things that may impact my earnings: changes in the product landscape, for one (I suspect communities will quickly go 'out of style' with the high % of grifters entering the market). Or saturation of my current niche. Or the release of a new platform leagues better than Make.com, etc. My current income is not guaranteed. So I will aim slightly higher than today, keeping in mind that whatever I'm currently making is already quite impressive.</li><li><strong>Knowing this, I believe a reasonable goal is $2,000,000 earned in 2025.</strong> This assumes I'll continue earning income at a slightly higher rate than today. I trust in my ability to navigate future market landscapes, whatever they may be, but this seems to be a realistic 'stretch' goal to shoot for in light of the things that are outside of my control. If I can do this in my 29th year, I will indeed have made much more money at that age than almost any of the major entrepreneurs I look up to.</li><li><strong>I'm also setting an additional constraint: I want to achieve this level of income without employing anyone</strong>. I do not want any partners in this business. I am fine sending certain tasks to contractors or freelancers, but this will be on an as-needed basis and I don't want my business model to rely on it. I will own 100% of my business, 100% of my brand, and do all of the heavy lifting myself using AI and automation as leverage.</li><li><strong>I'll also set a conservative goal of 95% of my funds invested by 2025. </strong>Currently, only ~40% of my funds are invested due to ignorance surrounding tax laws, accounts, etc. Until now, it hasn't been much of an issue, since time spent optimizing for monthly revenue &gt; time spent optimizing for passive income from investments. But as I grow, those two numbers will inevitably flip, and my money should be earning me money (rather than losing me money).</li></ul><h4 id="2-career-fame">2. Career &amp; fame</h4><p>Money is an important facet of my career, to be sure. But if one considers their career the pursuit of power (which seems reasonable to me) there are many other things aside from money that I can improve on. It therefore makes sense to have specific "career goals" in addition to monetary goals.</p><p>If you're not convinced, consider this: like money, YouTube subscribers allow you to exert your influence on the world. Subscribers are not dollars, but they are still a form of power in that they allow you to do similar things <em>to</em> dollars.</p><p>Optimizing for money and optimizing for YouTube subscribers are, while similar, still different things. Strategies that improve revenue are not parallel to strategies that improve subscribers; you can have a lot of the former and few of the latter, or the inverse, so they necessitate different paths.</p><p>It seems to me that:</p><ul><li><strong>Monetization and subscriber growth are at odds</strong>—the more you monetize a current subscriber base, the slower you will be to grow your future subscriber base.</li><li><strong>Subscribers are a form of latent wealth</strong>—they do not earn you money immediately, but they have a much higher 'potential' to earn you money down the line. They also afford you other forms of power as mentioned previously, and so while theoretically exchangeable to dollars (at some exchange rate) you should possess <em>both</em> money and subscribers to be safe.</li><li><strong>Given the premium put on attention, and how that premium is growing, subscribers are probably more valuable than dollars</strong>. If you are strategic in how you make use of them, you can do a lot with subscribers. Start global movements, change class consciousness, accelerate technological growth, etc. You can do this without any money at all.</li></ul><p>I believe the optimal strategy is probably to frontload your subscriber growth; that is, do things that improve your subscriber count more than your net worth (at the beginning). This helps you grow faster initially. After some theoretical goal number is achieved, you then slowly begin to monetize that subscriber count while minimizing the impact on future growth.</p><p>Public perception of a creator will necessarily go down the more you monetize your audience—this seems logical to me—so optimal growth of both $ and subscriber count involves finding a balance. It's sort of like the company lifecycle in corporate finance.</p><p>For instance:</p><ul><li>0-10,000 subscribers: 100% value giving, 0% monetization</li><li>10,000-100,000 subscribers: 95% value giving, 5% monetization</li><li>100,000-1,000,000 subscribers: 90% value giving, 10% monetization</li><li>And so on</li></ul><p>I think I've followed a similar strategy to date, though I've never explicitly verbalized it.</p><p>So what sort of career goals do I want to set? As mentioned above, subscribers are at a premium and I should aim to grow that base wherever possible. How many will I aim for? Taking stock:</p><ul><li>In 2024, with a reasonably inconsistent posting schedule, I accrued nearly 39,000 YouTube subscribers.</li><li>Platforms like YouTube generally follow network effects. If I remain consistent into 2025, I believe it's reasonable that I scale to <em>at least</em> 150,000. That's ~110,000 more, or an average of ~300/day.</li><li>I believe I can do this so long as my content continues to grow. I can no longer just do Make.com stuff, for instance—I am capping out quickly at that. But if I pivot to ChatGPT, AI Agents, N8N, "how to make money online", etc, this should be trivial to do. Because I should be able to maintain that core "Make.com base" of ~125/day, meaning I'd only need to make up ~175/day from new content.</li><li>This is a stretch goal, but if I can scale to 150,000 subscribers while maintaining similar levels of engagement to now (my engagement ratio is much better than almost all of my much larger competitors) I will definitively be the best YouTuber in the space, and probably the most reputable and successful influencer in automation more generally. My videos will get many more views and comments than the competition despite my 150,000 subscribers being ~mid tier. I think I can do this, because I've surveyed the competitive landscape and firmly believe I am the best.</li><li>Another thought: as I grow, I should begin diversifying my brand. If I concentrate a large portion of my latent wealth in YouTube subscribers, but then YouTube bans me for whatever reason (possible given how they've already clearly played fast and loose with my ad earnings) it would be crippling to my trajectory. I should thus distribute some of my followers across other social media platforms and mediums like email, Twitter, etc.</li><li>I should set goals for all of these too. I think a conversion rate of 10% from YouTube -&gt; other platforms is reasonable. Therefore:<ul><li>YouTube: 150,000 subscribers (currently 39,000)</li><li>X: 15,000 followers (currently 3,000)</li><li>Instagram: 15,000 followers (currently 2,000)</li><li>LinkedIn: 15,000 followers (currently 4,000)</li><li>Email: 15,000 email addresses (currently ~8,000, though difficult to quantify because of Gumroad).</li></ul></li><li>This makes sense because, odds are, 'power-followers' who will make me the majority of my wealth are the ones most likely to convert between platforms and give me their emails anyway. Meaning, if I offload even 10% of my subscriber base, that probably accounts for &gt;50% of future wealth.</li><li>And 10% is conservative! I could in practice do 20%, 30%, etc. I know a lot of people achieve much more.</li></ul><h4 id="3-health">3. Health</h4><p>I am already in fantastic shape. Perhaps top 5% worldwide. But I want to get even better—top 1%, in both aesthetics, function, and longevity.</p><p>I also want to do this without the use of performance enhancing drugs. My family has a history of heart disease and PED usage would not bode well for me, I think.</p><p>Concretely, cardiovascular health is the most correlated with longevity outcomes. So I want to significantly improve my cardiovascular health. I tried running in 2024, and while I kept it going for around a month and a half, I eventually dropped it because of cold weather.</p><p>In 2025, I want to keep going, and become the most cardiovascularly fit I've ever been. I think getting my 5K down to 25 mins or less is reasonable.</p><p>I also want this not to interfere with my weight. Previously, anytime I would do cardio, I would lose weight and start looking a little sickly/unhealthy (I was ~165lbs at 6'3 during Muay Thai). My ideal weight is 183lbs, so that's what I'll shoot for.</p><p>I also want to fix my shoulder. I would like to be able to play sports again—they added a ton of value to my life and I didn't realize how much I missed them until recently. My girlfriend is an avid tennis and pickleball player (much better than me) and it'd be great to be able to play together again.</p><p>To be clear: I don't want to make my health my life. I'm putting it third for a reason—because while I consider my health important, it is not the thing that I care the most about (I care much more about my career). So I am fine with doing 'really well' on most activities, but I don't need to be 'world-class'. 5K in ~25mins, 183lbs at similar levels of muscularity, and a full shoulder recovery seem reasonable to me.</p><p>Concretely, then:</p><ul><li><strong>5K in &lt;25 mins</strong></li><li><strong>183lbs</strong> <strong>total weight</strong></li><li><strong>Full shoulder recovery</strong> (conservatively, I want to be able to dumbbell OHP 50lbs &amp; play racquet sports again)</li></ul><h4 id="4-a-clearer-mind">4. A clearer mind</h4><p>One observation I've made over the last year is that I have began constructing my life in such a way to minimize time for deep thought.</p><p>In between tasks, for instance, I'm usually listening to music. Or on the phone with a friend. Or responding to emails, or scrolling through Instagram Reels, or watching some sort of low-brow YouTube content. Though these are enjoyable in the moment, it feels like the proportion of entertainment time : deep thought time has gone way up, and I find it more difficult to articulate my inner voice than before.</p><p>Growing up, I spent an incredible amount of time thinking in silence. It was one of my most enjoyable activities. I would wake up a few minutes before my alarm, and just spend that time staring at the ceiling thinking about my life. Or I'd pause halfway through a particularly good book chapter and imagine myself as the character, or stare out the window on the bus and think about what I was going to do with my future.</p><p>All of these led to rich 'inner worlds' that I constructed for myself and I would frequently get lost in my imagination. But somewhere along the line, I stopped doing this.</p><p>My perhaps hairbrained theory is that you can directly correlate the maturity of a man with the amount of time he has spent in deep thought. I think of it like muscular development at the gym: as long as your priors and mental models (workout programs and exercises) are OK, spending more time working out means you'll achieve a better body.</p><p>Subjectively, I also feel that time passes slower when I am thinking deeply about things. When I spend my time consuming low-brow entertainment, I feel like time passes quickly and hours can go by in the blink of an eye—but when I am contemplating a problem, or considering a deep issue in my life, it tends to proceed much more slowly. This yields me the perception that I'm living more per unit time, which seems to me a positive. So I want to think more.</p><p>I think there are a number of reasons for the decreased deep thought time:</p><ul><li>I am undoubtedly under more stress today than I was several years ago. This stress does two things: it prevents me from spending the time necessary to deeply contemplate a topic like I used to, and it also increases my desire to pacify with entertainment ('just one more reel!' etc).</li><li>The constant psychic barrage of social media could just be... winning. These platforms and their UX are developed by teams of the best psychiatrists and behavioral experts in the world. It's unreasonable that my simple mind (that evolved primarily to deal with basal needs like finding food, fighting, and having sex) could defend against this forever. I might just be reaching my expiration date.</li><li>My personal brand necessitates that I am on social media, and I have to check it every so often. For instance, I did not have an Instagram or Facebook account for several years leading up to this, but I eventually reactivated them when I started growing on YouTube (for follower diversification reasons). Likewise, I did not have Twitter on my phone, but I eventually downloaded it to respond to the many DMs I was receiving on a daily basis. Simply having social media makes me less likely to spend time in contemplation, so finding a workaround here could be beneficial.</li><li>I also have an iPhone now. I believe iPhone notifications are incredibly invasive—the default read receipts, for instance, along with how engaging they've made their messaging, has made me spend a lot of time either on my phone (or at least thinking about it). Given two hypothetical universes: one where I have a shitty old Android, and another where I have this sleek, engaging iPhone, in which do you think I'll be more distracted? Obviously the latter.</li><li>I work from home, and have less 'forced thinking time' because I'm in full control of my schedule. I realize now that a lot of my deep thought came from moments before, after, or in-between activities that were forced upon me: commuting to school/work, for instance. I don't do that any more, so I don't have little windows in which to carve out moments. Constraints mold behavior, and it's clear I have lost the constraints that afforded me deep thinking time.</li></ul><p>Writing it out like this has been deeply beneficial—it is now obvious why I'm thinking less and consuming more. I can create actionable tasks that directly solve each of these.</p><p>But how do I quantify success? What does 'a clearer mind' look like? It sounds like an admirable goal on the surface, but to make something achievable you must first define it. I don't see a straight line path to doing so. Blood cortisol levels? That seems silly and merely a proxy for a clear mind. Self-assessed stress? Also just a proxy and not the real metric I care about.</p><p>I could just set input goals surrounding social media consumption. That in and of itself is probably sufficient to reverse a lot of the damage. For instance, '365 days of no social media' or something.</p><p>I could also do something a little radical: I could clean up my profiles, make them public so everybody could follow them, and then I could just... let someone else change my password. This would make all of my profiles completely inaccessible (except for YouTube).</p><p>It would probably hamstring my growth on these platforms, to be clear. But maybe the subsequent increase in deep thought time would yield more of a benefit to my life and my inertia than the reduction in profile conversions from no activity.</p><p>Like if F = D * A, where F is my follower count, D is my deep thought time, and A is my activity on social media platforms. Perhaps the increase in D &gt; the decrease in A, or there's some large constant factor next to D that makes it a more important term.</p><p>I could also be making wrong assumptions—let's check this. Maybe deep thought has nothing to do with my follower count or output, and in fact deep thought actually works <em>against</em> me. More time thinking means less time doing, or something like that.</p><p>I'm going to consider this unlikely, because every time I have one of these meditative, deep thought journalling sessions, I tend to make explosive progress in my career. There is certainly nuance here; there is an optimal ratio of planning : action, and I shouldn't spend all my time thinking instead of doing. But I believe I am currently not at that ratio given how fuzzy my mind seems on a daily basis.</p><p>Okay, since I'm not seeing a simple solution to my goal setting problem, I'm just going to lay out a few actionable inputs and clean them up later. I really don't like the time I spend on social media, so and my gut feeling is that the benefits of ignoring it completely will outweigh the detriments of not being active on them for growth purposes.</p><ul><li>Optimize social media profiles to give me the best chances of conversion. Add a 'how to reach me' that funnels directly to my e-mail, and enforce this similar to Cal Newport.</li><li>Delete all social media applications from my phone &amp; blacklist their URLs on my computer.</li><li>Randomize the password(s) and store them somewhere I don't have access to; if this doesn't work, give them to a friend.</li><li>Set notification schedules on iPhone and watch so I don't get any notifications at all until specified times. Tell the people close to me about this so I don't negatively impact my relationships.</li></ul><h4 id="5-more-better-friends">5. More &amp; better friends</h4><p>As outlined above, I want more and better friends. I am a natural socialite, and my relationships bring me both joy and have helped catapult me towards success—I need to foster more of them. But most of my friends are now spread out throughout the world, and I haven't spent much time or energy cultivating relationships in my city.</p><p>The main way I want to do this is by hosting. This lets me set the experience, the food/drinks, the hours, and all of this will help me stay social without sacrificing the rest of my lifestyle. I believe this because I've tried the alternative many times (optimizing for social life at the <em>expense</em> of my lifestyle) and it inevitably forces me to decide between my career or my social life. I always choose the former.</p><p>So I would like to invite people over, perhaps weekly or biweekly. I also want most of this to be business-adjacent, i.e help me grow my social network, meet like-minded entrepreneurs, and absorb positive behaviors by proxy. Most of the major successes in my life have been tied to relationships, or mindset changes that I have had as a result of relationships, so giving myself more opportunities to have them seems pertinent.</p><p>This means I need:</p><ul><li>A small group of friends I can begin inviting (3-5 is sufficient, as I'll make it policy to bring your own friends, and in this way broaden my network).</li><li>A reasonable quality home—one that's sleek, enjoyable to be in, a convenient distance, and preferably with some sort of accessible parking. I also want it to have charm (not just your average home). I've had the idea of a loft with a large balcony in my head for years, not sure why, but I can explore this now that I have money.</li><li>A rotating set of activities of some kind. "Come over for drinks" inevitably gets boring, but adding one or two background activities (golf simulator, lawn bowling, etc) keeps the event interesting and allows the focus of the night not to revolve around alcohol.</li><li>The discipline to keep this going despite minor inconveniences. I have noticed a pattern within myself: I will often begin socializing, make many friends very quickly, and then inevitably find my time limited over the span of a few weeks. I'll then pendulum swing the other way, start saying "no" to everything, and slowly lose most of those friendships. There is definitely a middle ground, and as long as I'm thoughtful about it I believe I can have both the serendipity that good relationships provide + the sort of open schedule that allows me to achieve my goals.</li></ul><p>Speaking of goals, what should I make mine? I think, given the above, I want:</p><ul><li>Three close friends in my city (Calgary as of now, but this may change). I currently have just one, so this will be a major change and require conscious effort.</li><li>To host five events next year. This seems like a very achievable goal, but I have never hosted the sort of event that I am talking about before and already feel a level of discomfort stating it like this. Given that I'll be travelling for a significant portion of the year, though, I think five sounds reasonable (probably come out to one every 4-6 weeks not including time in other cities/countries).</li></ul><p>This seems sufficient to me. Social life is important, but not all-encompassing, and I believe these are good enough stretch goals for 2025.</p><h3 id="setting-actionables">Setting actionables</h3><p>Now that I have my 2025 output goals written down, I'm going to convert these into actionables—small inputs that, when applied consistently over time, will eventually yield me the outputs I desire.</p><p>I've done this a variety of times to great results. <a href="https://leap2grow.github.io/the-next-few-months-of-my-career/">The most recent round</a> (back in September) was directly responsible for me hitting $1M net worth. It doesn't work for everybody, but it does for me, and I believe this is because my main blocker is usually just poorly defined tasks: when something isn't clear, I tend to put it off, so the simplest way to get more things done is to spend a moment outlining what they are and how I'm going to do them.</p><p>Not all actionables will be 1:1 with my goals, and that's okay. There are a few from last year that I've been putting off, as well as some minor lifestyle changes that, at first glance, don't seem directly related. But I believe this is a sufficient level of planning to continue improving my life, so I'm going to devote the rest of this writeup to action.</p><h4 id="1-create-5-products">1. Create 5 products</h4><p>This is probably the straightest line path to my $2M goal in 2025. Every time I've created a new product, even if I think that product is not amazing, it multiplies my earnings. I've come to the conclusion that, because of my goodwill, people generally just want to buy whatever I put out.</p><p>I technically had this task on my September list; since then I made a single product (Maker School) that has generated me ~$200,000, along with a handful of templates that I have yet to formally offer.</p><p>Given that I now have two, I only need three more. I believe the simplest next three products are a set of templates that cover most automation agency use cases; CRMs, PMs, a set of cold email templates, prompts, etc. I should sell these standalone apart from my community, and then offer community members discounts. Probably the most revenue efficient option.</p><h4 id="2-plan-publish-183-youtube-videos">2. Plan &amp; publish 183 YouTube videos</h4><p>I like the idea of publishing 183 videos rather than going for one video per day. Why? Because, due to scheduling constraints, it is not always feasible for me to record and upload—sometimes I am in locations without wireless internet, and other times I am in situations where recording would be logistically infeasible (sleeping in the same home as others, where I'm concerned about noise, can't think through my content, etc).</p><p>By halving this, I can then separate my daily actionables into "planning" versus "publishing". This will also improve the quality of my content, since I'm spending more time outlining what it is that I want to do. I believe this is natural as your subscriber count grows (there's a reason Alex Hormozi, Charlie Morgan, and others publish every few days, and their content tends to be reasonably structured—you can't keep going off the cuff forever).</p><p>I need to define these in terms of deliverables, so I'll set a "plan" as an outline, or a Whimsical, or a system blueprint. I'll set a "published video" as a video that is recorded and scheduled in YouTube.</p><h4 id="3-create-content-strategy">3. Create content strategy</h4><p>Right now, my content strategy is very shitty. I just have two topic areas: I build a Make.com system alongside you, or I go through a knowledge-based slideshow presentation.</p><p>I am clearly capped out on the Make.com side of things. My daily new subscriber count hasn't changed virtually at all in the last few months from Make.com content. There is not a lot of value, outside of advertising revenue and improving my brand consolidation, in continuing to produce them. That latter point isn't as important anymore, either, because I have a large stockpile of Make.com content and the majority of my viewers haven't watched more than ~1/3 of them—so most of my content is just derivative at this point.</p><p>I should therefore turn my sights elsewhere, and create a content strategy that lets me tackle new/emerging markets. I also want to create two 'formats' for each, to see how different explanations and types of content impact viewer metrics. For instance, one might be a live build-along, and the other might be a systems flowchart + some sort of talking head.</p><p>Off the top of my head, I should explore:</p><ul><li>AI-specific content that does not have to do with Make.com or no-code platforms. I.e "ChatGPT Hacks", "Claude Hacks", that sort of thing.</li><li>N8N content, as it's quickly gaining traction as the go-to no-code platform for AI agents. I could easily reproduce my Make.com series in N8N and it wouldn't be all that hard. I've also noticed that there are very few tutorials that adequately explain things like self-hosting—mine would probably be the best.</li><li>Productivity, "make money online", and self-help content. I should experiment with a different format for this—a whiteboard, for instance, or a Charlie Morgan-esque stand with paper that I draw on with higher production value. I could experiment with Alex Hormozi style, top-down content as well, given that I now have a magnetic camera I can mount to my monitor.</li><li>Web scraping content using Apify. I should try a few videos that are not no-code platform specific, and actually cover some deeper fundamentals. I could repurpose most of Apify's docs for this easily and basically provide a 'video version'—my presentation skills and ability to explain concepts are probably on-par with, or better, than Apify's.</li></ul><h4 id="4-create-11-coaching-product-increase-prices">4. Create 1:1 coaching product &amp; increase prices</h4><p>I like 1:1 coaching, but I feel it is currently too undirected. I wait for my clients to bring me questions, and usually just go top to bottom answering them. I should create a list of 3-4 coaching-specific resources I can share with people to help simplify things like goal setting, and also create structure for our sessions where we dedicate X minutes to reviewing past progress, Y minutes to planning future growth, Z minutes to answering q's, etc.</p><p>After that, I should greatly increase my prices. As much as coaching is enjoyable, at present it is not the most cost-efficient use of my time. To protect against this, I will set a minimum internal hourly rate of $1,000/hr and remove 15 minute sessions as an option. Costs will be something like "$750 for 30 mins" and "$1,100 for 60 mins".</p><h4 id="5-remove-all-social-media-from-my-phone-my-computer-and-route-all-inquiries-directly-through-email">5. Remove all social media from my phone, my computer, and route all inquiries directly through email</h4><p>This will do four things:</p><ol><li>It will significantly improve my capacity for deep work. Right now I'm checking social media infrequently throughout the day and it's greatly interfering with my ability to sit and focus for more than perhaps one hour at a time (I used to routinely do 3+ hours). My usual motivation to check these platforms is to answer questions from people, but then the algorithms draw me in and I end up wasting time on them. Email would fix this.</li><li>It will get me the email addresses of everyone that wants something from me. Emails have more value than, say, an Instagram follow.</li><li>It'll reduce the amount of time I spend being influenced by others, or consuming negative/poor messaging. This will in turn increase the ratio of production : consumption, which is something I've been considering for many years. Also, with a bit of dev work, I could probably create a solution that still lets me produce things without necessarily being drawn into an algorithm specifically created to distract me. Perhaps some sort of Emacs shell or IDE that I use to tweet thoughts as they come without any of the downsides of the platform.</li><li>It'll be an interesting counter market signal, like my longform content. Whereas most of the rest of the world in 2024 tried to maximize how engaging their content was with ADHD jumpcut edits, my videos were purposefully extremely longform and low production value. It worked—I gained a reputation for authenticity. I believe something similar may occur if I make myself inaccessible. Other creators will try maximizing their time in the spotlight, push all sorts of platforms on you, etc, whereas I will make it clear that my focus is on "actually doing things, not just talking about it".</li></ol><h4 id="6-create-referraltrustpilot-strategy">6. Create referral/trustpilot strategy</h4><p>One of the interesting tasks from last session was when I tried creating a 'YouTube comment' scheme upon email requests. If you sent me a question about something, I would direct you to my most recent YouTube video and then ask you to send me the link so I could reply in public.</p><p>The idea was that this would boost engagement, and improve my time leverage. In practice, though, it was clunky and annoying, since I had to wait for them to get back to me with the link first, and then I had to send them another followup letting them know I answered it.</p><p>I think what I'll do instead is set up a TrustPilot or GMB or something similar, and then just direct people to it after I answer their question. This way I can do it in the same email that I do the response in. I can merely say "Hope this helped! If I solved your problem (and you've got a minute), would you mind leaving me a quick review on X? I'm trying to grow to...". Would be a simple keyboard macro, or I could make an email signature.</p><h4 id="7-optimize-skool-landing-pages">7. Optimize Skool landing pages</h4><p>In an effort to launch my MVP, I set up all of my Skool landing pages in a very simple and minimalistic way. My VSLs are pretty long, undirected, and I have many new case studies I can cite. I should re-record them and add more social proof pictures, as well as rewrite my descriptions.</p><h4 id="8-reduce-churn-in-mmwm-and-maker-school">8. Reduce churn in MMWM and Maker School</h4><p>You can approximate the lifetime value of your current MRR by just dividing it by your churn rate. If you're making $80,000/m, for instance, and your churn rate is 20%, that's $80,000/0.2 -&gt; $400,000.</p><p>At a certain point, optimizing your churn ends up being a better use of your time than acquiring new customers. I believe I'm nearing that point—with Maker School churn ~20%, if I were to merely bring it down 5%, I would basically instantly "make" ~$100,000. I've already done a variation of this back when my churn was 25%; bringing it from 25% -&gt; 20% was huge. So now I want to get churn from 20% -&gt; 15%.</p><p>It will be harder, because of diminishing returns w.r.t churn and the fact that my audience is very low ticket already, but I still believe I can do this in a few hours by rewriting some of my modules, adding 'unlockable resources' at specified points in Month 2, Month 3, and hosting weekly live events (right now they're biweekly).</p><h4 id="9-invest-earnings">9. Invest earnings</h4><p>I need to find a way to invest all of my earnings. I have ~60% of it held as liquid cash atm, which is simply inefficient given an inflation rate of perhaps 3% YoY (losing 1.8% of my money annually).</p><p>There are some considerations to make re: passive income maximums (I believe the Canadian SBD limit is ~$50,000/yr in passive investment income) but I'll have a conversation with my accountant about how best to do this as quickly as possible. Even if I invest in fixed or money market funds with minimal risk, no reason not to make another $30,000-$40,000/yr. But I need to act on this! No more sitting around.</p><h4 id="10-set-constraint-of-4-hour-workday">10. Set constraint of 4 hour workday</h4><p>I believe strongly in the practice of setting 'constraints' to behavior—that is, giving yourself a certain amount of time to do what needs to be done improves the probability that you will do your task during that time. It's classic <a href="https://en.wikipedia.org/wiki/Parkinson%27s_law?ref=nicksaraev.com">Parkinson's Law</a>.</p><p>I want to try this with four hour workdays.</p><p>In reality, I don't have a problem working more than four hours per day. I routinely spend 5-10 and enjoy it. But I want to try setting an artificial constraint here to see how far I can go.</p><p>I already track all of my work religiously. I have a spreadsheet that I've been using for the last 21 days where I log my morning actionable time: my community management, my inbox zero, my bookkeeping, and my content production. It averages ~3 hours/day at the moment, but I've noticed after this relatively high-ROI sprint I often then proceed to spend several more hours in an undirected fashion and accomplish very little. So my total output remains approximately the same, but the number of hours worked doubles.</p><p>I like the idea of forcing myself to constantly play an 'optimization game'. This also forces me to only work on things which <em>definitively</em> move the needle. I will aim to do this in 2025 by tracking my daily work hours. Even if I don't accomplish this the first few weeks (which I consider likely because I won't have fully fleshed out systems for everything) I think I can eventually bring myself down to a sub-4-hour-average by the end of the year.</p><h4 id="11-join-podcasts">11. Join podcasts</h4><p>This will significantly improve my daily subscriber numbers + consolidate current followers.</p><p>I am almost certainly going to remain a public figure of some kind. Podcasts are a very popular content format for public figures, and they also represent a novel way of getting people to interact with my brand. So I want to do more of them in 2025.</p><p>I've been invited to a few reasonably high-profile ones so far—Starter Story, a Microsoft podcast, and a couple of others. But I never take people up on their offers simply because I always have something seemingly more important to do.</p><p>The reality is, if I want to introduce new people to my brand, podcasts seem essential. So I will get in the habit of accepting these. In order to do this, I'll spend some time going over answers to a few common podcast questions: who I am, what I do, how I got started, etc. This should take me an hour or two, and then I can add these to an Anki deck to practice in increments over the next few months.</p><p>By the time I get the podcast circuit up and running (say, go on one podcast a week) I will probably be more proficient at this sort of thing than the majority of guests.</p><h4 id="12-create-platform-specific-offers">12. Create platform-specific offers</h4><p>In order to improve my conversion rate, I should have evergreen lead magnets that direct people from YouTube to X, YouTube to LinkedIn, YouTube to Instagram, YouTube to Email, etc. I should host these lead magnets on the social media profiles themselves, or have some sort of auto-DM feature where after you follow me you're sent it automatically. This would make my diversification completely passive. All I then need to do is mention it once somewhere near the beginning of each YouTube videos and include a link in my description.</p><p>So, to be clear, I need to create four compelling lead magnets total:</p><ul><li>X,</li><li>LinkedIn,</li><li>Instagram,</li><li>Email</li></ul><p>I then need to create auto-delivery mechanisms by which you receive something after following me (i.e ManyChat). I'll put links all over my YouTube and can even cross-link between profiles.</p><p>As long as my lead magnets are good, 10% follower diversification seems on the low end of what's possible. And I could also batch this with my product dev task above, since my products will be similar in nature (templates etc) and I can use "Get a $69 product for free" or something as the tag line.</p><h4 id="13-52-5k-runs">13. 52 5K runs</h4><p>Given where I live, I'll probably need to do a portion of these indoors.</p><p>My first 5K time was a little over 30 minutes. I feel like another 52 is more than sufficient to get me to my &lt; 25 minute goal—logically I only need to improve ~ 6 seconds per run, and that sounds very doable. I bet I'll have weeks where I improve 30 seconds or more at a time!</p><p>It's probably not the most optimal path to get there, but it's the simplest, and it will help me keep running in my life. I'll define this as a "logged Gravitus session" for simplicity.</p><h4 id="14-156-gym-sessions">14. 156 gym sessions</h4><p>Aside from runs, I want to exercise three times per week. When I say exercise here, I mean 'weight-bearing exercise'—I need to put load on my muscles. I'll also define "gym session" as "logged Gravitus session", similar to running.</p><p>I'm under no illusion that there will be weeks where I undershoot this goal. Whether due to, say, a shoulder surgery or something else. But that's why I'm framing it as a "number of gym sessions per year". The week-by-week variability will average out at ~3, and I believe for my current body type, fitness goals, and schedule, this is sufficient to continue progressing without making the gym my whole life.</p><h4 id="15-get-private-health-membership">15. Get private health membership</h4><p>As a Canadian living in a reasonably metropolitan area, medical care has become annoyingly difficult to manage. I don't have a family doctor, it takes me weeks to book a blood test using a portal (or 3-4 hours of waiting at a walk-in clinic) and I often have to spend a lot of time, energy, and effort justifying my health problems to physicians only for them not to take me seriously.</p><p>I mean, it's been ~140 days since I tore my shoulder—over a third of the year—and I am still in more or less the same place I was shortly after it occurred. Nothing of note has improved! They gave me a few pamphlets on rotator cuff exercises and that's it. I think it's clear that I need some sort of surgery, as I have less mobility than a ninety year old man, but I also know it's probably difficult for them to justify taking up room at a clinic seeing how I'm 'young and healthy'.</p><p>Anyway, a 'private health membership' is basically preferred care at a medical clinic of your choice, mixed with a bunch of preventative health management stuff like nutritionists, VO2 max tests, etc. It usually comes out to ~$5,000/yr (~$400/m Canadian) and lets me talk to, see, or schedule consults with doctors whenever I want.</p><p>Frustrating that I'm feeling like I have to do this despite our country having free health care, but our system is very overwhelmed and I'm quite young/healthy. Being pragmatic, I guess I was going to eventually do something similar anyway given my focus on health. So I'll do it this year.</p><h4 id="16-enforce-a-strict-no-social-media-policy-add-a-how-to-reach-me-on-my-profiles-that-funnels-directly-to-my-e-mail">16. Enforce a strict no-social-media policy &amp; add a 'how to reach me' on my profiles that funnels directly to my e-mail</h4><p>Aside from content production via YouTube, social media hasn't added much value to my life. But these platforms are inherently addictive, and constantly beckon me with low quality entertainment—even if the initial reason for their usage was for business.</p><p>To improve the clarity of my thinking, as well as increase the portion of 'deep work' to regular work I do per day, I'm going to delete all social media apps from my phone. I'm also going to blacklist their URLs on my computer, and randomize the password(s) (while storing them somewhere I don't have access to).</p><p>This is a ton of friction. My intuition is it's so much friction that I'll simply choose not to engage with social media in the first place, and earn a fair bit of my day—and mind—back.</p><p>I'll still have my social media profiles accessible to the public, so people will be able to message me should they choose to. But I won't check my requests or history (99% of those are wastes of time). Instead, I'll funnel all serious requests to my email address so I have one place to do my 'inbox zero' task every day.</p><p>I'll also set notification schedules on iPhone and watch so I don't get any notifications at all until specified times. Naturally, I'll tell the people close to me about this so I don't negatively impact my relationships. But I believe I'll be a lot better off for it.</p><h4 id="17-hire-cleaner">17. Hire cleaner</h4><p>I did this briefly after my last long journal entry in September, but quickly moved apartments. I don't want to have to worry about household tasks like cleaning anymore—they take up valuable real estate that I could spend thinking or growing my brands. Per-hour cost of a cleaner where I live is perhaps $40/hour, and my time is at least twenty or thirty times that.</p><h3 id="wrap-up">Wrap-up</h3><p>Fair to say I've covered a lot of ground in this journal entry. I don't have much more to say—I believe these are simple, clear actionable tasks that are backed by robust goals. Unlike previous years, where I was mostly all over the place, I give myself a high likelihood of completing them.</p><p>I'm excited about the targets I set for myself. $25,000,000 in holdings seems reasonable and entirely within the realm of possibility over the next few years. My subscriber count goals, personal branding goals, and health goals have also been clarified greatly by the last few hours. I believe these journal entries help me slowly inch towards the person I want to become.</p><p>What I'm going to do next: add the above tasks to my notes app (Godspeed) and begin working my way down the list. Thanks for reading.</p>
    </article>

    <div class="px-4 sm:px-6 mb-12">
    <div class="pt-8 text-typ text-sm font-medium max-w-content mx-auto flex gap-3 md:gap-4 justify-center flex-wrap items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-fading" 
      data-share >
      <span class="text-base flex-1 basis-full sm:basis-auto text-center sm:text-left">Share</span>

      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://twitter.com/share?text=Thoughts%2C%20goals%2C%20and%20actionables%20for%202025&amp;url=https://leap2grow.github.io/thoughts-goalon-2025/"
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
          href="https://bsky.app/intent/compose?text=Thoughts%2C%20goals%2C%20and%20actionables%20for%202025%20https://leap2grow.github.io/thoughts-goalon-2025/"
          title="Share on Bluesky" aria-label="Share">
        <i class="icon icon-brand-bluesky size-4 stroke-2">
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.facebook.com/sharer.php?u=https://leap2grow.github.io/thoughts-goalon-2025/"
          title="Share on Facebook" aria-label="Share">
        <i class="icon icon-facebook size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>



</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://leap2grow.github.io/thoughts-goalon-2025/&title=Thoughts%2C%20goals%2C%20and%20actionables%20for%202025&summary=Thoughts%2C%20goals%2C%20and%20actionables%20for%202025"
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
          href="mailto:?subject=Thoughts%2C%20goals%2C%20and%20actionables%20for%202025&body=https://leap2grow.github.io/thoughts-goalon-2025/&nbsp;Thoughts%2C%20goals%2C%20and%20actionables%20for%202025"
          title="Share by email" aria-label="Email">
        <i class="icon icon-mail size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
</i>        <span class="">Email</span>
      </a>
      <button class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" data-share-copy data-url="https://leap2grow.github.io/thoughts-goalon-2025/"
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
              <article class="post tag-building-in-public featured  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/the-next-few-months-of-my-career/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 320w, /content/images/size/w640/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 600w, /content/images/size/w960/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 320w, /content/images/size/w640/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 600w, /content/images/size/w960/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png"
    alt="The next few months of my career"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/building-in-public/" class="hover:text-brand">Building in Public</a>
      
        <span class="">·</span>

      <time class="" datetime="2024-09-03">Sep 3, 2024</time> 

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
      <a href="/the-next-few-months-of-my-career/" class="">The next few months of my career</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        Bottlenecks, ROI calculations, new product development, and more.
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
</article>              <article class="post tag-building-in-public  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/long-termism/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2024/09/56D3B082-28B7-4B4B-9BDB-E26E53F7B933_1_105_c-1-1.jpeg 320w, /content/images/size/w640/format/webp/2024/09/56D3B082-28B7-4B4B-9BDB-E26E53F7B933_1_105_c-1-1.jpeg 600w, /content/images/size/w960/format/webp/2024/09/56D3B082-28B7-4B4B-9BDB-E26E53F7B933_1_105_c-1-1.jpeg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2024/09/56D3B082-28B7-4B4B-9BDB-E26E53F7B933_1_105_c-1-1.jpeg 320w, /content/images/size/w640/format/webp/2024/09/56D3B082-28B7-4B4B-9BDB-E26E53F7B933_1_105_c-1-1.jpeg 600w, /content/images/size/w960/format/webp/2024/09/56D3B082-28B7-4B4B-9BDB-E26E53F7B933_1_105_c-1-1.jpeg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2024/09/56D3B082-28B7-4B4B-9BDB-E26E53F7B933_1_105_c-1-1.jpeg"
    alt="Building internet statues"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/building-in-public/" class="hover:text-brand">Building in Public</a>
      
        <span class="">·</span>

      <time class="" datetime="2024-03-08">Mar 8, 2024</time> 

      <span class="flex-1"></span>


    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/long-termism/" class="">Building internet statues</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        We build statues to represent important people that we want society to remember. Kings, philosophers, generals—the goal is to
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
</article>              <article class="post tag-building-in-public  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/38-41/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2024/09/Screenshot-2024-09-03-at-9.11.32-AM-1.png 320w, /content/images/size/w640/format/webp/2024/09/Screenshot-2024-09-03-at-9.11.32-AM-1.png 600w, /content/images/size/w960/format/webp/2024/09/Screenshot-2024-09-03-at-9.11.32-AM-1.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2024/09/Screenshot-2024-09-03-at-9.11.32-AM-1.png 320w, /content/images/size/w640/format/webp/2024/09/Screenshot-2024-09-03-at-9.11.32-AM-1.png 600w, /content/images/size/w960/format/webp/2024/09/Screenshot-2024-09-03-at-9.11.32-AM-1.png 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2024/09/Screenshot-2024-09-03-at-9.11.32-AM-1.png"
    alt="$38.41 in my first monetized day on YouTube"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/building-in-public/" class="hover:text-brand">Building in Public</a>
      
        <span class="">·</span>

      <time class="" datetime="2024-03-02">Mar 2, 2024</time> 

      <span class="flex-1"></span>


    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/38-41/" class="">$38.41 in my first monetized day on YouTube</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        Posting on YouTube is no longer just fun—it&#39;s financially rewarding! I made a little under $40 yesterday
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
  
</script>
  </body>
</html>
