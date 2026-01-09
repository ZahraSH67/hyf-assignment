app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const result = await knex.raw(`SELECT * FROM users WHERE id = ${id}`);
  res.send(result);
});

app.get("/delete-user", async (req, res) => {
  const id = req.query.id;
  await knex.raw(`DELETE FROM users WHERE id = ${id}`);
  res.send("User deleted");
});

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>User Count</title>
            <style>
                body {
                    font-family: Arial;
                    background: #f4f4f4;
                    text-align: center;
                    padding-top: 100px;
                }
                .card {
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    display: inline-block;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Total Users</h1>
                <p id="count">Loading...</p>
            </div>

            <script>
                fetch('/user-count')
                    .then(res => res.json())
                    .then(data => {
                        document.getElementById('count').innerText = data.count;
                    });
            </script>
        </body>
        </html>
    `);
});
