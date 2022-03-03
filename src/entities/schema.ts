// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Global extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Global entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Global entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Global", id.toString(), this);
  }

  static load(id: string): Global | null {
    return store.get("Global", id) as Global | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get pixes(): Array<string | null> {
    let value = this.get("pixes");
    return value.toStringArray();
  }

  set pixes(value: Array<string | null>) {
    this.set("pixes", Value.fromStringArray(value));
  }

  get sales(): Array<string | null> {
    let value = this.get("sales");
    return value.toStringArray();
  }

  set sales(value: Array<string | null>) {
    this.set("sales", Value.fromStringArray(value));
  }

  get purchases(): Array<string | null> {
    let value = this.get("purchases");
    return value.toStringArray();
  }

  set purchases(value: Array<string | null>) {
    this.set("purchases", Value.fromStringArray(value));
  }

  get bids(): Array<string | null> {
    let value = this.get("bids");
    return value.toStringArray();
  }

  set bids(value: Array<string | null>) {
    this.set("bids", Value.fromStringArray(value));
  }
}

export class PIX extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PIX entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PIX entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PIX", id.toString(), this);
  }

  static load(id: string): PIX | null {
    return store.get("PIX", id) as PIX | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get pixId(): BigInt {
    let value = this.get("pixId");
    return value.toBigInt();
  }

  set pixId(value: BigInt) {
    this.set("pixId", Value.fromBigInt(value));
  }

  get category(): BigInt {
    let value = this.get("category");
    return value.toBigInt();
  }

  set category(value: BigInt) {
    this.set("category", Value.fromBigInt(value));
  }

  get size(): BigInt {
    let value = this.get("size");
    return value.toBigInt();
  }

  set size(value: BigInt) {
    this.set("size", Value.fromBigInt(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get sale(): string | null {
    let value = this.get("sale");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sale(value: string | null) {
    if (value === null) {
      this.unset("sale");
    } else {
      this.set("sale", Value.fromString(value as string));
    }
  }
}

export class PIXTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PIXTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PIXTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PIXTransfer", id.toString(), this);
  }

  static load(id: string): PIXTransfer | null {
    return store.get("PIXTransfer", id) as PIXTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pix(): string {
    let value = this.get("pix");
    return value.toString();
  }

  set pix(value: string) {
    this.set("pix", Value.fromString(value));
  }

  get transferId(): BigInt {
    let value = this.get("transferId");
    return value.toBigInt();
  }

  set transferId(value: BigInt) {
    this.set("transferId", Value.fromBigInt(value));
  }

  get from(): string | null {
    let value = this.get("from");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set from(value: string | null) {
    if (value === null) {
      this.unset("from");
    } else {
      this.set("from", Value.fromString(value as string));
    }
  }

  get to(): string {
    let value = this.get("to");
    return value.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }
}

export class PIXRequested extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PIXRequested entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PIXRequested entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PIXRequested", id.toString(), this);
  }

  static load(id: string): PIXRequested | null {
    return store.get("PIXRequested", id) as PIXRequested | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requestedId(): BigInt {
    let value = this.get("requestedId");
    return value.toBigInt();
  }

  set requestedId(value: BigInt) {
    this.set("requestedId", Value.fromBigInt(value));
  }

  get dropId(): BigInt {
    let value = this.get("dropId");
    return value.toBigInt();
  }

  set dropId(value: BigInt) {
    this.set("dropId", Value.fromBigInt(value));
  }

  get playerId(): BigInt {
    let value = this.get("playerId");
    return value.toBigInt();
  }

  set playerId(value: BigInt) {
    this.set("playerId", Value.fromBigInt(value));
  }

  get mode(): BigInt {
    let value = this.get("mode");
    return value.toBigInt();
  }

  set mode(value: BigInt) {
    this.set("mode", Value.fromBigInt(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get purchasedPacks(): BigInt {
    let value = this.get("purchasedPacks");
    return value.toBigInt();
  }

  set purchasedPacks(value: BigInt) {
    this.set("purchasedPacks", Value.fromBigInt(value));
  }
}

export class Sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sale", id.toString(), this);
  }

  static load(id: string): Sale | null {
    return store.get("Sale", id) as Sale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): BigInt {
    let value = this.get("type");
    return value.toBigInt();
  }

  set type(value: BigInt) {
    this.set("type", Value.fromBigInt(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get requestor(): string | null {
    let value = this.get("requestor");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set requestor(value: string | null) {
    if (value === null) {
      this.unset("requestor");
    } else {
      this.set("requestor", Value.fromString(value as string));
    }
  }

  get tokenIds(): Array<BigInt> {
    let value = this.get("tokenIds");
    return value.toBigIntArray();
  }

  set tokenIds(value: Array<BigInt>) {
    this.set("tokenIds", Value.fromBigIntArray(value));
  }

  get tokens(): BigInt {
    let value = this.get("tokens");
    return value.toBigInt();
  }

  set tokens(value: BigInt) {
    this.set("tokens", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get category(): BigInt | null {
    let value = this.get("category");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set category(value: BigInt | null) {
    if (value === null) {
      this.unset("category");
    } else {
      this.set("category", Value.fromBigInt(value as BigInt));
    }
  }

  get size(): BigInt | null {
    let value = this.get("size");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set size(value: BigInt | null) {
    if (value === null) {
      this.unset("size");
    } else {
      this.set("size", Value.fromBigInt(value as BigInt));
    }
  }

  get createTimestamp(): BigInt {
    let value = this.get("createTimestamp");
    return value.toBigInt();
  }

  set createTimestamp(value: BigInt) {
    this.set("createTimestamp", Value.fromBigInt(value));
  }

  get taker(): string | null {
    let value = this.get("taker");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set taker(value: string | null) {
    if (value === null) {
      this.unset("taker");
    } else {
      this.set("taker", Value.fromString(value as string));
    }
  }

  get endTime(): BigInt | null {
    let value = this.get("endTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt | null) {
    if (value === null) {
      this.unset("endTime");
    } else {
      this.set("endTime", Value.fromBigInt(value as BigInt));
    }
  }

  get soldDate(): BigInt | null {
    let value = this.get("soldDate");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set soldDate(value: BigInt | null) {
    if (value === null) {
      this.unset("soldDate");
    } else {
      this.set("soldDate", Value.fromBigInt(value as BigInt));
    }
  }

  get bids(): Array<string | null> {
    let value = this.get("bids");
    return value.toStringArray();
  }

  set bids(value: Array<string | null>) {
    this.set("bids", Value.fromStringArray(value));
  }

  get pixes(): Array<string | null> {
    let value = this.get("pixes");
    return value.toStringArray();
  }

  set pixes(value: Array<string | null>) {
    this.set("pixes", Value.fromStringArray(value));
  }
}

export class SaleLog extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SaleLog entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SaleLog entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SaleLog", id.toString(), this);
  }

  static load(id: string): SaleLog | null {
    return store.get("SaleLog", id) as SaleLog | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get logId(): BigInt {
    let value = this.get("logId");
    return value.toBigInt();
  }

  set logId(value: BigInt) {
    this.set("logId", Value.fromBigInt(value));
  }

  get sale(): string {
    let value = this.get("sale");
    return value.toString();
  }

  set sale(value: string) {
    this.set("sale", Value.fromString(value));
  }

  get status(): BigInt {
    let value = this.get("status");
    return value.toBigInt();
  }

  set status(value: BigInt) {
    this.set("status", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bid entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bid entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bid", id.toString(), this);
  }

  static load(id: string): Bid | null {
    return store.get("Bid", id) as Bid | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sale(): string {
    let value = this.get("sale");
    return value.toString();
  }

  set sale(value: string) {
    this.set("sale", Value.fromString(value));
  }

  get bidder(): string {
    let value = this.get("bidder");
    return value.toString();
  }

  set bidder(value: string) {
    this.set("bidder", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get category(): BigInt | null {
    let value = this.get("category");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set category(value: BigInt | null) {
    if (value === null) {
      this.unset("category");
    } else {
      this.set("category", Value.fromBigInt(value as BigInt));
    }
  }

  get size(): BigInt | null {
    let value = this.get("size");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set size(value: BigInt | null) {
    if (value === null) {
      this.unset("size");
    } else {
      this.set("size", Value.fromBigInt(value as BigInt));
    }
  }
}
