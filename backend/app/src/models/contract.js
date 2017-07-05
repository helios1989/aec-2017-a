const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://testrpc:8545"));

const contractJson = [{
    "constant": true,
    "inputs": [],
    "name": "getOwnerAddress",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "tokenprice",
        "type": "uint256"
    }, {
        "name": "tokennumber",
        "type": "uint256"
    }],
    "name": "offermyTokens",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }, {
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getFundingEnd",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "amountToWithdraw",
        "type": "uint256"
    }],
    "name": "withdrawFunds",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getPaidIn",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "isActive",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getallOfferedTokens",
    "outputs": [{
        "name": "",
        "type": "address[]"
    }, {
        "name": "",
        "type": "uint256[]"
    }, {
        "name": "",
        "type": "uint256[]"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getTotalWithdrawnAmount",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getPercentOfAllTokensDistributedToBackers",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "gettokensoffered",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }, {
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "isFunded",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getMyPaidInAmount",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "myTokenShare",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getNumberOfBackers",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getCurrentBalance",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getFundingGoal",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getCreationDate",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getemittedtokens",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getmyTokens",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getallTokenOwners",
    "outputs": [{
        "name": "",
        "type": "address[]"
    }, {
        "name": "",
        "type": "uint256[]"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "tokenowner",
        "type": "address"
    }],
    "name": "buyTokens",
    "outputs": [],
    "payable": true,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getFundingStatus",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "inputs": [{
        "name": "goal",
        "type": "uint256"
    }, {
        "name": "_percentOfAllTokensDistributedToBackers",
        "type": "uint256"
    }],
    "payable": false,
    "type": "constructor"
}, {
    "payable": true,
    "type": "fallback"
}];

const contract = web3.eth.contract(contractJson);

