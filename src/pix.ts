import { BigInt } from "@graphprotocol/graph-ts";
import { Transfer, PIXMinted, Requested } from "./entities/PIX/PIX";
import {
  Global,
  Account,
  PIX,
  PIXTransfer,
  PIXRequested,
} from "./entities/schema";
import { createAccount } from "./account";
import { PIX as PIXContract } from "../src/entities/PIX/PIX";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function handlePIXMinted(event: PIXMinted): void {
  if (event.params.tokenId.isZero()) return;

  createAccount(event.params.account);
  let pix = new PIX(getPIXId(event.params.tokenId));
  pix.account = event.params.account.toHexString();
  pix.tokenId = event.params.tokenId;
  pix.pixId = event.params.pixId;
  pix.category = BigInt.fromI32(event.params.category);
  pix.size = BigInt.fromI32(event.params.size);
  pix.save();
}

export function handlePIXRequested(event: Requested): void {
  let entity = Global.load("pixRequested");
  if (entity == null) {
    entity = new Global("pixRequested");
    entity.value = new BigInt(0);
  }

  let pixRequested = new PIXRequested(entity.value.toString());
  pixRequested.requestedId = entity.value;
  pixRequested.account = event.params.account.toHexString();
  pixRequested.mode = event.params.mode;
  let contract = PIXContract.bind(event.address);
  let pendingPackDropId = contract.try_pendingPackDropId(event.params.account);
  if (!pendingPackDropId.reverted) {
    pixRequested.dropId = pendingPackDropId.value;
  } else {
    pixRequested.dropId = new BigInt(0);
  }
  pixRequested.save();

  entity.value = entity.value.plus(BigInt.fromI32(1));
  entity.save();
}

export function handleTransfer(event: Transfer): void {
  if (event.params.tokenId.isZero()) return;

  createAccount(event.params.to);
  if (event.params.from.toHexString() != ZERO_ADDRESS) {
    let pix = PIX.load(getPIXId(event.params.tokenId));
    pix.account = event.params.to.toHexString();
    pix.save();

    let account = Account.load(event.params.from.toHexString());
    account.balance = account.balance.minus(BigInt.fromI32(1));
    account.save();
  }

  let account = Account.load(event.params.to.toHexString());
  account.balance = account.balance.plus(BigInt.fromI32(1));
  account.save();

  let transferEntity = Global.load("totalTransfer");
  if (transferEntity == null) {
    transferEntity = new Global("totalTransfer");
    transferEntity.value = BigInt.fromI32(0);
  }
  transferEntity.value = transferEntity.value.plus(BigInt.fromI32(1));
  transferEntity.save();

  let transfer = new PIXTransfer(getPIXTransferId(transferEntity.value));
  transfer.transferId = transferEntity.value;
  transfer.pix = getPIXId(event.params.tokenId);
  transfer.from = event.params.from.toHexString();
  transfer.to = event.params.to.toHexString();
  transfer.save();
}

function getPIXId(id: BigInt): string {
  return "PIX - " + id.toString();
}

function getPIXTransferId(id: BigInt): string {
  return "PIXTransfer - " + id.toString();
}
