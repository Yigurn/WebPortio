var svgURI = 'http://www.w3.org/2000/svg';
var svg = document.createElementNS( svgURI, 'svg' );
// SVG attributes, like viewBox, are camelCased. That threw me for a loop
svg.setAttribute( 'viewBox', '0 0 100 100' );
// create arrow
var polygon = document.createElementNS( svgURI, 'polygon' );
polygon.setAttribute( 'points', '34,5 92,5 121,55 92,105 34,105 5,55' );
// add class so it can be styled with CSS
polygon.setAttribute( 'style', 'fill:orange;stroke:black;stroke-width:3' );
svg.appendChild( polygon );
// add svg to page
document.body.appendChild( svg );