module.exports.create = function(userAddress, goal, callback) {
    contract.new(
        goal,
        //_percentOfAllTokensDistributedToBackers,
        1, {
            from: userAddress,
            data: '60606040526000600555341561001457600080fd5b604051604080611aa7833981016040528080519060200190919080519060200190919050505b33600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600481905550806007819055504260098190555062278d0060095401600a819055506000600860006101000a81548160ff02191690831515021790555060006006819055505b50505b6119d3806100d46000396000f30060606040523615610131576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4f65bd14610302578063141bd1871461035757806314fd731c1461039e578063155dd5ee146103c75780632162c96b1461040257806322f3e2d41461042b578063375cfa6d1461045857806341c0e1b51461055557806355f2324d1461056a57806369718e9514610593578063730ac0a7146105bc5780637c654303146105ec5780637f0ab5d1146106195780638aa78543146106425780639535b0cf1461066b578063a574971014610694578063b85090f3146106bd578063b90c1dbb146106e6578063b957ddbe1461070f578063e47a055414610738578063e71ff0ab14610761578063ec8ac4d814610815578063f2dfc3fc14610843575b6103005b60008061014061086c565b151561014857fe5b60009150600090505b6002548110156101d5573373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156101c757600191505b5b8080600101915050610151565b811515610242573360016000600254815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002600082825401925050819055505b34601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555034601360008282540192505081905550346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550346005600082825401925050819055505b5050565b005b341561030d57600080fd5b61031561088e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561036257600080fd5b61038160048080359060200190919080359060200190919050506108b9565b604051808381526020018281526020019250505060405180910390f35b34156103a957600080fd5b6103b1610a5e565b6040518082815260200191505060405180910390f35b34156103d257600080fd5b6103e86004808035906020019091905050610a69565b604051808215151515815260200191505060405180910390f35b341561040d57600080fd5b610415610b7a565b6040518082815260200191505060405180910390f35b341561043657600080fd5b61043e61086c565b604051808215151515815260200191505060405180910390f35b341561046357600080fd5b61046b610b85565b60405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156104b75780820151818401525b60208101905061049b565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156104fa5780820151818401525b6020810190506104de565b50505050905001848103825285818151815260200191508051906020019060200280838360005b8381101561053d5780820151818401525b602081019050610521565b50505050905001965050505050505060405180910390f35b341561056057600080fd5b610568610f16565b005b341561057557600080fd5b61057d6110c6565b6040518082815260200191505060405180910390f35b341561059e57600080fd5b6105a66110d1565b6040518082815260200191505060405180910390f35b34156105c757600080fd5b6105cf6110dc565b604051808381526020018281526020019250505060405180910390f35b34156105f757600080fd5b6105ff611168565b604051808215151515815260200191505060405180910390f35b341561062457600080fd5b61062c6111d2565b6040518082815260200191505060405180910390f35b341561064d57600080fd5b610655611219565b6040518082815260200191505060405180910390f35b341561067657600080fd5b61067e611289565b6040518082815260200191505060405180910390f35b341561069f57600080fd5b6106a7611294565b6040518082815260200191505060405180910390f35b34156106c857600080fd5b6106d06112b4565b6040518082815260200191505060405180910390f35b34156106f157600080fd5b6106f96112bf565b6040518082815260200191505060405180910390f35b341561071a57600080fd5b6107226112ca565b6040518082815260200191505060405180910390f35b341561074357600080fd5b61074b6112d5565b6040518082815260200191505060405180910390f35b341561076c57600080fd5b61077461131d565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156107bc5780820151818401525b6020810190506107a0565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156107ff5780820151818401525b6020810190506107e3565b5050505090500194505050505060405180910390f35b610841600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506115e8565b005b341561084e57600080fd5b610856611957565b6040518082815260200191505060405180910390f35b6000600a54421115610881576000905061088b565b6001905061088b565b5b90565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b90565b600080601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540383111561094957600080fd5b82601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915091505b9250929050565b6000600a5490505b90565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610b6f57610aca611168565b90508015610b6e573073ffffffffffffffffffffffffffffffffffffffff163183111515610b6d57600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501515610b5457600080fd5b8260066000828254019250508190555060019150610b74565b5b5b600091505b50919050565b600060055490505b90565b610b8d61197f565b610b95611993565b610b9d611993565b600080610ba861197f565b610bb0611993565b610bb8611993565b6000809550600094505b600254851015610c5c576000601160006001600089815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115610c4e576001860195505b5b8480600101955050610bc2565b85604051805910610c6a5750595b908082528060200260200182016040525b50935085604051805910610c8c5750595b908082528060200260200182016040525b50925085604051805910610cae5750595b908082528060200260200182016040525b50915060009050600094505b600254851015610f01576000601160006001600089815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115610ef3576001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168482815181101515610d9257fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050601160006001600088815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548382815181101515610e4f57fe5b9060200190602002018181525050601260006001600088815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548282815181101515610ede57fe5b90602001906020020181815250506001810190505b5b8480600101955050610ccb565b8383839850985098505b505050505050909192565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156110c157600091505b600254821015611086576001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc601060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f19350505050151561103357600080fd5b6000601060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8180600101925050610f74565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b5050565b600060065490505b90565b600060075490505b90565b600080601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915091505b9091565b600061117261086c565b15156111c5576004546005541015156111b7576001600860006101000a81548160ff021916908315150217905550600860009054906101000a900460ff1690506111cf565b600090506111cf565b6111ce565b600090506111cf565b5b90565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b90565b60008060009050600060135411151561122e57fe5b601354600754601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540281151561127e57fe5b0490508091505b5090565b600060025490505b90565b60003073ffffffffffffffffffffffffffffffffffffffff163190505b90565b600060045490505b90565b600060095490505b90565b600060135490505b90565b6000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b90565b61132561197f565b61132d611993565b60008061133861197f565b611340611993565b6000809450600093505b6002548410156113e4576000601060006001600088815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411156113d6576001850194505b5b838060010194505061134a565b846040518059106113f25750595b908082528060200260200182016040525b509250846040518059106114145750595b908082528060200260200182016040525b50915060009050600093505b6002548410156115d8576000601060006001600088815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411156115ca576001600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683828151811015156114f857fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050601060006001600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482828151811015156115b557fe5b90602001906020020181815250506001810190505b5b8380600101945050611431565b8282965096505b50505050509091565b600080601260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054341015151561163657fe5b60009150600090505b6002548110156116c3573373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156116b557600191505b5b808060010191505061163f565b811515611730573360016000600254815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002600082825401925050819055505b8273ffffffffffffffffffffffffffffffffffffffff166108fc601260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f1935050505015156117af57600080fd5b601160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550601160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000601160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000601260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505050565b60008060045411151561196657fe5b60045460055460640281151561197857fe5b0490505b90565b602060405190810160405280600081525090565b6020604051908101604052806000815250905600a165627a7a72305820af699fa7f552adbf19eb1bfcd3fe3f21971c8c6829824caba54b8e4e8a875cde0029',
            gas: '4700000'
        }, callback)
};

module.exports.invest = function(userAddress, contractAddress, amount, callback) {
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

module.exports.kill = function(userAddress, contractAddress, callback) {
    contract.at(contractAddress).kill.sendTransaction({
            from: userAddress
        },
        callback
    );
};

module.exports.isFunded = function(userAddress, contractAddress, callback) {
    contract.at(contractAddress).isFunded.sendTransaction({
            from: userAddress
        },
        callback
    );
};

module.exports.isActive = function(userAddress, contractAddress, callback) {
    contract.at(contractAddress).isActive.sendTransaction({
            from: userAddress
        },
        callback
    );
};

module.exports.getTokenShare = function(userAddress, contractAddress, callback) {
    contract.at(contractAddress).myTokenShare.sendTransaction({
            from: userAddress
        },
        callback
    );
};

module.exports.getTokensOffered = function(userAddress, contractAddress, callback) {
    contract.at(contractAddress).gettokensoffered.sendTransaction({
            from: userAddress
        },
        callback
    );
};

/*
 function (e, contract) {
 console.log(e, contract);
 if (typeof contract.address !== 'undefined') {
 console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
 }
 }*/