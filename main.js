function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    let ptkp = 50000000  
    if (marriageStatus == "Lajang") ptkp
    else if (marriageStatus == "Menikah") ptkp = 60000000 + (15000000 * dependentChildrenCount)
    else if (marriageStatus == "Cerai") ptkp = 70000000 + (15000000 * dependentChildrenCount)

    let pkp = annualIncome - ptkp
    let pph = pkp * .1

    if ((pkp - 200000000) > 0) {
        pkp -= 200000000
        pph += pkp * .2
    }

    if ((pkp - 250000000) > 0) {
        pkp -= 250000000
        pph += pkp * .3
    }

    return pph
}