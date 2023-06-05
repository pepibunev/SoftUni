function wineSelection() {
  class WineSelection {
    constructor(space) {
      this.space = space;
      this.wines = [];
      this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
      if (this.wines.length >= this.space) {
        throw new Error("Not enough space in the cellar.");
      }
      this.wines.push({ wineName, wineType, price, paid: false });
      return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
      const wine = this.wines.find((w) => w.wineName === wineName);
      if (!wine) {
        throw new Error(`${wineName} is not in the cellar.`);
      }
      if (wine.paid) {
        throw new Error(`${wineName} has already been paid.`);
      }
      wine.paid = true;
      this.bill += price;
      return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
      const wineIndex = this.wines.findIndex((w) => w.wineName === wineName);
      if (wineIndex === -1) {
        throw new Error("The wine, you're looking for, is not found.");
      }
      const wine = this.wines[wineIndex];
      if (!wine.paid) {
        throw new Error(`${wineName} need to be paid before open the bottle.`);
      }
      this.wines.splice(wineIndex, 1);
      return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
      let wines = this.wines;
      if (wineType) {
        wines = wines.filter((w) => w.wineType === wineType);
        if (wines.length === 0) {
          throw new Error(`There is no ${wineType} in the cellar.`);
        }
      }
      const hasPaidStr = (w) => (w.paid ? "Has Paid" : "Not Paid");
      const wineInfo = wines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .map((w) => `${w.wineName} > ${w.wineType} - ${hasPaidStr(w)}.`)
        .join("\n");

      return `You have space for ${this.space - this.wines.length} bottles more.\nYou paid ${this.bill}$ for the wine.\n${wineInfo}`;
    }
  }
  const WineSelection = result;
  let selection = new WineSelection(2)

  assert.equal(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose'), "You reserved a bottle of Bodegas Godelia Mencía Rose wine.");
  assert.equal(selection.cellarRevision('Rose'), "Bodegas Godelia Mencía > Rose - Not Paid.");
}
wineSelection();
