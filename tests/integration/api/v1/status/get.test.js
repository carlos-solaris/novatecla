test("GET to /api/v1/status should return 200", async () => {
    const respondse = await fetch("http://localhost:3000/api/v1/status")
    expect(respondse.status).toBe(200)
})