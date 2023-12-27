const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

<a href="https://github.com/IYUYI#gh-dark-mode-only">
  <img src="https://raw.githubusercontent.com/IYUYI/IYUYI/output/github-contribution-grid-snake-dark.svg" alt="IYUYI's GitHub Snake" />
</a>
<a href="https://github.com/IYUYI#gh-light-mode-only">
  <img src="https://raw.githubusercontent.com/IYUYI/IYUYI/output/github-contribution-grid-snake.svg" alt="IYUYI's GitHub Snake" />
</a>

### 个人简介
- 🐕 姓名: 保密
- 👦 性别: 男
- 🧭 年龄: 27
- 🌏 现居: 湖北武汉
- 📞 手机: 18285848445

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

![Progress Bar CI](https://github.com/IYUYI/IYUYI/workflows/Progress%20Bar%20CI/badge.svg)
![Static Badge](https://img.shields.io/badge/DO-VS20%25Code-blue)
![DO VSCode](https://img.shields.io/badge/DO-VS20%Code-blue)\
`
console.log(readme)
