const findNewApartment = {
  isGoodLocation(city, nearPublicTransportation) {
    if (typeof city !== "string" || typeof nearPublicTransportation !== "boolean") {
      throw new Error("Invalid input!");
    }
    if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
      return "This location is not suitable for you.";
    } else {
      if (nearPublicTransportation == true) {
        return "You can go on home tour!";
      }
      else {
        return "There is no public transport in area.";
      }
    }
  },
  isLargeEnough(apartments, minimalSquareMeters) {
    let resultArr = [];
    if (!Array.isArray(apartments) || typeof minimalSquareMeters !== "number" || apartments.length == 0) {
      throw new Error("Invalid input!");
    }
    apartments.map((apartment) => {
      if (apartment >= minimalSquareMeters) {
        resultArr.push(apartment);
      }
    });
    return resultArr.join(', ');
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number"
      || price <= 0 || budget <= 0) {
      throw new Error("Invalid input!");
    }
    let result = budget - price;
    if (result < 0) {
      return "You don't have enough money for this house!";
    } else {
      return "You can afford this home!";
    }
  },
};


const { expect } = require("chai");
const findNewApartment = require("./findApartment");

describe("findNewApartment", function () {
  describe("isGoodLocation", function () {
    it("should return 'This location is not suitable for you.' if the city is not Sofia, Plovdiv or Varna", function () {
      expect(findNewApartment.isGoodLocation("London", true)).to.equal(
        "This location is not suitable for you."
      );
    });
    it("should return 'There is no public transport in area.' if nearPublicTransportation is false", function () {
      expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(
        "There is no public transport in area."
      );
    });
    it("should return 'You can go on home tour!' if both parameters are valid", function () {
      expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal(
        "You can go on home tour!"
      );
    });
    it("should throw an error if the input is not a string or boolean", function () {
      expect(() => findNewApartment.isGoodLocation(123, true)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isGoodLocation("Sofia", "yes")).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("isLargeEnough", function () {
    it("should return an array of all apartments with area equal or bigger than minimalSquareMeters", function () {
      expect(findNewApartment.isLargeEnough([40, 50, 60, 70, 80], 60)).to.equal(
        "60, 70, 80"
      );
    });
    it("should return an empty array if there are no apartments with area equal or bigger than minimalSquareMeters", function () {
      expect(findNewApartment.isLargeEnough([40, 50, 60, 70, 80], 90)).to.equal(
        ""
      );
    });
    it("should throw an error if the input is not an array or if minimalSquareMeters is not a number", function () {
      expect(() => findNewApartment.isLargeEnough(123, 60)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isLargeEnough([], "yes")).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("isItAffordable", function () {
    it("should return 'You can afford this home!' if budget is greater than price", function () {
      expect(findNewApartment.isItAffordable(50000, 100000)).to.equal(
        "You can afford this home!"
      );
    });
    it("should return 'You don't have enough money for this house!' if budget is less than price", function () {
      expect(findNewApartment.isItAffordable(100000, 50000)).to.equal(
        "You don't have enough money for this house!"
      );
    });
    it("should throw an error if the input is not a number or if price and budget are less or equal to 0", function () {
      expect(() => findNewApartment.isItAffordable(50000, -1)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isItAffordable(0, 100000)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isItAffordable(50000, 0)).to.throw(
        "Invalid input"
      );
      expect(() => findNewApartment.isItAffordable(-1, 100000)).to.throw(
        "Invalid input"
      );
    });
  });
});
module.exports = findNewApartment;


