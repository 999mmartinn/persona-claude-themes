// Original art: a TV left on at midnight on a rainy night. Static, scanlines,
// yellow bars at the edges and fog rolling through.
export const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <filter id="fog" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="60"/></filter>
  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="18"/></filter>
  <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1.4" fill="#000" opacity=".45"/></pattern>
  <pattern id="noiseA" width="60" height="60" patternUnits="userSpaceOnUse">
    <rect x="3" y="5" width="6" height="3" fill="#fff"/><rect x="22" y="14" width="4" height="2" fill="#ccc"/><rect x="41" y="2" width="8" height="2" fill="#999"/>
    <rect x="12" y="29" width="5" height="3" fill="#ddd"/><rect x="35" y="33" width="9" height="2" fill="#fff"/><rect x="50" y="22" width="4" height="4" fill="#888"/>
    <rect x="6" y="47" width="7" height="2" fill="#bbb"/><rect x="27" y="51" width="5" height="3" fill="#fff"/><rect x="46" y="44" width="6" height="2" fill="#aaa"/>
  </pattern>
  <pattern id="noiseB" width="52" height="52" patternUnits="userSpaceOnUse">
    <rect x="8" y="3" width="5" height="2" fill="#eee"/><rect x="30" y="9" width="7" height="3" fill="#999"/><rect x="2" y="21" width="4" height="2" fill="#fff"/>
    <rect x="19" y="26" width="8" height="2" fill="#bbb"/><rect x="40" y="30" width="5" height="3" fill="#fff"/><rect x="11" y="41" width="6" height="2" fill="#ccc"/><rect x="33" y="45" width="4" height="3" fill="#888"/>
  </pattern>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#07070c"/><stop offset=".7" stop-color="#121018"/><stop offset="1" stop-color="#1c1708"/>
  </linearGradient>
  <linearGradient id="roll" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="screen"><rect x="1218" y="118" width="284" height="210" rx="26"/></clipPath>
</defs>
<style>
  .fogA{animation:fogA 38s ease-in-out infinite alternate}
  .fogB{animation:fogB 52s ease-in-out infinite alternate}
  .nA{animation:nA .24s steps(1) infinite}
  .nB{animation:nB .24s steps(1) infinite}
  .roll{animation:roll 5s linear infinite}
  .flick{animation:flick 6s steps(1) infinite}
  .rain{animation:rain 1.1s linear infinite}
  .bars{animation:bars 9s ease-in-out infinite alternate}
  @keyframes fogA{from{transform:translateX(-180px)}to{transform:translateX(220px)}}
  @keyframes fogB{from{transform:translateX(200px)}to{transform:translateX(-240px)}}
  @keyframes nA{0%{opacity:1;transform:translate(0,0)}50%{opacity:0;transform:translate(13px,7px)}}
  @keyframes nB{0%{opacity:0;transform:translate(0,0)}50%{opacity:1;transform:translate(-9px,11px)}}
  @keyframes roll{from{transform:translateY(-120px)}to{transform:translateY(260px)}}
  @keyframes flick{0%,100%{opacity:1}61%{opacity:.55}62%{opacity:1}88%{opacity:.7}89%{opacity:1}}
  @keyframes rain{from{transform:translate(0,-200px)}to{transform:translate(-60px,200px)}}
  @keyframes bars{from{transform:translateX(0)}to{transform:translateX(-40px)}}
  @media (prefers-reduced-motion: reduce){*{animation:none!important}}
</style>
<rect width="1600" height="1000" fill="url(#sky)"/>
<g class="rain" opacity=".22" stroke="#fff6c2" stroke-width="2">
  <path d="M100 0l-30 90M260 120l-30 90M420 40l-30 90M610 180l-30 90M790 60l-30 90M960 220l-30 90M1130 30l-30 90M1320 160l-30 90M1490 80l-30 90"/>
  <path d="M180 420l-30 90M370 560l-30 90M540 380l-30 90M720 620l-30 90M880 460l-30 90M1060 680l-30 90M1240 500l-30 90M1430 640l-30 90M60 760l-30 90M640 840l-30 90M1180 860l-30 90"/>
</g>
<g class="bars">
  <polygon points="-40,1000 120,1000 520,560 360,560" fill="#ffd400"/>
  <polygon points="150,1000 210,1000 610,560 550,560" fill="#ffd400" opacity=".55"/>
  <polygon points="-40,700 40,700 -40,790" fill="#ffd400" opacity=".8"/>
</g>
<g class="flick">
  <rect x="1200" y="300" width="320" height="40" fill="#ffd400" filter="url(#glow)" opacity=".5"/>
  <rect x="1196" y="96" width="328" height="254" rx="34" fill="#111" stroke="#ffd400" stroke-width="4"/>
  <g clip-path="url(#screen)">
    <rect x="1218" y="118" width="284" height="210" fill="#4a4a4a"/>
    <rect x="1200" y="100" width="330" height="250" fill="url(#noiseA)" class="nA"/>
    <rect x="1200" y="100" width="330" height="250" fill="url(#noiseB)" class="nB"/>
    <rect x="1218" y="118" width="284" height="80" fill="url(#roll)" class="roll"/>
    <rect x="1218" y="118" width="284" height="210" fill="url(#scan)"/>
  </g>
  <rect x="1300" y="350" width="120" height="12" fill="#111" stroke="#ffd400" stroke-width="3"/>
  <path d="M1300 96l-50-70M1420 96l46-80" stroke="#ffd400" stroke-width="4" stroke-linecap="round"/>
</g>
<g filter="url(#fog)" opacity=".38">
  <ellipse class="fogA" cx="400" cy="820" rx="700" ry="160" fill="#e8dfae"/>
  <ellipse class="fogB" cx="1200" cy="900" rx="800" ry="150" fill="#d8d0a8"/>
  <ellipse class="fogA" cx="900" cy="680" rx="520" ry="90" fill="#f2ecc8" opacity=".6"/>
</g>
<rect width="1600" height="1000" fill="url(#scan)" opacity=".35"/>
</svg>`
