const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');

describe('Counter', function() {
  async function deployCounter() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    return {
      counter
    }
  }

  describe('Deploy', function() {
    it("Should deploy succeed", async function () {
      const { counter } = await loadFixture(deployCounter);
      expect(await counter.get()).to.equal(1);
    });

    it("Should inc and dec", async function () {
      const { counter } = await loadFixture(deployCounter);
      expect(await counter.get()).to.equal(1);

      await counter.inc()
      expect(await counter.get()).to.equal(2);

      await counter.dec()
      expect(await counter.get()).to.equal(1);
    });
  })
})
