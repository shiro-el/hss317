import { NextRouter } from 'next/router';
import { IconActionType, socialActions } from 'core/constants';
import { openExternalLink } from 'core/utils';

import categoryActions from './categories';
import postActions from './posts';

function generateKbarAction(router: NextRouter) {
  const kbarActions: IconActionType[] = [...socialActions];

  return kbarActions;
}

export default generateKbarAction;
