<!DOCTYPE html>
<html lang="en" data-color-scheme="system" class="scroll-smooth">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>A comprehensive audit of my lifestyle</title>

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
    

    <link rel="icon" href="https://leap2grow.github.io/content/images/size/w256h256/2024/02/social_media.png" type="image/png">
    <link rel="canonical" href="https://leap2grow.github.io/lifestyle-audit/">
    <meta name="referrer" content="no-referrer-when-downgrade">
    
    <meta property="og:site_name" content="Nick Saraev">
    <meta property="og:type" content="article">
    <meta property="og:title" content="A comprehensive audit of my lifestyle">
    <meta property="og:description" content="Over the last few months, I’ve felt more distracted, less productive, and substantially more irritable. This morning, I wondered at why. 

My conclusion is that (like most things in life) it stems from my environment.

Compared to three months ago:

 * I sold my home and now live in a">
    <meta property="og:url" content="https://leap2grow.github.io/lifestyle-audit/">
    <meta property="og:image" content="https://leap2grow.github.io/content/images/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg">
    <meta property="article:published_time" content="2024-11-04T18:50:26.000Z">
    <meta property="article:modified_time" content="2025-07-26T01:04:38.000Z">
    <meta property="article:tag" content="Life Improvement">
    
    <meta property="article:publisher" content="https://www.facebook.com/nick.john.wells">
    <meta property="article:author" content="https://www.facebook.com/nick.john.wells/">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="A comprehensive audit of my lifestyle">
    <meta name="twitter:description" content="Over the last few months, I’ve felt more distracted, less productive, and substantially more irritable. This morning, I wondered at why. 

My conclusion is that (like most things in life) it stems from my environment.

