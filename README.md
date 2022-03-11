# waves-dev-tools-browser
Pack of multiple tools for developers who want to develop completely and simply in the Waves ecosystem, in addition to enjoying, venturing out and getting to know the best that this great blocckchain technology can offer for use in pure javascript.

This "package" is the junction of several other scripts present in different npm packages from Waves for nodejs, put together in order to facilitate web-oriented development so that it can be executed in the browser.

Documentation: https://docs.waves.tech/en/building-apps/waves-api-and-sdk/client-libraries/



*At the moment, it is only possible to test the connection with Waves in my example in this repository in different ways, I will update and add more ways to test it in the future.

To add the "package", just use waves-dev-tools in your project directory and put it in your html file:

    <!--waves dev tools-->
    <script src="/waves-dev-tools/waves-api.min.js" defer></script>
    <script src="/waves-dev-tools/provider-keeper.js" async></script>
    <script src="/waves-dev-tools/waves-transactions.min.js" async></script>
    <script src="/waves-dev-tools/client-logs.min.js" async></script>
    <script src="/waves-dev-tools/provider-cloud.min.js" async></script>
    <script src="/waves-dev-tools/provider-ledger.js" async></script>
    <script src="/waves-dev-tools/provider-seed.js" async></script>
    <script src="/waves-dev-tools/provider-web.min.js" async></script>
    <script src="/waves-dev-tools/signer.min.js" async></script>
    <script src="/waves-dev-tools/waves-lib-crypto.js"></script>

Different from what is described in the documentation for accessing the respective initial functions of each package for each script, in this use case, you will use it as follows:

Waves Keeper: WavesKeeper
Waves Signer: new signer.Signer()
Provider Cloud: new providerCloud.ProviderCloud()
Provider Web: new providerWeb.ProviderWeb()
Provider Ledger: new providerLedger.ProviderLedger()
Provider Seed: WavesCrypto.crypto()

The rest I imagine you can use and follow according to the documentation.

If you have any doubts, send me a message on telegram and I will help you.

Telegram: t.me/diegohorantunes
