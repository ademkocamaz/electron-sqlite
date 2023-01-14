function addParagraph(text) {
    const p = document.createElement("p");
    const node = document.createTextNode(text);
    p.appendChild(node);
    document.body.appendChild(p);
}
window.api.executeQuery("CREATE TABLE IF NOT EXISTS test (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, NAME TEXT NOT NULL)");
window.api.executeQuery("INSERT INTO test (NAME) VALUES ('Adem')");
window.api.executeSelect("SELECT * FROM test").then(
    (value) => {
        for (const item of value) {
            addParagraph(item.ID + " : " + item.NAME);
        }
    }
);  