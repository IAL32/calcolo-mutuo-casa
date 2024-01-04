import { S as SellerType, P as PurposeType, b as PeriodType } from './mortgage-e00d7466.js';

class SellerTypeHelper {
  static toString(e) {
    switch (e) {
      case SellerType.PRIVATE:
        return "Privato";
      case SellerType.COMPANY:
        return "Azienda";
      default:
        return "Sconosciuto";
    }
  }
}
class PurposeTypeHelper {
  static toString(e) {
    switch (e) {
      case PurposeType.FIRST_HOUSE:
        return "Prima Casa";
      case PurposeType.SECOND_HOUSE:
        return "Seconda Casa";
      default:
        return "Sconosciuto";
    }
  }
}
class PeriodTypeHelper {
  static toString(e) {
    switch (e) {
      case PeriodType.MONTHS:
        return "Mesi";
      case PeriodType.YEARS:
        return "Anni";
      default:
        return "Sconosciuto";
    }
  }
}

export { PurposeTypeHelper as P, SellerTypeHelper as S, PeriodTypeHelper as a };
//# sourceMappingURL=EnumHelper-0bd797fb.js.map
