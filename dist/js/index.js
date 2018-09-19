(() => {
  const getCookies = () => document.cookie
  .split(";")
  .reduce((acc, c) => {
    const sc = c.split("=")
    return Object.assign(acc, {
      [sc[0]]: sc[1]
    })
  }, {})

  const cookies = getCookies()
  if(cookies["theme"]&&cookies["theme"] === "light") {
    document.body.classList.add("light")
  }

  const btn = document.getElementById("btn")
  btn&&btn.addEventListener('click', _e => {
    document.body.classList.toggle("light")
    document.cookie = 
      document.body.classList.contains("light")
        ? "theme=light"
        : "theme=dark"

  })

  if(!btn) {
    throw new Error("Button not found")
  }
})()