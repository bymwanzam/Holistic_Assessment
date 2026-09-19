/*
 * A YYYYMMDD stamp for the footer, so a screenshot says which build produced
 * it. The platform already substitutes DHIS2_APP_VERSION from package.json;
 * there is no build-date equivalent, so this adds one through Vite's `define`,
 * which d2-app-scripts merges over its own for both `start` and `build`.
 */
const buildStamp = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '')

/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
    name: 'ghs-holistic-assessment',
    title: 'GHS Holistic Assessment',
    description:
        'Annual regional and district health sector performance assessment with peer review, scoring and reporting.',
    type: 'app',
    pluginType: 'DASHBOARD',

    // Shown as the developer in App Management. This is who built the app, not
    // who the app is for: Bigvalues IT Systems is the author, the Ghana Health
    // Service is the client whose assessment it runs.
    author: 'Bigvalues IT Systems',

    // The global shell on the target instance reports 2.41; its command palette
    // (which the shortcuts below feed) arrived in 2.42.
    minDHIS2Version: '2.41',

    entryPoints: {
        app: './src/App.jsx',
        plugin: './src/Plugin.jsx',
    },

    // Declares the datastore namespace the app owns, so DHIS2 associates it
    // with this app on install. Must stay in step with NAMESPACE in
    // src/lib/constants.js, which is what the app actually reads and writes.
    dataStoreNamespace: 'ghs-holistic-assessment',

    customAuthorities: [
        'GHS_ASSESSMENT_EDIT',
        'GHS_ASSESSMENT_ADMIN',
        'GHS_PEER_REVIEW',
    ],

    // Surfaced in the DHIS2 command palette (2.42+). The app uses a hash
    // router, so these are hash paths appended to the app URL.
    shortcuts: [
        { name: 'Dashboard', url: '#/dashboard' },
        { name: 'Regional Assessment', url: '#/regional' },
        { name: 'District Assessment', url: '#/district' },
        { name: 'Regional Peer Review', url: '#/peer-review/regional' },
        { name: 'District Peer Review', url: '#/peer-review/district' },
        { name: 'Reports', url: '#/reports' },
        { name: 'Administration', url: '#/admin' },
        { name: 'Help & Documentation', url: '#/help' },
    ],

    direction: 'auto',

    viteConfigExtensions: {
        define: {
            'process.env.DHIS2_APP_BUILD': JSON.stringify(buildStamp),
        },
    },
}

module.exports = config
