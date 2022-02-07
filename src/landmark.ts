import { Address, BigInt } from "@graphprotocol/graph-ts";
import { LandmarkMinted } from "./entities/PIXLandmark/PIXLandmark";
import {
  Global,
  LandmarkType,
  Landmark,
  LandmarkAccount,
} from "./entities/schema";

export function handleLandmarkMinted(event: LandmarkMinted): void {
  let entity = Global.load("landmarks");
  if (entity == null) {
    entity = new Global("landmarks");
    entity.value = new BigInt(0);
  }
  entity.value = entity.value.plus(BigInt.fromI32(1));
  entity.save();

  let landmark = new Landmark(event.params.tokenId.toString());
  createLandmarkAccount(event.params.account);
  landmark.account = event.params.account.toHexString();
  landmark.tokenId = event.params.tokenId;
  landmark.category = BigInt.fromI32(event.params.category);
  createLandmarkType(event.params.landmarkType);
  landmark.landmarkType = event.params.landmarkType.toString();

  landmark.save();
}

export function createLandmarkAccount(addr: Address): void {
  let account = LandmarkAccount.load(addr.toHexString());

  if (account == null) {
    account = new LandmarkAccount(addr.toHexString());
    account.balance = BigInt.fromI32(0);
  }

  account.save();
}

export function createLandmarkType(type: BigInt): void {
  let landmarkType = LandmarkType.load(type.toString());

  if (landmarkType == null) {
    landmarkType = new LandmarkType(type.toString());
    landmarkType.landmarkType = type;
  }

  landmarkType.save();
}
