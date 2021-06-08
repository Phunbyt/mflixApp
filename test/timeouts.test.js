import MoviesDAO from "../src/dao/moviesDAO"

describe("Timeouts", () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  test("Timeout is set to 2500 milliseconds", async () => {
    const data = await MoviesDAO.getConfiguration()
    const { wtimeout } = await MoviesDAO.getConfiguration()
console.log(data)
    expect(wtimeout).toBe(2500)
  })
})
