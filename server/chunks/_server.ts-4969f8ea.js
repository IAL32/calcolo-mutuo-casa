import { d as defaultValue$2, a as defaultValue$1, b as defaultValue$3 } from './active-laws-5baaf082.js';
import { f as fromURLSearchParamsToConfiguration, p as populateAllFromConfiguration, d as defaultValue, t as toPrettyEuro, a as toPrettyNumber } from './mortgage-e00d7466.js';
import PdfGenerator from 'pdfkit';
import { c as calculateHouseSaleCosts, a as calculateMortgageCosts, b as calculateMortgagePlan } from './finance-f08a3ec3.js';
import { S as SellerTypeHelper, P as PurposeTypeHelper, a as PeriodTypeHelper } from './EnumHelper-0bd797fb.js';
import './index-d5733251.js';
import './index2-613b03a1.js';

function addTableColumns(pdf, columns, y) {
  columns.forEach(({ x, text, options }) => {
    const stringHeight = pdf.heightOfString(text);
    if (y + stringHeight >= pdf.page.height - pdf.page.margins.bottom) {
      pdf.addPage();
      y = pdf.y;
    }
    pdf.text(text, x, y, options);
  });
}
function addHouseTable(pdf, house) {
  const startingX = pdf.x;
  let currentX = startingX;
  pdf.text("\n");
  pdf.text("Casa:");
  addTableColumns(
    pdf,
    [
      {
        text: `Prezzo di vendita`,
        x: currentX
      },
      {
        text: "Dimensione",
        x: currentX += 100
      },
      {
        text: "Venditore",
        x: currentX += 75
      },
      {
        text: "Destinazione",
        x: currentX += 60
      },
      {
        text: "Rendita Catastale",
        x: currentX += 75
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: toPrettyEuro(house.totalPrice),
        x: currentX
      },
      {
        text: `${toPrettyNumber(house.totalSize)}mq`,
        x: currentX += 100
      },
      {
        text: SellerTypeHelper.toString(house.seller),
        x: currentX += 75
      },
      {
        text: PurposeTypeHelper.toString(house.purpose),
        x: currentX += 60
      },
      {
        text: toPrettyEuro(house.yield),
        x: currentX += 75
      }
    ],
    pdf.y
  );
  pdf.x = startingX;
}
function addMortgageTable(pdf, mortgage) {
  const startingX = pdf.x;
  let currentX = startingX;
  pdf.text("\n");
  pdf.text("Mutuo:", startingX);
  addTableColumns(
    pdf,
    [
      {
        text: "Totale",
        x: currentX
      },
      {
        text: "Tempo",
        x: currentX += 80
      },
      {
        text: "TAEG",
        x: currentX += 60
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: toPrettyEuro(mortgage.total),
        x: currentX
      },
      {
        text: `${mortgage.time} ${PeriodTypeHelper.toString(mortgage.period)}`,
        x: currentX += 80
      },
      {
        text: `${mortgage.taeg}%`,
        x: currentX += 60
      }
    ],
    pdf.y
  );
  pdf.x = startingX;
}
function addSaleCostsTable(pdf, activeLaws, house) {
  const saleCosts = calculateHouseSaleCosts(activeLaws, house);
  const startingX = pdf.x;
  let currentX = startingX;
  const columnPosition = 180;
  pdf.text("\n");
  pdf.text("Costi legati alla compravendita:", startingX);
  addTableColumns(
    pdf,
    [
      {
        text: "Onorario Agenzia Immobiliare",
        x: currentX
      },
      {
        text: toPrettyEuro(saleCosts.realtor),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "Imposta di Registro",
        x: currentX
      },
      {
        text: toPrettyEuro(saleCosts.registry),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "Imposta Ipotecaria",
        x: currentX
      },
      {
        text: toPrettyEuro(saleCosts.mortgageTax),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "Imposta Catastale",
        x: currentX
      },
      {
        text: toPrettyEuro(saleCosts.landRegistryTax),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "IVA",
        x: currentX
      },
      {
        text: toPrettyEuro(saleCosts.vat),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "Onorario Notarile (*)",
        x: currentX
      },
      {
        text: toPrettyEuro(saleCosts.notary),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  pdf.moveTo(currentX, pdf.y).lineTo(currentX + (columnPosition + 80), pdf.y).stroke();
  pdf.text("\n");
  addTableColumns(
    pdf,
    [
      {
        text: "Totale",
        x: currentX
      },
      {
        text: toPrettyEuro(saleCosts.total),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  pdf.x = startingX;
}
function addMortgageCostsTable(pdf, activeLaws, house) {
  const mortgageCosts = calculateMortgageCosts(activeLaws, house.totalPrice, house.purpose);
  const startingX = pdf.x;
  let currentX = startingX;
  const columnPosition = 200;
  pdf.text("\n");
  pdf.text("Costi legati al mutuo:", startingX);
  addTableColumns(
    pdf,
    [
      {
        text: "Istruttoria Pratica di Mutuo",
        x: currentX
      },
      {
        text: toPrettyEuro(mortgageCosts.openingMortgage),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "Perizia dell'immobile",
        x: currentX
      },
      {
        text: toPrettyEuro(mortgageCosts.houseExamination),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "Imposta Sostitutiva",
        x: currentX
      },
      {
        text: toPrettyEuro(mortgageCosts.alternateTax),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "Onorari Notarili per Atto di Mutuo (*)",
        x: currentX
      },
      {
        text: toPrettyEuro(mortgageCosts.notary),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  pdf.moveTo(currentX, pdf.y).lineTo(currentX + (columnPosition + 80), pdf.y).stroke();
  pdf.text("\n");
  addTableColumns(
    pdf,
    [
      {
        text: "Totale",
        x: currentX
      },
      {
        text: toPrettyEuro(mortgageCosts.total),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  pdf.x = startingX;
}
function addMortgagePlanTable(pdf, mortgage) {
  const mortgagePlan = calculateMortgagePlan(mortgage);
  const startingX = pdf.x;
  let currentX = startingX;
  pdf.addPage();
  pdf.text("Piano di ammortamento:", startingX);
  addTableColumns(
    pdf,
    [
      {
        text: "Periodo",
        x: currentX
      },
      {
        text: "Mutuo pagato",
        x: currentX += 50
      },
      {
        text: "Interesse pagato",
        x: currentX += 80
      },
      {
        text: "Totale pagato",
        x: currentX += 100
      },
      {
        text: "Mutuo restante",
        x: currentX += 80
      }
    ],
    pdf.y
  );
  mortgagePlan.forEach((item, i) => {
    currentX = startingX;
    addTableColumns(
      pdf,
      [
        {
          text: (i + 1).toString(),
          x: currentX
        },
        {
          text: toPrettyEuro(item.principalPaid),
          x: currentX += 50
        },
        {
          text: toPrettyEuro(item.interestPaid),
          x: currentX += 80
        },
        {
          text: toPrettyEuro(item.mortgagePaid),
          x: currentX += 100
        },
        {
          text: toPrettyEuro(item.remainingPrincipal),
          x: currentX += 80
        }
      ],
      pdf.y
    );
  });
  pdf.x = startingX;
}
function addTotalCostsTable(pdf, activeLaws, house) {
  const saleCosts = calculateHouseSaleCosts(activeLaws, house);
  const mortgageCosts = calculateMortgageCosts(activeLaws, house.totalPrice, house.purpose);
  const total = saleCosts.total + mortgageCosts.total;
  const startingX = pdf.x;
  let currentX = startingX;
  const columnPosition = 200;
  pdf.text("\n");
  pdf.text("Costi totali:", startingX);
  addTableColumns(
    pdf,
    [
      {
        text: "Costi legati alla compravendita",
        x: currentX
      },
      {
        text: toPrettyEuro(saleCosts.total),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  addTableColumns(
    pdf,
    [
      {
        text: "Costi legati al mutuo",
        x: currentX
      },
      {
        text: toPrettyEuro(mortgageCosts.total),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  currentX = startingX;
  pdf.moveTo(currentX, pdf.y).lineTo(currentX + (columnPosition + 80), pdf.y).stroke();
  pdf.text("\n");
  addTableColumns(
    pdf,
    [
      {
        text: "Totale",
        x: currentX
      },
      {
        text: toPrettyEuro(total),
        x: currentX += columnPosition
      }
    ],
    pdf.y
  );
  pdf.x = startingX;
}
function addFooter(pdf) {
  const githubLink = "https://github.com/IAL32/calcolo-mutuo-casa";
  pdf.text(
    "Sviluppato da Adrian Castro. Visualizza il sorgente su ",
    0,
    pdf.page.height - pdf.page.margins.bottom - 30,
    {
      align: "center"
    }
  ).text(githubLink, {
    underline: true,
    link: githubLink,
    continued: true,
    align: "center"
  });
}
function generateConfigurationTable(pdf, user, mortgage, house, activeLaws) {
  pdf.text("\n");
  pdf.text(`Età: ${user.age}`);
  addHouseTable(pdf, house);
  addMortgageTable(pdf, mortgage);
  addSaleCostsTable(pdf, activeLaws, house);
  addMortgageCostsTable(pdf, activeLaws, house);
  addTotalCostsTable(pdf, activeLaws, house);
  addMortgagePlanTable(pdf, mortgage);
  addFooter(pdf);
}
function generatePDF(user, mortgage, house, activeLaws) {
  return new Promise((resolve) => {
    const pdf = new PdfGenerator();
    const buffers = [];
    pdf.fontSize(24).text("Simulazione di mutuo", { align: "center" });
    pdf.fontSize(12);
    generateConfigurationTable(pdf, user, mortgage, house, activeLaws);
    pdf.end();
    pdf.on("data", buffers.push.bind(buffers));
    pdf.on("end", () => {
      const data = Buffer.concat(buffers);
      resolve({
        size: Buffer.byteLength(data),
        data
      });
    });
  });
}
async function GET({ url: { searchParams } }) {
  const user = defaultValue$2;
  const mortgage = defaultValue;
  const house = defaultValue$1;
  const activeLaws = defaultValue$3;
  const configuration = fromURLSearchParamsToConfiguration(searchParams);
  populateAllFromConfiguration(
    [
      { obj: user, prefix: "user" },
      { obj: mortgage, prefix: "mortgage" },
      { obj: house, prefix: "house" },
      { obj: activeLaws, prefix: "activeLaws" }
    ],
    configuration
  );
  const pdf = await generatePDF(user, mortgage, house, activeLaws);
  return new Response(pdf["data"], {
    headers: {
      "Content-size": pdf["size"],
      "Content-Type": "application/pdf"
      // 'Content-disposition': 'attachment;filename=mutuo.pdf'
    }
  });
}

export { GET };
//# sourceMappingURL=_server.ts-4969f8ea.js.map
