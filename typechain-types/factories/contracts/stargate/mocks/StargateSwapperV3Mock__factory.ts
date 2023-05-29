/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  StargateSwapperV3Mock,
  StargateSwapperV3MockInterface,
} from "../../../../contracts/stargate/mocks/StargateSwapperV3Mock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "PoolFee",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryAmountOut",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576104fc908161001c8239f35b600080fdfe60406080815260048036101561001457600080fd5b600091823560e01c80638bce137e1461009d5763a62d37251461003657600080fd5b346100995760a03660031901126100995761004f6101fc565b50610058610217565b506064356001600160a01b03811603610099576084359267ffffffffffffffff8411610096575061008e60209336908401610281565b505190358152f35b80fd5b8280fd5b508290346101f85760c03660031901126101f8578235916100bc6101fc565b6100c4610217565b67ffffffffffffffff9160a4358381116101f4576100e59036908901610281565b508451916323b872dd60e01b602084015260249233848201523060448201528760648201526064815260a08101818110868211176101e25787526001600160a01b0392610134919084166102c8565b1692833b15610096578451637c928fe960e01b81528781018790528181848183895af180156101d8576101b8575b50845163a9059cbb60e01b60208201523383820152604480820188905281529660808801938411888510176101a85750505082526020936101a2916102c8565b51908152f35b634e487b7160e01b825260419052fd5b8381116101c757855287610162565b50634e487b7160e01b815260418752fd5b86513d84823e3d90fd5b634e487b7160e01b875260418a528487fd5b8480fd5b5080fd5b602435906001600160a01b038216820361021257565b600080fd5b604435906001600160a01b038216820361021257565b90601f8019910116810190811067ffffffffffffffff82111761024f57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161024f57601f01601f191660200190565b81601f820112156102125780359061029882610265565b926102a6604051948561022d565b8284526020838301011161021257816000926020809301838601378301015290565b60018060a01b031690604051604081019080821067ffffffffffffffff83111761024f57610358916040526020938482527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564858301526000808587829751910182855af13d156103ee573d9161033d83610265565b9261034b604051948561022d565b83523d868885013e6103f2565b8051918215918483156103ca575b5050509050156103735750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b9193818094500103126101f857820151908115158203610096575080388084610366565b6060915b919290156104545750815115610406575090565b3b1561040f5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156104675750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b8285106104ad575050604492506000838284010152601f80199101168101030190fd5b848101820151868601604401529381019385935061048a56fea264697066735822122096dbf767e5de5971f657fab1ce81a2297def82f9d0d520ae7d61fce60d49f0f764736f6c63430008120033";

type StargateSwapperV3MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StargateSwapperV3MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StargateSwapperV3Mock__factory extends ContractFactory {
  constructor(...args: StargateSwapperV3MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StargateSwapperV3Mock> {
    return super.deploy(overrides || {}) as Promise<StargateSwapperV3Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StargateSwapperV3Mock {
    return super.attach(address) as StargateSwapperV3Mock;
  }
  override connect(signer: Signer): StargateSwapperV3Mock__factory {
    return super.connect(signer) as StargateSwapperV3Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StargateSwapperV3MockInterface {
    return new utils.Interface(_abi) as StargateSwapperV3MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StargateSwapperV3Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StargateSwapperV3Mock;
  }
}
