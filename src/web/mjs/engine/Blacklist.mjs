export default class Blacklist {
    // https://developer.chrome.com/extensions/match_patterns
    // https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns
    constructor() {
        this.patterns = [
            '*://*.2mdnsys.com/*',
            '*://*.33across.com/*',
            '*://*.360yield.com/*',
            '*://*.accounts.google.com/*',
            '*://*.addthis.com/*',
            '*://*.addthisedge.com/*',
            '*://*.adf.ly/*',
            '*://*.adform.net/*',
            '*://*.admixer.net/*',
            '*://*.adnxs.com/*',
            '*://*.adriver.ru/*',
            '*://*.adservice.google.com/*',
            '*://*.adsrvr.org/*',
            '*://*.adtrue.com/*',
            '*://*.advertising.com/*',
            '*://*.ambient-platform.com/*',
            '*://*.apis.google.com/*',
            '*://*.bebi.com/*',
            '*://*.bidgear.com/*',
            '*://*.bidswitch.net/*',
            '*://*.buysellads.com/*',
            '*://*.cachefly.net/*',
            '*://*.casalemedia.com/*',
            '*://*.chatango.com/*',
            //'*://*.cloudfront.net/*',
            '*://*.cnzz.com/*',
            '*://*.cobalten.com/*',
            '*://*.connectad.io/*',
            '*://*.consensu.org/*',
            '*://*.contextweb.com/*',
            '*://*.contributor.google.com/*',
            '*://*.cpmstar.com/*',
            '*://*.criteo.net/*',
            '*://*.defpush.com/*',
            '*://*.discordapp.com/*',
            '*://*.doubleclick.net/*',
            '*://*.dpypzvjarj.com/*',
            '*://*.dtscout.com/*',
            '*://*.elasticad.net/*',
            '*://*.eventronbesed.info/*',
            '*://*.facebook.com/*',
            '*://*.facebook.net/*',
            '*://*.fbcdn.net/*',
            '*://*.fundingchoices.google.com/*',
            '*://*.genieessp.com/*',
            '*://*.google-analytics.com/*',
            '*://*.google.com/ads/*',
            '*://*.google.com/adsense/*',
            '*://*.googlesyndication.com/*',
            '*://*.googletagmanager.com/*',
            '*://*.googletagservices.com/*',
            //'*://*.gstatic.com/*',
            '*://*.h12-media.com/*',
            '*://*.histats.com/*',
            '*://*.ie8eamus.com/*',
            '*://*.inter1ads.com/*',
            '*://*.jeconotinhi.info/*',
            '*://*.juicyads.com/*',
            '*://*.koindut.com/*',
            '*://*.lkqd.net/*',
            '*://*.luckypushh.com/*',
            '*://*.mgid.com/*',
            '*://*.moatads.com/*',
            '*://*.mobtrks.com/*',
            '*://*.nakamasweb.com/*',
            '*://*.onclasrv.com/*',
            '*://*.onesignal.com/*',
            '*://*.propellerads.com/*',
            '*://*.pubmatic.com/*',
            '*://*.pubmine.com/*',
            '*://*.pubpress.net/*',
            '*://*.pvclouds.com/*',
            '*://*.revcontent.com/*',
            '*://*.sascdn.com/*',
            '*://*.scorecardresearch.com/*',
            '*://*.sharethis.com/*',
            '*://*.shorte.st/*',
            '*://*.sitemaji.com/*',
            '*://*.taboola.com/*',
            '*://*.tradeadexchange.com/*',
            '*://*.twitter.com/*',
            '*://*.tynt.com/*',
            '*://*.veruta.com/*',
            '*://*.vidible.tv/*',
            '*://*.vidoomy.com/*',
            '*://*.w55c.net/*',
            '*://*.yieldbird.com/*',
            '*://*.yimg.com/*',
            '*://*.zryydi.com/*',                
        ];
    }

    /**
     * 
     */
    addPattern( pattern ) {
        if( !this.patterns.includes( pattern ) ) {
            this.patterns.push( pattern );
        }
    }
}