import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-tutorial extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-tutorial:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-tutorial is activated!');
  }
};

export default extension;
