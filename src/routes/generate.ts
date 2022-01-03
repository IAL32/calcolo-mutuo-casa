import { defaultValue as userDefaultValue } from '$lib/stores/user';
import { defaultValue as mortgageDefaultValue } from '$lib/stores/mortgage';
import { defaultValue as houseDefaultValue } from '$lib/stores/house';
import { defaultValue as activeLawsDefaultValue } from '$lib/stores/active-laws';
import type { ActiveLaws, House, Mortgage, MortgagePlan, User } from '$lib/types';
import PdfGenerator from 'pdfkit';
import {
	fromURLSearchParamsToConfiguration,
	populateAllFromConfiguration,
	toPrettyEuro,
	toPrettyNumber
} from '$lib/helpers';
import { PeriodType, PurposeType, SellerType } from '$lib/enums';
import {
	calculateHouseSaleCosts,
	calculateMortgageCosts,
	calculateMortgagePlan
} from '$lib/finance';

function addTableColumns(
	pdf: PDFKit.PDFDocument,
	columns: { x: number; text: string; options?: PDFKit.Mixins.TextOptions }[],
	y: number
) {
	columns.forEach(({ x, text, options }) => {
		// create a new page if adding a new line would create it anyways
		const stringHeight = pdf.heightOfString(text);
		if (y + stringHeight >= pdf.page.height - pdf.page.margins.bottom) {
			pdf.addPage();
			y = pdf.y;
		}
		pdf.text(text, x, y, options);
	});
}

function addTableRow(
	pdf: PDFKit.PDFDocument,
	items: { text: string; options?: PDFKit.Mixins.TextOptions }[]
) {
	items.forEach(({ text, options }) => {
		pdf.text(text, options);
	});
}

function addHouseTable(pdf: PDFKit.PDFDocument, house: House) {
	const startingX = pdf.x;
	let currentX = startingX;

	pdf.text('\n');
	pdf.text('Casa:');

	addTableColumns(
		pdf,
		[
			{
				text: `Prezzo di vendita`,
				x: currentX
			},
			{
				text: 'Dimensione',
				x: (currentX += 100)
			},
			{
				text: 'Venditore',
				x: (currentX += 75)
			},
			{
				text: 'Destinazione',
				x: (currentX += 60)
			},
			{
				text: 'Rendita Catastale',
				x: (currentX += 75)
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
				x: (currentX += 100)
			},
			{
				text: SellerType.toString(house.seller),
				x: (currentX += 75)
			},
			{
				text: PurposeType.toString(house.purpose),
				x: (currentX += 60)
			},
			{
				text: toPrettyEuro(house.yield),
				x: (currentX += 75)
			}
		],
		pdf.y
	);

	pdf.x = startingX;
}

function addMortgageTable(pdf: PDFKit.PDFDocument, mortgage: Mortgage) {
	const startingX = pdf.x;
	let currentX = startingX;

	// Mutuo
	pdf.text('\n');
	pdf.text('Mutuo:', startingX);

	addTableColumns(
		pdf,
		[
			{
				text: 'Totale',
				x: currentX
			},
			{
				text: 'Tempo',
				x: (currentX += 80)
			},
			{
				text: 'TAEG',
				x: (currentX += 60)
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
				text: `${mortgage.time} ${PeriodType.toString(mortgage.period)}`,
				x: (currentX += 80)
			},
			{
				text: `${mortgage.taeg}%`,
				x: (currentX += 60)
			}
		],
		pdf.y
	);

	pdf.x = startingX;
}

