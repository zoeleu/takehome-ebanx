export interface DepositEvent {
  type: 'deposit';
  destination: string;
  amount: number;
}

export interface WithdrawEvent {
  type: 'withdraw';
  origin: string;
  amount: number;
}

export interface TransferEvent {
  type: 'transfer';
  origin: string;
  destination: string;
  amount: number;
}

export type Event = DepositEvent | WithdrawEvent | TransferEvent;