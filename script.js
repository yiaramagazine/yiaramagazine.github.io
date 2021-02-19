var hydra = new Hydra({
  canvas: document.getElementById("myCanvas")
})

DD = 0.01
b = (o, u, i, y, z) => o().add(solid(1, 1, 1), DD).thresh(i * 0.2 * (z - y) + y, 0.0001).luma(0.5, 0.0001).color(c(u, i, 0), c(u, i, 1), c(u, i, 2))
c = (u, i, j) => {
  let cc = u.split("/"), cs = cc[cc.length - 1].split("-")
  return parseInt("0x" + cs[i].substring(2 * j, 2 + 2 * j)) / 255
}
colorize = (x, u, y = 0, z = 1) => b(x, u, 0, y, z).layer(b(x, u, 1, y, z)).layer(b(x, u, 2, y, z)).layer(b(x, u, 3, y, z)).layer(b(x, u, 4, y, z))

url = 'https://coolors.co/a1aca5-f1f0f0-EAD25D-eaafac-f3cfcd'

func = () =>

  osc(12, -0.01, 0)
    .thresh(0.6)
    .rotate(0)
    .modulateRotate(osc(4, -0.031, 0), 1.22, 10)
    //.add(noise(2, -0.1))
    .modulate(o0, () => 0.4)
    .scale(0.992)
    .blend(o0, 2.2)
colorize(func, url).out();