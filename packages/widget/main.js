import config from './config.json';
import * as VIS from 'vis-three';

export default {
  name: 'test',
  parent: VIS.uniqueSymbol(VIS.CONFIGTYPE.SCENE),
  load: config.assets,
  resources() {
    return {};
  },
  render(g, c, onComputed, onEvent, onResource) {
    const template = VIS.Template.clone(config, { fillName: true });
    delete template.assets;

    const handler = VIS.Template.handler(template, (config) =>
      g(config.type, config),
    );

    const render = VIS.Template.planish(handler);

    return {
      ...render,
    };
  },
  data(ignore) {
    return {};
  },
};
