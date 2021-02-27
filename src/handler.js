import program from "commander"

export default() => {
  program
      .usage("-t text")
      .option("-t, --text <value>", "text", String, "fuga")
      .parse(process.argv)

  console.log(`${program.opts().text}`)
}
