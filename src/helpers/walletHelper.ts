export const WalletHelper = {
    shortAddress: (wallet: string) => {
        if(wallet) 
            return wallet.substring(0, 6) + "..." + wallet.substring(wallet.length - 4, wallet.length) 
    }
}