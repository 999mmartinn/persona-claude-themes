// Original art: a red-and-black "calling card" collage. Diagonal shards at the
// edges, halftone dots, spinning white stars and sweeping slash stripes.
export const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
    <circle cx="9" cy="9" r="3.2" fill="#000" opacity=".55"/>
  </pattern>
  <pattern id="dotsW" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
    <circle cx="11" cy="11" r="2.6" fill="#fff" opacity=".18"/>
  </pattern>
  <radialGradient id="vig" cx="50%" cy="50%" r="70%">
    <stop offset="55%" stop-color="#000" stop-opacity="0"/>
    <stop offset="100%" stop-color="#000" stop-opacity=".75"/>
  </radialGradient>
  <path id="star" d="M0,-60 L14,-18 L58,-18 L22,8 L36,52 L0,26 L-36,52 L-22,8 L-58,-18 L-14,-18 Z"/>
</defs>
<style>
  .sweep{animation:sweep 14s linear infinite}
  .sweep2{animation:sweep 22s linear infinite reverse}
  .spin{transform-box:fill-box;transform-origin:center;animation:spin 18s linear infinite}
  .spinR{transform-box:fill-box;transform-origin:center;animation:spin 26s linear infinite reverse}
  .pulse{animation:pulse 3.2s ease-in-out infinite}
  .jolt{transform-box:fill-box;transform-origin:center;animation:jolt 7s steps(1) infinite}
  .drift{animation:drift 30s ease-in-out infinite alternate}
  @keyframes sweep{from{transform:translateX(-400px)}to{transform:translateX(400px)}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes pulse{0%,100%{opacity:.35}50%{opacity:.85}}
  @keyframes jolt{0%,100%{transform:translate(0,0) rotate(0)}48%{transform:translate(0,0)}50%{transform:translate(8px,-6px) rotate(-1.5deg)}52%{transform:translate(-4px,3px)}54%{transform:translate(0,0)}}
  @keyframes drift{from{transform:translate(0,0)}to{transform:translate(-60px,30px)}}
  @media (prefers-reduced-motion: reduce){*{animation:none!important}}
</style>
<rect width="1600" height="1000" fill="#b3001b"/>
<rect width="1600" height="1000" fill="url(#dots)" class="drift" opacity=".5"/>
<g class="sweep" opacity=".9">
  <polygon points="-400,0 -120,0 900,1000 620,1000" fill="#7a0010"/>
  <polygon points="300,0 360,0 1380,1000 1320,1000" fill="#000" opacity=".35"/>
  <polygon points="1100,0 1260,0 2280,1000 2120,1000" fill="#7a0010"/>
</g>
<g class="sweep2" opacity=".55">
  <polygon points="-200,1000 0,1000 900,0 860,0" fill="#fff" opacity=".08"/>
  <polygon points="800,1000 830,1000 1730,0 1700,0" fill="#fff" opacity=".2"/>
</g>
<g class="jolt">
  <polygon points="0,0 520,0 380,120 460,150 160,330 220,260 0,380" fill="#0a0a0a"/>
  <polygon points="0,0 470,0 340,100 400,120 150,290 190,240 0,330" fill="url(#dotsW)"/>
  <polygon points="490,0 560,0 150,360 120,340" fill="#fff"/>
</g>
<g class="jolt" style="animation-delay:-3.5s">
  <polygon points="1600,1000 1040,1000 1200,860 1110,830 1440,620 1380,700 1600,560" fill="#0a0a0a"/>
  <polygon points="1600,1000 1100,1000 1240,880 1170,860 1460,680 1410,740 1600,620" fill="url(#dotsW)"/>
  <polygon points="1010,1000 1080,1000 1600,530 1600,590" fill="#fff"/>
</g>
<polygon points="1600,0 1600,300 1240,0" fill="#0a0a0a"/>
<polygon points="1600,40 1600,260 1330,40" fill="none" stroke="#fff" stroke-width="5"/>
<polygon points="0,1000 0,760 300,1000" fill="#0a0a0a"/>
<g transform="translate(1420 150)"><use href="#star" class="spin" fill="#fff"/></g>
<g transform="translate(1500 300) scale(.45)"><use href="#star" class="spinR" fill="#b3001b" stroke="#fff" stroke-width="10"/></g>
<g transform="translate(110 860) scale(.8)"><use href="#star" class="spinR" fill="#fff"/></g>
<g transform="translate(260 920) scale(.35)"><use href="#star" class="spin" fill="#0a0a0a" stroke="#fff" stroke-width="12"/></g>
<g class="pulse">
  <circle cx="1530" cy="80" r="14" fill="#fff"/>
  <circle cx="70" cy="700" r="10" fill="#fff"/>
  <rect x="560" y="40" width="90" height="14" fill="#fff" transform="rotate(-18 605 47)"/>
  <rect x="980" y="940" width="120" height="14" fill="#0a0a0a" transform="rotate(-18 1040 947)"/>
</g>
<rect width="1600" height="1000" fill="url(#vig)"/>
</svg>`
