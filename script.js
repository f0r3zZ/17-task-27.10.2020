document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');

  const calcArea = () => {
    let a  = prompt('Введите длину 1 стороны первого треугольника'),
          b  = prompt('Введите длину 2 стороны первого треугольника'),
          c  = prompt('Введите длину 3 стороны первого треугольника'),
          a1 = prompt('Введите длину 1 стороны второго треугольника'),
          b1 = prompt('Введите длину 2 стороны второго треугольника'),
          c1 = prompt('Введите длину 3 стороны второго треугольника');
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    c = parseInt(c, 10);
    a1 = parseInt(a1, 10);
    b1 = parseInt(b1, 10);
    c1 = parseInt(c1, 10);
    
    const p1 = (a + b + c) / 2,
          p2 = (a1 + b1 + c1) / 2;

    const s1 = Math.sqrt(p1 * (p1 - a) * (p1 - b) * (p1 - c));
    const s2 = Math.sqrt(p2 * (p2 - a1) * (p2 - b1) * (p2 - c1));

    if (s1 != s2) {
      alert('Fool!!!');
    } else {
      alert('Этот вывод нужен, чтобы понять, что площади равны')
    }
  }

  btn.addEventListener('click', calcArea);
})