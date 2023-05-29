/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RouterETHMock,
  RouterETHMockInterface,
} from "../../../../contracts/stargate/mocks/RouterETHMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_stgRouter",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_lpToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "addLiquidityETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "stargateRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stgRouter",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60803461008d57601f61031338819003918201601f19168301916001600160401b0383118484101761009257808492604094855283398101031261008d57610052602061004b836100a8565b92016100a8565b600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560405161025690816100bd8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008d5756fe608060409080825260049182361015610023575b505050361561002157600080fd5b005b600091823560e01c9081633e0dc34e14610205575080635fcbd285146101dd578063a9e56f3c146101b6578063b298e8e9146101b65763ed995307036100135781600319360112610139576001546001600160a01b03908116803b156101b2578380916024855180948193637c928fe960e01b8352348b8401525af180156101a557610177575b506001541660001934013481116101645783949160446020928551968793849263a9059cbb60e01b8452338885015260248401525af1801561015a576100ee578380f35b6020913d8311610152575b601f8301601f191684019167ffffffffffffffff83118584101761013d575052602090820182900312610139575180151503610136573880808380f35b80fd5b5080fd5b604190634e487b7160e01b6000525260246000fd5b3d92506100f9565b82513d86823e3d90fd5b634e487b7160e01b845260118552602484fd5b67ffffffffffffffff819492941161019257825291386100aa565b634e487b7160e01b825260418552602482fd5b50505051903d90823e3d90fd5b8380fd5b5034610139578160031936011261013957905490516001600160a01b039091168152602090f35b503461013957816003193601126101395760015490516001600160a01b039091168152602090f35b83903461013957816003193601126101395780600160209252f3fea2646970667358221220e142bbe3e3a2ae7926e82053d2d00b15739bc3093824e6aec5045a6de680c6e364736f6c63430008120033";

type RouterETHMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RouterETHMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RouterETHMock__factory extends ContractFactory {
  constructor(...args: RouterETHMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _stgRouter: PromiseOrValue<string>,
    _lpToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RouterETHMock> {
    return super.deploy(
      _stgRouter,
      _lpToken,
      overrides || {}
    ) as Promise<RouterETHMock>;
  }
  override getDeployTransaction(
    _stgRouter: PromiseOrValue<string>,
    _lpToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_stgRouter, _lpToken, overrides || {});
  }
  override attach(address: string): RouterETHMock {
    return super.attach(address) as RouterETHMock;
  }
  override connect(signer: Signer): RouterETHMock__factory {
    return super.connect(signer) as RouterETHMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterETHMockInterface {
    return new utils.Interface(_abi) as RouterETHMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RouterETHMock {
    return new Contract(address, _abi, signerOrProvider) as RouterETHMock;
  }
}
