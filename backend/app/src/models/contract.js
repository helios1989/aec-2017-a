const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://testrpc:8545"));

const contractJson = [{"constant":true,"inputs":[],"name":"getOwnerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"backer","type":"address"}],"name":"myTokenShare","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getFundingEnd","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountToWithdraw","type":"uint256"}],"name":"withdrawFunds","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getEmittedTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"backer","type":"address"}],"name":"getMyTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPaidIn","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getTotalWithdrawnAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPercentOfAllTokensDistributedToBackers","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"incrementEventCounter","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isFunded","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfBackers","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getFundingGoal","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCreationDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"backer","type":"address"}],"name":"getTokensOffered","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tokenprice","type":"uint256"},{"name":"tokennumber","type":"uint256"}],"name":"offerMyTokens","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAllTokenOwners","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAllOfferedTokens","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tokenowner","type":"address"}],"name":"buyTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"backer","type":"address"}],"name":"getMyPaidInAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getFundingStatus","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"goal","type":"uint256"},{"name":"_percentOfAllTokensDistributedToBackers","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}];


const contract = web3.eth.contract(contractJson);

module.exports.create = function (userAddress, goal, totalShare, callback) {
    contract.new(
        goal,
        totalShare, {
            from: userAddress,
            data: '606060405260006005556000601455341561001957600080fd5b604051604080611bd0833981016040528080519060200190919080519060200190919050505b33600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816004819055508060078190555042600981905550600a60095401600a819055506000600860006101000a81548160ff02191690831515021790555060006006819055505b50505b611af9806100d76000396000f3006060604052361561013c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4f65bd1461030d578063146050ce1461036257806314fd731c146103af578063155dd5ee146103f557806315c6b41f1461043057806317516592146104595780632162c96b146104a657806322f3e2d4146104cf57806341c0e1b5146104fc57806355f2324d1461051157806369718e951461053a578063778c3a3c146105635780637c654303146105785780639535b0cf146105a5578063a5749710146105ce578063b85090f3146105f7578063b90c1dbb14610620578063bd85fb6a14610649578063d90a38fc1461069d578063db414e8e146106e4578063e47f111c14610798578063ec8ac4d814610895578063ed1973aa146108c3578063f2dfc3fc14610910575b61030b5b60008061014b610939565b151561015357fe5b60009150600090505b6002548110156101e0573373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156101d257600191505b5b808060010191505061015c565b81151561024d573360016000600254815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002600082825401925050819055505b34601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555034601360008282540192505081905550346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550346005600082825401925050819055505b5050565b005b341561031857600080fd5b61032061095b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561036d57600080fd5b610399600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610986565b6040518082815260200191505060405180910390f35b34156103ba57600080fd5b6103c26109f8565b60405180858152602001848152602001831515151581526020018215151515815260200194505050505060405180910390f35b341561040057600080fd5b6104166004808035906020019091905050610a21565b604051808215151515815260200191505060405180910390f35b341561043b57600080fd5b610443610b32565b6040518082815260200191505060405180910390f35b341561046457600080fd5b610490600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b3d565b6040518082815260200191505060405180910390f35b34156104b157600080fd5b6104b9610b87565b6040518082815260200191505060405180910390f35b34156104da57600080fd5b6104e2610939565b604051808215151515815260200191505060405180910390f35b341561050757600080fd5b61050f610b92565b005b341561051c57600080fd5b610524610d42565b6040518082815260200191505060405180910390f35b341561054557600080fd5b61054d610d4d565b6040518082815260200191505060405180910390f35b341561056e57600080fd5b610576610d58565b005b341561058357600080fd5b61058b610d6c565b604051808215151515815260200191505060405180910390f35b34156105b057600080fd5b6105b8610dd6565b6040518082815260200191505060405180910390f35b34156105d957600080fd5b6105e1610de1565b6040518082815260200191505060405180910390f35b341561060257600080fd5b61060a610e01565b6040518082815260200191505060405180910390f35b341561062b57600080fd5b610633610e0c565b6040518082815260200191505060405180910390f35b341561065457600080fd5b610680600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e17565b604051808381526020018281526020019250505060405180910390f35b34156106a857600080fd5b6106c76004808035906020019091908035906020019091905050610ea4565b604051808381526020018281526020019250505060405180910390f35b34156106ef57600080fd5b6106f7611059565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561073f5780820151818401525b602081019050610723565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156107825780820151818401525b602081019050610766565b5050505090500194505050505060405180910390f35b34156107a357600080fd5b6107ab611324565b60405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156107f75780820151818401525b6020810190506107db565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561083a5780820151818401525b60208101905061081e565b50505050905001848103825285818151815260200191508051906020019060200280838360005b8381101561087d5780820151818401525b602081019050610861565b50505050905001965050505050505060405180910390f35b6108c1600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506116b5565b005b34156108ce57600080fd5b6108fa600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611a34565b6040518082815260200191505060405180910390f35b341561091b57600080fd5b610923611a7d565b6040518082815260200191505060405180910390f35b6000600a5442111561094e5760009050610958565b60019050610958565b5b90565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b90565b60008060009050600060135411151561099b57fe5b601354600754601060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054028115156109eb57fe5b0490508091505b50919050565b600080600080600a5442610a0a610d6c565b610a12610939565b93509350935093505b90919293565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610b2757610a82610d6c565b90508015610b26573073ffffffffffffffffffffffffffffffffffffffff163183111515610b2557600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501515610b0c57600080fd5b8260066000828254019250508190555060019150610b2c565b5b5b600091505b50919050565b600060135490505b90565b6000601060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b600060055490505b90565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610d3d57600091505b600254821015610d02576001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc601060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f193505050501515610caf57600080fd5b6000601060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8180600101925050610bf0565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b5050565b600060065490505b90565b600060075490505b90565b60016014600082825401925050819055505b565b6000610d76610939565b1515610dc957600454600554101515610dbb576001600860006101000a81548160ff021916908315150217905550600860009054906101000a900460ff169050610dd3565b60009050610dd3565b610dd2565b60009050610dd3565b5b90565b600060025490505b90565b60003073ffffffffffffffffffffffffffffffffffffffff163190505b90565b600060045490505b90565b600060095490505b90565b600080601160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915091505b915091565b600080610eaf610d6c565b1515610eb757fe5b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403831115610f4457600080fd5b82601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915091505b9250929050565b611061611aa5565b611069611ab9565b600080611074611aa5565b61107c611ab9565b6000809450600093505b600254841015611120576000601060006001600088815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611112576001850194505b5b8380600101945050611086565b8460405180591061112e5750595b908082528060200260200182016040525b509250846040518059106111505750595b908082528060200260200182016040525b50915060009050600093505b600254841015611314576000601060006001600088815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611306576001600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838281518110151561123457fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050601060006001600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482828151811015156112f157fe5b90602001906020020181815250506001810190505b5b838060010194505061116d565b8282965096505b50505050509091565b61132c611aa5565b611334611ab9565b61133c611ab9565b600080611347611aa5565b61134f611ab9565b611357611ab9565b6000809550600094505b6002548510156113fb576000601160006001600089815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411156113ed576001860195505b5b8480600101955050611361565b856040518059106114095750595b908082528060200260200182016040525b5093508560405180591061142b5750595b908082528060200260200182016040525b5092508560405180591061144d5750595b908082528060200260200182016040525b50915060009050600094505b6002548510156116a0576000601160006001600089815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611692576001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848281518110151561153157fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050601160006001600088815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483828151811015156115ee57fe5b9060200190602002018181525050601260006001600088815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054828281518110151561167d57fe5b90602001906020020181815250506001810190505b5b848060010195505061146a565b8383839850985098505b505050505050909192565b6000806116c0610d6c565b15156116c857fe5b601260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054341015151561171357fe5b60009150600090505b6002548110156117a0573373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561179257600191505b5b808060010191505061171c565b81151561180d573360016000600254815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002600082825401925050819055505b8273ffffffffffffffffffffffffffffffffffffffff166108fc601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f19350505050151561188c57600080fd5b601160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550601160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000601160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000601260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b600080600454111515611a8c57fe5b600454600554606402811515611a9e57fe5b0490505b90565b602060405190810160405280600081525090565b6020604051908101604052806000815250905600a165627a7a72305820def5230e94e517a39776b6b3c70e88fe1ca9438dc1528ba24a566f510fda5a230029',
            gas: '4700000'
        }, callback)
};


module.exports.invest = function (userAddress, contractAddress, amount, callback) {
    web3.eth.sendTransaction({
            from: userAddress,
            to: contractAddress,
            value: amount,
            gas: web3.eth.estimateGas({
                from: userAddress,
                to: contractAddress,
                value: amount
            })
        },
        callback
    );
};

module.exports.kill = function (userAddress, contractAddress, callback) {
    contract.at(contractAddress).kill.sendTransaction({
            from: userAddress
        },
        callback
    );
};

module.exports.isFunded = function (contractAddress) {
    return contract.at(contractAddress).isFunded();
};

module.exports.isActive = function (contractAddress) {
    return contract.at(contractAddress).isActive();
};

module.exports.getFundingStatus = function (contractAddress) {
    return contract.at(contractAddress).getFundingStatus();
};

module.exports.getTokenShare = function (userAddress, contractAddress) {
    return contract.at(contractAddress).myTokenShare(userAddress);
};

module.exports.getTokensOffered = function (userAddress, contractAddress) {
    return contract.at(contractAddress).getTokensOffered(userAddress);
};

module.exports.getOwnerAddress = function (contractAddress) {
    return contract.at(contractAddress).getOwnerAddress();
};

module.exports.offerTokens = function (userAddress, contractAddress, amount, price, callback) {
    contract.at(contractAddress).offerMyTokens.sendTransaction(price, amount, {
            from: userAddress
        },
        callback
    );
};

module.exports.getAllOfferedTokens = function (contractAddress) {
    return contract.at(contractAddress).getAllOfferedTokens();
};


module.exports.buyTokens = function (userAddress, contractAddress, tokenOwnerAddress, callback) {
    contract.at(contractAddress).buyTokens.sendTransaction({
            from: userAddress,
            tokenOwnerAddress: tokenOwnerAddress
        },
        callback
    );
};


module.exports.getFundingEnd = function (contractAddress) {
    return contract.at(contractAddress).getFundingEnd.call();
};