function addSaleCostsTable(pdf: PDFKit.PDFDocument, activeLaws: ActiveLaws, house: House) {
	const saleCosts = calculateHouseSaleCosts(activeLaws, house);

	const startingX = pdf.x;
	let currentX = startingX;

	const columnPosition = 180;

	// Mutuo
	pdf.text('\n');
	pdf.text('Costi legati alla compravendita:', startingX);

	addTableColumns(
		pdf,
		[
			{
				text: 'Onorario Agenzia Immobiliare',
				x: currentX
			},
			{
				text: toPrettyEuro(saleCosts.realtor),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	addTableColumns(
		pdf,
		[
			{
				text: 'Imposta di Registro',
				x: currentX
			},
			{
				text: toPrettyEuro(saleCosts.registry),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	addTableColumns(
		pdf,
		[
			{
				text: 'Imposta Ipotecaria',
				x: currentX
			},
			{
				text: toPrettyEuro(saleCosts.mortgageTax),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	addTableColumns(
		pdf,
		[
			{
				text: 'Imposta Catastale',
				x: currentX
			},
			{
				text: toPrettyEuro(saleCosts.landRegistryTax),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	addTableColumns(
		pdf,
		[
			{
				text: 'IVA',
				x: currentX
			},
			{
				text: toPrettyEuro(saleCosts.vat),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	addTableColumns(
		pdf,
		[
			{
				text: 'Onorario Notarile (*)',
				x: currentX
			},
			{
				text: toPrettyEuro(saleCosts.notary),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	pdf
		.moveTo(currentX, pdf.y)
		.lineTo(currentX + (columnPosition + 80), pdf.y)
		.stroke();

	pdf.text('\n');

	addTableColumns(
		pdf,
		[
			{
				text: 'Totale',
				x: currentX
			},
			{
				text: toPrettyEuro(saleCosts.total),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	pdf.x = startingX;
}

function addMortgageCostsTable(pdf: PDFKit.PDFDocument, activeLaws: ActiveLaws, house: House) {
	const mortgageCosts = calculateMortgageCosts(activeLaws, house.totalPrice, house.purpose);

	const startingX = pdf.x;
	let currentX = startingX;

	const columnPosition = 200;

	// Mutuo
	pdf.text('\n');
	pdf.text('Costi legati al mutuo:', startingX);

	addTableColumns(
		pdf,
		[
			{
				text: 'Istruttoria Pratica di Mutuo',
				x: currentX
			},
			{
				text: toPrettyEuro(mortgageCosts.openingMortgage),
				x: (currentX += columnPosition)
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
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	addTableColumns(
		pdf,
		[
			{
				text: 'Imposta Sostitutiva',
				x: currentX
			},
			{
				text: toPrettyEuro(mortgageCosts.alternateTax),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	addTableColumns(
		pdf,
		[
			{
				text: 'Onorari Notarili per Atto di Mutuo (*)',
				x: currentX
			},
			{
				text: toPrettyEuro(mortgageCosts.notary),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	pdf
		.moveTo(currentX, pdf.y)
		.lineTo(currentX + (columnPosition + 80), pdf.y)
		.stroke();

	pdf.text('\n');

	addTableColumns(
		pdf,
		[
			{
				text: 'Totale',
				x: currentX
			},
			{
				text: toPrettyEuro(mortgageCosts.total),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	pdf.x = startingX;
}

function addMortgagePlanTable(pdf: PDFKit.PDFDocument, mortgage: Mortgage) {
	const mortgagePlan: MortgagePlan[] = calculateMortgagePlan(mortgage);

	const startingX = pdf.x;
	let currentX = startingX;

	// Mutuo
	pdf.text('\n');
	pdf.text('Piano di ammortamento:', startingX);

	addTableColumns(
		pdf,
		[
			{
				text: 'Periodo',
				x: currentX
			},
			{
				text: 'Mutuo pagato',
				x: (currentX += 50)
			},
			{
				text: 'Interesse pagato',
				x: (currentX += 80)
			},
			{
				text: 'Totale pagato',
				x: (currentX += 100)
			},
			{
				text: 'Mutuo restante',
				x: (currentX += 80)
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
					x: (currentX += 50)
				},
				{
					text: toPrettyEuro(item.interestPaid),
					x: (currentX += 80)
				},
				{
					text: toPrettyEuro(item.mortgagePaid),
					x: (currentX += 100)
				},
				{
					text: toPrettyEuro(item.remainingPrincipal),
					x: (currentX += 80)
				}
			],
			pdf.y
		);
	});

	pdf.x = startingX;
}

function addTotalCostsTable(pdf: PDFKit.PDFDocument, activeLaws: ActiveLaws, house: House) {
	const saleCosts = calculateHouseSaleCosts(activeLaws, house);
	const mortgageCosts = calculateMortgageCosts(activeLaws, house.totalPrice, house.purpose);

	const total = saleCosts.total + mortgageCosts.total;

	const startingX = pdf.x;
	let currentX = startingX;

	const columnPosition = 200;

	// Mutuo
	pdf.text('\n');
	pdf.text('Costi totali:', startingX);

	addTableColumns(
		pdf,
		[
			{
				text: 'Costi legati alla compravendita',
				x: currentX
			},
			{
				text: toPrettyEuro(saleCosts.total),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	addTableColumns(
		pdf,
		[
			{
				text: 'Costi legati al mutuo',
				x: currentX
			},
			{
				text: toPrettyEuro(mortgageCosts.total),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	currentX = startingX;

	pdf
		.moveTo(currentX, pdf.y)
		.lineTo(currentX + (columnPosition + 80), pdf.y)
		.stroke();

	pdf.text('\n');

	addTableColumns(
		pdf,
		[
			{
				text: 'Totale',
				x: currentX
			},
			{
				text: toPrettyEuro(total),
				x: (currentX += columnPosition)
			}
		],
		pdf.y
	);

	pdf.x = startingX;
}

function addFooter(pdf: PDFKit.PDFDocument) {
	const githubLink = 'https://github.com/IAL32/calcolo-mutuo-casa';

	pdf
		.text(
			'Sviluppato da Adrian Castro. Visualizza il sorgente su ',
			0,
			pdf.page.height - pdf.page.margins.bottom - 30,
			{
				align: 'center'
			}
		)
		.text(githubLink, {
			underline: true,
			link: githubLink,
			continued: true,
			align: 'center'
		});
}

function generateConfigurationTable(
	pdf: PDFKit.PDFDocument,
	user: User,
	mortgage: Mortgage,
	house: House,
	activeLaws: ActiveLaws
) {
	pdf.text('\n');

	pdf.text(`Età: ${user.age}`);

	addHouseTable(pdf, house);
	addMortgageTable(pdf, mortgage);
	addSaleCostsTable(pdf, activeLaws, house);
	addMortgageCostsTable(pdf, activeLaws, house);
	addTotalCostsTable(pdf, activeLaws, house);
	addMortgagePlanTable(pdf, mortgage);

	addFooter(pdf);
}

function generatePDF(
	user: User,
	mortgage: Mortgage,
	house: House,
	activeLaws: ActiveLaws
): Promise<unknown> {
	return new Promise<unknown>((resolve) => {
		const pdf: PDFKit.PDFDocument = new PdfGenerator();
		const buffers = [];

		pdf.fontSize(24).text('Simulazione di mutuo', { align: 'center' });

		pdf.fontSize(12);

		generateConfigurationTable(pdf, user, mortgage, house, activeLaws);

		pdf.end();

		pdf.on('data', buffers.push.bind(buffers));
		pdf.on('end', () => {
			const data: Buffer = Buffer.concat(buffers);
			resolve({
				size: Buffer.byteLength(data),
				data
			});
		});
	});
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url: { searchParams } }: { url: { searchParams: URLSearchParams } }) {
	const user: User = userDefaultValue;
	const mortgage: Mortgage = mortgageDefaultValue;
	const house: House = houseDefaultValue;
	const activeLaws: ActiveLaws = activeLawsDefaultValue;

	const configuration = fromURLSearchParamsToConfiguration(searchParams);

	populateAllFromConfiguration(
		[
			{ obj: user, prefix: 'user' },
			{ obj: mortgage, prefix: 'mortgage' },
			{ obj: house, prefix: 'house' },
			{ obj: activeLaws, prefix: 'activeLaws' }
		],
		configuration
	);

	const pdf = await generatePDF(user, mortgage, house, activeLaws);

	return {
		body: pdf['data'],
		headers: {
			'Content-size': pdf['size'],
			'Content-Type': 'application/pdf'
			// 'Content-disposition': 'attachment;filename=mutuo.pdf'
		}
	};
}
