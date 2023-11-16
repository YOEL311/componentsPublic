import { isEmpty } from 'lodash/fp';

export const getAutomationId = (
  parentAutomationId: string | undefined,
  childId: string,
): string => {
  if (isEmpty(parentAutomationId) && !isEmpty(childId)) {
    return childId;
  }
  if (
    (!isEmpty(parentAutomationId) && isEmpty(childId)) ||
    (isEmpty(parentAutomationId) && isEmpty(childId))
  ) {
    return '';
  }

  return `${parentAutomationId}.${childId}`;
};
