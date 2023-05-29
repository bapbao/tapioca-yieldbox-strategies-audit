/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StargateSwapperV3,
  StargateSwapperV3Interface,
} from "../../../contracts/stargate/StargateSwapperV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISwapRouter",
        name: "_swapRouter",
        type: "address",
      },
    ],
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
    inputs: [],
    name: "owner",
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
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "pool",
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
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "_newFee",
        type: "uint24",
      },
    ],
    name: "setPoolFee",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
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
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
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
  "0x60a03461009557601f6113b338819003918201601f19168301916001600160401b0383118484101761009a5780849260209460405283398101031261009557516001600160a01b038116810361009557600080546080929092526001600160b81b0319909116331761017760a31b17905560405161130290816100b18239608051818181607d01528181610ab40152610be30152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001f575b5050361561001d57600080fd5b005b600091823560e01c908163089fe6aa14610e075750806373dd250c14610d385780638bce137e14610a005780638da5cb5b146109d9578063a62d3725146100b05763c31c9c070361001057346100ac57816003193601126100ac57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b50346100ac5760a03660031901126100ac576100ca610e29565b916100d3610e44565b906064359360018060a01b038086168096036109d55767ffffffffffffffff936084358581116109d15761010b903690600401610eae565b50855160608101818110878211176109bd578752600281526020978589830189368237603c61013985610f55565b528161014485610f78565b52895192839163883bdbfd60e01b83528c602496878501908260048701525180915260448501929186905b82821061099c575050505082809103915afa968715610992578691879861087c575b50506101a661019f82610f78565b5191610f55565b5160060b9060060b0395667fffffffffffff8713667fffffffffffff1988121761085957836101e0816101d884610f78565b511692610f55565b51169003958387116108595760060b95603c870560020b96868112908161086c575b50610843575b881b640100000000600160c01b031615610831576fffffffffffffffffffffffffffffffff9081600435169660020b9086821260001461082b57600160ff1b82146103d657818703915b620d89e8831161080457879060018416156107f2576001600160881b036ffffcb933bd6fad37aa2d162d1a5940015b1693600281166107c0575b6004811661078e575b6008811661075c575b6010811661072a575b8c81166106f8575b8b81166106c6575b608090818116610693575b6101008116610660575b610200811661062d575b61040081166105fa575b61080081166105c7575b6110008116610594575b6120008116610561575b614000811661052e575b61800081166104fb575b6201000081166104c8575b620200008116610496575b620400008116610452575b6208000016610415575b50136103f1575b818a1c9163ffffffff166103e85760ff875b1682018092116103d657508392919083169081116103a3578061037891610f88565b94501691161015610395579061038d9161125b565b905b51908152f35b61039e91611200565b61038d565b806103ad91610fb1565b945016911610156103c857906103c291611191565b9061038f565b6103d19161103a565b6103c2565b634e487b7160e01b8752601160045286fd5b60ff6001610356565b908015610402576000190490610344565b50634e487b7160e01b8652601260045285fd5b90936b048a170391f7dc42444e8fa28082029350811591840414171561043f571c9187903861033d565b634e487b7160e01b895260116004528289fd5b94909192506d2216e584f5fa1ea926041bedfe989081810291818304149015171561048357811c9389929190610333565b634e487b7160e01b8a526011600452838afd5b94909192506e5d6af8dedb81196699c329225ee604908181029181830414901517156104835790899291811c94610328565b94909192506f09aa508b5b7a84e1c677de54f3e99bc9908181029181830414901517156104835790899291811c9461031d565b94909192506f31be135f97d08fd981231505542fcfa6908181029181830414901517156104835790899291811c94610312565b94909192506f70d869a156d2a1b890bb3df62baf32f7908181029181830414901517156104835790899291811c94610308565b94909192506fa9f746462d870fdf8a65dc1f90e061e5908181029181830414901517156104835790899291811c946102fe565b94909192506fd097f3bdfd2022b8845ad8f792aa5825908181029181830414901517156104835790899291811c946102f4565b94909192506fe7159475a2c29b7443b29c7fa6e889d9908181029181830414901517156104835790899291811c946102ea565b94909192506ff3392b0822b70005940c7a398e4b70f3908181029181830414901517156104835790899291811c946102e0565b94909192506ff987a7253ac413176f2b074cf7815e54908181029181830414901517156104835790899291811c946102d6565b94909192506ffcbe86c7900a88aedcffc83b479aa3a4908181029181830414901517156104835790899291811c946102cc565b94909192506ffe5dee046a99a2a811c461f1969c3053908181029181830414901517156104835790899291811c946102c2565b939091506fff2ea16466c96a3843ec78b326b528619081810291818304149015171561043f5790889160801c936102b7565b939091506fff973b41fa98c081472e6896dfb254c09081810291818304149015171561043f5790889160801c936102af565b939091506fffcb9843d60f6159c9db58835c9266449081810291818304149015171561043f5790889160801c936102a7565b939091506fffe5caca7e10e4e61c3624eaa0941cd09081810291818304149015171561043f5790889160801c9361029e565b939091506ffff2e50f5f656932ef12357cf3c7fdcc9081810291818304149015171561043f5790889160801c93610295565b939091506ffff97272373d413259a46990580e213a9081810291818304149015171561043f5790889160801c9361028c565b6001600160881b03600160801b610281565b895162461bcd60e51b8152600481018c9052600181840152601560fa1b6044820152606490fd5b81610252565b634e487b7160e01b8552601260045284fd5b95627fffff198114610859576000190195610208565b50634e487b7160e01b8552601160045284fd5b603c91500760060b151538610202565b915096503d8087833e61088f8183610e5a565b810196888289031261096957815181811161096d5782019188601f8401121561096d578251926108be84610f3d565b936108cb8c519586610e5a565b8085528c8086019160051b830101918b831161098e578d01905b828210610971575050508a81015191821161096d57019680601f8901121561096957875161091281610f3d565b9861091f8b519a8b610e5a565b818a528b808b019260051b820101928311610965578b01905b828210610949575050503880610191565b81518781168103610961578152908b01908b01610938565b8980fd5b8880fd5b8680fd5b8780fd5b81518060060b810361098a578152908d01908d016108e5565b8b80fd5b8a80fd5b88513d88823e3d90fd5b835163ffffffff1685528d975088965093840193909201916001018f61016f565b634e487b7160e01b86526041600452602486fd5b8480fd5b8280fd5b50346100ac57816003193601126100ac57905490516001600160a01b039091168152602090f35b50346100ac5760c03660031901126100ac5760043590610a1e610e29565b91610a27610e44565b67ffffffffffffffff939060a43585811161096957610a4a903690600401610eae565b50835160208101906323b872dd60e01b82523360248201523060448201528460648201526064815260a0810181811088821117610ccb57865251879182919082865af1610a95610ef5565b81610d09575b5015610cdf57835163095ea7b360e01b602082019081527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316602483015260448083018690528252906080810187811182821017610ccb57865251879182919082865af1610b0f610ef5565b81610c9c575b5015610c735762ffffff865460a01c169184519561010087019087821090821117610c5f5785526001600160a01b039081168652908116602080870191825286860193845233606088019081526064803560808a0190815260a08a019788526084803560c08c0190815260e08c018d81528b5163414bf38960e01b81529c51891660048e01529651881660248d0152975162ffffff1660448c015292518616918a01919091525190880152935160a4870152915160c48601529051811660e4850152839061010490829087907f0000000000000000000000000000000000000000000000000000000000000000165af1918215610c55578392610c1d575b6020838351908152f35b9091506020813d602011610c4d575b81610c3960209383610e5a565b810103126109d55760209250519038610c13565b3d9150610c2c565b81513d85823e3d90fd5b634e487b7160e01b88526041600452602488fd5b835162461bcd60e51b8152602060048201526002602482015261534160f01b6044820152606490fd5b8051801592508215610cb1575b505038610b15565b610cc49250602080918301019101610f25565b3880610ca9565b634e487b7160e01b89526041600452602489fd5b835162461bcd60e51b815260206004820152600360248201526229aa2360e91b6044820152606490fd5b8051801592508215610d1e575b505038610a9b565b610d319250602080918301019101610f25565b3880610d16565b50346100ac5760203660031901126100ac5760043562ffffff91828216928383036109d1578454936001600160a01b0385163303610dc3579082917f2bff118b9b9e3deb4fc5204e6ba828351c954685d0b119d0e21add79f87833999351918660a01c1682526020820152a162ffffff60a01b1990911660a09190911b62ffffff60a01b1617815580f35b825162461bcd60e51b815260206004820152601f60248201527f53746172676174655377617070657256333a20756e617574686f72697a6564006044820152606490fd5b8390346100ac57816003193601126100ac5762ffffff6020925460a01c168152f35b602435906001600160a01b0382168203610e3f57565b600080fd5b604435906001600160a01b0382168203610e3f57565b90601f8019910116810190811067ffffffffffffffff821117610e7c57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff8111610e7c57601f01601f191660200190565b81601f82011215610e3f57803590610ec582610e92565b92610ed36040519485610e5a565b82845260208383010111610e3f57816000926020809301838601378301015290565b3d15610f20573d90610f0682610e92565b91610f146040519384610e5a565b82523d6000602084013e565b606090565b90816020910312610e3f57518015158103610e3f5790565b67ffffffffffffffff8111610e7c5760051b60200190565b805115610f625760200190565b634e487b7160e01b600052603260045260246000fd5b805160011015610f625760400190565b81810292918115918404141715610f9b57565b634e487b7160e01b600052601160045260246000fd5b600019828209908281029081808410930393838503936000951461102f57600160401b918483111561102b570991818311848183039561101757508460c01b948504600160c01b1491141715610f9b570360401c1780800460011481151715610f9b5790565b634e487b7160e01b81526011600452602490fd5b8580fd5b505060401c92915050565b600160801b9291600019828509938260801b928380871096039580870396146111825785831115610e3f5782910990801960018101809111610f9b57811680910491611095600096600184808a030401908684119003610f88565b9280600302966003880482036110175760028098186110b48184610f88565b89039089821161116e57906110c891610f88565b6110d28184610f88565b89039089821161116e57906110e691610f88565b6110f08184610f88565b89039089821161116e579061110491610f88565b61110e8184610f88565b89039089821161116e579061112291610f88565b61112c8184610f88565b89039089821161116e5761114a9161114391610f88565b8093610f88565b8803978811611017575061116b959661116291610f88565b93030417610f88565b90565b634e487b7160e01b83526011600452602483fd5b50508092935015610e3f570490565b600019828209828202908180821091039381850391600095146111f557600160801b938285111561102b57908491099282841190858284039661101757508560801b9586041491141715610f9b570360801c1780800460011481151715610f9b5790565b505060801c92915050565b600160c01b9291600019828509938260c01b928380871096039580870396146111825785831115610e3f5782910990801960018101809111610f9b57811680910491611095600096600184808a030401908684119003610f88565b60001982820990828102908180841093039383850393600095146112c157600160c01b918483111561102b570991818311848183039561101757508460401b948504600160401b1491141715610f9b570360c01c1780800460011481151715610f9b5790565b505060c01c9291505056fea2646970667358221220ffd5b536d3ec629b44773ddb129176af2efdeb88314524a012f6b159d667868564736f6c63430008120033";

type StargateSwapperV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StargateSwapperV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StargateSwapperV3__factory extends ContractFactory {
  constructor(...args: StargateSwapperV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _swapRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StargateSwapperV3> {
    return super.deploy(
      _swapRouter,
      overrides || {}
    ) as Promise<StargateSwapperV3>;
  }
  override getDeployTransaction(
    _swapRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_swapRouter, overrides || {});
  }
  override attach(address: string): StargateSwapperV3 {
    return super.attach(address) as StargateSwapperV3;
  }
  override connect(signer: Signer): StargateSwapperV3__factory {
    return super.connect(signer) as StargateSwapperV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StargateSwapperV3Interface {
    return new utils.Interface(_abi) as StargateSwapperV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StargateSwapperV3 {
    return new Contract(address, _abi, signerOrProvider) as StargateSwapperV3;
  }
}
