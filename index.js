const configcat = require("configcat-node");
const SDK_KEY = "OJLZCPXK40-P1tmtBE_7OQ/t6xMa_LAikOls_SQr2DglA"; // ENV VAR, PELO AMOR DE ALLAH!

const configCatClient = configcat.createClient(SDK_KEY, {});

(async () => {
  const theWholeFuckingVars = await configCatClient.getAllValuesAsync();

  console.table(theWholeFuckingVars);

  const interval = setInterval(async () => {
    console.log("--------------------------------------------------");
    const isMyFirstFeatureEnabled = await configCatClient.getValueAsync(
      "isMyFirstFeatureEnabled", //KEY
      false //DEFAULT VALUE
    );

    console.log("isMyFirstFeatureEnabled: " + isMyFirstFeatureEnabled);
  }, 1000);

  // clearInterval(interval);
})();
