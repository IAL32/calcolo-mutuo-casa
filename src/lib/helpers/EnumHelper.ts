import { SellerType, PurposeType, PeriodType } from "$lib/enums";

export class SellerTypeHelper {
	public static toString(e: SellerType): string {
		switch (e) {
			case SellerType.PRIVATE:
				return 'Privato';
			case SellerType.COMPANY:
				return 'Azienda';
			default:
				return 'Sconosciuto';
		}
	}
}

export class PurposeTypeHelper {
	public static toString(e: PurposeType): string {
		switch (e) {
			case PurposeType.FIRST_HOUSE:
				return 'Prima Casa';
			case PurposeType.SECOND_HOUSE:
				return 'Seconda Casa';
			default:
				return 'Sconosciuto';
		}
	}
}

export class PeriodTypeHelper {
	public static toString(e: PeriodType): string {
		switch (e) {
			case PeriodType.MONTHS:
				return 'Mesi';
			case PeriodType.YEARS:
				return 'Anni';
			default:
				return 'Sconosciuto';
		}
	}
}
