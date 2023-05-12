/*
2622. Cache With Time Limit

Medium
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.

 
Example 1:
Input: 
  ["TimeLimitedCache", "set", "get", "count", "get"]
  [[], [1, 42, 100], [1], [], [1]]
  [0, 0, 50, 50, 150]
Output: [null, false, 42, 1, -1]
Explanation:
  At t=0, the cache is constructed.
  At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
  At t=50, key=1 is requested and the value of 42 is returned.
  At t=50, count() is called and there is one active key in the cache.
  At t=100, key=1 expires.
  At t=150, get(1) is called but -1 is returned because the cache is empty.


Example 2:
Input: 
  ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
  [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
  [0, 0, 40, 50, 120, 200, 250]
  Output: [null, false, true, 50, 50, -1]
Explanation:
  At t=0, the cache is constructed.
  At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
  At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
  At t=50, get(1) is called which returned 50.
  At t=120, get(1) is called which returned 50.
  At t=140, key=1 expires.
  At t=200, get(1) is called but the cache is empty so -1 is returned.
  At t=250, count() returns 0 because the cache is empty.
  

Constraints:

  0 <= key <= 109
  0 <= value <= 109
  0 <= duration <= 1000
  total method calls will not exceed 100


Accepted         Submissions       Acceptance Rate
  2.4K              3.5K              69.8%

*/

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * const obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
class TimeLimitedCache {
  cache = new Map();

  /**
   * @param {number} key
   * @param {number} value
   * @param {number} time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    const hasKey = this.cache.has(key);

    if (!hasKey) {
      this.cache.set(key, { value, duration, addedAt: Date.now() });
      return false;
    }

    // Key is not accessible if it has expired
    const keyHasExpired = this._hasExpired(key);
    if (keyHasExpired) return;

    /// has key and not expired
    this.cache.set(key, { value, duration, addedAt: Date.now() });
    return !keyHasExpired; // true
  }

  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    const hasKey = this.cache.has(key);
    if (!hasKey) return -1;

    const keyHasExpired = this._hasExpired(key);
    if (!keyHasExpired) return -1;

    return this.cache.get(key).value;
  }

  /**
   * @return {number} count of non-expired keys
   */
  count() {
    let count = 0;

    this.cache.forEach((_1, key) => {
      if (!this._hasExpired(key)) {
        count++;
      }
    });
    return count;
  }

  _hasExpired(key) {
    const currentTime = Date.now();
    const duration = this.cache.get(key).duration;
    const addedAt = this.cache.get(key).addedAt;

    return currentTime - addedAt > duration ? false : true;
  }
}

let getTimer;
let countTimer;
let setTimer;
/// helpers with time - duration in milliseconds
const getKeyCacheAfter = (cache, key, duration, clear = false) => {
  if (clear && getTimer) clearTimeout(getTimer);
  getTimer = setTimeout(() => {
    console.log(cache.get(key));
  }, duration);
};

const countActiveCacheAfter = (cache, duration, clear = false) => {
  if (clear && countTimer) clearTimeout(countTimer);
  countTimer = setTimeout(() => {
    console.log(cache.count());
  }, duration);
};

const setCacheAfter = (
  cache,
  key,
  value,
  duration,
  timerDuration,
  clear = false
) => {
  if (clear && setTimer) clearTimeout(setTimer);
  setTimer = setTimeout(() => {
    console.log(cache.set(key, value, duration));
  }, timerDuration);
};

/// Data;
const data1 = ["set", "get", "count", "get"];

function setData1() {
  /// Clear older timers
  clearTimeout(setTimer);
  clearTimeout(countTimer);
  clearTimeout(getTimer);

  setTimeout(() => {
    const cache = new TimeLimitedCache();

    console.log(cache.set(1, 42, 100));
    getKeyCacheAfter(cache, 1, 50);

    countActiveCacheAfter(cache, 50);

    getKeyCacheAfter(cache, 150);
  }, 0);
}

function setData2() {
  setTimeout(() => {
    console.log("\n");

    /// Clear older timers
    clearTimeout(setTimer);
    clearTimeout(countTimer);
    clearTimeout(getTimer);

    const cache = new TimeLimitedCache();
    /// Set data
    console.log(cache.set(1, 42, 100));

    setCacheAfter(cache, 1, 50, 100, 40);

    getKeyCacheAfter(cache, 1, 50);

    getKeyCacheAfter(cache, 1, 120);

    getKeyCacheAfter(cache, 1, 200);

    countActiveCacheAfter(cache, 250);
  }, 2000);
}

setData1();
setData2();

// console.log(cache.set(1, 42, 100));
// getKeyCacheAfter(1, 50);
// countActiveCacheAfter(50);
// getKeyCacheAfter(1, 150);
class TimeLimitedCacheV2 {
  #cache;
  #timeout;
  constructor() {
    this.cache = {};
    this.timeout = {};
  }

  set(key, value, duration) {
    if (this.cache[key]) {
      clearTimeout(this.timeout[key]);
      delete this.timeout[key];
      this.cache[key] = value;
      this.timeout[key] = setTimeout(() => delete this.cache[key], duration);
      return true;
    }

    this.cache[key] = value;
    this.timeout[key] = setTimeout(() => delete this.cache[key], duration);
    return false;
  }

  get(key) {
    if (!this.cache[key]) return -1;

    return this.cache[key];
  }

  count() {
    return Object.keys(this.cache).length;
  }
}

/* interface TTLValue {
  value: number;
  timer: ReturnType<typeof setTimeout>;
}

class TimeLimitedCacheV3 {
  cache = new Map<number, TTLValue>()

  set(key: number, value: number, duration: number): boolean {
      const exists = this.cache.has(key)
      if (exists) clearTimeout(this.cache.get(key).timer)
      this.cache.set(key, {value, timer: setTimeout(() => this.cache.delete(key), duration)})
      return exists
  }

  get(key: number): number {
      return this.cache.has(key) ? this.cache.get(key).value : -1
  }

count(): number {
      return this.cache.size
  }
} */
