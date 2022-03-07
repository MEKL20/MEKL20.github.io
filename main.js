function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount=0) {
    let ptkp = 50000000  
    if (marriageStatus == "Lajang") ptkp += 15000000 * dependentChildrenCount
    else if (marriageStatus == "Menikah") ptkp = 60000000 + (15000000 * dependentChildrenCount)
    else if (marriageStatus == "Cerai") ptkp = 70000000 + (15000000 * dependentChildrenCount)

    let pph = annualIncome - ptkp
    if (pph < 0)return 0
    else if (pph < 200000001) return pph *= .1
    else if (pph < 450000001) return pph *= .15
    else if (pph > 450000000) return pph *= .2

}