  export const getData = async() => {
  const houseFetch = await fetch ('http://localhost:3001/api/v1/houses');
  const houseData = await houseFetch.json();
  
  return cleanData(houseData)
}



const cleanData = (houseData) => {
  try {
    const unresolvedPromises = Object.keys(houseData).map(async(house) => {

    // const memberPromises = await getSwornMember(houseData(houseData[house].swornMembers))
     
      return {
        name: houseData[house].name,
        founded: houseData[house].founded,
        coat: houseData[house].coatOfArms,
        words: houseData[house].words,
        seats: houseData[house].seats,
        titles: houseData[house].titles,
        weapons: houseData[house].ancestralWeapons,
        words: houseData[house].words

      }
    });
    return Promise.all(unresolvedPromises)

  }catch (type){
    return Error ('fetch failed');
  }

}


// const getSwornMember = async(member) => {
//   const fetchSwornMember = await fetch('http://localhost:3001/api/v1/character', {
//     method: 'POST',
//     body: JSON.stringify(member),
//     headers: {
//       'Content-Type': 'application/json'
//     }

//   })
// }

const getSwornMember = (memberData) => {
  const memberPromises = memberData.map(async(member) => {
    const fetchSwornMember = await fetch('http://localhost:3001/api/v1/character', {
    method: 'POST',
    body: JSON.stringify(member),
    headers: {
      'Content-Type': 'application/json'
    }

  })
  })
}



// name, founded, seats, titles, coatOfArms, ancestralWeapons, words