Compared to three months ago:

 * I sold my home and now live in a">
    <meta name="twitter:url" content="https://leap2grow.github.io/lifestyle-audit/">
    <meta name="twitter:image" content="https://leap2grow.github.io/content/images/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg">
    <meta name="twitter:label1" content="Written by">
    <meta name="twitter:data1" content="Nick Saraev">
    <meta name="twitter:label2" content="Filed under">
    <meta name="twitter:data2" content="Life Improvement">
    <meta name="twitter:site" content="@nicksaraev">
    <meta name="twitter:creator" content="@nicksaraev">
    <meta property="og:image:width" content="1024">
    <meta property="og:image:height" content="768">
    
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
    "headline": "A comprehensive audit of my lifestyle",
    "url": "https://leap2grow.github.io/lifestyle-audit/",
    "datePublished": "2024-11-04T18:50:26.000Z",
    "dateModified": "2025-07-26T01:04:38.000Z",
    "image": {
        "@type": "ImageObject",
        "url": "https://leap2grow.github.io/content/images/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg",
        "width": 1024,
        "height": 768
    },
    "keywords": "Life Improvement",
    "description": "Over the last few months, I’ve felt more distracted, less productive, and substantially more irritable. This morning, I wondered at why. \n\nMy conclusion is that (like most things in life) it stems from my environment.\n\nCompared to three months ago:\n\n * I sold my home and now live in a different apartment,\n * I’ve torn my shoulder, making it difficult to do many of the things I liked doing (sports and exercise particularly),\n * I have new long-term health goals, along with dietary needs,\n\nGiven t",
    "mainEntityOfPage": "https://leap2grow.github.io/lifestyle-audit/"
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
    <script defer src="/public/ghost-stats.min.js?v=0e088e74f9" data-stringify-payload="false" data-datasource="analytics_events" data-storage="localStorage" data-host="https://leap2grow.github.io/.ghost/analytics/api/v1/page_hit"  tb_site_uuid="1ae3de90-cafc-423f-b6a1-36af422be674" tb_post_uuid="64eb017e-fb76-45a5-9239-d9773c1024d0" tb_post_type="post" tb_member_uuid="undefined" tb_member_status="undefined"></script><style>:root {--ghost-accent-color: #008cff;}</style>
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
          <time class="" datetime="2024-11-04">Nov 4, 2024</time> 
            <span>·</span>
            <span class="">
              29 min read
            </span>
        </div>

      <h1 class="text-typ font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl">
        A comprehensive audit of my lifestyle
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
    srcset="/content/images/size/w320/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 320w, /content/images/size/w640/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 600w, /content/images/size/w960/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 960w, /content/images/size/w1280/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    type="image/webp"
  >
  <img class="w-full object-cover rounded-theme-xs aspect-[16/9] border border-brd bg-bgr-tone"
    
    loading="eager"
    srcset="/content/images/size/w320/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 320w, /content/images/size/w640/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 600w, /content/images/size/w960/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 960w, /content/images/size/w1280/format/webp/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    src="/content/images/size/w30/2024/11/54972938-F34C-4744-A1E2-27800F470249_1_105_c.jpeg"
    alt="A comprehensive audit of my lifestyle"
    
  />
</picture>
        
      </figure>

  </div>
</section>
    <article class="ghost-content prose md:prose-lg prose-theme">
      <p>Over the last few months, I’ve felt more distracted, less productive, and substantially more irritable. This morning, I wondered at why.&nbsp;</p><p>My conclusion is that (like most things in life) it stems from my environment.</p><p>Compared to three months ago:</p><ul><li>I sold my home and now live in a different apartment,</li><li>I’ve torn my shoulder, making it difficult to do many of the things I liked doing (sports and exercise particularly),</li><li>I have new long-term health goals, along with dietary needs,</li></ul><p>Given these significant changes, it’s not surprising I’ve veered off of the productive path I so carefully designed for myself last year.&nbsp;</p><p>Unfortunately, the added friction in my life is causing me to to self-select <em>away</em> from beneficial behaviors and towards negative ones, and this is manifesting as the symptoms I described above.</p><p>But not all is lost!&nbsp;</p><h2 id="redesigning-my-life"><strong>Redesigning my life</strong></h2><p>I’m going to fix this with an exercise called the <em>lifestyle audit. </em></p><p>Lifestyle audits are a cornerstone of Maker School (my automation agency program)—their purpose is to help you thoughtfully design a more effective day-to-day.&nbsp;</p><p>I’ve done many lifestyle audits over the last few years, but I’ve chosen to do <em>this</em> one in public to help reinforce the concepts in my program, and to hold myself accountable to its outcomes.</p><p>Since many of you will be unfamiliar with lifestyle audits, I’ll begin by providing some context on how lifestyle audits work, their motivations, etc. Then I’ll do the exercise myself, writing out my thoughts as I proceed.</p><p>First, some history.</p><h3 id="choice-architecture"><strong>Choice architecture</strong></h3><p>The idea that the environment you live in plays a significant role in the decisions you make is not new.&nbsp; Kahneman was studying it back in the 1970s under the umbrella term “behavioral economics”.</p><p>Today, we often refer to the idea as <a href="https://pubmed.ncbi.nlm.nih.gov/22390518/?ref=nicksaraev.com">choice architecture</a>—how your environment shapes the <em>perception</em> and <em>relative likelihood </em>of the various choices you make.&nbsp;</p><p>Unsurprisingly, it’s driven a variety of changes in workplace and organizational management around the world. Everything from office layouts to grand architectural choices to the snack options in vending machines are, at some level, thought of in terms of productivity impact and how it shapes human decision making.&nbsp;</p><h3 id="applying-lifestyle-design-to-your-own-life"><strong>Applying lifestyle design to your own life</strong></h3><p>But what’s interesting is how few people ever consider the possibility of applying the concept of choice architecture to <em>themselves</em>.&nbsp;</p><p>Not a company office, or a sports stadium—but <em>you</em>. Your home, your tools, your relationships, and even your thoughts.</p><p>I believe this is for a variety of reasons:</p><ul><li><strong>Ego</strong>: we likely think we have more autonomy and agency than we really do.</li><li><strong>Fear</strong>: we’re afraid to validate the idea that, at some level, some of our decision making may be outside of our control (no one wants to be a rat in a Skinner box).</li><li><strong>Naïvety</strong>: we overestimate the impact of willpower, and underestimate the impact of our environment.</li></ul><p>I felt a few of these when I begun performing lifestyle audits. I thought I could just muscle my way out of my problems, that I had the power to change my life <em>in any environment and at any cost</em>.</p><p>I do, of course. But it gets a lot easier when you thoughtfully design your life. If you create an environment that makes positivity easy, and negativity hard, good things tend to just happen. Since I started seeing lifestyle audits as a tool in my arsenal (rather than some strange ego-death thing) my life has measurably improved in almost every domain.</p><h3 id="friction"><strong>Friction</strong></h3><p>To simplify choice architecture, and to take this from the realm of theory into action, it helps to think of things in terms of their “friction”.&nbsp;</p><p>Let’s define friction as <em>anything that makes it harder to do that which you want to do</em>.&nbsp;</p><p>For example:</p><ul><li>If you want to go to the gym but you live far from it, then your distance from the gym is friction. You having to get in your car, walk a lot, or take public transit makes it harder to go to the gym. Naturally, then, you'll do it less often.</li><li>If you want to apply to 10 Upwork jobs per day but your microphone keeps bugging out, then your crappy microphone is friction. You always worrying about your microphone working makes it harder to apply to Upwork jobs. Meaning, logically, you'll do it less often.</li><li>If you want to eat healthier food but your roommate keeps putting junk food around your kitchen, then your roommate's habit is friction. You having to exert extra willpower every day makes it harder to stick to your plans. Therefore you'll succeed less often.</li></ul><p>Looking at the above, it should be clear that “productivity” is not about having inexhaustible willpower or a stoic mind.&nbsp;It's simply about designing your life in such a way that minimizes friction. If the things you want to do are easy, and the things you <em>don't</em> want to do are hard, you will naturally begin living a better life.</p><p>That's the basis for the lifestyle audit. By doing them, we thoughtfully design our lives and our environments to make positive things easy and negative things hard.</p><h3 id="step-by-step"><strong>Step-by-step</strong></h3><p>Here’s how the lifestyle audit works in practice:</p><ol><li>First, we’ll comprehensively examine our career, our relationships, and our personal lives to identify as many "friction points" as possible.</li><li>Then, we’ll build a list of actions that we can take to start reducing or eliminating points of friction—making positive habits easier to maintain and negative habits easier to discard.</li><li>Once we’ve created our list, we’ll assign “difficulty” scores to each task (i.e we estimate how hard it would be for us to solve these friction points right now).</li><li>Lastly, we’ll begin solving these friction points starting from the least difficult<em> </em>to the most difficult. Why least -&gt; most? Because it a) helps us build momentum, and b) with less initial friction in our lives, subsequent friction points become easier to solve.&nbsp;</li></ol><p>Steps 1-3 take ~60 minutes. Step 4 can take days, weeks, or months. I typically recommend that you space out Step 4 to make it seem less intractable—i.e take care of a few friction points per day rather than trying to solve all of them at once.</p><h3 id="before-we-begin"><strong>Before we begin</strong></h3><p>Some important points you should know before we start:</p><ul><li>Right now, the goal is merely to <em>identify</em> friction, not solve it. All we’re doing is creating a list of points—we’ll worry about taking care of them afterwards.</li><li>Writing down a point of friction <em>does not mean</em> you commit to doing anything about it. This is crucial to address. On some level, humans fear explicitly verbalizing the negative parts about our lives because we think that doing so will require us to act on it. <em>It doesn’t. </em>There's no judgement on any of these items whatsoever, and you can change your mind at any time.</li></ul><h3 id="1-setup"><strong>1. Setup</strong></h3><blockquote>Note—the following is heavily inspired by <a href="https://www.lesswrong.com/posts/rFjhz5Ks685xHbMXW/hammertime-day-1-bug-hunt?ref=nicksaraev.com">this article</a>, originally written on LessWrong. I found a lot of value in their section on "bughunting" and have incorporated it into my own life (though I've replaced "bugs" with "friction" since I find this is a better way to think about it).</blockquote><p>Find a notebook, phone app, spreadsheet, or Google Doc to write with. You'll refer back to it repeatedly over the coming weeks.</p><p>To begin your lifestyle audit, follow each of the six sets of prompts in the next section. The moment you start each, set a timer for 5 minutes—your task is to list as many points of friction as you can in that time period.</p><h3 id="2-prompts"><strong>2. Prompts</strong></h3><p>Below are some helpful prompts that will walk us through a few common places that friction comes from. You don't <em>need</em> to constrain your friction points to these—they're merely meant to help encourage thinking.</p><h4 id="a-mindful-walkthrough">A. Mindful Walkthrough</h4><p>Walk through your daily routine in your head and look for places that need improvement. Do you wake up on time? Do you have a morning routine? Do you waste precious minutes deciding what to eat for breakfast? Are you using the most efficient commute, maximizing your time in transit, etc?</p><p>Fast forward to work or school. Are there physical discomforts? Do you have all the tools you need? Are there colleagues or individuals who cause friction, or with whom you need to communicate more? Do you ask for help when necessary? Do you know when to stay silent? Is there unproductive time during meetings, classes, or projects? Do you take care of yourself during the day?</p><p>Consider the evening at home. Do you waste time deciding where or what to eat? Are there hobbies you want to try but haven't yet? Are there enjoyable activities you're missing out on? Are you making consistent progress on side projects? Do you go to bed on time? How is your sleep quality?</p><h4 id="b-hobbies-habits-and-skills">B. Hobbies, habits, and skills</h4><p>Review your regular activities. Are there habits you intend to drop? Are there habits you want to develop but haven't yet?</p><p>For each hobby or habit, ask yourself the following questions: Do you do it enough? Do you do it too much? Are there ways to improve your experience? Could you do it at a different place or time? Should you do it with others or alone?</p><p>Maybe you have skills to practice. Are you as proficient as you want to be? Do you practice regularly? Have you plateaued by overtraining? Are there minor recurring issues preventing you from improving? Are there new directions you haven't explored that might indirectly enhance your abilities?</p><h4 id="c-space">C. Space</h4><p>Examine your living space, workspace, or vehicle interior. What would you change?</p><p>Your space should be functional. Is there clutter you navigate around daily? Are your chairs and tables at optimal heights? Is your bed comfortable? Are there items like towels, pans, notebooks, or papers that need organizing? Are there important things that deserve a more central position? Have you designated specific places for glasses, wallets, and phones?</p><p>Your space should also be aesthetically pleasing. Do any pieces of furniture or equipment stick out awkwardly? Do your walls feel drab and depressing? Are there carpet stains or dust that draw your eye and reduce happiness? Are you tired of the art on your walls?</p><p>Digital space can be as important as physical space. Do you have enough screens? Do you find yourself repeating tasks that could be automated? Do you use all the browser extensions and keyboard shortcuts available? Is there a voice in your head urging you to learn new software tools?</p><h4 id="d-time-and-attention">D. Time and attention</h4><p>People and activities demand your attention. What’s missing from your life that would let you manage your time as effectively as possible?</p><p>Many activities are bottomless time sinks. Do you watch shows or play games you no longer enjoy? Do you get pulled into unproductive conversations? Do you find yourself scrolling endlessly on social media? Are there classes, meetings, commutes, or projects that drain your energy for the rest of the day? Do you have strategies to protect yourself from time sinks?</p><p>Focus on the things you overlook. Do you often make mistakes on autopilot? Are there friends or family you’ve neglected or grown distant from? Are there conversations where you zone out but could gain more value? Is there a childhood dream you’ve forgotten?</p><p>Sometimes trivial distractions lead to significant setbacks. Are minor, recurring physical discomforts draining your efficiency? Does the weather hinder your exercise routine? Is there something that always diverts your attention from work?</p><h4 id="e-blind-spots">E. Blind spots</h4><p>Our biggest points of friction can hide in blind spots.</p><p>Take an external view of your life. Pretend, for a second, that you're me, and I'm evaluating you objectively. If I were to be straight with you: would I say that you're achieving your potential? What would I say is your biggest weakness? What do you think I'd point out as the one obstacle holding you back from reaching your goals? Do you have irrational attachments to parts of your identity? Do you routinely overestimate or underestimate your abilities?</p><p>What do I say about you that surprises you? What behaviors would annoy me? What behaviors would I appreciate? Is there advice I'd keep giving you?</p><p>Imagine your best friend advising you. What would they say? What deep insights are you missing? If you were the protagonist of a story, what genre would your life be?</p><p>Look to admiration and jealousy for insight. Are you the person you most admire? What skills and traits do others have that you aspire to?</p><h4 id="f-fear-and-trembling">F. Fear and trembling</h4><p>The shadows we avoid can hide the most valuable opportunities.</p><p>What are your greatest fears and anxieties? Do you have courage? Are there essential actions you need to take? Are there truths you're afraid to acknowledge? What do you lie to yourself about?</p><p>Consider your social circle. Are there good people you avoid? Are there conversation topics that make you uncomfortable? What comments cause you to lose your composure?</p><p>Think about the past and future as far as you can see. What deadlines make you anxious? Is there a type of person you fear becoming? Or are you most afraid of stagnation? Do you trust your past and future selves?</p><h3 id="3-sort"><strong>3. Sort</strong></h3><p>Most people that do this come up with 50-100 points of friction. When I did it the first time, I came up with 79. This time (as you'll see below) I came up with 63.</p><p>Now it's time for some housekeeping. Input all of the points of friction you've discovered into a spreadsheet. Add a column called "difficulty" beside every point.</p><p>Your last task is to assign difficulty ratings from 1 to 10 to each point of friction. 1 is "I could solve it right now" and 10 is "Just thinking about it causes existential panic." Sort them in increasing order of difficulty.</p><p>In the coming days, we'll systematically work through your list, addressing as many points of friction as possible. By the end of the month, you'll have taken major, definite action towards improving on things that have held you back (consciously or unconsciously) your entire life.</p><h3 id="my-own-friction-points">My own friction points</h3><p>Now that we understand the conceptual basis behind lifestyle audits and how to do them, I’m going to write out mine below. I’ll then treat this as a <em>living blog post</em> by updating the tasks on my lifestyle audit over the coming days and weeks.</p><p>Before we begin: I should note that not all of these are directly career related! You will (probably) see some weird, or unexpected entries here. I think of lifestyle audits as a way of improving <em>every</em> aspect of your life—and although the bulk of my focus is on my career, there are still other areas worth optimizing.</p><p>Anything in bold is something I'm currently working on.</p><h4 id="a-mindful-walkthrough-1"><strong>A mindful walkthrough&nbsp;</strong></h4><ol><li>I listen to audiobooks before I fall asleep, so my phone is usually within arms reach when I wake up! This often leads to at least a few minutes of mindless scrolling, which I'd be better off eliminating.<ol><li>Solved. I now put my phone in the bathroom as I brush my teeth before bed, and set it up to stream to AirPods. I use the "Timer" feature on iPhone and set it to sleep after 30mins.</li></ol></li><li>Related: when I wake up in the middle of the night I sometimes check my phone—this leads to me seeing the time, which frustrates me and makes it difficult to fall back asleep. I'll get 5-6 hours of sleep a few nights a month because of this.<ol><li>Previous hack solved this too. </li></ol></li><li>I sleep significantly better with earplugs (light sleeper, clearly) but I keep running out of the soft ones that I like. I should be able to fix this with some sort of routine Amazon schedule.<ol><li>Solved. Subscribed to <a href="https://www.amazon.ca/Earplugs-Sleeping-virtually-Comfortable-Studying/dp/B09MQFGMRZ?crid=19U585YCWILP3&dib=eyJ2IjoiMSJ9.nBJ6gwAx5I88ZJKddJrM2MLocw_EfftJRHzdd_igALS9QS3ZItHQrCS-2HhlMZkDC4YBCq-EDD2_3j4LYS4FETRnvHHdaIucuqLVR-xkEWuqZuBZES-qPaM_hlj5AL4uU9YiViU55OdbnTnsAa44WUHtuRQM8Dnxv9nd5xk5SHQtyaGJw67YL2_sliMHk2DKmVchSaeER5cduPG0n-lQJzIhsHKNQh_im9IpgJI4FyWNAXqPQYxZ97L36fxlTEkaJKE7hyDLX5lcWk-qzLosJXSavfyMV2Q5_zfjbG63YSI.Beyqg1ypVYuH1oMYOCABKTUnx1wR7Nd_mPpGVH9wxwA&dib_tag=se&keywords=earplugs&qid=1730734175&s=generic&sprefix=earplu%2Cspecialty-aps-sns%2C110&sr=8-5&th=1&ref=nicksaraev.com">these earplugs</a> on a 60-day schedule. If I end up with more, that's fine—they're like $10.</li></ol></li><li>I sleep better with ZMA but keep running out of it.<ol><li>Solved. Subscribed to <a href="https://www.amazon.ca/ALLMAX-Nutrition-ZMX2-90-Count/dp/B003FG671M?dib=eyJ2IjoiMSJ9.2rQzapR_ZTdIn9PnwIgbi8XtpRQH4NJlaoQizk66u7lmADopykel-ghiylBaB4iSbVPOrjOUgKcwAGop_2K90WKfx2RqOOqctrFVtpzqlJVjMBlpQxzK_cZcL0LsV_qQWezNcgxPX8h5XrJf994uaqAKqNde7OnF__1IqLrLcG8BK58SZhELqjwD0qYynOoNygjC_9p1rTSHhHwMh3tVxp9NaVRcyHf28Qdv9zr9ydV_mfu0SPtncuZM-4SCSrNP0-wDNVw22pcG_exR1fkws1dhqnc-PCRhOY6fHn_qbhM.WB2d1FO28fiPLCfSEV1lpEyYDJOhw9T0pGOiV4t5w-8&dib_tag=se&keywords=zma&qid=1730734227&rdc=1&sr=8-4&ref=nicksaraev.com">this Zinc/magnesium blend</a> on a 30-day schedule.</li></ol></li><li>My throat is extremely parched in the mornings and this is uncomfortable, but I don't have water nearby so I don't solve it immediately. I could build a habit <a href="https://jamesclear.com/atomic-habits?ref=nicksaraev.com">a la James Clear</a> where I fill up a water bottle before going to bed.<ol><li>Solved. Built an atomic habit where I fill up a water bottle before going to bed. Since it's insulated (<a href="https://owalalife.com/?ref=nicksaraev.com">Owala</a>) it also stays cold overnight, which makes it extra refreshing when I wake up. </li></ol></li><li>The humidity of my home is very low, and it's interfering with dryness, general comfort, etc. I could buy a humidifier (would need to do some research on how this all works, though).<ol><li>Decided not to buy a humidifier—moving in around a week, and my new home will have one. Will tolerate it for the next 7 days, not that bad yet anyway (no snowfall yet).</li><li>Update after moving: my new home has a humidifier as part of its central HVAC system. Done.</li></ol></li><li>I've noticed that I sometimes skip my morning skincare routine because I'm short on time. I think I can solve this by placing my cleanser within arms reach of my shower, since that way I'll be able to cleanse during my morning showers (as opposed to having to consciously make the decision to afterwards).<ol><li>Solved. I placed my cleanser on the ledge of my bathtub and return it there after I'm done. This makes me much more likely to do the rest of my routine as well. Insane how a small hack like this will probably lead to my skin looking <em>years</em> younger when I'm 50+.</li></ol></li><li>I've noticed my skin is often dry and crackly after showering because of the hard water in Calgary. I could find ways around this—perhaps a water softening system or something. That said, I do live in (mostly) short term furnished rentals at this point, so may be infeasible.<ol><li>Decided not to fix this yet. Moving in around a week, so will determine feasibility then.</li><li>Update after moving: this is feasible, though expensive. I can either buy a full home filtration system, which is ~$5K, or a shower head (something like the ShowerStick). The former isn't feasible as this isn't my home. Based on reviews, the latter sounds like it'll produce more friction than it'll save (frequent "recharges" of the resin filter). Will skip and use a full-body moisturizer after showering instead.</li></ol></li><li>My lips are perpetually chapped now due to dry winter air. I could just buy chapstick, something with vaseline in it. Would improve both appearance and comfort.<ol><li>Solved. Bought a collection of chapstick and put a few rolls next to my bed, a few in my car, and a few where I work.</li></ol></li><li>I routinely forget where my glasses, phone, and wallet are (which leads me to spending a silly amount of time looking for them). I could create a <a href="https://en.wikipedia.org/wiki/Focal_point_(game_theory)?ref=nicksaraev.com">Schelling place</a> the first day that I move into a new location.<ol><li>Solved. I created a Schelling point on the glass table next to my television, and now leave my phone, keys, wallet, glasses, etc there when I come into my home.</li><li>Update after moving: I created a new Schelling point by my staircase.</li></ol></li><li>I don't have a morning routine of any kind, so my days typically follow my moment-by-moment desires rather than longer term goals. This leads to lower stress, I think, but there are probably a handful of high-ROI actions I could be frontloading. For instance, taking a few of my supplements in the mornings (particularly the ones I forget). Or doing a brief bout of stretches/a warmup routine to make me more resilient to, say, back pain later on in the day (would let me work longer).<ol><li>It remains to be seen how strongly I stick to these habits, but I've decided upon:<ol><li>Morning supplements: I mix <a href="https://blueprint.bryanjohnson.com/products/longevity-blend-multinutrient-drink-mix-blood-orange-flavor?ref=nicksaraev.com">Longevity Mix</a> into the water bottle next to my bed the night prior. I then begin drinking it the moment I wake up, finish a few minutes later, and take the remainder of my supplements (mostly vitamins I have previously been deficient in). This is very low friction and I finish in less than 2 minutes.</li><li>Coffee: I then spend a few minutes to make coffee. I focus on being <a href="https://www.artisancoffeeco.com/blogs/news/transform-your-morning-coffee-into-a-powerful-self-care-ritual?ref=nicksaraev.com">present</a>, as I think there is value in consciously experiencing mundane rituals like this and it's a good way to wake up sans-phone. </li><li>Stretch: While I wait for my coffee, I do a handful of morning stretches.</li><li>I've written and spoken many times before about how I dislike long, drawn out morning routines (since I think they take away from what most entrepreneurs really care about: their ability to generate revenue). But I like this one—takes ~5 minutes in total, does not meaningfully detract from the rest of my day, and forces me to take care of things I otherwise forget about. I'll trial it for the next week and see how things go.</li></ol></li><li>Update: this has made me feel fantastic. I stick to this ~80% of the time, and feel noticeably better after a few days in a row—less back pain, more presence. This hasn't always been possible due to, say, sleeping somewhere I don't have access to my supplements, but I'll grab a pill organizer and just start taking the 80/20 with me.</li></ol></li><li>I currently waste time deciding what to eat for breakfast. I could just buy a bunch of premade breakfast foods, or simple, two-combination breakfasts (a yoghurt parfait), or perhaps a smoothie like Huel. <ol><li>Solved. I set Walmart grocery auto-delivery and now have high-protein Greek Yoghurt, raspberries, and granola shipped to my door every week. I also bought some pre-packaged breakfast shakes for one-off instances where I have to get out the door quickly in the mornings.</li></ol></li><li>I don't usually have a stocked pantry, fridge, or freezer, meaning the food I eat varies depending on availability (rather than optimal health, nutrition, taste, etc).<ol><li>Solved. I created two simple, flexible high-protein meal variants I can prepare in 20 minutes: rice/meat/salsa, pasta/meat/salad. I can vary the meat, sides, and sauces easily to "create" several dozen dishes—for instance, a rice bowl with beef and chimichurri, a cold pasta salad with eggs, tuna, and mayonnaise, spaghetti alla nerano with some chicken, etc. </li><li>Strategically this means my grocery buys are simple and I just buy a handful of common foods (long grain rice, 3-4 types of pasta, meat, 3-4 types of vegetables) and vary them. I prepare these meals once per day, which takes ~20 minutes.</li></ol></li><li>My bedroom is bright even at night because one of the loft windows isn't covered by a curtain.<ol><li>Solved. I have an old sleep mask I've carried around that I've neglected. It now lives on my nightstand and I wear it at night &amp; take it off in the mornings.</li></ol></li><li>I sometimes don't take ZMA before bed simply because I don't have water on my nightstand and am too lazy to get up.<ol><li>Solved alongside my morning routine and water bottle hack.</li></ol></li><li>I don't go to sleep nor wake up at the same time every morning (i.e I lack sleep consistency).<ol><li><strong>It remains to be seen how strongly I stick to this, but I've set a sleep schedule on my iPhone from 10:00pm-6:00am. I wind down at ~9:30pm, and that includes turning off screens. I've experimented over the last few days and believe I can realistically stick to this ~6 nights/week.</strong></li><li><strong>Update: I have stuck to ~6 nights/week (for the most part). My sleep has averaged ~8hrs30 over the last three weeks, which is a significant improvement as compared to before. Personal relationships do get in the way of maintaining a strict schedule from time to time, but I believe this is the 80/20.</strong></li></ol></li><li>My shoulder labrum tear hasn't improved noticeably in over thirty days, and I can't do many things I used to be able to.<ol><li><strong>It remains to be seen how I solve this, but I have an appointment with an orthopaedic surgeon next week and we'll discuss treatment plans.</strong></li><li><strong>Update: conversation was unsatisfactory and my current treatment course involves a lot of waiting. I've stuck to my exercise regimen for the most part, so the lack of progress and reaction from the surgeon is disappointing. I am considering getting a second opinion in the next 30 days—if that doesn't work, I'll consider going somewhere I can pay for a surgery (outside of Canada).</strong></li></ol></li></ol><h4 id="hobbies-habits-and-skills">Hobbies, habits, and skills</h4><ol start="18"><li>I probably have mild sleep apnea, genetically, which leads to poor sleep efficiency (~80% most nights).<ol><li><strong>This is a large problem and will require a long-term solution. In all likelihood, I will probably have to get some sort of sleep implement—a mouth guard or similar. Last I tested, I was unfortunately under the threshold for sleep apnea, and in Canada that means I cannot legally be prescribed the most common solution (CPAP machines), so I will have to tackle this in a different way.</strong></li></ol></li><li>I don't currently drink a standardized dose of coffee in the mornings, so sometimes I have too little or too much and feel tired/dizzy.<ol><li>Solved. I now use a cup measure to add coffee grounds to my machine. It's not perfect, given that pits in the container change how the hot water travels through, and thus caffeine %, but deviations will probably be +/- 5% or so.</li></ol></li><li>I don't like having to grab my running shoes and take both them and my sandals to the gym (since they have an "indoor shoe only" policy).<ol><li>Solved. I bought an extra pair of running shoes to use for running, and now keep my old trainers in the car. Since I only ever go to the gym using my car, I can grab them from my back seat easily.  </li></ol></li><li>I routinely skip days of my running program because of time constraints, weather, etc.<ol><li><strong>It remains to be seen if I've solved this long-term, but I purchased a few implements that make running easier, and then went running today (while having a great time doing it). Winter will make this more difficult, so I may need to transition to treadmills/etc.</strong></li><li><strong>Update after moving: I managed to run a 5K before the snow fell. Aside from that, though, I have not stuck to my running program. I cite -20C temperatures and the added friction of having to jog on a gym treadmill, which frankly removes a lot of the fun and convenience of running. I need to continue cardiovascular exercise in some other way that's more palatable—could add cardio pre-or-post-gym, or I could add one or two cardio days per week.</strong></li></ol></li><li>My gym is currently a ~15 minute drive away, which makes it annoying to get to. The ~30 minute roundtrip adds a significant amount of time to my gym sessions which gives me an easy excuse not to go.<ol><li><strong>I'll solve this by looking for Anytime Fitness locations closer to my current home, and identify their parking situations. There are a handful from what I can see, so assuming parking is not terrible I may be able to cut a ~30 minute roundtrip to perhaps 5-10 minutes.</strong></li><li><strong>Update after moving: two locations near me. One is an ~8min drive, the other is a ~9min drive. Both have parking (paid). I don't mind the cost, and can download an app to make it less annoying.</strong></li></ol></li><li>My core strength is weak (relative to the rest of my body) and I have little rotational stability. I've noticed I injure my lower back reasonably often, and it's one of the reasons I struggle with sitting for long periods of time.<ol><li>Solved. I added a handful of rotational core exercises to my routine. These take ~5 minutes but I feel great after I'm done.</li></ol></li><li>I want more friends in Calgary, particularly around healthy activities (like sports) rather than unhealthy activities (like drinking).<ol><li><strong>This is a large problem and will require a long-term solution. For context, I've made plenty of friends here, but many want to drink or party all the time and it's gotten to be too much. </strong></li><li><strong>To solve, I could either invite my old friends to healthy activities (easy but probably mixed success), or make new few friends here that I do healthy activities with (harder but guaranteed success).</strong></li><li><strong>Brainstorming: I should define "healthy activities" more clearly. I want to:</strong><ol><li><strong>Play sports, like pickleball, table tennis, or rock climbing,</strong></li><li><strong>Exercise, like at the gym or running outside,</strong></li><li><strong>Be mindful, perhaps through group meditation or similar,</strong></li></ol></li><li><strong>I'll compile a list of these activities, places to do them, and relative accessibilities. I'll then send texts to a few of my current friends and invite them to said activities with the implication I want to do them regularly. I'll also look for new friends through a mixture of my communities, Reddit, and local coworking spaces like WeWork. Will update this as time goes on to show progress.</strong></li><li><strong>Update: after three weeks, I've made two new local friends. Enjoyable so far. Most of my older friends are no longer in the city. I have yet to try a coworking space again; may do this in December.</strong></li></ol></li><li>I'm not pushing consistently  on side projects, studies, or things outside of work—as of now, my career consumes most things.<ol><li><strong>I don't really have "side projects" anymore, to be honest. My career has become all-encompassing, probably because of how high-ROI (and enjoyable) it is. This isn't necessarily a bad thing, but I do miss the curiosity I had when I was younger and my willingness to spend time learning about things that didn't necessarily have a payoff. I will identify a few topics of interest and structure some self-education time.</strong></li><li><strong>Update: after three weeks, I still have yet to identify topics of interest. Need to set aside time for this.</strong></li></ol></li><li>There are many friends/family members I forget to check in with, too, which I know I'll regret as I grow older.<ol><li>Solved. I added a calendar reminder called "Check in with friends &amp; family" that loops every week—during this event, I leave voice messages &amp; call friends/family members to ask how they're doing and set up activities for subsequent weeks. </li></ol></li><li>I'm dissatisfied with my Spotify playlists and want to reset it, but I also don't want to lose many of my favorite songs.<ol><li>Solved. I went through my playlists, removed all songs I hadn't listened to in over a month, and added a few new ones (mostly classical that I can work to without disruption).</li></ol></li><li>I'm dissatisfied with my clothing and want better, more universal fits (and I want them to fit!).<ol><li><strong>I prefer minimalistic outfits with few layers, since they're easier to deal with. Each piece of clothing will probably be more expensive as a result, but it also means less maintenance and an easier time should I choose to travel.</strong></li><li><strong>I should look up YouTube videos of capsule wardrobes amenable to this purpose, and then schedule a day to buy as many of these items as possible. Given the impact on quality of life, I should not be averse to spending $1,000+ on a compact, fit capsule wardrobe.</strong></li><li><strong>Update after three weeks: I've purchased several higher quality pieces that work in the majority of climates. I've also read a little on </strong><a href="https://comprehensive-urology.com/urologist-desk/microplastics-in-testicles/?ref=nicksaraev.com#:~:text=The%20accumulation%20of%20microplastics%20within,result%20in%20lower%20sperm%20production."><strong>plastic accumulation in the male body and its impact on fertility,</strong></a><strong> which has made me give away ~1/2 of my old wardrobe. It's infeasible for me to completely eliminate plastic fibers in clothing, but I'll do the 80/20. Outstanding is a peacoat, two t-shirts, and a new scarf.</strong></li><li><strong>Update after ~four weeks: I've gotten rid of another five pieces. Still no peacoat or shirts though.</strong></li></ol></li><li>I want to play piano again but don't have access to one.<ol><li><strong>I'll look more into this when I move homes.</strong></li><li><strong>Update after moving: I've decided to buy a keyboard. I'll get something relatively affordable with good resale value in case I decide to spend a few months on the road again.</strong></li></ol></li><li>I don't have good photos for social media, Twitter, etc. This was not a problem before, but I'm becoming a public personality of sorts, and high quality photos would make my life easier, as well as give me opportunities to grow easier on photo-based platforms like Instagram.<ol><li><strong>I love photography and simply don't have photographer friends here. I believe I can solve this alongside my earlier issue by making "Photography" one of said healthy activities and then going out every few weeks for a session. I used to do this all the time with one of my old friends, and had a tremendous amount of fun. </strong></li><li><strong>I can also ask people to take photos of me at various activities—I have avoided this until now because I don't really like the added annoyance of worrying about how I look on a given day.</strong></li></ol></li><li>My current editing flow takes much longer than previously and is higher friction.<ol><li>Solved. I spent two hours watching Premiere Pro tutorials and learned significantly more about how to optimize my workflow, create templated assets, use shortcuts, etc.</li><li>I also reverted to my old OBS flow, where I do most of the production <em>during</em> filming. Huge time saver.</li></ol></li></ol><h4 id="space">Space </h4><ol start="32"><li>I don't have an extension cord for my camera or my computer, so I'm forced to plug into the kitchen outlets, which make morning coffee annoying (since I have to step over cables etc) and in general my setup looks unseemly.<ol><li>Solved. Bought an extension cable and I'll carry it around with me to wherever I go from here on out.</li></ol></li><li>I have to crane my neck down in order to see my screen while recording, which is annoying and bad for my posture.<ol><li>Solved. Got a monitor that lets me avoid the neck strain.</li></ol></li><li>My AirBNB doesn't have cleaning supplies and is slowly accumulating dirt/etc.<ol><li>Solved. I realize now that this isn't my responsibility—part of living in these sorts of short-term rentals involves paying a higher premium, and implicit in that premium is a "cleaning fee". Instead, I just vacuumed.</li></ol></li><li>I think the air is dry, which is impacting my sleep (but I don't know for sure).<ol><li>Solved. I got a humidity sensor. It is indeed dry, although not terribly so yet.</li></ol></li><li>My car is dirty and full of various travel things (baggage, boxes, shoes, etc).<ol><li>Solved. I cleared out my baggage by moving some items into my family's home, and then gave away the clothing that I'd been keeping in my vehicle.</li></ol></li><li>I sometimes forget to brush my teeth because my toothbrush is not within arms reach in the shower.<ol><li>Solved. I put my toothbrush on the bathtub ledge like I did my cleanser and it's now much more convenient. </li></ol></li><li>My AirBNB doesn't have a desk chair so I'm using my dining room—this is uncomfortable on my back and stops me from working after an hour or two.<ol><li>Solved (to the best of my ability). It doesn't make sense to purchase a chair right now, so I found a few small pillows that prop me up better.</li><li>Update after moving: I don't have a reasonable quality chair I can use here either. Most are very annoying and lead to back pain after half an hour or so. I'll buy an affordable, reasonably ergonomic chair the next time I go to IKEA and set it up by my workspace.</li><li>Update: I used <a href="https://www.ergotron.com/en-ca/tools/workspace-planner?ref=nicksaraev.com">this calculator</a> to find my ideal chair height and then purchased one on Amazon instead. Solved. </li></ol></li><li>My MacBook monitor is dirty and this interferes with visibility while I record (because of how bright it is in my living room).<ol><li>Solved. I got a streakless screen cleaner as well as a microfiber cloth.</li></ol></li><li>My chairs and tables are not at optimal heights—I am significantly above average height and often have to stoop over.<ol><li>I'm moving in a few days so am shelving this until I see new living conditions.</li><li>Update after moving: thankfully, most chairs and tables are at optimal heights. Including my kitchen countertops! Shower is higher too. A couple of small tweaks to make, but for the most part this is solved.</li></ol></li><li>Lighting is often too harsh in my living room to record reliably, so I wait until it's better (i.e I let my environment dictate when I record, which often gets in the way of activities).<ol><li>I'm moving in a few days so am shelving this until I see new living conditions.</li><li>Update after moving: I set up a studio in my living room. Since the living room has curtains, light variability when I close them is maybe 5% of what it was when I lived in my downtown highrise apt. Can now record whenever I want. </li></ol></li><li>I often don't know what I'm going to record during the day, which forces me to scramble for ideas and leads to a lower quality product.<ol><li>Solved. I created an in-depth "content calendar" by scraping YouTube comments and passing them through AI. I then pick the best ideas from this content calendar and refine them before writing hooks and outlines. </li></ol></li><li>I lack screen space right now—my MacBook monitor is a bit too small.<ol><li>Solved. I got a monitor as per an earlier friction point.</li></ol></li></ol><h4 id="time-and-attention">Time and attention</h4><ol start="44"><li>My phone screen is still cracked and it's difficult to see, which I don't like.<ol><li>Solved. I bought a new iPhone.</li></ol></li><li>I spend too much time mindlessly browsing Instagram on my phone. I really enjoy it, but this time could be better spent.<ol><li>Solved. I uninstalled Instagram completely and will no longer have it on my phone(s).</li></ol></li><li>I often get hungry in between meals, but don't have any healthy, macro-friendly snacks. This feels like a holdover from when I was poor—I now have a dumb amount of money and can should be able to buy whatever healthy snack I want.<ol><li>Solved. I bought a ridiculous number of Smart Sweet snacks along with some popcorn chips.</li></ol></li><li>I don't read anymore (aside from audiobooks).<ol><li>Solved. I believe part of this was because I'd just been reading nonfiction—which I generally don't find anywhere near as valuable as fiction. I downloaded one of my favorite book series (Sun Eater) and have since been voraciously consuming it for the better part of 30-45mins/day between work or during meals. I feel much better.</li></ol></li><li>I love classical music, but choose not to listen to it for some reason—perhaps because I feel pretentious?<ol><li>Solved. I changed my Spotify so that it's mostly <a href="https://open.spotify.com/track/3Tt0VzQstuygkBHwh9RuMu?si=edd8b8363ee5496f&ref=nicksaraev.com">classical or classical-adjacent</a>, and it's been very enjoyable so far. My recommendations are also significantly better.</li><li>Update after three weeks: I removed Spotify and replaced it with Apple Music. Works better with Apple devices. New playlists.</li></ol></li><li>There are many clients I forget to check in with until it's too late (i.e they check in with me, or they get frustrated because I haven't given them word of progress in a while).<ol><li>Solved. I've made Wednesdays my "Client Day". Aside from a weekly office hour call, I am doing the majority of my client work on this day, including progress reports, meetings, brief team syncs, etc.</li></ol></li><li>I feel certain muscle parts—forearms, calves, traps—are lagging relative to the development of others. Given that these are by far the parts of my body that are most visible for aesthetic purposes, I want to develop them more, if only from a strictly ROI perspective.<ol><li>Solved. In addition to the core work I discussed above, I've added dedicated forearm, calf, and trap sets to my routine.</li><li>Update after three weeks: forearms in particular are growing quickly!</li></ol></li></ol><h4 id="blind-spots">Blind spots</h4><ol start="52"><li>I don't have strong, safe sunscreen which makes me worry about long term skin damage given that I live in one of the brightest and sunniest places in Canada.<ol><li>Solved. I've purchased <a href="https://www.amazon.ca/EltaMD-Broad-Spectrum-Acne-Prone-Dermatologist-Recommended-Mineral-Based/dp/B002MSN3QQ?crid=38DDW2WMJ5E9I&dib=eyJ2IjoiMSJ9.WNmp2TmxFjKUNVgZI2U59IHkw-neiA-TZ3Hl7NkgKhsyRvsyD05TZyysjQbPORUl_HZfCRWofnQ7VgbDy67I_iT3ANgEYCyEICdpK6uOf7JU6cu2sU0z_aVnqRDty_4wIXLVyRNuY2VCgvQKjYzKygdejwrQaz7p8-v39Bx9M5_Zeq3F87sR5WOwfCFMqb39VYEW0OM1DE5Ntj-j_3j-Ek5oDxQROCSKgvuJTZaEDv4t5f9wZztYyUAG1rsb2w-DM49alo_N94VeGEbX_I9WSxY_r_Tiaue8AnpnrruRn0U.KzgmncUWg32TrSi5ENbBUWUjwcGhuOtO-KUBJC1imaA&dib_tag=se&keywords=elta+MD+uv+clear&qid=1730741569&refinements=p_85%3A5690392011&rnid=5690384011&rps=1&sprefix=elta+md+uv+clear%2Caps%2C144&sr=8-2&ref=nicksaraev.com">this brand</a>, which is what Bryan Johnson uses (anti aging influencer with tens of millions of dollars of research behind him).</li></ol></li><li>I'm still waiting to do my US taxes and I'm accumulating interest—I don't like this.<ol><li><strong>Solved. The holdup was a wrong address on the IRS form submission. Resent.</strong></li><li><strong>Update after three weeks: still haven't received the form. No clue what's going on. Sent a message to my accountant and we'll probably call.</strong></li></ol></li><li>I feel like, as I age, I'm getting dumber. I don't feel as fast or fluid as I used to be. This concerns me.<ol><li><strong>It remains to be seen whether this is solved, but I believe this was merely a byproduct of not reading for a while. I feel a lot sharper now that I am doing so consistently again. I've also standardized a few of my metrics using </strong><a href="https://humanbenchmark.com/?ref=nicksaraev.com"><strong>Human Benchmark</strong></a><strong> and will update this in a few weeks to see if there's any change.</strong></li></ol></li><li>I don't have winter tires and it impacts how confident I feel on the road.<ol><li><strong>Solved. I bought winter tires.</strong></li><li><strong>Update after three weeks: Costco still hasn't received them. Annoying. Will edit after I fix.</strong></li></ol></li><li>I'm concerned to tweet about things I really care about for fear of political backlash.<ol><li><strong>I don't have extraordinarily polarizing political views, but there are many threads I read on Twitter/X that I think I can meaningfully contribute to. However, I fear doing so because I don't want to alienate the people that follow me, nor do I want to become "political".</strong></li><li><strong>That said, I think I bring a nuanced point of view to many hot-button topics (immigration, DEI, taxation, etc) that would genuinely benefit others. I also hedge my claims in uncertainty and I'm never intentionally provocative if I can help it.</strong></li><li><strong>I don't know exactly how I'm going to start voicing my beliefs, but I know that I want to. I'll shelve this for now until the rest of the list is taken care of.</strong></li></ol></li><li>I don't have a simple, centralized place to track tasks. Or rather, I don't use one consistently (despite having Godspeed), which leads to a subjective feeling of overwhelm.<ol><li>Solved. I've collected my career tasks in a <a href="https://docs.google.com/spreadsheets/d/1b-j_bwpHbC1J-ujVWw1Ol9EzrhSOOAPrXZpNGenUwbU/edit?usp=sharing&ref=nicksaraev.com">public Google Sheet</a> that people can view. This is <em>the definition</em> of "building in public" imo and it'll give me added accountability. Anything private I'll keep in Godspeed. Excited about this!</li><li>Update after three weeks: seems to work reasonably well. Though it's definitely revealed what a major impact to my productivity spending time with my family has been.</li></ol></li><li>I don't like my sunglasses and often leave them at home because they're not aesthetically pleasing. This is probably leading to sun damage, squinting, tension, etc.<ol><li><strong>I'll do some research on sunglasses for my face shape and buy two pairs. One will be for exercise (say, running, hiking, etc) and the other will be casual. I'll focus on bigger sunglasses that cover my face and spend money on UVA/UVB protection, polarization, etc.</strong></li><li><strong>Update: decided to buy Oakley sunglasses for exercise and high-end Raybans for casual purposes.</strong></li></ol></li></ol><h4 id="fear-and-trembling">Fear and trembling</h4><ol start="59"><li>I haven't booked a place to stay from Nov 11th onwards yet, which concerns me.<ol><li>Solved, booked a place.</li></ol></li><li>I have friends that I have been avoiding for fear of hurting their feelings upon an inevitable conversation.<ol><li>I have yet to fully solve this, but there are a few friends I'm going to talk to this or next week. I'll use <a href="https://en.wikipedia.org/wiki/Nonviolent_Communication?ref=nicksaraev.com#:~:text=%5B11%5D-,Overview,-%5Bedit%5D">NVC principles</a> and tell them how I'm feeling.</li><li>Update after three weeks: I am still avoiding this. Until recently I justified it because of workload, but now "I don't want to think about that right now" is the major driver. I need to just bite the bullet and do it.</li><li>Update after four weeks: completed. Went well.</li></ol></li><li>I have a bunch of genetic data available to me that I can look into. But I'm concerned at the idea of looking over it to see if there are any studies that are pertinent to me, or things like Huntingtons, Parkinsons, Alzheimers, etc in my future.<ol><li>Solved. I looked over my genetic data for a small fee using a publicly available SNP database and found a host of interesting correlations. Nothing is going to kill me, but I discovered that I'm at a <a href="https://www.snpedia.com/index.php/Rs35705950?ref=nicksaraev.com" rel="noreferrer">significantly higher likelihood of developing pulmonary fibrosis</a>, for instance. I am glad I did this.</li></ol></li><li>I'm concerned about internet privacy given my internet is usually managed by my AirBNB host. I don't know if this is realistic, but I'd like to be safer with my browsing history and access, especially considering I now have things to lose.<ol><li>Solved. I bought a simple, inexpensive VPN and am routing internet traffic through said VPN. I don't believe it's perfect, but it's probably the 80/20.</li></ol></li></ol><h3 id="thats-all-for-now">That's all for now</h3><p>I feel better already! As of the time of this writing, I've already clawed back several dozen hours per year (not to mention a ton of mental energy &amp; money). </p><p>As the days and weeks go by, I'll update this list and bold the problems that I've solved, as well as provide a brief description of how I did so.</p><p>PS—if you're interested in undertaking a lifestyle audit, would love to hear about it and see results. Feel free to reach out to me at nick@leftclick.ai with thoughts.</p><p>Good luck!</p>
    </article>

    <div class="px-4 sm:px-6 mb-12">
    <div class="pt-8 text-typ text-sm font-medium max-w-content mx-auto flex gap-3 md:gap-4 justify-center flex-wrap items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-fading" 
      data-share >
      <span class="text-base flex-1 basis-full sm:basis-auto text-center sm:text-left">Share</span>

      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://twitter.com/share?text=A%20comprehensive%20audit%20of%20my%20lifestyle&amp;url=https://leap2grow.github.io/lifestyle-audit/"
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
          href="https://bsky.app/intent/compose?text=A%20comprehensive%20audit%20of%20my%20lifestyle%20https://leap2grow.github.io/lifestyle-audit/"
          title="Share on Bluesky" aria-label="Share">
        <i class="icon icon-brand-bluesky size-4 stroke-2">
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.facebook.com/sharer.php?u=https://leap2grow.github.io/lifestyle-audit/"
          title="Share on Facebook" aria-label="Share">
        <i class="icon icon-facebook size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>



</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://leap2grow.github.io/lifestyle-audit/&title=A%20comprehensive%20audit%20of%20my%20lifestyle&summary=A%20comprehensive%20audit%20of%20my%20lifestyle"
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
          href="mailto:?subject=A%20comprehensive%20audit%20of%20my%20lifestyle&body=https://leap2grow.github.io/lifestyle-audit/&nbsp;A%20comprehensive%20audit%20of%20my%20lifestyle"
          title="Share by email" aria-label="Email">
        <i class="icon icon-mail size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
</i>        <span class="">Email</span>
      </a>
      <button class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" data-share-copy data-url="https://leap2grow.github.io/lifestyle-audit/"
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
</article>              <article class="post tag-lfimpr featured  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/the-next-few-months-of-my-life/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2025/07/maxresdefault--2-.jpg 320w, /content/images/size/w640/format/webp/2025/07/maxresdefault--2-.jpg 600w, /content/images/size/w960/format/webp/2025/07/maxresdefault--2-.jpg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2025/07/maxresdefault--2-.jpg 320w, /content/images/size/w640/format/webp/2025/07/maxresdefault--2-.jpg 600w, /content/images/size/w960/format/webp/2025/07/maxresdefault--2-.jpg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2025/07/maxresdefault--2-.jpg"
    alt="The next few months of my life"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/lfimpr/" class="hover:text-brand">Life Improvement</a>
      
        <span class="">·</span>

      <time class="" datetime="2025-07-29">Jul 29, 2025</time> 

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
      <a href="/the-next-few-months-of-my-life/" class="">The next few months of my life</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        It&#39;s that time again. Today I’m going to write a long, meandering journal entry that covers, in-depth,
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
