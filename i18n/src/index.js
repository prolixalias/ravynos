// read ./src markdown files, auto-generate READMEs into ./rendered using src/template.md

import { readFileSync, writeFileSync } from "fs"
import renderer from 'mustache';

const { render } = renderer;

let navigation = []
let languages = JSON.parse(readFileSync('./src/languages.json', 'utf8'))
let template = readFileSync("./src/template.md").toString()
let state = {
  active: "2ea44f",
  inactive: "inactive",
}
let first_language = 'en_GB' // language to use for "main" README.md

console.log("start: " + Date().toString())

languages.forEach(render_item => { // render loop - generate individual markdown files
  console.log("rendering: " + render_item.description + " README")
  languages.forEach(navigation_item => { // navigation loop - create "buttons" for each language
    switch (navigation_item) {
      case render_item: // active language item
        navigation.push( { code: navigation_item.code, state: state.active, flag: navigation_item.flag, description: navigation_item.description } )
        console.log("  navigation: marking " + navigation_item.code + " active")
        break
      default: // inactive language item
        navigation.push( { code: navigation_item.code, state: state.inactive, flag: navigation_item.flag, description: navigation_item.description } )
        console.log("  navigation: marking " + navigation_item.code + " inactive")
      }
  })

  // console.log(navigation)
  render_item.navigation = navigation
  render_item.source = readFileSync(`./src/language_${render_item.code}.md`).toString()

  let output = render(template, render_item)

  if (render_item.code == first_language) { // write to "main" README.md in root of repository since GitHub doesn't like symlinks
    writeFileSync(`../README.md`, output)
    console.log("  wrote: ../README.md")
  } 

  writeFileSync(`./rendered/README.${render_item.code}.md`, output)
  console.log("  wrote: ./rendered/README." + render_item.code + ".md")
  navigation.length = 0
})

console.log("done: " + Date().toString())
