// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Bid extends ethereum.Event {
  get params(): Bid__Params {
    return new Bid__Params(this);
  }
}

export class Bid__Params {
  _event: Bid;

  constructor(event: Bid) {
    this._event = event;
  }

  get bidder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get saleId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BidCancelled extends ethereum.Event {
  get params(): BidCancelled__Params {
    return new BidCancelled__Params(this);
  }
}

export class BidCancelled__Params {
  _event: BidCancelled;

  constructor(event: BidCancelled) {
    this._event = event;
  }

  get bidder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get saleId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Purchased extends ethereum.Event {
  get params(): Purchased__Params {
    return new Purchased__Params(this);
  }
}

export class Purchased__Params {
  _event: Purchased;

  constructor(event: Purchased) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get saleId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SaleCancelled extends ethereum.Event {
  get params(): SaleCancelled__Params {
    return new SaleCancelled__Params(this);
  }
}

export class SaleCancelled__Params {
  _event: SaleCancelled;

  constructor(event: SaleCancelled) {
    this._event = event;
  }

  get saleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SaleRequested extends ethereum.Event {
  get params(): SaleRequested__Params {
    return new SaleRequested__Params(this);
  }
}

export class SaleRequested__Params {
  _event: SaleRequested;

  constructor(event: SaleRequested) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get saleId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get nftToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get endTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokenIds(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class SaleUpdated extends ethereum.Event {
  get params(): SaleUpdated__Params {
    return new SaleUpdated__Params(this);
  }
}

export class SaleUpdated__Params {
  _event: SaleUpdated;

  constructor(event: SaleUpdated) {
    this._event = event;
  }

  get saleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newEndTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TreasuryUpdated extends ethereum.Event {
  get params(): TreasuryUpdated__Params {
    return new TreasuryUpdated__Params(this);
  }
}

export class TreasuryUpdated__Params {
  _event: TreasuryUpdated;

  constructor(event: TreasuryUpdated) {
    this._event = event;
  }

  get treasury(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get burnFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get mode(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class PIXAuctionSaleNew__landTreasuryResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class PIXAuctionSaleNew__pixtTreasuryResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class PIXAuctionSaleNew__saleInfoResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class PIXAuctionSaleNew__saleStateResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class PIXAuctionSaleNew extends ethereum.SmartContract {
  static bind(address: Address): PIXAuctionSaleNew {
    return new PIXAuctionSaleNew("PIXAuctionSaleNew", address);
  }

  burnHolder(): Address {
    let result = super.call("burnHolder", "burnHolder():(address)", []);

    return result[0].toAddress();
  }

  try_burnHolder(): ethereum.CallResult<Address> {
    let result = super.tryCall("burnHolder", "burnHolder():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  landTreasury(): PIXAuctionSaleNew__landTreasuryResult {
    let result = super.call(
      "landTreasury",
      "landTreasury():(address,uint256,uint256)",
      []
    );

    return new PIXAuctionSaleNew__landTreasuryResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_landTreasury(): ethereum.CallResult<
    PIXAuctionSaleNew__landTreasuryResult
  > {
    let result = super.tryCall(
      "landTreasury",
      "landTreasury():(address,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PIXAuctionSaleNew__landTreasuryResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  lastSaleId(): BigInt {
    let result = super.call("lastSaleId", "lastSaleId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastSaleId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastSaleId", "lastSaleId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nonces(param0: Address, param1: BigInt): BigInt {
    let result = super.call("nonces", "nonces(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBigInt();
  }

  try_nonces(param0: Address, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonces", "nonces(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pixNFT(): Address {
    let result = super.call("pixNFT", "pixNFT():(address)", []);

    return result[0].toAddress();
  }

  try_pixNFT(): ethereum.CallResult<Address> {
    let result = super.tryCall("pixNFT", "pixNFT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pixToken(): Address {
    let result = super.call("pixToken", "pixToken():(address)", []);

    return result[0].toAddress();
  }

  try_pixToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("pixToken", "pixToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pixtTreasury(): PIXAuctionSaleNew__pixtTreasuryResult {
    let result = super.call(
      "pixtTreasury",
      "pixtTreasury():(address,uint256,uint256)",
      []
    );

    return new PIXAuctionSaleNew__pixtTreasuryResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_pixtTreasury(): ethereum.CallResult<
    PIXAuctionSaleNew__pixtTreasuryResult
  > {
    let result = super.tryCall(
      "pixtTreasury",
      "pixtTreasury():(address,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PIXAuctionSaleNew__pixtTreasuryResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  saleInfo(param0: BigInt): PIXAuctionSaleNew__saleInfoResult {
    let result = super.call(
      "saleInfo",
      "saleInfo(uint256):(address,address,uint64,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PIXAuctionSaleNew__saleInfoResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_saleInfo(
    param0: BigInt
  ): ethereum.CallResult<PIXAuctionSaleNew__saleInfoResult> {
    let result = super.tryCall(
      "saleInfo",
      "saleInfo(uint256):(address,address,uint64,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PIXAuctionSaleNew__saleInfoResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  saleState(param0: BigInt): PIXAuctionSaleNew__saleStateResult {
    let result = super.call(
      "saleState",
      "saleState(uint256):(address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PIXAuctionSaleNew__saleStateResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_saleState(
    param0: BigInt
  ): ethereum.CallResult<PIXAuctionSaleNew__saleStateResult> {
    let result = super.tryCall(
      "saleState",
      "saleState(uint256):(address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PIXAuctionSaleNew__saleStateResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  whitelistedNFTs(param0: Address): boolean {
    let result = super.call(
      "whitelistedNFTs",
      "whitelistedNFTs(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_whitelistedNFTs(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "whitelistedNFTs",
      "whitelistedNFTs(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class CancelSaleCall extends ethereum.Call {
  get inputs(): CancelSaleCall__Inputs {
    return new CancelSaleCall__Inputs(this);
  }

  get outputs(): CancelSaleCall__Outputs {
    return new CancelSaleCall__Outputs(this);
  }
}

export class CancelSaleCall__Inputs {
  _call: CancelSaleCall;

  constructor(call: CancelSaleCall) {
    this._call = call;
  }

  get _saleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelSaleCall__Outputs {
  _call: CancelSaleCall;

  constructor(call: CancelSaleCall) {
    this._call = call;
  }
}

export class EndAuctionCall extends ethereum.Call {
  get inputs(): EndAuctionCall__Inputs {
    return new EndAuctionCall__Inputs(this);
  }

  get outputs(): EndAuctionCall__Outputs {
    return new EndAuctionCall__Outputs(this);
  }
}

export class EndAuctionCall__Inputs {
  _call: EndAuctionCall;

  constructor(call: EndAuctionCall) {
    this._call = call;
  }

  get buyer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get saleId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class EndAuctionCall__Outputs {
  _call: EndAuctionCall;

  constructor(call: EndAuctionCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _pixt(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _pix(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RequestSaleCall extends ethereum.Call {
  get inputs(): RequestSaleCall__Inputs {
    return new RequestSaleCall__Inputs(this);
  }

  get outputs(): RequestSaleCall__Outputs {
    return new RequestSaleCall__Outputs(this);
  }
}

export class RequestSaleCall__Inputs {
  _call: RequestSaleCall;

  constructor(call: RequestSaleCall) {
    this._call = call;
  }

  get _nftToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _endTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _minPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class RequestSaleCall__Outputs {
  _call: RequestSaleCall;

  constructor(call: RequestSaleCall) {
    this._call = call;
  }
}

export class SetBurnHolderCall extends ethereum.Call {
  get inputs(): SetBurnHolderCall__Inputs {
    return new SetBurnHolderCall__Inputs(this);
  }

  get outputs(): SetBurnHolderCall__Outputs {
    return new SetBurnHolderCall__Outputs(this);
  }
}

export class SetBurnHolderCall__Inputs {
  _call: SetBurnHolderCall;

  constructor(call: SetBurnHolderCall) {
    this._call = call;
  }

  get holder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBurnHolderCall__Outputs {
  _call: SetBurnHolderCall;

  constructor(call: SetBurnHolderCall) {
    this._call = call;
  }
}

export class SetTreasuryCall extends ethereum.Call {
  get inputs(): SetTreasuryCall__Inputs {
    return new SetTreasuryCall__Inputs(this);
  }

  get outputs(): SetTreasuryCall__Outputs {
    return new SetTreasuryCall__Outputs(this);
  }
}

export class SetTreasuryCall__Inputs {
  _call: SetTreasuryCall;

  constructor(call: SetTreasuryCall) {
    this._call = call;
  }

  get _treasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _fee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _burnFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _mode(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class SetTreasuryCall__Outputs {
  _call: SetTreasuryCall;

  constructor(call: SetTreasuryCall) {
    this._call = call;
  }
}

export class SetWhitelistedNFTsCall extends ethereum.Call {
  get inputs(): SetWhitelistedNFTsCall__Inputs {
    return new SetWhitelistedNFTsCall__Inputs(this);
  }

  get outputs(): SetWhitelistedNFTsCall__Outputs {
    return new SetWhitelistedNFTsCall__Outputs(this);
  }
}

export class SetWhitelistedNFTsCall__Inputs {
  _call: SetWhitelistedNFTsCall;

  constructor(call: SetWhitelistedNFTsCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _whitelist(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetWhitelistedNFTsCall__Outputs {
  _call: SetWhitelistedNFTsCall;

  constructor(call: SetWhitelistedNFTsCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateSaleCall extends ethereum.Call {
  get inputs(): UpdateSaleCall__Inputs {
    return new UpdateSaleCall__Inputs(this);
  }

  get outputs(): UpdateSaleCall__Outputs {
    return new UpdateSaleCall__Outputs(this);
  }
}

export class UpdateSaleCall__Inputs {
  _call: UpdateSaleCall;

  constructor(call: UpdateSaleCall) {
    this._call = call;
  }

  get _saleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _endTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateSaleCall__Outputs {
  _call: UpdateSaleCall;

  constructor(call: UpdateSaleCall) {
    this._call = call;
  }
}
