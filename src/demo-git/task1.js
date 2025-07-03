//task 1 coding...

// Giả lập commit history
const commits = [
    { id: "a1", message: "Fix login bug", changes: ["login.js"] },
    { id: "b2", message: "Improve UI", changes: ["ui.css"] },
    { id: "c3", message: "Update validation", changes: ["form.js"] },
];

// Danh sách commit muốn cherry-pick
const cherryPicked = ["a1", "c3"];

// Gộp các commit đã chọn
const pickedCommits = commits.filter(c => cherryPicked.includes(c.id));

const mergedCommit = {
    id: "x99",
    message: "Cherry-picked: " + pickedCommits.map(c => c.message).join(" + "),
    changes: pickedCommits.flatMap(c => c.changes),
};

console.log("🎯 Commit mới đã gộp:");
console.log(mergedCommit);
