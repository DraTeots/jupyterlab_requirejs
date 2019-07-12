/**
 * Initialization data for the jupyterlab_requirejs extension.
 */
const extension = {
    id: 'jupyterlab_requirejs',
    autoStart: true,
    activate: (app) => {
        let loadPromise = new Promise((resolve, reject) => {
            console.log("loading requirejs!");
            let script_element = document.createElement("script");
            script_element.onload = function () {
                resolve();
            };
            script_element.onerror = function () {
                reject();
            };
            script_element.src = "/static/components/requirejs/require.js";
            document.head.appendChild(script_element);
        });
        loadPromise
            .then(function () { console.log("Finished require.js loading"); })
            .catch(function (error) {
            console.log("ERROR require.js loading");
            console.error(error);
        });
        // import("requirejs").then(function () {console.log("Finished require.js loading");})
        //    .catch(function (error) {
        //        console.log("ERROR require.js loading");
        //        console.error(error);
        //    });
        console.log('JupyterLab extension jupyterlab_requirejs is activated!');
    }
};
export default extension;
