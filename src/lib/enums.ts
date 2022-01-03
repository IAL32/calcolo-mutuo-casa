export class SellerType {
	public static PRIVATE = 0;
	public static COMPANY = 1;

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

export class PurposeType {
	public static FIRST_HOUSE = 0;
	public static SECOND_HOUSE = 1;

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

export class PeriodType {
	public static MONTHS = 0;
	public static YEARS = 1;

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
