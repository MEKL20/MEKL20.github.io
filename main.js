function calculateTax(annualIncome, status, childrenCount=0) {
    let ptkp = 50000000  
    if (status == "Menikah") ptkp = 60000000 + (15000000 * childrenCount)
    else if (status == "Cerai") ptkp = 70000000

    let pph = annualIncome - ptkp
    if (pph < 0)return 0
    else if (pph < 200000001) return pph *= .1
    else if (pph < 450000001) return pph *= .15
    else if (pph > 450000000) return pph *= .2

}