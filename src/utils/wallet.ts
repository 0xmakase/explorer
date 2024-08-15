/**
 * wallet毎に許可された機能リストを返却する。undefinedが返却された場合は全機能を許可
 * @param walletName
 * @returns
 */
export const getAllowedFeaturesByWallet = (walletName: string) => {
  switch (walletName) {
    case 'WalletConnect': {
      return [
        'dashboard',
        'governance',
        'staking',
        // 'blocks',
        // 'tx',
        // 'uptime',
        // 'ibc',
        // 'supply',
        // 'parameters',
        // 'consensus',
        // 'cosmwasm',
        // 'state-sync',
        // 'widget',
      ];
    }
    default:
      return undefined;
  }
};
