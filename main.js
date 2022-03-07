function calculateTax(annualIncome, status, childrenCount=0) {
    let ptkp = 50000000  
    if (status == "Lajang") ptkp
    else if (status == "Menikah") ptkp = 60000000 + (15000000 * childrenCount)
    else if (status == "Cerai") ptkp = 70000000 + (15000000 * childrenCount)

    let pkp = annualIncome - ptkp
    let pph = pkp * .1

    if ((pkp - 200000000) > 0) pph += (pkp - 200000000) * .2
    if ((pkp - 250000000) > 0) pph += (pkp - 250000000) * .3

    return pph
}