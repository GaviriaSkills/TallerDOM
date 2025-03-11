function filter() {
    let input = document.getElementById('search').value.toLowerCase();
    let products = document.getElementsByClassName('producto');
    for (let i = 0; i < products.length; i++){
        let prooductName = products[i].textContent.toLowerCase();
        products[i].style.display = prooductName.includes(input) ? '' : 'none';
    }
}