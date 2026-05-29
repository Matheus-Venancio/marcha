const fs = require('fs');

async function main() {
    const res = await fetch('https://festgospel.lojavirtualnuvem.com.br/');
    const html = await res.text();
    const productNames = [...html.matchAll(/class="item-name"[^>]*>(.*?)<\//g)].map(m => m[1].trim());
    const productPrices = [...html.matchAll(/class="item-price"[^>]*>(.*?)<\//g)].map(m => m[1].replace(/&nbsp;/g, '').trim());
    console.log("Products:");
    for(let i=0; i<Math.min(productNames.length, productPrices.length); i++) {
        console.log(`- ${productNames[i]} | ${productPrices[i]}`);
    }
}
main();
