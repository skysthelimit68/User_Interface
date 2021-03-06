'use strict'

/**
 * Data
 */

const data = [
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"}
]

/**
 * Define components
 */

class TeamSection {
  constructor(element) {
    this.element = element

    let container = document.createElement("div")
    container.classList.add("container")
    let row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row)
    this.element.appendChild(container)

    this.team_cards = data.map(x => {
      new TeamCard(x, row)
    })
  }
}

class TeamCard {
  constructor(data, row) {
    this.data = data
    this.row = row

    let col = document.createElement("div")
    col.classList.add("col-4")
    col.classList.add("p-5")
    this.row.appendChild(col)

    let card = document.createElement("div")
    card.classList.add("m-3")
    card.classList.add("border")
    col.appendChild(card)

    let h2 = document.createElement("h2")
    h2.classList.add("m-3")
    h2.classList.add("border")
    h2.textContent = this.data.name
    card.appendChild(h2)
  }
}

/**
 * Mount components
 */

let team_section = new TeamSection(document.getElementById("team-section"))
