let x = true

if (Number(x)) {
    alert(x + ' -- число')
} else if (String(x)) {
    alert(x + ' -- строк')
} else {
    alert('Тип ' + x + ' не определён')
}