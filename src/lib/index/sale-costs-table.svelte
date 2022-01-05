<script lang="ts">
	import { calculateHouseSaleCosts } from '$lib/finance';
	import { toPrettyEuro } from '$lib/helpers';
	import { activeLaws } from '$lib/stores/active-laws';
	import { house } from '$lib/stores/house';
	import { Table } from 'sveltestrap';

	$: saleCosts = calculateHouseSaleCosts($activeLaws, $house);
</script>

<Table responsive>
	<tbody>
		<tr>
			<td>
				Onorario Agenzia Immobiliare (<abbr title="Stima">*</abbr>)
				<p class="text-muted">
					Ammontare dovuto all'agenzia immobiliare che intermedia l'acquisto dell'immobile. Può
					variare dal 3% al 6%, ma può anche avere un valore fisso.
				</p>
			</td>
			<td>{toPrettyEuro(saleCosts.realtor)}</td>
		</tr>
		<tr>
			<td>
				Imposta di Registro
				<p class="text-muted">
					Tassa indiretta richiesta per la registrazione dell'atto di trasferimento di ricchezza,
					come l'acquisto di un immobile.
				</p>
			</td>
			<td>{toPrettyEuro(saleCosts.registry)}</td>
		</tr>
		<tr>
			<td>
				Imposta Ipotecaria
				<p class="text-muted">
					Tassa pagata in occasione di operazioni sui registri immobiliari pubblici, come l'atto
					compravendita di un immobile.
				</p>
			</td>
			<td>{toPrettyEuro(saleCosts.mortgageTax)}</td>
		</tr>
		<tr>
			<td>
				Imposta Catastale
				<p class="text-muted">Tassa dovuta ogni volta che si esegue una voltura catastale.</p>
			</td>
			<td>{toPrettyEuro(saleCosts.landRegistryTax)}</td>
		</tr>
		<tr>
			<td>
				IVA
				<p class="text-muted">
					Tassa dovuta nel caso di acquisto da azienda, che ammonta al 4% per gli immobili.
				</p>
			</td>
			<td>{toPrettyEuro(saleCosts.vat)}</td>
		</tr>
		<tr>
			<td>
				Onorario Notarile (<abbr title="Stima">*</abbr>)
				<p class="text-muted">
					Costo dovuto al notaio che effettua l'atto notarile di compravendita dell'immobile
				</p>
			</td>
			<td>{toPrettyEuro(saleCosts.notary)}</td>
		</tr>
	</tbody>
	<tfoot>
		<tr class="fw-bold">
			<td>Totale</td>
			<td>{toPrettyEuro(saleCosts.total)}</td>
		</tr>
	</tfoot>
</Table>

<style>
	tr td:nth-child(2) {
		text-align: right;
	}
</style>
