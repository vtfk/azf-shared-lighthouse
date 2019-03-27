module.exports = lines => {
  return lines.map(line => Object.assign({}, line, { score: line.score * 100 }))
}
