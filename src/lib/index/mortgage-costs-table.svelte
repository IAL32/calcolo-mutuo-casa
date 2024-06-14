<script lang="ts">
	import { calculateMortgageCosts } from '$lib/finance';
	import { Table } from '@sveltestrap/sveltestrap';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import { toPrettyEuro } from '$lib/helpers';
	import { activeLaws } from '$lib/stores/active-laws';

	$: mortgageCosts = calculateMortgageCosts($activeLaws, $house, $mortgage);
</script>

<Table responsive>
	<tbody>
		<tr>
			<td rowspan="2">
				Onorario Broker Mutuo
				<p class="text-muted">
					Ammontare dovuto al broker che intermedia l'ottenimento del mutuo per l'acquisto
                    dell'immobile. Può variare dal 1% al 2%, ma può anche avere un valore fisso. A questo si
                    aggiunge l'IVA.
				</p>
			</td>
			<td>{toPrettyEuro(mortgageCosts.broker)}</td>
		</tr>
        <tr>
            <td><span class="text-muted">Incluso di IVA</span></td>
        </tr>
		<tr>
			<td>
				Istruttoria Pratica di Mutuo
				<p class="text-muted">
					Costo dovuto all'apertura di una pratica che scatta nel momento in cui un privato presenta
					una richiesta di mutuo in banca.
				</p>
			</td>
			<td>{toPrettyEuro(mortgageCosts.openingMortgage)}</td>
		</tr>
		<tr>
			<td>
				Perizia dell'Immobile
				<p class="text-muted">Costo dovuto alla banca per la visione dell'immobile di interesse.</p>
			</td>
			<td>{toPrettyEuro(mortgageCosts.houseExamination)}</td>
		</tr>
		<tr>
			<td>
				Imposta Sostitutiva
				<p class="text-muted">
					Tassa del che ammonta al 0.25% nel caso in cui l'intestatario del mutuo goda
					dell'agevolazione "prima casa", altrimenti del 2%.
				</p>
			</td>
			<td>{toPrettyEuro(mortgageCosts.alternateTax)}</td>
		</tr>
		<tr>
			<td>
				Onorari Notarili per Atto di Mutuo (<abbr title="Stima">*</abbr>)
				<p class="text-muted">Costo dovuto al notaio che effettua l'atto notarile del mutuo</p>
			</td>
			<td>{toPrettyEuro(mortgageCosts.notary)}</td>
		</tr>
	</tbody>
	<tfoot class="fw-bold">
		<tr>
			<td>Totale</td>
			<td>{toPrettyEuro(mortgageCosts.total)}</td>
		</tr>
	</tfoot>
</Table>

<style>
	tr td:nth-child(2) {
		text-align: right;
	}
</style>
