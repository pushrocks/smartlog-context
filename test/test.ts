import { expect, tap } from '@pushrocks/tapbundle';
import * as smartlogContext from '../ts/index';

tap.test('first test', async () => {
  console.log(smartlogContext.standardExport);
});

tap.start();
