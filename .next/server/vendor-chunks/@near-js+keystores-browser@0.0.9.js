"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@near-js+keystores-browser@0.0.9";
exports.ids = ["vendor-chunks/@near-js+keystores-browser@0.0.9"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@near-js+keystores-browser@0.0.9/node_modules/@near-js/keystores-browser/lib/browser_local_storage_key_store.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@near-js+keystores-browser@0.0.9/node_modules/@near-js/keystores-browser/lib/browser_local_storage_key_store.js ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BrowserLocalStorageKeyStore = void 0;\nconst crypto_1 = __webpack_require__(/*! @near-js/crypto */ \"(ssr)/./node_modules/.pnpm/@near-js+crypto@1.2.1/node_modules/@near-js/crypto/lib/index.js\");\nconst keystores_1 = __webpack_require__(/*! @near-js/keystores */ \"(ssr)/./node_modules/.pnpm/@near-js+keystores@0.0.9/node_modules/@near-js/keystores/lib/index.js\");\nconst LOCAL_STORAGE_KEY_PREFIX = 'near-api-js:keystore:';\n/**\n * This class is used to store keys in the browsers local storage.\n *\n * @see [https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store](https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store)\n * @example\n * ```js\n * import { connect, keyStores } from 'near-api-js';\n *\n * const keyStore = new keyStores.BrowserLocalStorageKeyStore();\n * const config = {\n *   keyStore, // instance of BrowserLocalStorageKeyStore\n *   networkId: 'testnet',\n *   nodeUrl: 'https://rpc.testnet.near.org',\n *   walletUrl: 'https://wallet.testnet.near.org',\n *   helperUrl: 'https://helper.testnet.near.org',\n *   explorerUrl: 'https://explorer.testnet.near.org'\n * };\n *\n * // inside an async function\n * const near = await connect(config)\n * ```\n */\nclass BrowserLocalStorageKeyStore extends keystores_1.KeyStore {\n    /**\n     * @param localStorage defaults to window.localStorage\n     * @param prefix defaults to `near-api-js:keystore:`\n     */\n    constructor(localStorage = window.localStorage, prefix = LOCAL_STORAGE_KEY_PREFIX) {\n        super();\n        this.localStorage = localStorage;\n        this.prefix = prefix;\n    }\n    /**\n     * Stores a {@link KeyPair} in local storage.\n     * @param networkId The targeted network. (ex. default, betanet, etc…)\n     * @param accountId The NEAR account tied to the key pair\n     * @param keyPair The key pair to store in local storage\n     */\n    setKey(networkId, accountId, keyPair) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.localStorage.setItem(this.storageKeyForSecretKey(networkId, accountId), keyPair.toString());\n        });\n    }\n    /**\n     * Gets a {@link KeyPair} from local storage\n     * @param networkId The targeted network. (ex. default, betanet, etc…)\n     * @param accountId The NEAR account tied to the key pair\n     * @returns {Promise<KeyPair>}\n     */\n    getKey(networkId, accountId) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const value = this.localStorage.getItem(this.storageKeyForSecretKey(networkId, accountId));\n            if (!value) {\n                return null;\n            }\n            return crypto_1.KeyPair.fromString(value);\n        });\n    }\n    /**\n     * Removes a {@link KeyPair} from local storage\n     * @param networkId The targeted network. (ex. default, betanet, etc…)\n     * @param accountId The NEAR account tied to the key pair\n     */\n    removeKey(networkId, accountId) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.localStorage.removeItem(this.storageKeyForSecretKey(networkId, accountId));\n        });\n    }\n    /**\n     * Removes all items that start with `prefix` from local storage\n     */\n    clear() {\n        return __awaiter(this, void 0, void 0, function* () {\n            for (const key of this.storageKeys()) {\n                if (key.startsWith(this.prefix)) {\n                    this.localStorage.removeItem(key);\n                }\n            }\n        });\n    }\n    /**\n     * Get the network(s) from local storage\n     * @returns {Promise<string[]>}\n     */\n    getNetworks() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const result = new Set();\n            for (const key of this.storageKeys()) {\n                if (key.startsWith(this.prefix)) {\n                    const parts = key.substring(this.prefix.length).split(':');\n                    result.add(parts[1]);\n                }\n            }\n            return Array.from(result.values());\n        });\n    }\n    /**\n     * Gets the account(s) from local storage\n     * @param networkId The targeted network. (ex. default, betanet, etc…)\n     */\n    getAccounts(networkId) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const result = new Array();\n            for (const key of this.storageKeys()) {\n                if (key.startsWith(this.prefix)) {\n                    const parts = key.substring(this.prefix.length).split(':');\n                    if (parts[1] === networkId) {\n                        result.push(parts[0]);\n                    }\n                }\n            }\n            return result;\n        });\n    }\n    /**\n     * @hidden\n     * Helper function to retrieve a local storage key\n     * @param networkId The targeted network. (ex. default, betanet, etc…)\n     * @param accountId The NEAR account tied to the storage key that's sought\n     * @returns {string} An example might be: `near-api-js:keystore:near-friend:default`\n     */\n    storageKeyForSecretKey(networkId, accountId) {\n        return `${this.prefix}${accountId}:${networkId}`;\n    }\n    /** @hidden */\n    *storageKeys() {\n        for (let i = 0; i < this.localStorage.length; i++) {\n            yield this.localStorage.key(i);\n        }\n    }\n}\nexports.BrowserLocalStorageKeyStore = BrowserLocalStorageKeyStore;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5lYXItanMra2V5c3RvcmVzLWJyb3dzZXJAMC4wLjkvbm9kZV9tb2R1bGVzL0BuZWFyLWpzL2tleXN0b3Jlcy1icm93c2VyL2xpYi9icm93c2VyX2xvY2FsX3N0b3JhZ2Vfa2V5X3N0b3JlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQ0FBbUM7QUFDbkMsaUJBQWlCLG1CQUFPLENBQUMsbUhBQWlCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLDRIQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0Esa0JBQWtCLFlBQVksRUFBRSxVQUFVLEdBQUcsVUFBVTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy8ucG5wbS9AbmVhci1qcytrZXlzdG9yZXMtYnJvd3NlckAwLjAuOS9ub2RlX21vZHVsZXMvQG5lYXItanMva2V5c3RvcmVzLWJyb3dzZXIvbGliL2Jyb3dzZXJfbG9jYWxfc3RvcmFnZV9rZXlfc3RvcmUuanM/ZmM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUgPSB2b2lkIDA7XG5jb25zdCBjcnlwdG9fMSA9IHJlcXVpcmUoXCJAbmVhci1qcy9jcnlwdG9cIik7XG5jb25zdCBrZXlzdG9yZXNfMSA9IHJlcXVpcmUoXCJAbmVhci1qcy9rZXlzdG9yZXNcIik7XG5jb25zdCBMT0NBTF9TVE9SQUdFX0tFWV9QUkVGSVggPSAnbmVhci1hcGktanM6a2V5c3RvcmU6Jztcbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIHN0b3JlIGtleXMgaW4gdGhlIGJyb3dzZXJzIGxvY2FsIHN0b3JhZ2UuXG4gKlxuICogQHNlZSBbaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvbmFqLXF1aWNrLXJlZmVyZW5jZSNrZXktc3RvcmVdKGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL25hai1xdWljay1yZWZlcmVuY2Uja2V5LXN0b3JlKVxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBjb25uZWN0LCBrZXlTdG9yZXMgfSBmcm9tICduZWFyLWFwaS1qcyc7XG4gKlxuICogY29uc3Qga2V5U3RvcmUgPSBuZXcga2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpO1xuICogY29uc3QgY29uZmlnID0ge1xuICogICBrZXlTdG9yZSwgLy8gaW5zdGFuY2Ugb2YgQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlXG4gKiAgIG5ldHdvcmtJZDogJ3Rlc3RuZXQnLFxuICogICBub2RlVXJsOiAnaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZycsXG4gKiAgIHdhbGxldFVybDogJ2h0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmcnLFxuICogICBoZWxwZXJVcmw6ICdodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnJyxcbiAqICAgZXhwbG9yZXJVcmw6ICdodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmcnXG4gKiB9O1xuICpcbiAqIC8vIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvblxuICogY29uc3QgbmVhciA9IGF3YWl0IGNvbm5lY3QoY29uZmlnKVxuICogYGBgXG4gKi9cbmNsYXNzIEJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSBleHRlbmRzIGtleXN0b3Jlc18xLktleVN0b3JlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbG9jYWxTdG9yYWdlIGRlZmF1bHRzIHRvIHdpbmRvdy5sb2NhbFN0b3JhZ2VcbiAgICAgKiBAcGFyYW0gcHJlZml4IGRlZmF1bHRzIHRvIGBuZWFyLWFwaS1qczprZXlzdG9yZTpgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZSwgcHJlZml4ID0gTE9DQUxfU1RPUkFHRV9LRVlfUFJFRklYKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcmVzIGEge0BsaW5rIEtleVBhaXJ9IGluIGxvY2FsIHN0b3JhZ2UuXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHBhcmFtIGFjY291bnRJZCBUaGUgTkVBUiBhY2NvdW50IHRpZWQgdG8gdGhlIGtleSBwYWlyXG4gICAgICogQHBhcmFtIGtleVBhaXIgVGhlIGtleSBwYWlyIHRvIHN0b3JlIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgKi9cbiAgICBzZXRLZXkobmV0d29ya0lkLCBhY2NvdW50SWQsIGtleVBhaXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5Rm9yU2VjcmV0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSwga2V5UGFpci50b1N0cmluZygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYSB7QGxpbmsgS2V5UGFpcn0gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHBhcmFtIGFjY291bnRJZCBUaGUgTkVBUiBhY2NvdW50IHRpZWQgdG8gdGhlIGtleSBwYWlyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8S2V5UGFpcj59XG4gICAgICovXG4gICAgZ2V0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5Rm9yU2VjcmV0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSk7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3J5cHRvXzEuS2V5UGFpci5mcm9tU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSB7QGxpbmsgS2V5UGFpcn0gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHBhcmFtIGFjY291bnRJZCBUaGUgTkVBUiBhY2NvdW50IHRpZWQgdG8gdGhlIGtleSBwYWlyXG4gICAgICovXG4gICAgcmVtb3ZlS2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuc3RvcmFnZUtleUZvclNlY3JldEtleShuZXR3b3JrSWQsIGFjY291bnRJZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgaXRlbXMgdGhhdCBzdGFydCB3aXRoIGBwcmVmaXhgIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5zdG9yYWdlS2V5cygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHRoaXMucHJlZml4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuZXR3b3JrKHMpIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn1cbiAgICAgKi9cbiAgICBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuc3RvcmFnZUtleXMoKSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCh0aGlzLnByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBrZXkuc3Vic3RyaW5nKHRoaXMucHJlZml4Lmxlbmd0aCkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChwYXJ0c1sxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocmVzdWx0LnZhbHVlcygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFjY291bnQocykgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICovXG4gICAgZ2V0QWNjb3VudHMobmV0d29ya0lkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuc3RvcmFnZUtleXMoKSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCh0aGlzLnByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBrZXkuc3Vic3RyaW5nKHRoaXMucHJlZml4Lmxlbmd0aCkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRzWzFdID09PSBuZXR3b3JrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIGEgbG9jYWwgc3RvcmFnZSBrZXlcbiAgICAgKiBAcGFyYW0gbmV0d29ya0lkIFRoZSB0YXJnZXRlZCBuZXR3b3JrLiAoZXguIGRlZmF1bHQsIGJldGFuZXQsIGV0Y+KApilcbiAgICAgKiBAcGFyYW0gYWNjb3VudElkIFRoZSBORUFSIGFjY291bnQgdGllZCB0byB0aGUgc3RvcmFnZSBrZXkgdGhhdCdzIHNvdWdodFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEFuIGV4YW1wbGUgbWlnaHQgYmU6IGBuZWFyLWFwaS1qczprZXlzdG9yZTpuZWFyLWZyaWVuZDpkZWZhdWx0YFxuICAgICAqL1xuICAgIHN0b3JhZ2VLZXlGb3JTZWNyZXRLZXkobmV0d29ya0lkLCBhY2NvdW50SWQpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJlZml4fSR7YWNjb3VudElkfToke25ldHdvcmtJZH1gO1xuICAgIH1cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgICpzdG9yYWdlS2V5cygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5sb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUgPSBCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@near-js+keystores-browser@0.0.9/node_modules/@near-js/keystores-browser/lib/browser_local_storage_key_store.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@near-js+keystores-browser@0.0.9/node_modules/@near-js/keystores-browser/lib/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@near-js+keystores-browser@0.0.9/node_modules/@near-js/keystores-browser/lib/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BrowserLocalStorageKeyStore = void 0;\nvar browser_local_storage_key_store_1 = __webpack_require__(/*! ./browser_local_storage_key_store */ \"(ssr)/./node_modules/.pnpm/@near-js+keystores-browser@0.0.9/node_modules/@near-js/keystores-browser/lib/browser_local_storage_key_store.js\");\nObject.defineProperty(exports, \"BrowserLocalStorageKeyStore\", ({ enumerable: true, get: function () { return browser_local_storage_key_store_1.BrowserLocalStorageKeyStore; } }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5lYXItanMra2V5c3RvcmVzLWJyb3dzZXJAMC4wLjkvbm9kZV9tb2R1bGVzL0BuZWFyLWpzL2tleXN0b3Jlcy1icm93c2VyL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQ0FBbUM7QUFDbkMsd0NBQXdDLG1CQUFPLENBQUMscUxBQW1DO0FBQ25GLCtEQUE4RCxFQUFFLHFDQUFxQyx5RUFBeUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5lYXItanMra2V5c3RvcmVzLWJyb3dzZXJAMC4wLjkvbm9kZV9tb2R1bGVzL0BuZWFyLWpzL2tleXN0b3Jlcy1icm93c2VyL2xpYi9pbmRleC5qcz80OGI3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUgPSB2b2lkIDA7XG52YXIgYnJvd3Nlcl9sb2NhbF9zdG9yYWdlX2tleV9zdG9yZV8xID0gcmVxdWlyZShcIi4vYnJvd3Nlcl9sb2NhbF9zdG9yYWdlX2tleV9zdG9yZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnJvd3Nlcl9sb2NhbF9zdG9yYWdlX2tleV9zdG9yZV8xLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZTsgfSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@near-js+keystores-browser@0.0.9/node_modules/@near-js/keystores-browser/lib/index.js\n");

/***/ })

};
;