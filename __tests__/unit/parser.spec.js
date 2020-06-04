import path from 'path'
import { readLog,processLineKills } from "../../src/app/Parser";


describe("Parser", ()=> {
  it('should be able read the game.log file', async () => {

   const result = readLog(path.resolve(__dirname,'../games.log'))

   expect(result).toHaveLength(5306)
  })

  it('should be able read lines of game.log', async () => {
   const lines = readLog(path.resolve(__dirname,'../games.log'))


 expect(lines[5262]).toEqual(' 13:27 Kill: 6 5 7: Zeh killed Assasinu Credi by MOD_ROCKET_SPLASH')
   

  })

 
  
})
