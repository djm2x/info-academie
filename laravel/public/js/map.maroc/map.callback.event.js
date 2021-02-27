
const MajalMap = {};
MajalMap.svg_map_url = './css/map.maroc.svg';
cities = {
    977: "al hoceima",
    976: "rabat-sal\u00e9",
    975: "casablanca",
    974: "beni mellal",
    973: "oued ed-dahab aousserd",
    972: "safi",
    971: "agadir",
    970: "nador",
    969: "khmisset",
    968: "essaouira",
    967: "la\u00e2youne",
    966: "t\u00e9touan",
    965: "taroudannt",
    964: "tanger",
    963: "errachidia",
    962: "ouarzazate-zagora",
    961: "guelmim es-smara",
    960: "l kel\u00e2a des sraghna",
    959: "berrechid",
    958: "settat",
    957: "f\u00e8s",
    956: "skhirate-t\u00e9mara",
    955: "marrakech",
    954: "kh\u00e9nifra",
    953: "mekn\u00e8s",
    952: "taza",
    951: "el jadida",
    950: "k\u00e9nitra-sidi kacem",
    949: "larache",
    948: "oujda",
    908: "\u0627\u0644\u062f\u0627\u0631 \u0627\u0644\u0628\u064a\u0636\u0627\u0621",
    907: "\u0648\u0627\u062f\u064a \u0627\u0644\u0630\u0647\u0628 \u0623\u0648\u0633\u0631\u062f",
    906: "\u0627\u0643\u0627\u062f\u064a\u0631",
    905: "\u0627\u0644\u0646\u0627\u0638\u0648\u0631",
    904: "\u0627\u0644\u0639\u064a\u0648\u0646",
    903: "\u062a\u0627\u0632\u0629",
    902: "\u0645\u0643\u0646\u0627\u0633",
    901: "\u0627\u0644\u0635\u062e\u064a\u0631\u0627\u062a \u0640 \u062a\u0645\u0627\u0631\u0629",
    900: "\u0633\u0637\u0627\u062a",
    899: "\u0627\u0644\u0642\u0646\u064a\u0637\u0631\u0629 - \u0633\u064a\u062f\u064a \u0642\u0627\u0633\u0645",
    898: "\u062a\u0627\u0631\u0648\u062f\u0627\u0646\u062a",
    897: "\u0642\u0644\u0639\u0629 \u0627\u0644\u0633\u0631\u0627\u063a\u0646\u0629",
    896: "\u0645\u0631\u0627\u0643\u0634",
    895: "\u0627\u0644\u0639\u0631\u0627\u0626\u0634",
    894: "\u062e\u0646\u064a\u0641\u0631\u0629",
    893: "\u0643\u0644\u0645\u064a\u0645 \u0627\u0644\u0633\u0645\u0627\u0631\u0629",
    892: "\u0648\u062c\u062f\u0629",
    891: "\u0648\u0631\u0632\u0627\u0632\u0627\u062a \u0640 \u0632\u0627\u0643\u0648\u0631\u0629",
    890: "\u0627\u0644\u0631\u0627\u0634\u062f\u064a\u0629",
    889: "\u0627\u0644\u062c\u062f\u064a\u062f\u0629",
    888: "\u0628\u0631\u0634\u064a\u062f",
    887: "\u0641\u0627\u0633",
    886: "\u062a\u0637\u0648\u0627\u0646",
    885: "\u0627\u0644\u062e\u0645\u064a\u0633\u0627\u062a",
    884: "\u0627\u0644\u062d\u0633\u064a\u0645\u0629",
    883: "\u0628\u0646\u064a \u0645\u0644\u0627\u0644",
    882: "\u0627\u0644\u0631\u0628\u0627\u0637 \u0640 \u0633\u0644\u0627",
    881: "\u0622\u0633\u0641\u064a",
    880: "\u0627\u0644\u0635\u0648\u064a\u0631\u0629",
    879: "\u0637\u0646\u062c\u0629",
    775: "al hoceima",
    739: "beni mellal",
    737: "rabat-sal\u00e9",
    736: "casablanca",
    735: "oued ed-dahab aousserd",
    734: "safi",
    733: "essaouira",
    732: "agadir",
    553: "nador",
    552: "t\u00e9touan",
    536: "khmisset",
    535: "la\u00e2youne",
    40: "guelmim es-smara",
    39: "oujda",
    38: "ouarzazate-zagora",
    37: "errachidia",
    36: "el jadida",
    32: "berrechid",
    31: "f\u00e8s",
    30: "taroudannt",
    29: "taza",
    28: "marrakech",
    26: "kh\u00e9nifra",
    25: "l kel\u00e2a des sraghna",
    24: "mekn\u00e8s",
    23: "larache",
    21: "k\u00e9nitra-sidi kacem",
    20: "settat",
    19: "tanger",
    17: "skhirate-t\u00e9mara"
};


MajalMap.available_cities = JSON.stringify(cities);
// window.addEventListener("DOMContentLoaded", (event) => {
//     console.log("DOM entièrement chargé et analysé");
// });

const s = Snap('#map');
const lang = 'FR';

Snap.load(MajalMap.svg_map_url, data => {
    s.append(data);
    s.selectAll('[cities] > circle').forEach(element => {

        // add style
        element.addClass('agency-marker');

        let city = lang === 'FR' ? element.attr('inkscape:label') : element.attr('inkscape:title');

        const isCityExiste = MajalMap.available_cities.indexOf(city.toLowerCase()) < 0;

        isCityExiste ? element.remove() : element.click(() => onClick(city));

        // if (isCityExiste) {
        //     element.remove();
        // } else {
        //     element.click(() => onClick(city));
        // }
    });
});


