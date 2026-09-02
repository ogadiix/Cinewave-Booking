export const getSeatTier = (seatId: string): 'VIP' | 'Premium' | 'Standard' => {
  const row = seatId.charAt(0);
  if (row === 'G') return 'VIP';
  if (row === 'D' || row === 'E' || row === 'F') return 'Premium';
  return 'Standard';
};

export const getTierMarkup = (tier: 'VIP' | 'Premium' | 'Standard'): number => {
  switch (tier) {
    case 'VIP': return 150;
    case 'Premium': return 50;
    case 'Standard': return 0;
  }
};

export const getSeatPrice = (seatId: string, basePrice: number): number => {
  const tier = getSeatTier(seatId);
  return basePrice + getTierMarkup(tier);
};

export const calculateTotalSeatPrice = (seatIds: string[], basePrice: number): number => {
  return seatIds.reduce((sum, seatId) => sum + getSeatPrice(seatId, basePrice), 0);
};

export const getTierColor = (tier: 'VIP' | 'Premium' | 'Standard'): string => {
  switch (tier) {
    case 'VIP': return 'border-yellow-500/50';
    case 'Premium': return 'border-blue-500/50';
    case 'Standard': return 'border-gray-600';
  }
};
