"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantumPortalGatewayUpgradeable__factory = exports.PortalLedgerUpgradeable__factory = exports.utils = exports.test = exports.poa = exports.quantumPortalPocUpgradeableSol = exports.quantumPortalNativeFeeRepoUpgradeableSol = exports.quantumPortalLedgerMgrUpgradeableSol = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.quantumPortalLedgerMgrUpgradeableSol = __importStar(require("./QuantumPortalLedgerMgrUpgradeable.sol"));
exports.quantumPortalNativeFeeRepoUpgradeableSol = __importStar(require("./QuantumPortalNativeFeeRepoUpgradeable.sol"));
exports.quantumPortalPocUpgradeableSol = __importStar(require("./QuantumPortalPocUpgradeable.sol"));
exports.poa = __importStar(require("./poa"));
exports.test = __importStar(require("./test"));
exports.utils = __importStar(require("./utils"));
var PortalLedgerUpgradeable__factory_1 = require("./PortalLedgerUpgradeable__factory");
Object.defineProperty(exports, "PortalLedgerUpgradeable__factory", { enumerable: true, get: function () { return PortalLedgerUpgradeable__factory_1.PortalLedgerUpgradeable__factory; } });
var QuantumPortalGatewayUpgradeable__factory_1 = require("./QuantumPortalGatewayUpgradeable__factory");
Object.defineProperty(exports, "QuantumPortalGatewayUpgradeable__factory", { enumerable: true, get: function () { return QuantumPortalGatewayUpgradeable__factory_1.QuantumPortalGatewayUpgradeable__factory; } });