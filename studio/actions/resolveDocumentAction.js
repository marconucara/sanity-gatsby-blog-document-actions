// resolveDocumentActions.js

import defaultResolve from 'part:@sanity/base/document-actions';

export default function resolveDocumentActions(props) {
  return defaultResolve(props);
}

// import defaultResolve, {
//   PublishAction,
// } from 'part:@sanity/base/document-actions';
// import ReplacedPublishAction from './PublishAction';

// export default function resolveDocumentActions(props) {
//   return defaultResolve(props).map(Action =>
//     Action === PublishAction ? ReplacedPublishAction : Action
//   );
// }
