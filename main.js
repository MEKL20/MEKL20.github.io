function calculateTax(annualIncome) {
    let pph = annualIncome - 50000000

    if (pph < 0)return 0
    else if (pph < 200000001) return pph *= .1
    else if (pph < 450000001) return pph *= .15
    else if (pph > 450000000) return pph *= .2

}
