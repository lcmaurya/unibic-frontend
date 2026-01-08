let dealRequested = false;

export function requestDeal() {
  dealRequested = true;
}

export function clearDealRequest() {
  dealRequested = false;
}

export { dealRequested };
