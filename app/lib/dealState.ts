export let dealRequested = false;

export const sendDealRequest = () => {
  dealRequested = true;
};

export const clearDealRequest = () => {
  dealRequested = false;
};
