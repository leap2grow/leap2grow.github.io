<!DOCTYPE html>
<html lang="en" data-color-scheme="system" class="scroll-smooth">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>The next few months of my career</title>

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
    

    <meta name="description" content="Bottlenecks, ROI calculations, new product development, and more.">
    <link rel="icon" href="https://leap2grow.github.io/content/images/size/w256h256/2024/02/social_media.png" type="image/png">
    <link rel="canonical" href="https://leap2grow.github.io/the-next-few-months-of-my-career/">
    <meta name="referrer" content="no-referrer-when-downgrade">
    
    <meta property="og:site_name" content="Nick Saraev">
    <meta property="og:type" content="article">
    <meta property="og:title" content="The next few months of my career">
    <meta property="og:description" content="Bottlenecks, ROI calculations, new product development, and more.">
    <meta property="og:url" content="https://leap2grow.github.io/the-next-few-months-of-my-career/">
    <meta property="og:image" content="https://leap2grow.github.io/content/images/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png">
    <meta property="article:published_time" content="2024-09-03T14:43:21.000Z">
    <meta property="article:modified_time" content="2024-09-03T17:02:24.000Z">
    <meta property="article:tag" content="Building in Public">
    
    <meta property="article:publisher" content="https://www.facebook.com/nick.john.wells">
    <meta property="article:author" content="https://www.facebook.com/nick.john.wells/">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="The next few months of my career">
    <meta name="twitter:description" content="Bottlenecks, ROI calculations, new product development, and more.">
    <meta name="twitter:url" content="https://leap2grow.github.io/the-next-few-months-of-my-career/">
    <meta name="twitter:image" content="https://leap2grow.github.io/content/images/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png">
    <meta name="twitter:label1" content="Written by">
    <meta name="twitter:data1" content="Nick Saraev">
    <meta name="twitter:label2" content="Filed under">
    <meta name="twitter:data2" content="Building in Public">
    <meta name="twitter:site" content="@nicksaraev">
    <meta name="twitter:creator" content="@nicksaraev">
    <meta property="og:image:width" content="1131">
    <meta property="og:image:height" content="716">
    
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
    "headline": "The next few months of my career",
    "url": "https://leap2grow.github.io/the-next-few-months-of-my-career/",
    "datePublished": "2024-09-03T14:43:21.000Z",
    "dateModified": "2024-09-03T17:02:24.000Z",
    "image": {
        "@type": "ImageObject",
        "url": "https://leap2grow.github.io/content/images/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png",
        "width": 1131,
        "height": 716
    },
    "keywords": "Building in Public",
    "description": "Bottlenecks, ROI calculations, new product development, and more.",
    "mainEntityOfPage": "https://leap2grow.github.io/the-next-few-months-of-my-career/"
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
    <script defer src="/public/ghost-stats.min.js?v=7380097362" data-stringify-payload="false" data-datasource="analytics_events" data-storage="localStorage" data-host="https://leap2grow.github.io/.ghost/analytics/api/v1/page_hit"  tb_site_uuid="1ae3de90-cafc-423f-b6a1-36af422be674" tb_post_uuid="9d278910-bfa4-4419-9827-e428eaacf523" tb_post_type="post" tb_member_uuid="undefined" tb_member_status="undefined"></script><style>:root {--ghost-accent-color: #008cff;}</style>
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
          <time class="" datetime="2024-09-03">Sep 3, 2024</time> 
            <span>·</span>
            <span class="">
              47 min read
            </span>
        </div>

      <h1 class="text-typ font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl">
        The next few months of my career
      </h1>

        <p class="text-lg md:text-xl font-light">Bottlenecks, ROI calculations, new product development, and more.</p>

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
    srcset="/content/images/size/w320/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 320w, /content/images/size/w640/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 600w, /content/images/size/w960/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 960w, /content/images/size/w1280/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    type="image/webp"
  >
  <img class="w-full object-cover rounded-theme-xs aspect-[16/9] border border-brd bg-bgr-tone"
    
    loading="eager"
    srcset="/content/images/size/w320/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 320w, /content/images/size/w640/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 600w, /content/images/size/w960/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 960w, /content/images/size/w1280/format/webp/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png 1200w"
    sizes="(max-width: 600px) 480px, 720px"
    src="/content/images/size/w30/2024/09/Screenshot-2024-09-03-at-8.40.55-AM-2.png"
    alt="The next few months of my career"
    
  />
</picture>
        
      </figure>

  </div>
</section>
    <article class="ghost-content prose md:prose-lg prose-theme">
      <p>Today I’m going to write a long, meandering journal-style article that covers, in-depth, what I am going to do with the next few months of my career.</p><p>It’ll include thoughts on the trajectory of my life, ROI calculations, a breakdown of how I’m currently spending my time, new product development for my agency/coaching business, and more.&nbsp;</p><p>I’ll attempt to map all of these out as fully as possible, and at the end of this document, write a list of actionables that I can use to continue propelling my life towards greater and greater achievement.</p><h2 id="taking-stock"><strong>Taking stock.</strong></h2><p>I’ve had a ton of financial success over the last few months. My consistency on YouTube has resulted in a wealth of opportunities, both financial and otherwise.&nbsp;</p><p>Financially speaking:</p><ul><li>In the month of August alone I made over $100,000 USD. I did this while working fewer hours than I was back in January (a month where I made closer to ~$25,000 USD). Additionally, a substantial portion of this money is now recurring and much more diversified—previously, I would commonly “reset to 0” at the beginning of the next month which led to a lot of revenue variability.</li><li>If I continue down this path, I will soon be able to functionally retire. Many of my revenue-generating projects will continue to pay dividends far into the future, and assuming consistent, sub-10% returns on my diversified investments, I could soon “stop working” at a safe withdrawal rate of ~4%. I am not particularly interested in retirement and almost certainly won’t. But this is gratifying in light of my and my family’s economic background.</li></ul><p>In terms of the rest:&nbsp;</p><ul><li>The quality/content of my average conversation has changed drastically. Since February 2024 I’ve been approached by the heads of private equity firms, investment corporations, large financing companies, government-sponsored development projects, and more. These talks have been strategic and much more interesting than the majority of the one-off sales calls I was having previously (especially to cold audiences).</li><li>I’ve also helped hundreds of people meaningfully change their lives. I get grateful emails, DMs, and messages on a daily basis from people of all ages and financial backgrounds. I’ve heard dozens of stories now about how my work has helped pull families from the brink of financial hardship, among other things, which makes me feel incredible. It’s probably a minor version of the inbound mail that a celebrity gets, honestly.&nbsp;</li><li>I’ve assembled a network of ambitious, prosperous people, while building a revenue stream and a brand that will persist for long into the future. All of these things have helped elevate my self-esteem and remind me that what I’m doing is valuable.</li></ul><p>But how did I get here?</p><h3 id="retrospective"><strong>Retrospective.</strong></h3><p>The key: my situation today is the direct result of an intense, contemplative period between January 12th 2024 and January 25th 2024. I spent this time with one of my best friends on a small island off the coast of the Caribbean. The goal of our trip was explicitly to reflect on where we were, where we wanted to go, and how we’d achieve it.</p><p>Those two weeks were everything I wanted them to be—introspective, relaxing, and resetting. And, looking back now, it was one of the highest ROI periods of my life.</p><p>I did not map out everything that has since occurred during those two weeks, of course. But many of the things that I decided on then have proven to be quite fruitful.&nbsp;</p><p>One of my major decisions, for instance, was to begin openly documenting my life. Another was to build a long-term social media brand based on longform (low friction) content. This is what drove me to start YouTube, as well as share journal entries like these.</p><p>During this period, I also made the explicit decision to deliberately approach several of my larger clients with a partnership model—a revenue share, equity in the controlling corporation, etc—which became financially rewarding and very educational as well.</p><h3 id="why-is-this-important"><strong>Why is this important?</strong></h3><p>I point this out to illustrate that I did not wander into my current situation blindly. I made it happen:&nbsp;</p><ul><li>First I deeply contemplated where I wanted to go,</li><li>Then I considered various outcomes, and evaluated the return on investment for each,</li><li>Finally, I carried out my plans (which, to be clear, were little more than educated guesses),</li></ul><p>It is entirely possible to enact your free will on the world to change your station in life. I’ve done it multiple times and I'll do it again.</p><p>My hope is to capture a small part of my January experience here. I don’t anticipate it will quite as valuable, but I think artificially reproducing those periods, even for a day or two, is probably the 80/20.</p><h3 id="where-do-i-want-to-go"><strong>Where do I want to go?</strong></h3><p>I have discussed where I am now. Let’s talk about where I want to go.</p><p>To be clear: I am not satisfied with my current income or my net worth. I still want more.&nbsp;</p><p>I’ve also had yet to hit the goal that I set out for myself in November 2023, and I don’t like leaving goals unachieved (especially when they’re what I’d consider realistic). That goal was $2M per year. In monthly terms, an average of $167K.</p><p>Monetary goals are mostly arbitrary. I know this. But the above feels like a reasonable number to shoot for, while being high enough that I feel like I’d really be stretching to achieve it. It’s difficult, while still within the realm of possibility for me, and goals like that tend to be the most <a href="https://en.wikipedia.org/wiki/Zone_of_proximal_development?ref=nicksaraev.com"><u>effective for growth.</u></a></p><p>I’ll keep this as my goal and continue striving towards it.</p><h2 id="bottlenecks"><strong>Bottlenecks.</strong></h2><p>Knowing this, what is currently stopping me from achieving $2M/yr?</p><p>Let’s fix my current revenue at $100K. This is not entirely true, since a chunk of this is not recurring. But assuming so, what is the bottleneck preventing me from making another $167,000 - $100,000 = $67,000/month?</p><p>Breaking down my current revenue streams:</p><ul><li>Automation agency,</li><li>Skool community,</li><li>Gumroad,</li><li>YouTube ad revenue,</li><li>A dozen or so affiliate platforms,</li><li>Handful of partnerships/referrals,</li><li>Revenue from a smattering of old, small projects (Skillshare, Medium),</li><li>1SecondCopy,</li></ul><p>Brainstorming potential bottlenecks in the above revenue streams, as well as others that have historically been issues:</p><ul><li>My beliefs,</li><li>My content,</li><li>My monetization (automation agency, community, various affiliates, etc),</li><li>My time,</li></ul><p>I’m sure there are others, but my intuition is that the majority of my problems stem from the above. Let’s explore each.</p><h3 id="beliefs">Beliefs</h3><p>Are my beliefs the bottleneck? Do I need to perform more inner work?</p><p>I bring this up because, when I was younger, my main constraint was usually my lack of self-belief. I’ve always been fast, smart, and decisive, but I simply <em>did not believe that large amounts of revenue were possible</em>, so I never tried.</p><p>I grew up in a low income household that baked in most of these presuppositions. For instance, I used to think you needed to be a genius in order to make money, and that your income was a product of the complexity of your work. The last few years of my life have been a process of gradually unlearning this. Many people less intelligent than me make much more money, so “genius-ness” is not the factor I should be looking for.</p><p>Reflecting earnestly, I no longer believe limiting beliefs are a concern of mine. I don’t doubt I am capable of making $2M/year. Or $5M/year, or $50M/year, etc. I have interfaced with the market enough to understand that my particular mix of talents is quite exceptional.&nbsp;</p><p>As long as I set my mind to it, I can become extraordinarily wealthy (no fundamental reason why not). Moving on.</p><h3 id="content">Content</h3><p>Is it my content?</p><p>I don’t think so. My content seems great. I feel like I know that intuitively—my audience loves how I explain things, how I showcase my work, etc.&nbsp;</p><p>More quantifiably, my average watch time is very high (~8:00mins), my number of new subscribers per day is great for my total sub count/niche (~100), and most of my other metrics are far beyond that of my competitors. So I don’t believe this is the bottleneck.&nbsp;</p><p>That said, there is certainly still a lot of leverage in improving the quality of each piece I create, especially given their average income producing lifetime (years). I should continue experimenting with better introductions, better formats, better thumbnails, and other platforms.</p><p>That latter point is important. Up until now, I’ve spent the majority of my time on YouTube. But this is not optimal; my YouTube account could hypothetically get shut down tomorrow, which would instantly lose me the majority of my top of funnel. There are also probably large audiences that I’m not reaching on other platforms and other content mediums—TikTok, Shorts, Twitter—that don’t use YouTube primarily.</p><p>I.e while content in general is not a bottleneck, it’s probably still high on the priority list. When I create a list of actionables, I should take this into account and design strategies for each.</p><h3 id="monetization">Monetization</h3><p>Is my main constraint my inability to effectively monetize?</p><p>My gut feeling is yes.&nbsp;</p><ul><li>I’m generating a very large, healthy top of funnel right now,</li><li>It’s also completely organic, and I have no meaningful upkeep costs aside from the time it takes me to create videos,</li><li>But if you look at my revenue, and then compare that to the number of subscribers I have, it feels low. My “average revenue per subscriber” (ARPS, a metric I made up just now) is only ~$5,</li><li>Several other people I know in similar niches have ARPS’ closer to ~$50</li></ul><p>A lot of this is speculation, but it feels like there’s a lot more I could be doing on the monetization front. Some major problems that come to mind:</p><ul><li>I have no real product differentiation right now. You can just sign up to my community, which is $1,382/yr, or choose to work with my agency, which is $6,900/m. </li><li>Focusing on the community: what if you can’t afford $1,382/yr, but you <em>can</em> afford, say, $600/yr? Atm there’s no option for you—you go through my funnel, get disappointed, and leave. In an ideal world, though, there’d be a sliding scale of value : cost, and you’d be able to choose whatever option you can afford that delivers a proportional amount of benefit. </li><li>I’ve noticed most successful courses, coaches, info products, or communities solve this by offering a wide assortment of product options, while I only have one. If I had, say, 5 options instead, I might double the number of people who I can help, while doubling my revenue! Product differentiation is supported by extensive microeconomics research and my intuition, so I should probably do this.</li><li>I have very few “calls to action” in my content. The ratio of time I spend on valuable information giving : selling is perhaps 99.9% : 0.1% (potentially more). This is partly responsible for the success of my brand, I’m sure, but there is also probably a better ratio that I can settle on to significantly improve conversion rate—maybe 98% : 2%, or 99% : 1%. Many people still don’t even know about my community, for instance, which is an egregious strategic error (all of my subscribers should know by now and if they don’t I’m just being stupid). I obviously don’t want to lose the perception of authenticity, but I also don’t want to sell myself short, and I feel like I am right now. I should solve this too.</li><li>I have several obvious mid-funnels that I’m not taking advantage of. I’ve collected a few thousand email addresses and there is no sequence or nurturing of any kind going to this list. I could be posting some sort of regular sequence to my community or my other products (even once per month, say) but I am not. This means my funnel right now is definitely leaky—if I assume there are maybe 100 willing buyers who pass my top of funnel step, I’m likely losing the majority (maybe 80) to time and happenstance.</li><li>I have a waitlist of ~550 members who signed up for a $128/month product. They have money in hand and are waiting to buy, but because of limitations I consciously set on the size of my community (I capped it at 400), I am unable to collect. I do not want to renege on my promise of exclusivity to my current group, because it would have negative implications for both my brand and my conscience, but those 550 waitlistees are suffering from a problem that I can solve in exchange for money. I want to help them. It would also be strategically unwise not to. There are a variety of ways that I can do this, but I have procrastinated on executing here because the solution is vague, ill-defined, and has downsides like potential reputational impacts. Human cognitive tendency is to weight the fear of potential loss many times more than the joy of potential success, so I should consciously debias this and move forward anyway.</li><li>I have an engaged community of 400 people that like, respect, trust, and <em>already pay me</em>. There are a variety of ways I can offer more value to these people and make their lives better in exchange for additional compensation. They are probably the highest ROI, most-likely-to-convert segment I have, so I should be spending more time on this, but I am not. I can ascend them to different levels of coaching, provide customized support, offer referrals, get them to add/promote me on social media, etc.</li><li>I am not taking advantage of affiliate opportunities. This business model inherently involves signing up to, and paying, for other software platforms, which makes this a substantial way to build a recurring revenue stream. For instance, if I have 1,000 people sign up to a software product that pays me $18/month, I’ll have added an additional $18,000 in recurring revenue. Most people that watch my videos sign up to these software products regardless—there is no reason I should not be “taking the credit”, so to speak, via links and the like. I also suspect that some of my links are not configured properly, that I’m greatly underoptimizing the CRO of these affiliates, and that I now have enough leverage to negotiate better terms with many of these providers.</li><li>One of the straightest line paths to growing my notoriety is partnerships or shared collaborations with other content creators. I am not currently doing any of this, but I could be. I could get on podcasts with people, for instance, and then take a percentage cut of revenue that I drive to their platforms or products. This is both mid-of-funnel and top-of-funnel, and I have the tools to do so.</li><li>Speaking of outreach, I could (and should) be running passive campaigns to drive content views, offer partnerships, or sell the products that I develop. I did this to build my Google Knowledge Graph profile and I now have a beautiful looking page. There is no inherent reason why I can’t be sending 1,000 emails per day and using them to generate another, say, 50 Google searches worldwide for my content—this would build my long-term reputation and revenue opportunities.</li><li>There are a variety of ways to make more money on YouTube that I am currently not, like sponsorships. I do not wish to “sell out”, but many of the products that I already create videos on frequently ask to pay me money to continue doing so. If I'm going to do what I was going to do anyway, except get paid for it, logically I might as well. That said, I would have to be firm here and make it clear that I'm not doing advertisements, that there would be no call-to-actions, and that the content I produce would be functionally the same, which may not be possible. But I should check. If it is, I'll explore this opportunity. If it's not possible to create the same quality of content, I won't (since the negative impact on growth would likely outweigh however much money I'd make on sponsorships).</li><li>I receive a number of inbound leads every day looking to work with me for services. Currently, I’m referring most of the inbound to partners in various niches and taking 15%. This is reasonable, but many people that are reaching out are doing so because they love me and my brand—when I send them to a referral partner, they’re a) being sold at much lower price points, and b) put off by the fact that it’s not me. Last month I made ~$1,000 from this. But if I absorbed this back into my own company, and put the liability for product execution onto “my” shoulders (even if I’m working with a team), I could probably 30x the profit without much additional work.</li></ul><p>Yes, I think it’s clear that monetization is my bottleneck. Most of the above points flowed easily and naturally, in contrast to the ones on beliefs or content.</p><p>Jacky Chou, whose videos I watched shortly after my reflective January period, often talks about three components of a successful entrepreneur: execution, monetization, consistency.&nbsp;</p><p>I believe my execution is 9/10—when I do something, I do it extremely well. My consistency is perhaps an 8/10, since when I set my mind to something, I maintain it for much longer than most.</p><p>But my monetization is very clearly a 1/10. My current system is under optimized, and I’m barely scratching the surface of what is possible. This seems like the next entrepreneurial hurdle to cross, so it’s where I will focus most of my time over the coming months.</p><h3 id="my-time">My time</h3><p>Speaking of time—how about the way that I’m currently spending my days? Is this another bottleneck?</p><p>I don’t believe so, off the top of my head. I work often and frequently re-evaluate how I’m spending it. I think the major issue is more “I suck at monetization” than “I am unproductive with my time”. </p><p>But for the purposes of this document, I’ll ideate on ways I can improve how I spend my time as well.</p><h3 id="community-management">Community management</h3><p>I spend around 45 minutes per day actively managing my community. When I say “actively manage”, I mean:</p><ul><li>Responding to posts,</li><li>Recording roasts,</li><li>Creating content specifically for the community—top level comments, videos, weekly office hours, etc,</li><li>Responding to DMs, messages, etc</li></ul><p>This seems like one of the highest ROI periods I’m capable of spending. Because, logically, it:</p><ul><li>Increases the value of the community to current members, reducing churn,</li><li>Is enjoyable to me and often results in great outcomes for my members (“I made $10K this month!” etc),</li><li>Improves my reputation to the specific segment that is most likely to spend money with me,</li></ul><p>I don’t believe I should meaningfully change this. In fact, I should potentially allocate a little more of my time to it. The more I can help current members grow their revenue, the more likely they’ll be to spend money with me in the future on higher-ticket products like 1:1 coaching, other training, etc, which I’ll talk about when writing my actionables.</p><h3 id="youtube-videos">YouTube videos</h3><p>In the last 28 days, I’ve recorded 19 YouTube videos. Approximately one every business day M-F. On average, these videos + editing + thumbnails have taken me ~1.5 hours each.</p><p>This also seems like one of the highest ROI ways I can spend my time—each video has the potential to produce meaningful top of funnel for years to come. Amortized over the whole month, this is ~1 hour/day, which is similar to community management.</p><h3 id="agency">Agency</h3><p>I spend around ~1.5 hours per day managing my various agency clients, including weekends. I allot a specific time window for this since it expedites communication and probably gives the client the impression that I’m more available than I am in reality.&nbsp;</p><p>This work is a hodgepodge of various tasks—consulting, writing up roadmaps/plans, building systems, and the sort.</p><p>Despite the fact that this is now generating me significantly less than the community (&lt; half), I believe this time is still worthwhile. Both morally and from a longevity standpoint, I want to practice what I preach. If I can’t do<em> </em>something, why would I be qualified to teach that thing?&nbsp;</p><p>Additionally, in an industry that moves so quickly, people frequently fall out of touch within just a few months. I believe this has happened to most of the competitors in my space, and it's why their content is so lackluster. So I think unless I interface with the market and its various technologies, often, the quality of my content, consulting, etc will decrease, and I don’t want to be one of those YouTubers preaching what was clearly a 2024 strategy in 2026.</p><h3 id="other-areas-i-spend-my-time">Other areas I spend my time</h3><p>So far, we’re at ~3.5 hours per day.&nbsp;</p><p>Upon dissecting my Rize time entries, I’ve realized something interesting: the bulk of the rest of my time is spent on small administrative tasks that I can probably delegate, eliminate or minimize:</p><ul><li>Responding to emails and/or DMs,</li><li>Responding to YouTube comments,</li><li>Billing management for my community (mainly, people requesting membership changes, new annual members),</li><li>One-off community marketing (as opposed to something ongoing and automated),</li><li>Accounting/bookkeeping,</li></ul><p>This is why I love diving deep into bottlenecks. My gut feeling was that this was not a major problem, but I can already see many opportunities to improve my time management. Additionally, writing all of this out lets me put some distance between "me" and "my thoughts", allowing me to take stock more objectively.</p><h3 id="responding-to-emailsdms">Responding to emails/dms</h3><p>This builds me a ton of goodwill. However, strategically, I should probably be prioritizing the YouTube comments over emails and/or DMs, since the former is seen only by two people, whereas the latter has the potential to be seen by thousands of people over time.&nbsp;</p><p>Off the top of my head: I can probably create a hotkey that autogenerates a string asking people with particularly insightful questions if they’re willing to leave them as a comment on my most recent video instead.</p><p>Something like "I'd love to help you with X. Would you mind leaving this question as a comment on <strong>this video</strong>? I think it'd help a lot of other people going through the same thing, and I'll answer in the thread."</p><p>That way I’ll get to help more people in the same unit time, and combine YouTube management with DMs etc. I’ll also get a guaranteed subscriber (if they’re not already).</p><p>I suspect most people will appreciate the opportunity to help improve the engagement on my videos as well—reciprocity principle is strong.</p><h3 id="manual-billing-management">Manual billing management</h3><p>Unfortunately, billing—especially for annual memberships—is high risk &amp; high reward. I’ve experimented with automated ways of processing waitlist signups, but in practice even a slight mistake would greatly impact my revenue, which is why I’ve done this manually up until now.&nbsp;</p><p>Example: some people’s cards don’t work when I process them (insufficient funds) but work a few hours later. Others require 3D secure authentication, still others have fixed limits on their card and ask if they can be billed in chunks, etc. My goal is to minimize friction on the customer end, hence why I do it myself.</p><p>There are probably some out-of-the-box solutions to waitlists, but I have yet to find one that integrates well with Stripe or Skool. I should certainly spend more time on this, though.&nbsp;</p><ul><li>I should see if there are ways to eliminate at least portions of the time I’m spending here.&nbsp;</li><li>Even if I can’t completely eliminate the task of manual billing, I could, for instance, fill a Google Sheet every time one of these payment requests is failed, and then use that as my “source of truth” versus manually scrolling through dozens and dozens of Stripe customers.</li><li>There may be other solutions I’m not considering, so I’ll make this a priority actionable later.</li></ul><h3 id="one-off-community-marketing">One-off community marketing</h3><p>This is stuff like email blasts to specific segments, one-off Loom videos to people, etc. This felt required when I was first starting this business model, because it was the first time I’d meaningfully ran email campaigns or driven traffic to a coaching program, but today I don’t think there’s much of a need to continue doing this manually. I can just set up a handful of drip sequences and then use Make to add new email list members, waitlistees, etc to the appropriate campaign as needed. </p><p>The time I spend on this once would buy several hours of my time back every month.</p><h3 id="accountingbookkeeping">Accounting/bookkeeping</h3><p>I’ve been staring at and recalculating revenue, profit, etc on a daily basis. Though I like how this keeps me focused on the end-goal—making money—I don’t like how time intensive this is. Most of this is probably because it’s enjoyable rather than necessary, and now that I have established revenue sources, I can build systems that do this automatically.</p><h3 id="miscellaneous-thoughts">Miscellaneous thoughts</h3><p>Strategically, I should also be devoting some time to longer-term thinking—i.e what I’m doing right now while writing this document. Most times, when I finish a comprehensive journaling session, I move my life forward a ton.</p><p>I think there’s an 80/20 here too, though. If I journal every day, I tend to get lost in thought (rather than action), and spend most of my time in reflection. It’s enjoyable, but I don’t think it’s effective.&nbsp;</p><p>The 80/20 within the 80/20 is probably keeping my journalling to once every week or so, and then spending the rest of the week executing, while trusting that the plans I made during the previous session were valid.</p><h3 id="non-career-time">Non-career time</h3><p>My day isn’t restricted to my career, of course. There are a variety of other things I do on a daily basis. While it’s important to have balance, I can probably reallocate or shift some of the time I’m spending on low-priority activities towards higher-priority ones that improve my life.</p><ul><li>I spend a fair amount of time cooking every day. I enjoy the process and like making healthy, delicious meals. But cleaning up and the logistics of buying groceries, storing leftovers, organizing food, etc is probably unnecessary at this point. If I spend half an hour per day on this, that’s half an hour per day on low-ROI stuff I can shift to career time instead.</li><li>I can fix the grocery issue by buying them online. I’m not sure how I can fix the cleanup issue—prepackaged containers? I don’t like the idea of eating food that’s been stored and then heated in plastic, which makes that a nonstarter. But it does bring up an interesting idea: I may be able to eliminate most of my dish time by buying disposable plates, bowls, etc. As long as they’re paper-based I doubt there’d be a meaningful health impact, and it'd turn a 5-10 minute process every time I eat into one that takes a few seconds. </li><li>I could also hire a professional chef or similar. Though upon further reflection that will probably add friction (my apartment is small and I don’t know if I want to deal with having someone else in it while working, recording etc).</li><li>Few other hacks in the same vein: could buy convenient portions rather than whole packages of stuff like salads, meats, carbs (rice, pasta) etc. If I put this and the rest of my tweaks together the time adds up. I eat mostly the same foods, so I could spend my cooking time more on specific standout items—say, a nice roast—rather than routine sides, vegetables, etc.</li><li>More mundane activities like cleaning and so on I can pay to have taken care of. I should definitely hire a regular cleaner on a weekly schedule or similar.</li><li>One of my best friends recently brought up the point that, at this point, “there’s no reason why you shouldn’t be making decisions the same way professional sports players do. The difference in your decisions could be hundreds of thousands if not millions of dollars.” I’m inclined to agree with him. There are probably professionals in a variety of industries I can hire to streamline various parts of my life—coaches, for instance—that would improve my ability to make decisions, free up my time more, keep me accountable, etc. We’re little more than monkeys with smartphones at the end of the day, and I shouldn't discount simple things like accountability.</li><li>It’s probably pertinent to hire a fitness coach, for instance. I could hire a CEO coach, too, and have them perform analyses of my day, my leadership style, etc (similar to what I’m doing now). I should probably also hire consultants more liberally, and have them share with me strategies that other high performers in their industries use.</li></ul><p>There are more, but I feel these are sufficient for now, and could already save me three or four hours a week. Moving on.</p><h2 id="actionables"><strong>Actionables</strong></h2><p>Now that I’ve worked out bottlenecks, it’s time to convert them into actionables. This is always the most important step, and is the bridge between "thinking" and "doing".</p><p>After I list the actionables at a high level, I’ll break each down into concrete ways I can get started immediately to eliminate procrastination. </p><p>I’ll worry about sorting and prioritizing all of this later—for now, it’s important to get them on paper. If something is quantity based, I'll also just roughly estimate how many I think I need, and re-evaluate later.</p><h3 id="list">List</h3><ol><li>Create four additional products (5 total).</li><li>Create 3 CTA templates I can use at the beginning, middle, and end of my content &amp; memorize them.</li><li>Create email sequence for Gumroad.</li><li>Create email sequence for waitlistees.</li><li>Ideate how to maximize income from signed-up waitlistees.</li><li>Ideate how to offer more value to current community members (customized support, referrals, social media connections, more coaching, etc).</li><li>Identify CRO opportunities for affiliates.</li><li>Identify top 5 affiliate income sources and negotiate increased % cuts.</li><li>Create sponsorship strategy.</li><li>Create podcast cold outreach strategy.</li><li>Create cold outreach advertisement strategy.</li><li>Ideate agency fulfillment model.</li><li>Create library of engaging sound effects for YouTube videos.</li><li>Create follower diversification strategy.</li><li>Create Twitter strategy.</li><li>Create TikTok strategy.</li><li>Create Instagram Reels strategy.</li><li>Create 3 new candidate content formats.</li><li>Create LinkedIn strategy.</li><li>Create hotkey to refer emails/DMs to YouTube comments.</li><li>Create dedicated writeups for Skool referrals and add them to Make Money With Make.</li><li>Ideate superior billing management system for Make Money With Make.</li><li>Create dedicated bookkeeping flow for each major revenue driver.</li><li>Create Make automation that stores all community posts in a Google Sheet.</li><li>Ideate Make.com automations using Skool's hidden API.</li><li>Create weekly journalling calendar event.</li><li>Set up online grocery delivery with portioned meal components.</li><li>Purchase one-time order of disposeable plates, bowls, etc.</li><li>Set up weekly cleaning sessions with cleaner.</li><li>Hire fitness coach.</li><li>Hire CEO coach, consultants, etc.</li></ol><p>More may come to me, but these seem sufficient solutions to most of the problems I outlined earlier.</p><h2 id="step-by-step-sops"><strong>Step-by-step SOPs</strong></h2><p>Now that I have high-level actionables, let’s break each down into specific steps that I can follow.&nbsp;</p><p>I do this because it minimizes procrastination on tasks, since by breaking tasks down into smaller portions, the distance I have to traverse in order to feel like I’ve “completed” something goes from 0%-&gt;100% to, say, 0%-&gt;10%.&nbsp;</p><p>Traversing 10% of a problem is easier than traversing 100% of the problem, and once I get the ball rolling it’s much simpler to continue.</p><h3 id="create-four-additional-products-5-total">Create four additional products (5 total)</h3><p>What is a “product” in this case? My main constraint is ensuring that whatever I sell does not scale proportionally with my time. I would prefer for it to be an independent, “packaged” product, and for my time involvement to be minimal (or at least fixed).&nbsp;</p><p>I should also ensure the products I make are of sufficient variety in terms of cost, so that I can price differentiate as mentioned earlier.</p><p>Logically, I can make any of the following:</p><ul><li>Video course (no scaling time cost),</li><li>Template (no scaling time cost),</li><li>Strategy/roadmap/knowledge (no scaling time cost)</li><li>Software product (no scaling time cost but hard)</li><li>Community (fixed time cost but lots of $),</li></ul><p>I want whatever I make to deliver as much value as possible, and for the cost to be disproportionately low relative to what people get. There should be at least, say, a 10x ROI.</p><p>For the &lt;$1,382/yr side, templates, swipe files, and video courses seem straightforward.&nbsp;</p><ul><li>I could start the pricing for various templates—ClickUp, Monday.com, Notion, Instantly email copy, Make.com blueprints—at less than a hundred dollars, and work my way up to perhaps ~$300 or so. Cost would be a product of value: how much time these templates save you versus you implementing them manually yourself. My gut feeling is, even at an opportunity cost of $50/hr, I could save people &gt; 20 hours of fiddling per template. </li><li>For the mid-ticket size, I could sell a video course (with an added bonus where I include all of the templates within it). This would be a reasonably short course, perhaps 3 hours broken into a dozen or so modules. I would write a high-level script and then do it all in one take. Customers may also get some other bonuses—like a certain # months access to my community (whether my current or otherwise), and I’d look at ways of increasing perceived value. Assuming my course saves or makes people at least $6,000 over its lifetime, which seems fair, I could price this at ~$600 for now. </li><li>A lower ticket, uncapped community would solve the waitlist problem while still giving the people who signed up value. It could be focused on the specific subset of my audience that hasn’t closed a customer yet (take them from 0-&gt;1), or perhaps people that have yet to make their first $ online.&nbsp;</li><li>I could structure this so you get less access to me (perhaps one call a month for $47/mo or similar, instead of four like I'm doing right now). The bonus there is I could use that community as an onramp to my affiliate platforms. I (probably) wouldn’t offer annual memberships here as they don’t seem necessary.</li></ul><p>Now that I think about it, I could probably create much more than just 5 products if I focus on templates. I’d require a few hours to set each of them up, but I’d put them on my website or a Gumroad and they’d continue to generate revenue for a long time. If I load them with bonus assets, too, and segment the lists of people who buy, I think I can put them into higher-intent nurture sequences that increase the likelihood of an eventual monthly recurring conversion to my community or coaching products.</p><p>For the &gt;$1,382/yr side, I could build more complex products with guaranteed access to me.</p><ul><li>I could start with a high-ticket program that costs at least $1,500/m with a minimum period of two or three months. This program could include biweekly calls, a step-by-step (as in, <em>really</em> step-by-step guide, where I do literally everything I’m suggesting for them on camera at least once), and a daily accountability structure to ensure people are on track. I would coach people personally, here, and they'd get access to a network of high performers that in and of themselves would probably make them much more than the $1,500/m they're spending.&nbsp;</li><li>I also could repurpose content from my mid ticket course to make this easier to put together. The accountability and coaching alone would probably add $5,000-$10,000/m in revenue—and I have several people that pay me more for less atm.</li><li><em>Sanity check: if I cap this at 20 people, I’d be adding another $30,000/m. Is this worth the time and energy I’d spend on this? No, probably not. If I’m doing another 8 calls per month, and another couple of hours per day in management, asset creation, etc, the ROI on my time is lower than what I’m doing right now.</em></li><li>Okay, if I am to offer something at a higher price point, it should be at a <em>much</em> higher price point. $3K/month for, say, 3 calls/week at a cap of 20 people sounds more reasonable. I could then provide personalized support etc. If I did this with a quarterly obligation, I’d be closing $180,000 in revenue the month that I launch. I could play around with these numbers, but this sounds better to me, and it’d also be quite fulfilling with the potential for leveraged partnerships in the future. I'll have to play around with pricing : value,. though</li></ul><p>I believe this is sufficient. What this means is I’ll have:</p><ul><li>A low ticket community, somewhere between $30-$60/m,</li><li>Affordable, templated product(s), somewhere between $50-$100 one-time,</li><li>A low-mid ticket community, $128/m (primarily accessible via annual membership, unless demand changes considerably),</li><li>A more expensive templated product, $100-$200,</li><li>A mid-ticket info product, perhaps $500-$1000,</li><li>A high-ticket mentorship program that costs several thousand dollars per month&nbsp;,</li></ul><p>These prices are all tentative, and I’ll work the exact numbers out after I determine the value of the products that I’m creating.</p><h4 id="step-by-step">Step-by-step</h4><ol><li>Research how other ClickUp templates are packaged and sold</li><li>Choose a delivery mechanism (probably not Gumroad given high % commissions, but similar)</li><li>Create a ClickUp automation agency CRM &amp; PM template (“Automation Agency In A Box: ClickUp” or similar) and add to site, marketing</li><li>If I'm doing the above, I may as well hire someone to build the same template(s) but for Notion, Monday.com, etc (“Automation Agency In A Box: Notion”, “Automation Agency In A Box: Monday”, that sort of thing)</li><li>Create a mid-ticket info product (similar to “14 Day Agency Course”, or perhaps I can simply repurpose this and sell it standalone for a few hundred dollars—to think about) and add to site, marketing</li><li>Create a low ticket community with templated tasks and a step-by-step guide (use 10K Per Month Agency as an example) and add to site, marketing</li><li>Create a high-ticket mentorship program and add to site, marketing</li></ol><h3 id="create-3-cta-templates-i-can-use-at-the-beginning-middle-and-end-of-my-content-memorize-them">Create 3 CTA templates I can use at the beginning, middle, and end of my content &amp; memorize them.</h3><p>This seems self explanatory, but I’ll explain it anyways.</p><p>I need a series of quick, 5-10 second pitches that I can insert during my content. I don’t want this to come across as ‘salesy’, so they’ll have to be short and incidental-seeming. “If you're new here, I run a community where we help X achieve Y” etc.</p><p>The way most people do this is they shoehorn it in and it disrespects their audience. I don't want to do that, and would prefer I think a little bit about exactly what I'm going to say to help it seem as organic as possible.</p><h4 id="step-by-step-1">Step-by-step</h4><ol><li>Write three CTA pitches for my introductions</li><li>Write three CTA pitches for my endings</li><li>Memorize all, insert one into next video</li><li>Cycle through pitches in each video—maybe one in an intro (to ensure a high # viewers pre-30 seconds hears it), one at the end (to remind people that have gotten value out of my video how they can get more involved)</li></ol><h3 id="create-email-sequence-for-gumroad">Create email sequence for Gumroad.</h3><p>Right now, people are either purchasing or downloading my blueprints for free. I send one email after they purchase, but this email is relatively low-quality and probably not optimized. I should add more emails to the sequence, and then use them to deliver value interspersed with me pointing to my different products.</p><h4 id="step-by-step-2">Step-by-step</h4><ol><li>Research how to connect Gumroad to Klaviyo or alternative</li><li>Look up candidate email sequences that sell similar info products after a lead magnet download</li><li>Create a general sequence that pitches my community, and revisit after I develop the rest of my product line</li></ol><h3 id="create-email-sequence-for-waitlistees">Create email sequence for waitlistees.</h3><p>At the moment, people are signing up to my waitlist on both makemoneywithmake.com and skool.com/makemoneywithmake/about. Since they’re technically waiting to pay, I don’t currently send them any additional emails (aside from a confirmation, and I may not even be doing that for Skool—have to check). But when I develop new products, I should offer them as alternatives, since this audience is extremely high-intent, and I still want to help them.</p><h4 id="step-by-step-3">Step-by-step</h4><ol><li>Identify if Skool is currently sending a “congrats you’re on the waitlist” transactional email</li><li>If not, create transactional email in Klaviyo and build automation that checks Skool waitlist every X hours -&gt; subscribes to sequence</li></ol><h3 id="ideate-how-to-maximize-income-from-signed-up-waitlistees">Ideate how to maximize income from signed-up waitlistees.</h3><p>As mentioned, my waitlist is getting unreasonably long, and it’s getting less and less likely that a signup will realistically be able to join the community in the next year.</p><p>This is silly. If you sign up to my waitlist, it’s because you’re struggling with this problem <em>now, </em>and if I am to help these people, I should develop an alternative to my current community offer that gets most of the way there. I should also do this quickly, before they lose their enthusiasm (as has already happened on a number of occasions).</p><p>I believe the best move here is to overdeliver. Namely, most signups were for a $128/mo product—I should develop a product that is less than $128/mo, but delivers a similar amount of value. This would maximize the probability of conversion, since technically I’d be offering them a different product to what they initially signed up for.</p><p>My time is limited with the current community, so this lower-ticket community (henceforth Community B) would not be able to provide much access. A call per month sounds intuitively right to me, but I may choose to go higher or lower.&nbsp;</p><p>Because of the lack of access, I need to have a very simple, straightforward roadmap that people can follow to achieve what they want to achieve. I should also hire someone that’s <em>not</em> me to come in and provide accountability (and most of the same coaching functions I’m currently providing for Make Money With Make).</p><p>I think most people in these shoes would ask themselves how to provide <em>less</em> value to their community—i.e, remove features, gatekeep, etc. I am going to take the opposite approach and ask myself how to provide <em>more</em> value.</p><p>To ensure that I’m not just selling the same thing twice, which would have reputational impacts, I will provide a bunch of additional value to Community A to compensate. They'll receive more than they were expecting when they paid for it. Something like an additional workshop, extra templates/products/etc, resources that I didn’t mention they’d get when they signed up initially—i.e overdeliver again. </p><p>I’d also probably be best off increasing the price of Community A, too, to make it very clear that this is now a firmly mid-ticket offer, and I should provide to these people at no additional cost all of the resources that I develop for Community B. I should also probably increase my time investment for Community A to make it clear where my priorities are.</p><p>Lastly, I should make the value proposition here obvious: Community B is for people that haven’t yet acquired their first customer, i.e 0-&gt;1. Or even for people that haven't made a dollar on the internet before, i.e 0-&gt;0.1. Everything that I talk about and develop should be to that end.&nbsp;</p><p>Community A, on the other hand, will gradually evolve into the place to go when you’ve acquired your first customer but want to repeat/scale the approach, and will focus on higher-level content that helps people go from 1-&gt;100. </p><p>Of the 400 members currently in said group (based on their intro survey) more than 150 of them currently qualify. I don't have concrete data on the other 250, but I believe a) some of them have already acquired their first customer and just haven't talked about it, and b) of the remaining ones who haven't, I can help many of them get there, too.</p><p>I think this approach is my highest ROI, because of the minimal scaling time involvement required + the fact I still get to satisfy most people’s needs without reneging on my promise to Community A. There are also additional benefits re: affiliate, since if you have yet to acquire your first customer you’re probably going to need to sign up to software platforms, and I’ll be providing a whole host of links, referral coupons, etc, which aligns incentives. </p><p>The sneaky thing there is that, even if people later leave Community B, I’ll still (depending on the platform) make some affiliate revenue from them every month. And if they instead stay, I can use this as an onramp that ascends people to Community A, since by that point it’ll solve higher level problems.</p><h4 id="step-by-step-4">Step-by-step</h4><ol><li>Decide on a curriculum (I’ll ensure I include ‘mindset’ videos, since these are important for total beginners)</li><li>Create Loom videos for every step in that curriculum, and set them up as “days”. Imply that each “day” should be done one at a time, and doing more is counterproductive. This will both build positive daily habits and minimize initial churn (since # steps will be &gt;30)</li><li>Determine community structure, set up Skool page, and hire a coach from Community A (only bill through Skool, since this will be easiest and avoids the billing mgmt issues I currently have)</li><li>Invite the oldest X waitlisted people into the community for free to get the ball rolling</li></ol><p>I think even my lower ticket community will be eons ahead of most of the other ones in the space, since I'm taking the "more value" approach rather than the "less value" approach.</p><h3 id="ideate-how-to-offer-more-value-to-current-community-members-customized-support-referrals-social-media-connections-more-coaching-etc">Ideate how to offer more value to current community members (customized support, referrals, social media connections, more coaching, etc).</h3><p>There are a bunch of low-hanging fruit here, I think. Generally speaking, people want to connect with me—I should provide them the means to do so (on social media, for instance). This is mutually beneficial since I get more followers and they get me in their networks.</p><p>People also love getting personalized videos from me about problems they’re struggling with—I should prioritize these vs, say, texts. Roasts are extremely popular and I should offer them for everything from website design to copy to profiles to client relationships. They’re enjoyable to do, since I’m not just typing on a keyboard, and they give me ideas for future videos.</p><p>I should also offer some sort of discounted coaching to members within my group. Since they’re technically already paying me and have a connection with me, I can provide a community exclusive coaching rate. There are also aligned incentives (i.e they’re more likely to say positive things about it within the community, they’re more likely to want to get on a high-ticket coaching program with me, etc). It’s also fun.</p><h4 id="step-by-step-5">Step-by-step</h4><ol><li>Add “add me on social media” section to onboarding, include all major social profiles,</li><li>Create an “add me on social media” post and bump it biweekly,</li><li>Find alternative to Intro,</li><li>Create community exclusive coaching product with significant discount—don’t make a post about this, just put this somewhere in the onboarding</li></ol><h3 id="identify-cro-opportunities-for-affiliatesidentify-top-5-affiliate-income-sources-and-negotiate-increased-cuts">Identify CRO opportunities for affiliates/Identify top 5 affiliate income sources and negotiate increased % cuts.</h3><p>I believe the way that I’m currently approaching my affiliate links is not ideal. Hundreds of thousands of people watch my videos every month (with a ridiculous average watch time)—I should be at minimum mentioning them once in my content.</p><p>I should also improve how my links are being presented. Right now there’s no real incentive to use my link other than “I like you and want you to make more money” (which has certainly worked). But ideally it would be “wow, I get a discount if I use Nick’s link—I was going to sign up anyway but this makes it even better!” Some platforms do this, but not all, and I think I have enough leverage to try getting them to now.</p><h4 id="step-by-step-6">Step-by-step</h4><ol><li>Determine 5 top affiliate platforms by the last 30 days rev,</li><li>If they don’t provide mutual incentive to use, reach out to affiliate program and ask them if they can give you 10% off (even 5% is fine—mention how you were planning on creating a series around their content),</li><li>Create 3 templated CTAs to use during videos</li><li>Memorize them</li></ol><h3 id="create-sponsorship-strategy">Create sponsorship strategy.</h3><p>As mentioned, there’s a fair amount of money I’m leaving on the table re: YouTube. My videos amount to extremely detailed documentation on specific platforms, and often showcase common problem areas like how to connect to APIs, how to get the most out of the software, etc. If I’m going to record a 45 minute video on a specific SaaS, I might as well make additional money for it.</p><h4 id="step-by-step-7">Step-by-step</h4><ol><li>Create a sponsorship ‘rate card’ (a short one-pager that I’ve seen other creators send to companies that request sponsorship information)</li><li>Ensure rate card has information on preferred working style, length of video, how I pitch, how to operate (i.e no calls about this, I'm not going to do videos on something I wasn't planning on, that sort of thing)</li><li>Create a text replacement email that links to said rate card and use it next time I get a sponsorship opportunity I’m interested in</li></ol><h3 id="create-podcast-cold-outreach-strategy">Create podcast cold outreach strategy.</h3><p>There are many successful podcasts that would be happy to have me, and who would enjoy mutual benefits w.r.t audience sharing. Pat from Starter Story reached out to me a few months ago, for instance; I was given an opportunity to be featured in a Microsoft podcast; etc.&nbsp;</p><p>My CV is impressive enough that I could easily put together a campaign that emails tens of thousands of podcasts over the course of a few weeks, and then take the most promising opportunities. This will both widen my professional network, increase course signups, and introduce my brand to a fundamentally different audience. It’s also an opportunity to improve my interview skills, since I’m likely to be put in many more of these positions in the future.</p><h4 id="step-by-step-8">Step-by-step</h4><ol><li>Purchase 20 domains &amp; set up + warm up 60 mailboxes. Note—sender can’t be me (use a VA’s name or someone I work with).</li><li>Write copy that reaches out to podcasts on my behalf.</li><li>Check campaign replies every week and schedule with top 3 hosts. Aim for 3 interviews/week.</li></ol><h3 id="create-cold-outreach-advertisement-strategy">Create cold outreach advertisement strategy.</h3><p>Similar to the podcast outreach, I should be utilizing cold email significantly more for my media business. Logically, it’s the first thing I turn to when a client asks for growth—so why aren’t I exploring it for myself? Marginal cost is extremely low right now. So low, in fact, that “why the hell not” is a reasonable argument for sending.</p><h4 id="step-by-step-9">Step-by-step</h4><ol><li>Use half of the mailboxes from previous step.</li><li>Write copy that reaches out to the following—the goal is not to pitch, it’s just to increase the # of people that are Googling me, watching me, and see if that has an impact on my subscriber count. Target:</li></ol><ul><ul><li>Educational institutions</li><li>Agencies</li><li>Newsletters</li><li>E-commerce companies</li></ul></ul><ol start="3"><li>Check campaign replies every week and see if interesting opportunities arise.&nbsp;</li></ol><h3 id="ideate-agency-fulfillment-model">Ideate agency fulfillment model.</h3><p>Right now, I’m sending the majority of inbound inquiries to a referral partner. My referral partner is quite competent, but a) they’re getting overwhelmed with their workload, and b) I’m leaving a lot of money on the table.</p><p>I’m earning a flat 15% of the contract cost right now. I’d like to increase this by spinning up my own team (or using LeftClick.ai). My marketing costs are now ~$0—so if I keep COGS around, say, 25%, I’m making ~75% net, which would be 5x what I’m currently earning. Additionally, I’d have full control over the fulfillment (though I don’t really want to have to exercise it often), which would allow me to maximize the client experience, increase retention rate, pitch larger deals, etc. The downside would be liability for the success of the project, of course, but I think that making 60% more on every inbound lead, many of which are worth tens of thousands of dollars, makes sense.</p><p>I could also run a productized agency that sells plug-and-play systems like my cold email system, my proposal system, etc, and then hire a skeleton crew fulfillment team, or a single salesperson whose sole job it is to get each inquiry as close as possible to said template. Variety of ways I could approach this, really.</p><h4 id="step-by-step-10">Step-by-step</h4><ol><li>Source competent operator willing to work under my brand. Said operator would be responsible for client management, client fulfillment (initially), etc.</li><li>Source any team members as needed. Give operator full access to the LeftClick properties they need to make things work. Give them a % revenue share in the agency business and a flat monthly amount and tell them to go nuts. Let them know I’m a resource but that I want them primarily self-sufficient.</li><li>Weekly 1:1 as needed for relationship purposes.</li></ol><h3 id="create-library-of-engaging-sound-effects-for-youtube-videos">Create library of engaging sound effects for YouTube videos.</h3><p>80/20 on YouTube is keeping everything longform, but using tasteful templates + a handful of “YouTube”-specific sound effects.</p><p>Right now I don’t have any sounds, just a “whoosh”. I’d significantly improve the quality of my content if I had a few “pops” here or there or similar sounds any time I put something on the screen.</p><h4 id="step-by-step-11">Step-by-step</h4><ol><li>Look up creators with similar longform styles, list sound effects and any templates I’m not using</li><li>Download templates and sound effects from MotionArray or YouTube</li><li>Add to my Premiere Pro template</li></ol><h3 id="create-follower-diversification-strategy">Create follower diversification strategy.</h3><p>Logically, in order to diversify my follower base onto different platforms, I first need engaging things on each of those platforms I can use as an incentive.</p><p>I could create platform-specific lead magnets, for instance. Or one piece of cornerstone, platform-specific content that you can only get if you follow me (I’m not entirely sure how I’d implement this atm but I’d have to learn). Then I’d drive traffic using one of the CTAs I created before.</p><p>My key targets should be</p><ol><li>Email (i.e a newsletter or inbound sequence), because that way I have full ownership while minimizing platform-related risk,</li><li>Twitter (given current ownership I consider it very low-risk)</li><li>TikTok,</li><li>LinkedIn</li><li>Instagram (low priority, but there’s no reason not to)</li></ol><p>I have separate sections dedicated to each specific platform below, but I’ll dive into how I’m going to do this with email now.</p><h4 id="step-by-step-12">Step-by-step</h4><ol><li>Create a lead-magnet that a) is platform-agnostic, b) is stage-agnostic (i.e doesn’t matter where you are in your journey, c) you can only get by signing up with your email.</li><li>Promote this on all properties &amp; route to a high-value email newsletter.</li><li>Combine this with my Gumroad list. Anytime I launch or advertise a new product/offer, use this first.</li><li>If I’m pitching something community-related always segment by “not a community member”, since I don’t want my community members to get redundant pitches. I can set up a Skool scraper to generate lists of new community members on a daily basis</li></ol><h3 id="create-twitter-strategy">Create Twitter strategy.</h3><p>I need a strategy on Twitter. I don’t believe I’m realistically going to have the time to manage most of Twitter myself, so I’m considering hiring someone to build out a large library of content based on my posts, dripping that content out over time, and then casually using Twitter on mobile.</p><h4 id="step-by-step-13">Step-by-step</h4><ol><li>Look through my emails for Twitter growth hackers</li><li>Research Twitter growth services</li><li>Hire best Twitter growth hacker/service</li><li>Write “cornerstone” post, use as pillar for the rest of my diversification.</li><li>Have Twitter growth-hacker follow something<a href="https://docs.google.com/document/d/1onhdtfOmGoVlla8vo9HfIkVvOnSDRmlUugBPs5rqrNw/edit?usp=sharing&ref=nicksaraev.com"> <u>like this (unless they have a better system)</u></a></li></ol><h3 id="create-tiktok-strategycreate-instagram-reel-strategy">Create TikTok strategy/Create Instagram Reel strategy.</h3><p>I actually just hired a TikTok manager, and they’re in the process of producing the first few reels for me. My goal is to minimize friction in all things, so they’ll be taking my completed YouTube videos, chopping them into portions, and then publishing them autonomously. This prevents me from having to actively manage any of the process—I can simply continue doing what works.</p><p>Assuming this goes passable well, I’ll hire them on for Instagram reels as well.</p><h3 id="create-3-new-candidate-content-formats">Create 3 new candidate content formats.</h3><p>One thing I’ve noticed high-performing creators do is make use of two or three “scenes” during their content. One scene might be a fullscreen talking head, for instance. Another may be a screenshare. A third may be an animation on the screen (Ramit Sethi), or them using an overhead camera on real pen and paper (Ali Abdaal), or them using a tablet to draw (Alex Becker).</p><p>At present, I only have two scenes—my fullscreen talking head and my screenshare. I believe by adding a third, I can significantly improve how engaging my content is and improve both average watch time + virality.</p><p>The key here is to ensure that my third scene is frictionless and adds little to no additional work on my end. I also want it to look good, of course, and provide added value that my current scenes do not.</p><p>This disqualifies animations/edits in post, like Ramit Sethi. But both Alex Becker’s and Ali Abdaal’s approach seems interesting and I think they could work. I should test these models on a few videos at a time and then measure their relative engagements against each other.</p><p>Right now I’m also not transitioning between scenes often enough, since I don’t have an external monitor by which to see what OBS is doing, and at times its hotkeys bug out (i.e I’m scared I’m going to switch to fullscreen talking head by mistake and not be able to go back to a screenshare without having to restart the recording). So I should fix that too.</p><h4 id="step-by-step-14">Step-by-step</h4><ol><li>Get external monitor that I can use to watch my recording while I’m doing it (to verify scene shifts are working)</li><li>For content format #1, purchase a tablet I can write on that also includes screenshare functionality, like a Remarkable or an Amazon Scribe</li><li>Research content format #2-3 by finding a handful of successful talking head creators on YouTube and replicating their approach&nbsp;</li></ol><h3 id="create-linkedin-strategy">Create LinkedIn strategy.</h3><p>I’m probably going to have to hire someone specifically for LinkedIn, since the content format is fundamentally different from both Twitter and TikTok/IG reels. But there’s no reason they can’t just repurpose my landscape YouTube content with minimal edits, or do things like share screenshots of my blueprint (an approach that I’ve already seen work quite well on LI), so this should not add any additional friction on my end.</p><h4 id="step-by-step-15">Step-by-step</h4><ol><li>Look through my emails for LI growth hackers</li><li>Research LI growth services</li><li>Hire best LI growth hacker/service</li></ol><h3 id="create-hotkey-to-refer-emailsdms-to-youtube-comments">Create hotkey to refer emails/DMs to YouTube comments.</h3><p>This one is easy—I just need to write a short templated message that seems incidental while also thanking the person and gently encouraging them to post this on my YouTube channel so I can reply as a comment. MacOS includes text replacements and I can easily do something like ;yt.</p><h4 id="step-by-step-16">Step-by-step</h4><ol><li>Write templated message, add to text replacements under ;yt</li></ol><h3 id="create-dedicated-writeups-for-skool-referrals-and-add-them-to-make-money-with-make">Create dedicated writeups for Skool referrals and add them to Make Money With Make.</h3><p>TLDR: Skool pays out 40% to people whose Skool members start their own community. Similar to multilevel marketing. I know a few people making a few thousand dollars using this. All I need to do is create a few tutorials on how to do this, add referral links to my onboarding, and then maybe share some revenue numbers with my community to showcase how profitable communities like ours can be.&nbsp;</p><p>This will likely be more of a revenue driver when I open up the cheaper low-ticket because of the higher volume. If I get, say, 2,000 total members over the course of the next 6 months, and 40 of those (2%) end up starting their own communities, I’m making a free $1.6K/month or ~$20K/yr with no upkeep. Given that it will take me perhaps half an hour to implement, this is a no-brainer.</p><h4 id="step-by-step-17">Step-by-step</h4><ol><li>Add referral links to community onboarding,</li><li>Make a video that shows Skool revenue (best to do this incidentally, don’t make it the whole focus of the vid), put it somewhere near the referral links</li></ol><h3 id="ideate-superior-billing-management-system-for-make-money-with-make">Ideate superior billing management system for Make Money With Make.</h3><p>What I’m doing now—manually charging annual members, manually processing churns—takes a long time to manage. Probably at least half an hour per day.</p><p>I have a few options:</p><ul><li>Hire someone to do the same thing I’m doing right now (doable, although some private information risk involved)</li><li>Build systems that let me continue to do this myself, but in a shorter amount of time</li></ul><p>I’m leaning to the latter. This may be a strategic error, as one of my biases historically has been keeping as much on my shoulders as possible (and being reluctant to delegate tasks like this). But I feel like, if I’m dealing directly with people’s money, I should maintain control and oversight of that for as long as possible. I also feel like this is a one-off problem that’s mostly a byproduct of Skool not having an inherent waitlist system, and if I just remove the cap, this won’t be a problem with future community products.</p><p>Right now, since many of my members are processed off-Skool, billing management involves the following:</p><ul><li>Manual requests for cancellation. This comes in through email, Skool DMs, Twitter DMs, and even Instagram DMs. Them being spread out all over the place clearly indicates that nobody is reading the billing SOP I put forth so I need to make this clearer.&nbsp;</li><li>Processing annual memberships. Right now, around 30% of the card signups get declined because of insufficient funds, a lack of an address, CVV issues, or something else. When this occurs, I manually send the waitlistee an email explaining the problem and encouraging them to fix it, alongside a manual invoice that lets them process their own payment as needed.</li><li>Kicking out members whose Stripe payments fail repeatedly. Since Skool has no inherent API mechanism to kick members I have to do this manually. This usually involves checking Stripe transaction history every few days and churning members whose payments have failed more than 3 times. I usually have a couple whenever I check this, but sometimes I’ll kick a member and then receive a message from them saying something like “Sorry, I just fixed my card, could you please let me back in” which makes this frustrating to manage.</li></ul><p>Now that it’s all laid out like that, I don’t actually believe that systematizing this would be too difficult.</p><h4 id="step-by-step-18">Step-by-step</h4><ol><li>Add straightforward cancellation SOP to the Stripe portal and to the onboarding (email X with Y subject line)</li><li>Remove the monthly waitlist option from the community website entirely, so most of the people who churn become old monthly members, and the volume of cancellation requests goes down</li><li>Set Create Google Sheet that watches new annual waitlist signups and triggers just once—upon the completion of the credit card form for the first time. If status =!= “trialing”, send an automatic email from me to them letting them know that their card wasn’t accepted for the stated reason, and send them a manual invoice.</li><li>Set up a Stripe watcher that checks for manual invoice payments to products with the same ID as the annual membership, and every time that happens send an invite request via webhook (which is possible last I checked). When this happens, change Google Sheet status from whatever it is to “Active”.</li><li>Every X hours, run a scraper that checks MMWM membership numbers using hidden API. Then, go down the Google Sheet list looking for only “Trialing” members (sorted by date joined) and attempt to bill their card. If card is billed successfully, invite them using previous webhook. If not, change status to “Attempted Billing: {errorCode}”, add a “Attempted Bill Date”, and then trigger an email that explains this + sends a manual invoice which feeds into earlier flow.</li></ol><p>This should be all that is required—a fully self contained billing system. I can add followup functionality later if necessary, i.e I can list all waitlistees with status “Attempted Billing: {errorCode}” or status =!= “trialing” and send them an email. I could theoretically fully automate this with an opt-out button or something.</p><h3 id="create-personal-bookkeeping-flow-for-each-major-revenue-driver">Create personal bookkeeping flow for each major revenue driver.</h3><p>I have a few major revenue drivers right now (personal income wise). Atm it’s a pain in the ass reconciling all of them, so I should develop SOPs or fully automated flows that dump into some central DB and make it easier for me.</p><ul><li>Skool billing: no automated way to track this, but can do SOP for exports</li><li>Stripe billing: automated way to track this, can just dump every transaction into a Sheet that’s formatted for both this and Skool</li><li>Gumroad billing: can set up webhooks to dump into same Sheet</li><li>1SecondCopy: can set up alert that watches outgoing Wise payments to Nick Saraev and add to same Sheet</li><li>Affiliate payments: can centralize where all of these are going—new PayPal perhaps—and then set up watchers or an SOP for exports</li></ul><p>Actually, looking back at this, it’s not that big of a deal. The time I spend simply going to each platform, setting the time period to “Aug 1-Aug 31), and looking up revenue/profit is low. There’s no inherent reason why this that needs to take more than 15min/month. My major problem is not necessarily automating this—it’s that I look at it often, probably for dopaminergic reasons. I should just stop doing that and this isn’t worth a step-by-step.</p><h3 id="create-make-automation-that-stores-all-community-posts-in-a-google-sheet">Create Make automation that stores all community posts in a Google Sheet.</h3><p>It would be useful to have all community posts, video transcripts, etc stored somewhere I can easily run inference on them later. I could use this to develop a “Nick bot” or similar.</p><h4 id="step-by-step-19">Step-by-step</h4><ol><li>Verify Skool hidden API loads posts the way I think it does</li><li>Create automation that scrapes every day, then adds new top-level posts to a Google Sheet, then iterates through post URLs to store all top-level posts &amp; comments in same row</li></ol><h3 id="create-weekly-journalling-calendar-event">Create weekly journalling calendar event.</h3><p>Done. I set this for Monday mornings ~9:00am since I’m almost always free during that time. In all likelihood my journalling sessions will be much less involved than what I’m doing today, and serve a more tactical than strategic purpose.</p><h3 id="set-up-online-grocery-delivery-with-portioned-meal-components">Set up online grocery delivery with portioned meal components.</h3><p>Will do either Walmart or Costco, whatever is easier and more likely to have portioned meals.</p><h4 id="step-by-step-20">Step-by-step</h4><ol><li>Sign up to Costco online grocery delivery, Walmart grocery delivery</li><li>Create meal list and add items to cart based off said list (i.e don’t shop and <em>then</em> choose what meals to make with your ingredients, choose what meals to make and <em>then</em> buy ingredients)</li><li>Purchase one-time order of disposeable plates, bowls, etc.</li></ol><h3 id="set-up-weekly-cleaning-sessions-with-cleaner">Set up weekly cleaning sessions with cleaner.</h3><p>Self-explanatory. I booked one for next Wednesday, no step-by-step.</p><h3 id="hire-fitness-coachpersonal-trainer">Hire fitness coach/personal trainer.</h3><p>According to Gravitus, I have exercised 30 times in the last ~4.3 months. An average of once every 4.36 days.</p><p>Ideally, I’d like to exercise once every 2.33 days (3x/wk). To hit this, I should be exercising around twice as often as I currently am.</p><p>In the past, when I had an accountability partner—usually a friend—I would rarely, if ever, miss a day. The periods of my life in which I accrued the biggest gains were always ones where I worked out with another person, since it was a) more enjoyable and b) a little competitive.I have friends I can work out with here, but I believe I can deliver an even better experience with a coach. At ~$40/session, I’m looking at ~$500/month, and I believe this is well worth the cost—especially with my recent shoulder injury. I also want to get into fundamentally different forms of exercise (high intensity cardio, sprints, functional training, etc).</p><h4 id="step-by-step-21">Step-by-step</h4><ol><li>Research “fitness coaches” or “personal trainers” capable/willing to work out at my gym</li><li>Send program, book 1 month, compare progress compared to self-driven workouts over the last 4.3 months.</li></ol><h3 id="hire-coaches-consultants-to-solve-domain-specific-problems">Hire coaches &amp; consultants to solve domain-specific problems .</h3><p>There are many domain-specific problems I’m struggling with that I can just pay to have answered. Ideally by people that are in the same vertical or niche as me (but further ahead, more advanced, more accomplished, etc).&nbsp;</p><p>For instance, successful Skool community owners, successful coaches, successful marketing agency owners, world renowned specialists in specific fields, etc—whatever they’re in, I rate high confidence that I’d be able to extract 50% or more of the value of said problem space within an hour, and perhaps 75% within two hours.</p><h4 id="step-by-step-22">Step-by-step</h4><ol><li>Identify 3 bottleneck areas/blindspots I can hire a domain-specific consultant or coach for,</li><li>Prepare a list of constraints within each bottleneck, and then write down a further list of questions I can ask to help solve each,</li><li>Write message template for a consulting/coaching request,</li><li>Find consultant or coaches in niches, hire them for an initial hour, rehire them/others as needed (make sure to record calls)</li></ol><h2 id="the-trajectory-of-my-life"><strong>The trajectory of my life.</strong></h2><p>I was initially going to end the document here. But before I wrap this up and start working through my actionables, I believe it’s worth a short respite to discuss how I feel about the trajectory of my life, particularly given my recent career success. I also think this would be a more beautiful way to end my planning session.</p><h3 id="changes">Changes</h3><p>First, some changes I’ve noticed within myself over the last six months:</p><ul><li><strong>I no longer “worry” about money. I spend it liberally.</strong> Before this I thought about money a lot. Most of the people in my life considered me frugal (or outright cheap), and I was very budget conscious. I sacrificed my quality of life to save money often—I lived in cheap homes, I ate cheap food, I drove cheap cars, and I vetoed many experiences that I otherwise would have enjoyed. No longer.</li><li><strong>I’m also less concerned about optimization.</strong> One of my best friends pointed out to me how “Nick from six months ago” would probably consider a lot of how I spent my time today (recording videos, editing things myself, creating my own thumbnails, posting in my community) inefficient or downright nonsensical. Previously, I was much more concerned about theoretical concepts like scalability and efficiency. But since then I have shifted my values fundamentally. Today, I care less about being <em>efficient</em> and more about being <em>effective</em>, and happily do silly things if they’re working. <strong>&nbsp;</strong>This is probably a multifaceted development—both good and bad—because, while it’s been financially rewarding up to this point, if I’m being pragmatic I believe that my approach will cap out soon. From a long term perspective, I probably need to push the pendulum back towards optimization if I am to grow further.</li><li><strong>I am no longer motivated to earn money because of fear.</strong> Many of my early entrepreneurial efforts were motivated by little more than fear over an inability to provide for myself. Government restrictions during COVID-19 were a big factor, here—my livelihood at the time was essentially destroyed by means outside of my control. Today that fear is gone. I now feel a deep sense of security that permeates most of what I do. The upside is that I feel relaxed and more capable of implementing long term strategy. The downside is that I find it more difficult to self-motivate without the concern of, say, being unable to pay my rent constantly looming over my head. Although my blood pressure probably thanks me, I do miss the “make it or break it” mindset and wonder at how I might artificially recreate it for myself.</li></ul><h3 id="outcomes">Outcomes</h3><p>If I continue proceeding down this path, what do I think will happen?</p><p>Well, If I continue down the path I’ve built for myself as a coach/consultant, I will almost certainly continue making significant amounts of money as I develop my brand. I see no fundamental reason why not.</p><p>Assuming my margins are likely to continue being strong, over 50%, and I don’t make any egregious investment mistakes, I could amass a reasonable amount of wealth before 2030—perhaps $5M-$10M.</p><p>Afterwards, I see several potential business models I could employ with annual revenues in the eight figure mark: a bigger and better coaching business, a large agency, a micro-PE firm, a digital product/media company, and a few others.</p><p>I believe this is the highest probability outcome given my skillset, audience, etc, so is worth considering earnestly.</p><h3 id="do-i-want-this">Do I want this?</h3><p>Would I enjoy this path? Would it align with my ethos?</p><p>Yes, I believe so. Any of the above business models would make a substantial impact on my corner of the world. Both directly and indirectly.&nbsp;</p><ul><li>Directly: through helping business owners, who are some of the highest leverage people to help (since they employ large numbers of people, are responsible for livelihoods, stimulate the economy, etc),</li><li>Indirectly: through my brand being a positive, rational force in the marketplace. I am authentic, great at problem solving, and (at the risk of sounding presumptuous) inspirational, especially to those who come from similar backgrounds,</li></ul><p>Even if I don’t <em>directly</em> work with someone, they’re probably still better off having listened to how I approach problem solving vs spending time listening to the mindless edutainment that so many other content creators produce.</p><p>I’m glad I checked in on this—I feel that it’s easy to lose sight of why you’re doing what you’re doing. The above exercise is important to undergo regularly, I think.</p><h3 id="closing-thoughts"><strong>Closing thoughts.</strong></h3><p>I would, of course, like to positively impact the world to a much greater degree than just producing content. But any grandiose plan at this point would be little more than fantasy.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Jensen_Huang?ref=nicksaraev.com">Jensen Huang at NVIDIA</a> talks often about how “planning is just dressed-up guessing”. I firmly believe this. So I’ll keep my guesses as constrained as possible—to the next few months at maximum—and focus my energy on tackling the small, realistic actionables that I’ve listed above.</p><p>I’ll start by adding each step to my to-do-list and proceeding logically based on priority. Until next time.</p>
    </article>

    <div class="px-4 sm:px-6 mb-12">
    <div class="pt-8 text-typ text-sm font-medium max-w-content mx-auto flex gap-3 md:gap-4 justify-center flex-wrap items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-fading" 
      data-share >
      <span class="text-base flex-1 basis-full sm:basis-auto text-center sm:text-left">Share</span>

      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://twitter.com/share?text=The%20next%20few%20months%20of%20my%20career&amp;url=https://leap2grow.github.io/the-next-few-months-of-my-career/"
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
          href="https://bsky.app/intent/compose?text=The%20next%20few%20months%20of%20my%20career%20https://leap2grow.github.io/the-next-few-months-of-my-career/"
          title="Share on Bluesky" aria-label="Share">
        <i class="icon icon-brand-bluesky size-4 stroke-2">
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.facebook.com/sharer.php?u=https://leap2grow.github.io/the-next-few-months-of-my-career/"
          title="Share on Facebook" aria-label="Share">
        <i class="icon icon-facebook size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>



</i>        <span class="">Share</span>
      </a>
      <a class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" target="_blank"
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://leap2grow.github.io/the-next-few-months-of-my-career/&title=The%20next%20few%20months%20of%20my%20career&summary=The%20next%20few%20months%20of%20my%20career"
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
          href="mailto:?subject=The%20next%20few%20months%20of%20my%20career&body=https://leap2grow.github.io/the-next-few-months-of-my-career/&nbsp;The%20next%20few%20months%20of%20my%20career"
          title="Share by email" aria-label="Email">
        <i class="icon icon-mail size-4 stroke-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
</i>        <span class="">Email</span>
      </a>
      <button class="border border-brd bg-bgr leading-tight p-1.5 px-3 flex-1 flex gap-1.5 items-center justify-center rounded-theme hover:bg-bgr-tone" data-share-copy data-url="https://leap2grow.github.io/the-next-few-months-of-my-career/"
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
              <article class="post tag-building-in-public  relative text-typ-tone flex flex-col gap-4" data-post-card>
  
    <a href="/thoughts-goalon-2025/" class="block">
      <figure class="rounded-theme-xxs border border-brd overflow-hidden">
        <picture  >
  <source 
    srcset="/content/images/size/w320/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 320w, /content/images/size/w640/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 600w, /content/images/size/w960/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    type="image/webp"
  >
  <img class="aspect-[16/9] bg-bgr-tone object-cover w-full h-auto rounded-[inherit] will-change-[filter] transition-[filter] blur"
    onload="this.classList.remove('blur')"
    loading="lazy"
    srcset="/content/images/size/w320/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 320w, /content/images/size/w640/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 600w, /content/images/size/w960/format/webp/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg 960w"
    sizes="(max-width: 400px) 300px, 400px"
    src="/content/images/size/w30/2024/12/5C25163F-7CCB-4762-96F4-7E90F4559DF4_1_102-1.jpeg"
    alt="Thoughts, goals, and actionables for 2025"
    
  />
</picture>
      </figure>
    </a>

  <div class="flex h-full flex-col gap-2" data-post-card-content>
    <div class="flex items-center flex-wrap gap-2 text-sm" data-post-card-info>      
        <a href="/tag/building-in-public/" class="hover:text-brand">Building in Public</a>
      
        <span class="">·</span>

      <time class="" datetime="2024-12-26">Dec 26, 2024</time> 

      <span class="flex-1"></span>


    </div>

    <h3 class="text-typ text-lg sm:text-xl font-semibold hover:text-brand " data-post-card-title>
      <a href="/thoughts-goalon-2025/" class="">Thoughts, goals, and actionables for 2025</a>
    </h3>

      <p class="font-light" data-post-card-excerpt>
        Today I will write a meandering, journal-style article where I evaluate my progress over 2024, set goals for 2025, and
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
